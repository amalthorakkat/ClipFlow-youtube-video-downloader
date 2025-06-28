import React from "react";
import { FaDesktop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

import img1 from "../../assets/howto2.png";
import img2 from "../../assets/howto3.png";
import img3 from "../../assets/howto4.png";
import img4 from "../../assets/howto5.png";

const FeatureSection = () => {
  return (
    <div>
      {/* section 1 */}
      <div className=" m-3 flex items-center flex-col lg:mt-10 pb-5    ">
        <p className="text-[15px] text-gray-500 text-center py-5 md:w-200 lg:w-240  ">
          ClipFlow is your ultimate online video downloader, designed to
          effortlessly overcome YouTube's download limitations. We provide a
          swift and dependable solution for downloading YouTube videos. With our
          intuitive interface, enjoying your favorite content is simpler than
          ever.
        </p>
        <h1 className="text-center text-[20px] font-medium mb-5 md:text-2xl lg:text-[30px]  ">
          Supported Platforms:
        </h1>
        <div className="w-fit mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 md:m-5 gap-3 text-[150px] lg:gap-10   ">
            <FaDesktop />
            <FaTabletAlt />
            <MdSmartphone />
            <FaGlobe />
          </div>
        </div>
      </div>

      {/* section 2 */}
      
    </div>
  );
};

export default FeatureSection;
