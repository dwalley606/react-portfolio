import "./style.css"; // Import the CSS file for the component
import profilePic from "../../assets/cover/profilepic.jpg";

function About() {
  return (
    <section className="">
      <div className="">
        <div className="pic-container">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>
        <p>
          Hello and welcome to my development portfolio! My name is Daniel
          Walley, and I am a full-stack web developer living and working in the
          Washington, D.C. area. I have been developing web solutions since 2019
          when I took over the website for the United States Air Force Band.
          After leaving the Air Force in 2023, I have continued to study modern
          web technology such as React.js, MongoDB, and Node.js.
        </p>
      </div>
    </section>
  );
}

export default About;
