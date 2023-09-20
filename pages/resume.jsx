import React from 'react'
import transition from '../transition'
import Image from 'next/image'


const resume = () => {
  return (

    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full pt-40 px-5">
          <h2 className="text-white text-4xl sm:text-6xl pb-10">Warren Guiden</h2>

          <div className="intro-text text-white">
            <p className="pb-10">Software developer with 5+ years of experience. Work with tools such as Node, React, PHP, GSAP, ThreeJS, Wordpress, Shopify, and basic HTML/CSS/JavaScript stack. Bachelors Degree in Information Technology with focus of Development and Security.</p>
            <p>I am constantly improving my skill set with the goal of becoming a well rounded developer in both front end and backend development. With constant improvements and upgrades to frameworks and technology, its important to always be willing to learn something new and expand my roles as a developer.</p>
          </div>


          <div className="work-experience grid grid-cols-1 gap-x-12 gap-y-5 sm:gap-y-16 sm:grid-cols-2 py-20">
            <div className="card group relative flex flex-col items-start p-5 rounded-2xl overflow-hidden hover:bg-sky-900 transition-all">
              <div className="icon relative h-[70px] w-[70px] flex justify-center p-4 rounded-full bg-gray-900 mb-4">
                <Image className="h-full" src="/WU-logo.png" alt="" height="30px" width="30px"/>
              </div>

              <div className="job-headings text-white">
                <h3 className="text-3xl">Software Developer</h3>
                <h3>May 2021 - Present</h3>
                <h3>White Unicorn Agency</h3>
              </div>

              <ul className="details text-slate-500 pt-5">
                <li className="list-disc ml-4">Collaborate with designers, other developers, and project managers to understand project requirements.</li>
                <li className="list-disc ml-4">Develop responsive layouts that adapt to different screen sizes, from desktop to mobile devices.</li>
                <li className="list-disc ml-4">Modifie and manage websites for an extensive list of national clientele.</li>
                <li className="list-disc ml-4">Work with web development team to provide clients with custom developed sites that showcase company brand and values.</li>
                <li className="list-disc ml-4">Managed and debug databases issues through SQL/MySQL</li>
                <li className="list-disc ml-4">Utilize version control systems (e.g., Git) to manage code changes and collaborate effectively.</li>
                <li className="list-disc ml-4">Translate design mockups into functional and responsive web pages using HTML, CSS, and JavaScript.</li>
                <li className="list-disc ml-4">Experiment with new tools and techniques to improve development processes and deliverables.</li>
                <li className="list-disc ml-4">Integrate third-party libraries, plugins, or APIs as required by the project.</li>
                
              </ul>


              <a href="https://whiteunicornagency.com/" className="cursor-pointer hover:scale-110 transition-all">
                <div className="link-icon flex gap-3 text-white items-center py-5">
                <Image src="/logos/link-icon.png" alt="" className="w-5" height="30px" width="30px"/>
                  <p>WUA</p>
                </div>                
              </a>

            </div>

            <div className="card group relative flex flex-col items-start p-5 rounded-2xl overflow-hidden hover:bg-sky-900 transition-all">
              <div className="icon relative h-[70px] w-[70px] flex justify-center p-4 rounded-full bg-gray-900 mb-4">
                <Image className="h-full" src="/cedarcide-logo2.png" alt="" height="30px" width="35px"/>
              </div>

              <div className="job-headings text-white">
                <h3 className="text-3xl">Lead Developer</h3>
                <h3>September 2019 - May 2021</h3>
                <h3>Cedarcide</h3>
              </div>

              <ul className="details text-slate-500 pt-5">
                <li className="list-disc ml-4">Work closely with marketing/design team to improve conversion rates, SEO optimization, site speed, integrate email marketing and analytics tools, and provide best user experience.</li>
                <li className="list-disc ml-4">Develop, maintain, and manage multiple E-commerce sites. </li>
                <li className="list-disc ml-4">Applies expertise and a high level of customer service to address technical issues and concerns</li>
                <li className="list-disc ml-4">Optimize images, code, and assets for faster load times and better performance.</li>
                <li className="list-disc ml-4">Integrate with APIs, payment gateways, and third-party services to enhance functionality.</li>
                <li className="list-disc ml-4">Ensure that web pages adhere to accessibility standards (WCAG) for users with disabilities.</li>
                <li className="list-disc ml-4">Conduct thorough testing of web pages on different browsers and devices to identify and fix issues.</li>
                <li className="list-disc ml-4">Communicate progress, challenges, and potential solutions to project managers.</li>

              </ul>

              <a href="https://cedarcide.com/" className="cursor-pointer hover:scale-110 transition-all">
                <div className="link-icon flex gap-3 text-white items-center py-5">
                  <Image src="/logos/link-icon.png" alt="" className="w-5" height="30px" width="30px"/>
                  <p>Cedarcide</p>
                </div>                
              </a>

            </div>



            <div className="card group relative flex flex-col items-start p-5 rounded-2xl overflow-hidden hover:bg-sky-900 transition-all">
              <div className="icon relative h-[70px] w-[70px] flex justify-center p-4 rounded-full bg-gray-900 mb-4">
                <Image className="h-full" src="/recreationDallas-logo.png" alt="" height="30px" width="35px"/>
              </div>

              <div className="job-headings text-white">
                <h3 className="text-3xl">Web Developer</h3>
                <h3>September 2022 - December 2022</h3>
                <h3>Recreation Dallas</h3>
              </div>

              <ul className="details text-slate-500 pt-5">
                <li className="list-disc ml-4">Determine the technical feasibility of design concepts and propose solutions if needed.</li>
                <li className="list-disc ml-4">Set up the development environment, version control, and necessary tools.</li>
                <li className="list-disc ml-4">Implement interactive elements, animations, and transitions to enhance user engagement.</li>
                <li className="list-disc ml-4">Translate design mockups into functional and responsive web pages</li>
                <li className="list-disc ml-4">Develop email templates using html, css.</li>

              </ul>

              <a href="https://recreationdallas.com/" className="cursor-pointer hover:scale-110 transition-all">
                <div className="link-icon flex gap-3 text-white items-center py-5">
                  <Image src="/logos/link-icon.png" alt="" className="w-5" height="30px" width="30px"/>
                  <p>Recreation Dallas</p>
                </div>                
              </a>

            </div>



            <div className="card group relative flex flex-col items-start p-5 rounded-2xl overflow-hidden hover:bg-sky-900 transition-all">
              <div className="icon relative h-[70px] w-[70px] flex justify-center p-4 rounded-full bg-gray-900 mb-4">
                <Image className="h-full" src="/logos/WG-logo.png" alt="" height="30px" width="40px"/>
              </div>

              <div className="job-headings text-white">
                <h3 className="text-3xl">Freelance Development</h3>
                <h3>May 2018 - Present</h3>
              </div>

              <ul className="details text-slate-500 pt-5">
                <li className="list-disc ml-4">Utilize knowledge in HTML, CSS, and Javascript to create visually appealing sites that feature user-friendly design and clear navigation</li>
                <li className="list-disc ml-4">Clarify expectations, gather necessary assets (designs, content), and define project timelines.</li>
                <li className="list-disc ml-4">Set up a local development environment with necessary tools, frameworks, and libraries.</li>
                <li className="list-disc ml-4">Utilize front-end frameworks and JavaScript libraries to streamline development and enhance UI components.</li>

              </ul>

            </div>


          </div>











          <div className="education">

          <h3 className="text-content text-white text-4xl pb-0 pt-0">Education</h3>

          <div className="flex">
            <div className="item">
              <p className="text-slate-500 pb-1">2016 - 2021</p>
              <p className="text-slate-500 pb-1">University of North Texas</p>
              <h4 className="text-content text-white text-4xl pb-1 text-xl">Bachelors Degree Information Technology</h4>
              <p className="text-slate-500 pb-10">Focus of Software Development/Cyber Swecurity</p>

            </div>
          </div>

          </div>














          <div className="skillsets pb-40">

            <div className="text-content pb-10">
              <h3 className="text-content text-white text-4xl pb-4">Progressive Career Impact</h3>
              <p className="text-slate-500 pb-15">The information below gives you a insight of my experience in the real-world. </p>

              <h3 className="text-content text-white text-4xl pt-20">Skillsets:</h3>
            </div>

            <div className="skill-grid grid grid-cols-3 gap-4">

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/react-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">React JS</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/javascript-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Javascript</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/scss-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Sass</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/nextjs-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Next JS</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/html5.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">HTML5</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/mysql-logo.png" alt="" height="30px" width="40px"/>
                <p className="text-white text-xl hidden sm:block">MySQL</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/git-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Git</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/XD-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">XD</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/wordpress-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Wordpress</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/shopify-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Shopify</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/tailwind-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Tailwind</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/css-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Css</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/node-logo.png" alt="" height="30px" width="30px"/>
                <p className="text-white text-xl hidden sm:block">Node</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/php-logo.png" alt="" height="30px" width="40px"/>
                <p className="text-white text-xl hidden sm:block">PHP</p>
              </div>

              <div className="skill rounded-sm border border-gray-600 p-4 flex items-center gap-4 justify-center sm:justify-start">
                <Image  className="w-8" src="/logos/aws-logo.png" alt="" height="30px" width="40px"/>
                <p className="text-white text-xl hidden sm:block">AWS</p>
              </div>


            </div>

          </div>



      </div>
    </div>

  )
}

export default transition(resume)