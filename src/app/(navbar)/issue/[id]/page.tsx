import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { MarkDownData } from '../../(home)/component/Home'
import BreadCrump from './_component/BreadCrump'
import Cpage from './Cpage'
import Custom500 from '../../../custom-error'
import Footer from '@/src/app/component/footer/Footer'

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
  const encodedFileName = encodeURIComponent(id)
  const fullPath =
    path.join(process.cwd(), 'public', 'static', 'markdown', encodedFileName) +
    '.md'

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
        {/* <div className="lg:px-[4rem] xl:px-[10rem] lg:py-8">
          <BreadCrump content={content} />
        </div> */}
        <div className="lg:px-[4rem] lg:py-[1rem] xl:px-[10rem] xl:py-[1.5rem] flex justify-center">
          <Cpage content={content} />
        </div>
      </div>
      <Footer color="bg-white lg:bg-gray-100" />
    </>
  )
}
