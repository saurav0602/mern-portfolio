import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const PROJECTS = [
    {
      title: "Chat Application",
      image: project1,
      description:
        "A fully functional chat application let users to communicate in real-time with user authentication",
      technologies: ["React", "Socket.io", "Express.js", "MongoDB"],
    },
    {
      title: "Authentication App",
      image: project2,
      description:"Authentication app which will provide users with a way to sign up, sign in, and manage their profiles. Firebase will handle the backend authentication",
      technologies: ["React", "Tailwind", "Firebase",],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "Javascript", "Email.js"],
    },
    {
      title: "Calculator App",
      image: project4,
      description:
        "A Calculator App which provide basic arithmetic functionalities, such as addition, subtraction, multiplication, and division. .",
      technologies: [ "React", "tailwind"],
    },
  ];