import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EasyScheduleFirstPart = ({title, heading, para, link, img}) => {
    return (
        <div className="lg:w-9/12 my-10 lg:my-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div className="lg:w-[40%] px-2">
                <h5 className="font-cursive text-blue-500 mb-5">{title}</h5>
                <h3 className="text-4xl font-prompt mb-5">{heading}</h3>
                <p className="text-gray-500 text-xl tracking-wide mb-5">{para}</p>
                <Link className="font-cursive text-blue-500 flex items-center gap-x-2">{link} <FaLongArrowAltRight></FaLongArrowAltRight></Link>
            </div>
            <img src={img} className="lg:w-[588px] lg:h-[451px] mt-10 lg:mt-0" alt="" />
        </div>
    );
};

export default EasyScheduleFirstPart;