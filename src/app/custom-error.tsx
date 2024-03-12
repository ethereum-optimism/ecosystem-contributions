import Navbar from "@/src/app/component/navbar/Navbar";
import Link from "next/link";

export default function Custom500({
    status,
    titleError,
    errorMsg,
}: {
    status: number;
    titleError: string;
    errorMsg: string;
}) {
    return (
    <div className="min-h-[92vh] max-h-[92vh] overflow-hidden flex flex-col relative ">
        <div className="flex-grow flex flex-col justify-center items-center text-center px-8 lg:px-0 z-20">
            <div className="flex flex-col justify-center items-center">
                <h6 className="text-xl lg:text-2xl font-medium text-gray-500">Error Status {status} </h6>
                <h6 className="text-2xl lg:text-4xl font-medium text-gray-900">{titleError}</h6>
            </div>    
            <h6 className="text-base font-normal my-12">{errorMsg}</h6>
            <Link 
            href={"/"}
            className="flex py-3 px-7 bg-gray-900 hover:bg-gray-900/90 rounded-lg ">
                <h6 className="text-base font-semibold text-white">Back to Home</h6>
            </Link>
        </div>
        <div className="hidden lg:block absolute z-0 -top-[26.84375rem] -right-[26.84375rem] w-[53.6875rem] h-[53.6875rem] rounded-full bg-stone-50"></div>
        <div className="hidden lg:block absolute z-0 -bottom-[26.84375rem] -left-[26.84375rem] w-[53.6875rem] h-[53.6875rem] rounded-full bg-stone-50"></div>
    </div>
    
);
}