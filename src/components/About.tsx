import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about_card">
      <h6>Source code - frontend</h6>
      <a
        className="about_a"
        href="https://github.com/MdSazzadIslam"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click Here
      </a>

      <p>
        <button className="about_btn">Happy coding!</button>
      </p>
    </div>
  );
};

export default About;
