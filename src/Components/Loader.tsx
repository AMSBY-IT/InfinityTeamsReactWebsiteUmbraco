import FadeLoader from "react-spinners/FadeLoader"
// import { useState } from "react";

const Loader =()=>{

//    const [color, setColor] = useState("#be0bf3");

    return (
        <div className="tw-flex tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-items-center tw-justify-center tw-z-[100] tw-bg-[#000] tw-opacity-50">
            <FadeLoader  color="#be0bf3">
            </FadeLoader>
        </div>
    )
}

export default Loader;