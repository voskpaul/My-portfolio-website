import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const image1 = "/1.png";
const image2 = "/2.png";
const image3 = "/3.png";
const image4 = "/4.png";
const image5 = "/5.png";

const ScrollReveal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

const projectsData = [
    {
        image: image1,
        title: "Real Time Chat Application",
        description: "Chateer is a real-time chat application powered by WebSockets (Socket.io), ensuring low-latency messaging and smooth synchronization across devices. With secure authentication, live updates, and a responsive Glassmorphism UI, it provides an immersive chat experience optimized for speed and interactivity!",
        technologies: [
            "React.js", "React", "Vue.js", 
            "Tailwind CSS", "Framer Motion", 
            "Node.js", "Socket.io", "WebSockets", 
            "MongoDB"
        ],
    },
    {
        image: image2,
        title: "Airbnb Clone",
        description: "A full-featured Airbnb clone that allows users to list, book, and review properties worldwide. Includes an intuitive UI, dynamic search filters, real-time booking updates, and secure payments with Stripe. Optimized for scalability with cloud storage and authentication.",
        technologies: [
            "Next.js", "React.js", "Tailwind CSS", 
            "Firebase", "Node.js", "MongoDB", 
            "Stripe API", "Cloudinary", "Auth.js"
        ],
    },
    {
        image: image3,
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform with an intuitive shopping experience, secure payments, order tracking, and an admin dashboard. Built with performance optimization, responsive UI, and real-time order management.",
        technologies: [
            "React.js", "Next.js", "Redux Toolkit", 
            "Tailwind CSS", "Node.js", "Express.js", 
            "MongoDB", "Stripe API", "Cloudinary"
        ],
    },
    {
        image: image4,
        title: "Unix Shell Scripting",
        description: "A collection of powerful Unix shell scripts for automation, system monitoring, file management, and task scheduling. Designed to enhance productivity and streamline system operations with robust command-line tools.",
        technologies: [
            "Bash", "Zsh", "Linux", 
            "Cron Jobs", "Python", "Sed & Awk", 
            "Grep", "Git"
        ],
    },
    {
        image: image5,
        title: "Algorithm Sorting Visualizer",
        description: "An interactive sorting algorithm visualizer that demonstrates various sorting techniques like Bubble Sort, Merge Sort, Quick Sort, and Heap Sort. Helps users understand sorting efficiency with dynamic animations.",
        technologies: [
            "React.js", "D3.js", "Canvas API", 
            "Framer Motion", "Tailwind CSS", "TypeScript"
        ],
    }
];

const ProjectCard = ({ project }) => {
    return (
        <ScrollReveal>
            <motion.div 
                className="flex flex-col items-center gap-6 md:flex-row md:gap-12 max-w-[900px] w-full p-6 bg-gray-900 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full max-w-[300px] rounded-xl transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                />

                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                        {project.technologies.map((tech, index) => (
                            <motion.span 
                                key={index} 
                                className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </ScrollReveal>
    );
};

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center justify-center gap-12 py-16 px-4 md:px-14 min-h-screen w-full">
            <h1 className="text-4xl font-light text-white md:text-5xl">My Projects</h1>
            <div className="flex flex-col items-center gap-10 w-full max-w-[1000px]">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/254115346990" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
                <FaWhatsapp size={30} />
            </a>
        </div>
    );
};

export default Projects;
