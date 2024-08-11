


import { Link } from "react-router-dom";
import { SimpleAvatar } from "./UserdropDown";


export const Appbar = () => {
  return (
    <div className="border-b py-4 flex justify-between items-center px-10">
      <Link to={"/dashboard"} className="font-bold mx-8 sm:mx-0 text-2xl cursor-pointer">
        Moneta
      </Link>
      
        {/* <Avatars name="nitin" /> */}
        {/* <div className="rounded-full h-8 w-8 pt-2 flex justify-center mr-2 ml-2 bg-slate-500">
            <div className="flex flex-col  justify-center h-2 text-xl">
                U
            </div>
        </div> */}
        <SimpleAvatar />
      </div>
  );
}
