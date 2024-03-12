import Link from "next/link";
import Navbar from "./component/navbar/Navbar";

export default function Custom404() {
    return (
    <div className="min-h-[100vh] max-h-[100vh] flex flex-col relative overflow-hidden">
        <Navbar/>
        
        <div className="flex-grow flex flex-col justify-center items-center text-center px-8 lg:px-0">
            <div className="flex flex-col justify-center items-center">
                <h6 className="text-xl lg:text-2xl font-medium text-gray-500">404 Error</h6>
                <h6 className="text-4xl lg:text-7xl font-medium text-gray-900">Page not found</h6>
            </div>    
            <h6 className="text-base font-normal my-12">The page you were looking for have been moved, deleted or does not exist.</h6>
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