


// import React from "react";
// import { FaDesktop, FaTabletAlt, FaPlay, FaCheckCircle, FaCopy } from "react-icons/fa";
// import { MdSmartphone, MdDownload } from "react-icons/md";
// import { FaGlobe } from "react-icons/fa";
// import Img1 from "../../assets/qwe-1.jpg";
// import Img2 from "../../assets/qwe-2.jpg";
// import Img3 from "../../assets/qwe-3.jpg";

// const FeatureSection = () => {
//   const ImgOne = Img1;
//   const ImgTwo = Img2;
//   const ImgThree = Img3;

//   const features = [
//     "Choose your preferred quality: from MP4 to MP3, standard to Full HD.",
//     "Seamless compatibility across all devices—download videos on desktop, mobile, or tablet.",
//     "Convert and download YouTube videos in just a few clicks with our streamlined platform.",
//     "Enjoy blazing-fast downloads and unlimited video access at no cost.",
//     "Unlock expert tips and tricks with our comprehensive YouTube downloading guide.",
//   ];

//   const steps = [
//     {
//       icon: <FaPlay className="w-8 h-8 text-blue-400" />,
//       image: ImgOne,
//       title: "Find Your Video",
//       description:
//         "Easily download your favorite YouTube videos by following these simple steps:",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <FaCopy className="w-8 h-8 text-purple-400" />,
//       image: ImgTwo,
//       title: "Copy the URL",
//       description:
//         "Locate the video you want on YouTube and copy its URL from the address bar.",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <MdDownload className="w-8 h-8 text-green-400" />,
//       image: ImgThree,
//       title: "Download & Enjoy",
//       description:
//         "Paste the copied link into the download box provided above.",
//       gradient: "from-green-500 to-teal-500",
//     },
//   ];

//   return (
//     <div>
//       {/* Section 1 */}
//       <div className="m-3 flex items-center flex-col lg:mt-10 pb-5">
//         <p className="text-[15px] text-gray-500 text-center py-5 md:w-200 lg:w-240">
//           ClipFlow is your ultimate online video downloader, designed to
//           effortlessly overcome YouTube's download limitations. We provide a
//           swift and dependable solution for downloading YouTube videos. With our
//           intuitive interface, enjoying your favorite content is simpler than
//           ever.
//         </p>
//         <h1 className="text-center text-[20px] font-medium mb-5 md:text-2xl lg:text-[30px]">
//           Supported Platforms:
//         </h1>
//         <div className="w-fit mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 md:m-5 gap-3 text-[120px] md:text-[150px] lg:gap-10">
//             <FaDesktop />
//             <FaTabletAlt />
//             <MdSmartphone />
//             <FaGlobe />
//           </div>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 p-3 sm:py-16 md:py-20">
//         {/* Features Description Section */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20">
//           <div className="text-center mb-8 sm:mb-12">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
//               Discover the easiest way to download YouTube videos with our
//               highly rated, free tool.
//             </h1>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
//             {features.map((feature, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg hover:bg-white/10 transition-all duration-300 h-full">
//                   <div className="flex items-start space-x-3 sm:space-x-4">
//                     <div className="flex-shrink-0 mt-1">
//                       <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
//                     </div>
//                     <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//                       {feature}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Steps Section */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ">
//               How It Works
//             </h2>
//             <p className="text-gray-400 text-sm sm:text-base">
//               Download your favorite videos in just 3 simple steps
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//             {steps.map((step, index) => (
//               <div key={index} className="group relative">
//                 {/* Step Number */}
//                 <div className="absolute -top-4 -left-4 z-10">
//                   <div
//                     className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`}
//                   >
//                     {index + 1}
//                   </div>
//                 </div>

//                 <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/10 transition-all duration-500 h-full">
//                   {/* Icon and Image Container */}
//                   <div className="flex flex-col items-center mb-6">
//                     <div className="relative mb-4">
//                       <div
//                         className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`}
//                       ></div>
//                       <div className="relative bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
//                         <img
//                           className="w-full h-full  object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
//                           src={step.image}
//                           alt={step.title}
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-2 mb-3">
//                       {step.icon}
//                       <h3 className="text-lg sm:text-xl font-bold text-white">
//                         {step.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <div className="text-center">
//                     <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Connecting Line (except for last item) */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
//                     <div className="w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;


import React from "react";
import { useTranslation } from "react-i18next";
import { FaDesktop, FaTabletAlt, FaPlay, FaCheckCircle, FaCopy } from "react-icons/fa";
import { MdSmartphone, MdDownload } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import Img1 from "../../assets/qwe-1.jpg";
import Img2 from "../../assets/qwe-2.jpg";
import Img3 from "../../assets/qwe-3.jpg";

const FeatureSection = () => {
  const { t } = useTranslation();
  const ImgOne = Img1;
  const ImgTwo = Img2;
  const ImgThree = Img3;

  const features = [
    t("features.quality"),
    t("features.compatibility"),
    t("features.convert"),
    t("features.fastDownloads"),
    t("features.tips"),
  ];

  const steps = [
    {
      icon: <FaPlay className="w-8 h-8 text-blue-400" />,
      image: ImgOne,
      title: t("steps.findVideo.title"),
      description: t("steps.findVideo.description"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaCopy className="w-8 h-8 text-purple-400" />,
      image: ImgTwo,
      title: t("steps.copyUrl.title"),
      description: t("steps.copyUrl.description"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MdDownload className="w-8 h-8 text-green-400" />,
      image: ImgThree,
      title: t("steps.download.title"),
      description: t("steps.download.description"),
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div>
      {/* Section 1 */}
      <div className="m-3 flex items-center flex-col lg:mt-10 pb-5">
        <p className="text-[15px] text-gray-500 text-center py-5  md:w-200 lg:w-240 ">
          {t("description")}
        </p>
        <h1 className="text-center text-[20px] font-medium mb-5 md:text-2xl lg:text-[30px]">
          {t("supportedPlatforms")}
        </h1>
        <div className="w-fit mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 md:m-5 gap-3 text-[120px] md:text-[150px] lg:gap-10">
            <FaDesktop />
            <FaTabletAlt />
            <MdSmartphone />
            <FaGlobe />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 p-3 sm:py-16 md:py-20">
        {/* Features Description Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
              {t("featuresTitle")}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              {t("howItWorks")}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {t("stepsSubtext")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 z-10">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/10 transition-all duration-500 h-full">
                  {/* Icon and Image Container */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500`}
                      ></div>
                      <div className="relative bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                        <img
                          className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                          src={step.image}
                          alt={step.title}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      {step.icon}
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;