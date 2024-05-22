import React from "react";
import logo from "./assets/MotionArtEffect-logo.png";
import logo1 from "./assets/motionarteffect-img2.png";
import logo2 from "./assets/motionarteffect-img1.png";
import logo3 from "./assets/motionarteffect-img3.png";
import ratings from "./assets/motionarteffect-img4.png";
import wand from "./assets/motionarteffect-img5.png";
import page from "./assets/motionarteffect-img10.png";
import section from "./assets/motionarteffect-img11.png";
import browsers from "./assets/motionarteffect-img8.png";
import logo4 from "./assets/motionarteffect-img7.png";
import logo5 from "./assets/motionarteffect-img9.png";
import logo6 from "./assets/motionarteffect-img6.png";

import arrowSvg from "./assets/right-arrow.svg";

function App() {
  return (
    <div className="container" style={{ backgroundColor: "transparent" }}>
      {/* NAVBAR START */}
      <nav className="text-white bg-[#262626] h-16 w-full fixed top-0 z-40 flex justify-between items-center px-4 md:px-10">
        <h1 className="text-lg font-bold">Company logo</h1>
        <button className="h-fit p-2 px-4 custom-button-buy rounded-md text-sm md:text-base">
          <span>Buy Now</span>
        </button>
      </nav>
      {/* NAVBAR END */}

      {/* COMPANY LOGO SECTION START */}
      <div className="btn-holder flex flex-col md:flex-row justify-between items-center mt-20 md:mt-20">
        <img
          className="relative mt-10 ml-4 md:ml-10 max-w-xs md:max-w-sm"
          src={logo}
          alt="Company Logo"
        />
        <button className="custom-button mt-8 mr-4 md:mr-8 z-10">
          <span className="rounded-lg z-10">Purchase Now</span>
        </button>
      </div>
      {/* COMPANY LOGO SECTION END */}

      {/* MAIN TITLE START */}
      <section className="mt-5 px-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center ">
          <div className="flex flex-col gap-2 text-center lg:text-left z-10 lg:w-[60%] lg:ml-[30%]  h-full w-full">
            <h2 className="text-2xl lg:text-2xl font-bold bg-gradient-to-r from-[#F87516] to-[#5E11FF] m-2  text-transparent bg-clip-text relative">
              Transform Your Website
            </h2>
            <p className="text-lg lg:text-xl relative lg:ml-[2%]">
              With Motion Art Effect
            </p>
          </div>
          <div className="col-span-2 text-3xl lg:text-[4rem] font-bold relative z-10 lg:w-[90%] lg:leading-[5rem]">
            <p>Attract Your Visitors Attention With Colorful</p>
            <p className="bg-gradient-to-r from-[#F87516] to-[#5E11FF] text-transparent bg-clip-text">
              Motion Art Effect
            </p>
            <p className="text-sm lg:text-base mt-10 lg:mt-5 relative z-10 lg:w-[80%]  ">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
          </div>
        </div>
        {/* MAIN TITLE END */}

        {/* SECOND TITLE START */}
        <div className="my-10 flex justify-center relative z-10 lg:ml-[2%]">
          <p className="text-xl">
            Trusted by thousands of users around the world
          </p>
        </div>
        {/* SECOND TITLE END */}

        {/* LOGO AND RATING START */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center items-center w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <img className="w-24 lg:w-32 z-10" src={logo1} alt="Logo 1" />
            <div>
              <img className="z-10 ml-2" src={ratings} alt="Ratings" />
              <span className="text-base z-10 ml-2 mt-2">
                4.5 Score, 9 Reviews
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <img className="w-24 lg:w-32 z-10" src={logo2} alt="Logo 2" />
            <div>
              <img className="z-10 ml-2" src={ratings} alt="Ratings" />
              <span className="text-base z-10 ml-2 mt-2">
                4.5 Score, 9 Reviews
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <img className="w-24 lg:w-32 z-10" src={logo3} alt="Logo 3" />
            <div>
              <img className="z-10 ml-2" src={ratings} alt="Ratings" />
              <span className="text-base z-10 ml-2 mt-2">
                4.5 Score, 9 Reviews
              </span>
            </div>
          </div>
        </div>
        {/* LOGO AND RATING END */}
      </section>

      <section className="w-screen mt-10">
        <section className="grid sm:grid-cols-1 lg:grid-cols-5 w-100 lg:w-[80%]">
          <div className="flex flex-col justify-center lg:col-span-4">
            {/* TITLE-3 AND HEADING START */}
            <div className="lg:ml-40 ml-10">
              <div className=" w-[90%] lg:w-[50%] lg:leading-[3rem] text-2xl lg:text-[3rem] absolute z-10 m-4">
                Turn Your Cursor Into A Colorful Magic Wand & Charm Your
                Visitors
              </div>
              <div className="text-gray-300 lg:mt-[11rem] mt-28 ml-4 relative z-10 ">
                <p>
                  Motion Art for Elementor is a groundbreaking plugin that
                  empowers you to effortlessly infuse your website with visually
                  stunning motion art elements.
                </p>
              </div>
            </div>
            {/* TITLE-3 AND HEADING END */}

            {/* PURCHASE BUTTON START */}
            <div className="flex justify-center lg:justify-start m-12 lg:ml-40 relative">
              <button className="h-16 p-4 rounded-2xl bg-gradient-to-r from-[#F87516] to-[#5E11FF] flex justify-center items-center lg:justify-start lg:items-start lg:ml-4">
                <span className="text-2xl">
                  <p>Purchase From Envato</p>
                </span>
                <img className="ml-2 mt-0 lg:mt-2 " src={arrowSvg} alt="" />
              </button>
            </div>
            {/* PURCHASE BUTTON END */}
          </div>

          {/* TITLE-4 START */}
          <div className="w-full flex justify-center lg:col-span-1 lg:justify-end">
            <img className="object-contain h-48 w-full" src={wand} alt="" />
          </div>
          {/* TITLE-4 END */}
        </section>
        <section class="h-20 flex justify-center items-center text-center lg:mt-6">
          <div className=" lg:w-[50%] lg:leading-[4rem] text-2xl lg:text-[3rem] z-10 ">
            Apply On Any Section Or Enable For Whole Page
          </div>
        </section>
        <section className=" w-full flex justify-center">
          <div className="flex flex-col justify-center items-center sm:flex-flow md:flex-row md:grid md:grid-cols-2 gap-4 mx-6 lg:mx-20 z-10">
            {/* SECTION CONTAINER START */}
            <div className="bg-[#0e0720] rounded-2xl shadow-md w-full">
              <h1 className="text-white   text-center hover:text-slate-700 text-2xl mt-4">
                Apply On Section
              </h1>
              <p className="text-slate-500  hover:text-slate-700 m-4">
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.
              </p>
              <img
                src={section}
                alt="Card 1 Image"
                className="w-full rounded-t-lg mt-2"
              />
            </div>
            {/* SECTION CONTAINER END */}

            {/* PAGE CONTAINER START */}
            <div className="bg-[#0e0720] rounded-2xl shadow-md p-4 lg:mt-60">
              <h1 className="text-white  text-center hover:text-slate-700 text-2xl m-4">
                Apply On Page
              </h1>
              <p className="text-slate-500 hover:text-slate-700 m-4">
                Take your website to new heights with Motion Art for Elementor.
                Embrace the power of motion and animation.
              </p>
              <img
                src={page}
                alt="Card 1 Image"
                className="w-full rounded-t-lg mt-2"
              />
            </div>
            {/* PAGE CONTAINER END */}
          </div>
        </section>

        {/* BROWSER CONTAINER START */}
        <div className="bg-[#120b24] h-fit mx-16 lg:mx-40 mt-20  rounded-2xl shadow-md p-2 mb-10  text-center relative py-12 ">
          <h1 className="text-3xl">Supported by All Popular Browsers</h1>
          <div className="mt-6 ">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers
          </div>
          <div class="flex justify-center items-center mb-8">
            <img className="items-center mt-4 " src={browsers} alt="" />
          </div>
        </div>
        {/* BROWSER CONTAINER END */}

        {/* TITLE-4 AND HEADIN START */}
        <section className="flex flex-col items-center justify-center">
          <h1 className=" relative text-2xl z-20 text-center lg:w-[30%] lg:text-4xl">
            An All-Round Plugin With Powerful Features
          </h1>
          <p className="w-[100%] my-10 px-6 text-clip text-center z-10 lg:w-[36%] text-[0.8rem] ">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </section>
        {/* TITLE-4 AND HEADIN END */}

        {/* FEATURES START */}
        <section className="absolute grid sm:grid-cols-1 lg:grid-cols-3 gap- items-center justify-center sm:my-4 lg:justify-start h-fit w-screen ">
          {/* FEATURE-1 START */}
          <div className="bg-[#120b24] h-auto  mx-4 lg:mx-4 rounded-2xl shadow-md p-2text-start relative lg:py-5 ">
            <img className="" src={logo4} alt="" />
            <div>
              <p className="px-4 pb-4 text-xl">Light Weight</p>
              <p className="px-4 pb-4 mb-2">
                Motion Art for Elementor is designed to be lightweight.
              </p>
            </div>
          </div>
          {/* FEATURE-1 END */}

          {/* FEATURE-2 START */}
          <div className="bg-[#120b24] h-auto  mx-4 lg:mx-4 rounded-2xl shadow-md p-2 text-start relative mt-4 lg:py-4">
            <img className="" src={logo5} alt="" />
            <div>
              <p className="px-4 pb-4 text-xl">100% Responsive</p>
              <p className="px-4 pb-4 mb-6">
                Create a consistent visual experience across all devices.
              </p>
            </div>
          </div>
          {/* FEATURE-2 END */}

          {/* FEATURE-3 START */}
          <div className="bg-[#120b24] h-auto  mx-4  lg:mx-4 rounded-2xl shadow-md p-2text-start relative mt-4 p-4  ">
            <img className="" src={logo6} alt="" />
            <div>
              <p className="px-4 pb-4 text-xl">User Friendly Interface</p>
              <p className="px-4 pb-4">
                Ensure a smooth experience for both applicants and
                administrators.
              </p>
            </div>
          </div>
          {/* FEATURE-3 END */}

          {/* FEATURES END */}

          {/* FOOTER START */}
          <footer
            className="h-16  bg-gradient-to-r from-[#F87516] to-[#5E11FF] flex flex-col justify-center items-center w-screen 
            lg:flex-row-reverse lg:px-20 lg:justify-between mt-10  lg:mt-20"
          >
            <div className="flex ">
              <button className="text-sm mr-4">
                <p>Documentation</p>
              </button>
              <button className="text-sm">
                <p>Support</p>
              </button>
            </div>
            <div>
              <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
            </div>
          </footer>

          {/* FOOTER END */}
        </section>
      </section>
    </div>
  );
}

export default App;
