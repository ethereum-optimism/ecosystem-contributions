import { MarkDownData } from "../../../(home)/component/Home"

export default function ProjectSummarySection({
    content
}:{
    content: MarkDownData

})  {

return (

    <section
            id="ProjectSummary"
            className="bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:mb-6"
          >
            <div className="text-xl text-gray-900 font-bold my-4 mx-4">
              Project Summary
            </div>
            <hr className="hidden lg:block my-6 mx-4 border-t border-gray-300" />
            <div className="mx-4 text-gray-500 flex">
              Proposing Delegate:<p className="font-bold">&nbsp;Rabbithole</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Proposal&nbsp;
              <p className="text-decoration-line: underline">Tier</p>:&nbsp;
              <p className="text-decoration-line: underline">Fledgling</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Baseline grant amount:
              <p className="font-bold">&nbsp;200,000 OP</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Should this Foundation Mission be fulfilled by one or multiple
              applicants:<p className="font-bold">&nbsp;Multiple</p>
            </div>

            <div className="mt-4 mx-4 text-gray-500 flex">
              Start date:<p className="font-bold">&nbsp;ASAP</p>
            </div>
            <div className="mx-4 text-gray-500 flex">
              Completion date:<p className="font-bold">&nbsp;8/31/2024</p>
            </div>

            <div className="mx-4 my-4">
              <button className="w-[144px] h-[48px] bg-red-600 hover:bg-red-500 text-white rounded-md py-2 px-4 border">
                Apply
              </button>
            </div>
        </section>

    )

}
