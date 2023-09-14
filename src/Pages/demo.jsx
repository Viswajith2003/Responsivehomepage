import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/css/Homepage.css";
import welcomeImg from "../assets/images/welcome1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Demo() {
  const [imagePositionY, setImagePositionY] = useState(0);
  const [imageScale, setImageScale] = useState(1);

  return (
    <div className="flex flex-wrap justify-center sm:items-center md:items-center lg:items-center lg:min-h-screen text-black">
      <div className="lg:flex">
        <div className="container-fluid">
          <div className="row">
            {/* Image on the top for small screens */}
            <div className="col-12 d-lg-none">
              <img
                src={welcomeImg}
                alt="Modern building architecture"
                className="img-fluid"
              />
            </div>

            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="lg:w-1/2 text-left lg:ml-36 lg:mt-16  col-12 col-lg-6 "
            >
              <h1 className="heading lg:text-7xl">
                <b>
                  Where Every Ride Begins with a <span>Smile</span>
                </b>
              </h1>

              <h6 className="lg:text-2xl lg:mt-12 ">
                Save the earth, Share a Ride <br />
                Rs{" "}
                <b id="bold">
                  <span> 30</span>
                </b>{" "}
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

            {/* Image on the right for medium and large screens */}
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={welcomeImg}
                alt="Modern building architecture"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
