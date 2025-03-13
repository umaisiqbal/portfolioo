import React from "react";
import logo from "../assets/logo.svg";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="introduction">
      {/* image */}
      <img src={logo} alt="logo" />

      {/* introductory statement */}
      <h3>
        Hi there! I'm
        <Typewriter
          options={{
            strings: ["Usama ", "The Project Code"],
            autoStart: true,
            loop: true,
          }}
          style={{ display: "inline" }}
        />
      </h3>

      {/* about yourself */}
      <div className="desc">
        <p>
        This e-portfolio is a web-based project developed using React.js and Tailwind CSS to document my learning journey and practical implementations in Networks and Operating Systems. The portfolio showcases my weekly progress, hands-on networking configurations in Cisco Packet Tracer, and security-related exercises performed on Linux and Windows operating systems.
        </p>
        <p>
        uilt with a focus on user experience and responsiveness, this portfolio is hosted on GitHub Pages/Vercel, ensuring easy access and seamless navigation.{" "}
          <span>Engineering</span> as a network Engineering. My eportfolio roots
          trace back to <span>configurations of networks and operating systems basics</span>, where I laid the
          foundation for my network journey.
        </p>
        <p>
          This Assessment perfect in <span>cisco development and OS basics</span>, I've developed my cisco files and OS files in
          crafting dynamic and user-friendly tools that seamlessly blend form
          and function. Beyond the code, I immerse myself in the realm of{" "}
          <span>UI designing</span>, ensuring that each configurations experience is
          not just efficient but aesthetically pleasing.
        </p>
        <p>
          In addition to this pursuits, I've embraced the challenges of{" "}
          <span>security and Algorithms</span>, recognizing their
          fundamental role in building robust and efficient configurations.
        </p>
      </div>

      {/* links */}
      <ul className="socials">
        <li>
          <a href="https://github.com/umaisiqbal">
            <i className="ri-mail-line"></i>
            <span>Gmail</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/umaisiqbal">
            <i className="ri-github-line"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/umaisiqbal">
            <i className="ri-linkedin-fill"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/umaisiqbal">
            <i className="ri-youtube-line"></i>
            <span>YouTube</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
