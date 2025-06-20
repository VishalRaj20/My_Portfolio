import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazonClone from "../../Assets/Projects/amazonClone.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import car from "../../Assets/Projects/car1.png";
import chatApp from "../../Assets/Projects/ChatApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "400px" }}>
          {/* Car marketPlace */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car MarketPlace Platform"
              description="Car Marketplace is a modern and powerful web application for browsing and managing car listings with user authentication, test drive bookings, saved cars, and a fully functional EMI Loan Calculator."
              ghLink="https://github.com/VishalRaj20/CarApp.git"
              demoLink="https://car-app-taupe.vercel.app/" // Add live demo link if available
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat App"
              description="This is a real-time chat application where users can connect, chat in private or groups, and enjoy a modern messaging experience. The project focuses on building a scalable and intuitive communication platform using the latest web technologies."
              ghLink="https://github.com/VishalRaj20/ChatApp-yt.git"
              demoLink="chatapp-yt-wmo5.onrender.com/" // Add live demo link if available
            />
          </Col>
          {/* BookStore App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="BookStore App"
              description="An online bookstore platform with 1000+ books across various genres. Built with React.js, Node.js, and Express.js. Features include book search, category-based filtering, and user authentication."
              ghLink="https://github.com/VishalRaj20/BookStore"
              demoLink="https://bookstoreapp-frontend-6drb.onrender.com/" // Add live demo link if available
            />
          </Col>
          {/* Amazon Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="A fully functional e-commerce platform inspired by Amazon, built using React.js and Firebase. Features include user authentication, product listing, cart functionality, and real-time database updates."
              ghLink="https://github.com/VishalRaj20/Amazon-clone"
            // demoLink="" // Add live demo link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
