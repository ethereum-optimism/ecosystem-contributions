import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { MarkDownData } from '../../(home)/component/Home'
import Cpage from './Cpage'
import Custom500 from '../../../custom-error'
import Footer from '@/src/app/component/footer/Footer'
import { Metadata, ResolvingMetadata } from 'next'

async function getResources(file: string): Promise<MarkDownData | string> {
  try {
    const postDataPromises = await getMarkDownData(file)
    return postDataPromises
  } catch (error) {
    console.error('Error fetching resources:', error)
    return 'Failed to fetch resources'
  }
}

async function getMarkDownData(id: string): Promise<MarkDownData | string> {
  const encodedFileName = encodeURIComponent(id).replace('.md', '')
  const fullPath = path.join(process.cwd(), 'docs', encodedFileName) + '.md'

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // test loading page
    // await new Promise(resolve => setTimeout(resolve, 200))

    //@ts-ignore
    return {
      id: id.replace(/\.md$/, ''),
      contentHtml: contentHtml,
      ...matterResult.data,
    }
  } catch (error) {
    console.error('Error processing markdown data:', error)
    return String(error)
  }
}

// export const metadata: Metadata = {
//   title: 'Project Ideas! - Optimism',
//   description: 'Explore ideas for your next project.',
// }
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  // convert id to title
  const title = id
    .split('-') // split on hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter of each word
    .join(' ') // join words with spaces

  return {
    title: title + ' | Optimism',
    description: 'Explore ideas for your next project.',
    openGraph: {
      type: 'website',
      url: 'https://contribute.optimism.io',
      title: title + ' | Optimism',
      description: 'Explore ideas for your next project.',
      siteName: 'optimism.io',
      images: [
        {
          url: 'https://contribute.optimism.io/cover.jpeg',
        },
      ],
    },
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const content = await getResources(params.id)

  if (typeof content === 'string') {
    return (
      <Custom500
        errorMsg={content}
        status={500}
        titleError="Process Markdown data failed"
      />
    )
  }

  return (
    <>
      <div className=" bg-gray-50">
        <div className="lg:px-[4rem] lg:pb-[1rem] xl:px-[10rem] xl:pb-[1.5rem] flex justify-center">
          <Cpage content={content} />
        </div>
      </div>
      <Footer color="bg-white lg:bg-gray-100" />
    </>
  )
}
