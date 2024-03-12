import { MarkDownData } from '../../../(home)/component/Home'

export default function SpecificationSection({
  content,
  specificationRef,
}: {
  content: MarkDownData
  specificationRef: React.MutableRefObject<HTMLElement | null>
}) {
  return (
    <section
      id="Specification"
      //  min-h-[60vh]
      className=" bg-white  p-5 sm:p-6 md:p-10 lg:rounded-md lg:shadow-md items-center w-auto  lg:mb-6"
      // @ts-ignore
      ref={specificationRef}
    >
      <h6 className="text-2xl text-gray-900 font-bold my-4">Specification</h6>
      <hr className="hidden lg:block my-6  border-t border-gray-300" />
      <div
        className="render break-words text-gray-500 list-none"
        dangerouslySetInnerHTML={{ __html: content.contentHtml }}
      />
    </section>
  )
}
