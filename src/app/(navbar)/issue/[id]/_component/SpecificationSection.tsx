import { MarkDownData } from '../../../(home)/component/Home'

export default function SpecificationSection({
  content,
  specificationRef,
}: {
  content: MarkDownData
  specificationRef: React.MutableRefObject<HTMLElement | null>
}) {
  // const {title, ...rest} = MarkDownData
  // const newContent = content.contentHtml.replace(/<h1>.*?<\/h1>/gs, '')
  const newContent = content.contentHtml.replace(/<h1>[\s\S]*?<\/h1>/g, '');
  return (
    <section
      id="Specification"
      //  min-h-[60vh]
      className="border-0 bg-white  p-5 sm:p-6 md:p-10 lg:rounded-md lg:border items-center w-auto  lg:mb-6"
      // @ts-ignore
      ref={specificationRef}
    >
      <h6 className="text-3xl text-gray-900 font-bold my-4 mb-6">
        Specification
      </h6>
      <hr className="hidden lg:block mb-4" />
      <div
        className="render break-words text-gray-500 list-none"
        dangerouslySetInnerHTML={{ __html: newContent }}
      />
    </section>
  )
}
