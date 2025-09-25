import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin, Code, Award, Users, Calendar, ChevronDown, Menu, X, Linkedin } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingTexts = ['Full Stack Developer', 'Problem Solver', 'MERN Expert', 'Competitive Programmer'];

    // Mouse tracking for cursor glow effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Typing animation
    useEffect(() => {
        const currentText = typingTexts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
                if (displayedText === currentText) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
                if (displayedText === '') {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % typingTexts.length);
                }
            }
        }, isDeleting ? 100 : 200);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex]);

    const projects = [
        {
            title: "Taskly - Freelance Marketplace",
            description: "Full-stack freelance marketplace enabling seamless task posting, bidding, and contract lifecycle management with JWT authentication and role-based access control.",
            tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
            github: "https://github.com/yourusername/taskly",
            live: "https://taskly-demo.com",
            highlights: ["20% improved response time", "Secure JWT authentication", "Role-based access control"]
        },
        {
            title: "Nutricare - Donation Platform",
            description: "MERN-based donation platform with city/category-based filtering, optimized image handling with Cloudinary, and efficient donor-receiver matching.",
            tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Express.js"],
            github: "https://github.com/yourusername/nutricare",
            live: null,
            highlights: ["33% improved matching efficiency", "Cloudinary integration", "City-based filtering"]
        },
        {
            title: "Pathfinding Visualizer",
            description: "Interactive React application for visualizing BFS/DFS algorithms with optimized rendering logic for large grids and smooth user interactions.",
            tech: ["React", "JavaScript", "CSS", "Algorithms"],
            github: "https://github.com/yourusername/pathfinding",
            live: "https://pathfinding-viz.com",
            highlights: ["Algorithm visualization", "Optimized rendering", "40% faster learning"]
        }
    ];

    const skills = {
        "Languages": ["JavaScript", "C++", "C", "Python", "SQL"],
        "Frontend": ["React", "HTML", "CSS", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "REST APIs"],
        "Database & Tools": ["MongoDB", "Git", "GitHub", "Postman"]
    };

    const achievements = [
        { icon: Award, value: "1625", label: "LeetCode Rating", desc: "Top 20% Globally" },
        { icon: Code, value: "600+", label: "Problems Solved", desc: "Multiple Platforms" },
        { icon: Users, value: "30+", label: "Team Leadership", desc: "Event Management" },
        { icon: Calendar, value: "7.6", label: "CGPA", desc: "B.Tech ECE" }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
                <div
                    className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl transition-all duration-300 ease-out"
                    style={{
                        left: mousePosition.x - 160,
                        top: mousePosition.y - 160
                    }}
                ></div>
                <div className="absolute top-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-bounce"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            MS
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === item.toLowerCase()
                                            ? 'text-purple-400 bg-purple-500/10'
                                            : 'text-gray-300 hover:text-purple-400'
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-purple-400"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 space-y-2 bg-gray-800/95 backdrop-blur-lg rounded-lg mt-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-4 z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Manas Sharma
                    </h1>
                    <div className="text-xl md:text-3xl text-gray-300 mb-8 h-12">
                        <span>I'm a </span>
                        <span className="font-semibold text-purple-400">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        Crafting digital solutions with modern web technologies and competitive programming excellence.
                        B.Tech ECE student at JIIT Noida with a passion for full-stack development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-20 px-4 z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I'm a passionate B.Tech student in Electronics and Communication Engineering at JIIT Noida,
                                with a strong foundation in full-stack development and competitive programming.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                My journey in software development is driven by curiosity and the desire to create impactful
                                solutions. I specialize in the MERN stack and have experience building scalable applications.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Beyond coding, I'm actively involved in organizing technical events like Crescendo and IEEE,
                                fostering collaborative environments that drive innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
                                >
                                    <achievement.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-blue-400 mb-1">{achievement.value}</div>
                                    <div className="text-sm font-semibold text-gray-300 mb-1">{achievement.label}</div>
                                    <div className="text-xs text-gray-500">{achievement.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative py-20 px-4 z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Skills & Technologies
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div
                                key={category}
                                className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 group-hover:text-blue-400 transition-colors">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm bg-purple-600/20 text-gray-300 rounded-full border border-purple-500/30 hover:border-purple-500/60 hover:scale-105 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-20 px-4 z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-4 hover:shadow-xl hover:shadow-purple-500/10 relative"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <h3 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-md border border-blue-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-4 space-y-1">
                                    {project.highlights.map((highlight, i) => (
                                        <div key={i} className="text-sm text-gray-400">
                                            • {highlight}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        <Github size={16} />
                                        <span className="text-sm">Code</span>
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            <span className="text-sm">Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-20 px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Ready to bring ideas to life? Let's discuss how we can work together!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <a
                            href="mailto:sharmamanas0702@gmail.com"
                            className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-gray-300 group-hover:text-white transition-colors break-all">
                                sharmamanas0702@gmail.com
                            </div>
                        </a>

                        <a
                            href="tel:7489114332"
                            className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-gray-300 group-hover:text-white transition-colors">
                                +91 7489114332
                            </div>
                        </a>

                        <div className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
                            <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-gray-300 group-hover:text-white transition-colors">
                                Noida, India
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/manass3107"
                            className="p-4 bg-gray-800/50 rounded-full text-purple-400 hover:text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/manas-sharma31/"
                            className="p-4 bg-gray-800/50 rounded-full text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin size={24} />
                        </a>
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;