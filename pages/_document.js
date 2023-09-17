

import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'


// import { $body } from "../resources/utils/globals";
// import loadScript from "../resources/utils/helpers/load-script";
import gsap from "gsap";
import scrollTrigger from "gsap";






export default function Document() {


  const pageLoader = {
    height: "100vh",
    background: "gray",
    position: "fixed",
    top: 0,
    width: "100vw",
    zIndex: 100,
    transform: "translateY(-100%)"
  }



  return (


    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />

      </Head>


      {/* <div className="page-loader" style={pageLoader}></div> */}


      <body className="bg-black bg-opacity-95 body">
        <Main />
        <NextScript />
      </body>



    </Html>


  );

  
}




