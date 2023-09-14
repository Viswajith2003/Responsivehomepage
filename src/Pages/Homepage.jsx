import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/css/Homepage.css";
import welcomeImg from "../assets/images/welcome1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Homepage() {
  const [imagePositionY, setImagePositionY] = useState(0);
  const [imageScale, setImageScale] = useState(1);

  return (
    <div className="main">
      {/* <nav class="flex items-center justify-between flex-wrap bg-gray-300 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="" alt="icon" />
          <span class="font-semibold text-xl tracking-tight">AutoGo</span>
        </div>
      </nav> */}
      <div className="flex flex-wrap justify-center sm:items-center md:items-center lg:items-center lg:min-h-screen text-black ml-4 mb-5">
        <div className="lg:flex">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="lg:w-1/2 mt-4 lg:mt-24 lg:m-8 lg:ml-28 d-lg-none"
            onMouseMove={(event) => {
              // Calculate the new Y position based on mouse position
              const mouseY = event.clientY;
              const newY = -mouseY / 20; // Adjust the division value for desired motion intensity
              setImagePositionY(newY);

              // Calculate the new scale based on mouse position
              const mouseX = event.clientX;
              const newScale = 1 + mouseX / 2000; // Adjust the division value for desired zoom intensity
              setImageScale(newScale);
            }}
            onMouseLeave={() => {
              // Reset image scale when the mouse leaves the container
              setImageScale(1);
            }}
          >
            <img
              src={welcomeImg}
              alt="picture"
              className="flex m-1"
              style={{
                y: imagePositionY,
                scale: imageScale,
              }}
            />
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="lg:w-1/2 text-left lg:ml-36 lg:mt-16 "
          >
            <h1 className="heading lg:text-7xl">
              <b>
                Where Every Ride{" "}
                <i className="break">
                  Begins with a <span>Smile</span>
                </i>
              </b>
            </h1>

            <h6 className="lg:text-2xl mt-8">
              Save the earth, Share a Ride <br />
              Rs
              <b className="bold">
                <span className="num "> 30</span>
              </b>
              min. charge
              <br />
              +20 for every next km
            </h6>
            <div className="flex justify-start lg:mt-10">
              <button className="bttn mt-4 p-2 bg-yellow-500 rounded-full hover:text-black w-48 text-lg">
                <b>Download</b>
              </button>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="lg:w-1/2 mt-4 lg:mt-24 lg:m-8 lg:ml-28 d-none d-lg-block"
            onMouseMove={(event) => {
              // Calculate the new Y position based on mouse position
              const mouseY = event.clientY;
              const newY = -mouseY / 20; // Adjust the division value for desired motion intensity
              setImagePositionY(newY);

              // Calculate the new scale based on mouse position
              const mouseX = event.clientX;
              const newScale = 1 + mouseX / 2000; // Adjust the division value for desired zoom intensity
              setImageScale(newScale);
            }}
            onMouseLeave={() => {
              // Reset image scale when the mouse leaves the container
              setImageScale(1);
            }}
          >
            <img
              src={welcomeImg}
              alt="picture"
              className="flex m-1"
              style={{
                y: imagePositionY,
                scale: imageScale,
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
