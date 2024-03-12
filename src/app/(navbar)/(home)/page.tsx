import HeroSection from '@/src/app/(navbar)/(home)/component/HeroSection'
import fs from 'fs'
import path from 'path'
import { LoadMarkDownType, MarkDownData } from './component/Home'
import Cpage from './Cpage'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Custom500 from '../../custom-error'
import Footer from '../../component/footer/Footer'

async function getResources(): Promise<{
  jsonData: Omit<MarkDownData, 'contentHtml'>[]
  overViewData: string | LoadMarkDownType
}> {
  try {
    const jsonData = await getJsonData()

    const overViewData = await getOverViewData('overview')

    return { jsonData, overViewData }
  } catch (error) {
    throw error
  }
}

async function getJsonData(): Promise<Omit<MarkDownData, 'contentHtml'>[]> {
  const directoryPath = path.join(
    process.cwd(),
    'public',
    'static',
    'json',
    'output.json'
  )

  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: Omit<MarkDownData, 'contentHtml'>[] = JSON.parse(fileContents)
  return jsonData
}

async function getOverViewData(id: string): Promise<LoadMarkDownType | string> {
  const encodedFileName = encodeURIComponent(id)
  const fullPath =
    path.join(process.cwd(), 'public', 'static', 'overview', encodedFileName) +
    '.md'

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
      id: id.replace(/\.md$/, ''),
      contentHtml: contentHtml,
    }
  } catch (error) {
    console.error('Error processing markdown data:', error)
    return String(error)
  }
}

export default async function Home() {
  const { jsonData, overViewData } = await getResources()
  if (typeof overViewData === 'string') {
    return (
      <Custom500
        errorMsg={overViewData}
        status={500}
        titleError="Get markdown overview failed"
      />
    )
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="px-4  md:px-[4rem] lg:px-[8rem] py-[2.5rem] bg-gradient-to-b  from-[#ffe6e6] text-gray-300 to-white">
          <div className="pt-20 md:pt-14 md:my-8">
            <HeroSection />
          </div>
        </div>

        <div className="px-4 md:px-[4rem] lg:px-[8rem] py-[2.5rem] animate-slideup">
          <div className="flex flex-col gap-1 ">
            <h6 className="text-slate-500 text-lg font-rubik">Explore</h6>
            <h4 className="text-slate-900 text-2xl font-semibold font-rubik">
              Project Ideas
            </h4>
          </div>
          <div className="">
            <Cpage overViewData={overViewData} markdownContents={jsonData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
