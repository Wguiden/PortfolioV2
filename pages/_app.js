import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import React, { useState, useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import  { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router';
import Image from 'next/image'


function MyApp({ Component, pageProps }) {


  useEffect(() => {


    var tl = gsap.timeline();

    
    gsap.set(".load-logo-wrapper", {top: 240, opacity: 1});
    gsap.set(".load-logo-wrapper", {padding: "20px 0px"});


    
    setTimeout(() => {

        tl.to(".load-logo-wrapper", {duration: 1, top: 0, opacity: 1, ease: "back.out(1.4)"});
        tl.to(".load-logo-wrapper", {delay: .5, duration: .5, top: 240, opacity: 1, ease: "power3.in"});
        tl.to(".load-container li", {duration: .6, stagger: .20, y: "-100%", opacity: 1, ease: "power2.in"}, "-=.3");
        tl.to(".load-container", {display: "none"});


        
    }, 500);
    










    threejsStars();


    //-- Load External Script --//
    function loadScript(url, callback = false) {
      var script = document.createElement("script");
  
      script.type = "text/javascript";
      //IE
      if (script.readyState){
          script.onreadystatechange = function(){
              if (script.readyState == "loaded" || script.readyState == "complete"){
                  script.onreadystatechange = null;
                  onload();
              }
          };
      }
      else {
          script.onload = function(){
              onload();
          };
      }
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
  
      function onload() {
          if (callback != false) { callback(); }
      }
    }
  
  
  
  //Three JS init
  function threejsStars() {
      // if ($body.hasClass("home")) return;
      // if ($body.hasClass("page-id-23")) return;
  
      const threejsURL = "https://cdnjs.cloudflare.com/ajax/libs/three.js/70/three.min.js";

  
      loadScript(threejsURL, starsInit);
  }
  
  
  function starsInit() {
  
      
    //'use strict';
    var scene, camera, renderer;
  
    var container, aspectRatio, HEIGHT, WIDTH, fieldOfView,
    nearPlane, farPlane, mouseX, mouseY, windowHalfX, 
    windowHalfY, stats, geometry, starStuff, materialOptions,
    stars;

    camera = new THREE.PerspectiveCamera(fieldOfView,
      aspectRatio, nearPlane, farPlane);
  
    init();
    animate();
  
  
    function init(){
        container = document.createElement('div');
        document.body.appendChild(container);
  
        var backgroundGradient = document.createElement('div');
        backgroundGradient.classList.add("sun-set");
        document.body.appendChild(backgroundGradient);
  
        var overlay = document.createElement('div');
        overlay.classList.add("three-overlay");
        document.body.appendChild(overlay);
  
  
        container.style.position = "fixed";
        container.style.top = 0;
        container.style.left = 0;
        container.style.zIndex = -1;
        container.id = "threejs-container";
        container.setAttribute('data-aos', 'fade');
  
        HEIGHT = window.innerHeight;
        WIDTH = window.innerWidth;
        aspectRatio = WIDTH / HEIGHT;
        fieldOfView = 75;
        nearPlane = 1;
        farPlane = 2000;
        mouseX = 0;
        mouseY = 0;
        windowHalfX = WIDTH / 2;
        windowHalfY = HEIGHT / 2;
        // camera = new THREE.PerspectiveCamera(fieldOfView,
        // aspectRatio, nearPlane, farPlane);
  
        // camera.position.z = farPlane / 2;
        camera.position.z = 200;
        camera.position.y = 2000;
  
        scene = new THREE.Scene({antialias:true});
        scene.fog = new THREE.FogExp2(0x000000, 0.0003);
  
  
  
        // const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        // scene.add( light );
  
        const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
        const cube = new THREE.Mesh( geometry, material ); 
        //scene.add( cube );

  
        //----------------------------------starForge();
  
  
        var starQty = 45000;
        const stargeometry = new THREE.SphereGeometry(1000, 100, 50);
  
        materialOptions = {
            size: 1.0,
            transparency: true,
            opacity: 0.7,
            map: createCircleTexture('#fff', 256),
            depthWrite: false
        };
  
        starStuff = new THREE.PointCloudMaterial(materialOptions);
  
        for(var i = 0; i < starQty; i++){
            var starVertex = new THREE.Vector3();
            starVertex.x = Math.random() * 2000 - 1000;
            starVertex.y = Math.random() * 2000 - 1000;
            starVertex.z = Math.random() * 2000 - 1000;
  
            stargeometry.vertices.push(starVertex);
        }
  
        stars = new THREE.PointCloud(stargeometry, starStuff);
        stars.position.y = 1800;
        stars.position.x = 500;
  
        scene.add(stars);
  
        //----------------------------------------
  
        if(webGLSupport()){
            renderer = new THREE.WebGLRenderer({alpha:true});
        }else{
            renderer = new THE.CanvasRenderer();
        }
  
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(WIDTH, HEIGHT);
        container.appendChild(renderer.domElement);

  
        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousemove', onMouseMove, false);
  
        gsap.registerPlugin(ScrollTrigger);

      
        gsap.to(camera.position, {
          z: -150,
          // duration: 10,
          ease: 'none',
          scrollTrigger:
          {
            trigger: ".body",
            // markers: true,
            start: "top 10%",
            end: "bottom",
            scrub: 5,
          },
          onUpdate: () => {
            render();
          },
  
        });
  
  
  
  
    }
    
    function animate(){
        requestAnimationFrame(animate);
        render();
    // stats.update();
    }
  
    function render(){
         camera.position.x += ( (mouseX/6) - camera.position.x ) * .001;
        //  camera.position.y += ( (mouseY/6) - camera.position.y ) * .001;
  
        // camera.lookAt(scene.position);
        renderer.render(scene, camera);
  
    }
  
    function webGLSupport(){
        try{
            var canvas = document.createElement('canvas');
            return !! (window.WebGLRenderingContext && (
                canvas.getContext('webgl') || canvas.getContext('experiment-webgl')
            ));
  
        }catch(e){
            return false;
        }
    }
    
    function onWindowResize(){
        var WIDTH = window.innerWidth;
            HEIGHT = window.innerHeight;
  
            camera.aspect = aspectRatio;
            camera.updateProjectionMatrix();
            renderer.setSize(WIDTH, HEIGHT);
    }
  
    function createCircleTexture(color, size) {
        var matCanvas = document.createElement('canvas');
        matCanvas.width = matCanvas.height = size;
        var matContext = matCanvas.getContext('2d');
        // create texture object from canvas.
        var texture = new THREE.Texture(matCanvas);
        // Draw a circle
        var center = size / 2;
        matContext.beginPath();
        matContext.arc(center, center, size/2, 0, 2 * Math.PI, false);
        matContext.closePath();
        matContext.fillStyle = color;
        matContext.fill();
        // need to set needsUpdate
        texture.needsUpdate = true;
        // return a texture made from the canvas
        return texture;
    }
  
    function starForge(){
        var starQty = 25000;
        geometry = new THREE.SphereGeometry(1000, 100, 50);
  
        materialOptions = {
            size: 1.0,
            transparency: true,
            opacity: 0.7,
            map: createCircleTexture('#fff', 256),
            depthWrite: false
        };
  
        starStuff = new THREE.PointCloudMaterial(materialOptions);
  
        for(var i = 0; i < starQty; i++){
            var starVertex = new THREE.Vector3();
            starVertex.x = Math.random() * 2000 - 1000;
            starVertex.y = Math.random() * 2000 - 1000;
            starVertex.z = Math.random() * 2000 - 1000;
  
            geometry.vertices.push(starVertex);
        }
  
        stars = new THREE.PointCloud(geometry, starStuff);
        stars.position.y = 1800;
        scene.add(stars);
  
  
    }
  
    function onMouseMove(e){
        mouseX = e.clientX - windowHalfX + 100;
        // mouseY = e.clientY - windowHalfY;
        render();
    }
  
  }
  
  
  }, [])


  const router = useRouter();

  return (
    <>


      <div className="load-container">

          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className="relative overflow-hidden py-2">
            <div className="load-logo-wrapper relative">
                <Image src="/logos/WG-logo.png" alt="" className="w-14 h-auto sm:w-36 cursor-pointer max-w-none" height="150px" width="150px"/>
            </div>
          </div>

      </div>



      <Navbar />

      <AnimatePresence mode="wait" initial={false}>

            <Component key={router.route} {...pageProps}/>

      </AnimatePresence>

      <Footer/>


    </>
  );
}

export default MyApp;
