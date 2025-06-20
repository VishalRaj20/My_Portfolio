import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Vishal Raj</span> from
            <span className="purple"> Bihar, India</span>.
            <br />
            I'm currently in my final year, pursuing a Bachelor's degree in{" "}
            <span className="purple">
              Electronics and Communication Engineering (ECE)
            </span>{" "}
            at <span className="purple">NIT Andhra Pradesh</span>.
            <br />
            <br />
            I'm deeply passionate about <strong>software development</strong> and
            have hands-on experience building full-stack applications using the{" "}
            <strong>MERN stack</strong>, along with projects involving
            <strong> embedded systems</strong>, <strong>AI/ML</strong>, and
            <strong> real-time communication</strong>.
            <br />
            <br />
            My goal is to build impactful software that solves real-world problems and enhances people's lives.
            <br />
            <br />
            When I'm not coding, I enjoy engaging in a few other activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out and staying active 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and cultures 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about emerging tech and startups 🚀
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
