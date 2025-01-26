import React, { useState } from 'react';
import { Github, Linkedin, Mail, X, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool using stable diffusion',
      image: 'https://images.unsplash.com/photo-1684163800538-9c9d476ccd06?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'PyTorch', 'React', 'FastAPI'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000")'
    }}>
      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-black/40">
        <div className="w-full max-w-4xl mx-4">
          {/* Central Banner */}
          <div className="bg-black/35 backdrop-blur-sm p-12 rounded-lg text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-center tracking-[0.25em] uppercase">
              John Doe
            </h1>
            <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
            <p className="text-lg md:text-xl mb-12 text-center tracking-[0.15em] uppercase font-light">
              Full Stack Developer & UI/UX Designer
            </p>
            
            {/* Navigation Options */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {['About', 'Experience', 'Education', 'Projects', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className="text-white/90 hover-underline tracking-[0.15em] uppercase text-sm font-light"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mt-12">
              <a href="https://github.com" className="text-white/80 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Sections */}
      {activeSection && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-black/65 backdrop-blur-sm rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto text-white">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-black/65 py-4 z-10">
                <h2 className="text-2xl font-light tracking-[0.15em] uppercase">{activeSection}</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content sections with updated styling */}
              <div className="font-light tracking-wide">
                {/* About Section */}
                {activeSection === 'about' && (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                        alt="Profile"
                        className="rounded-lg shadow-lg sticky top-24"
                      />
                      <div className="space-y-8">
                        <p className="text-lg text-white/80 leading-relaxed">
                          I'm a passionate Full Stack Developer with 5+ years of experience in building
                          web applications. I specialize in React, Node.js, and modern web technologies.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <h3 className="font-normal mb-4 tracking-[0.1em] uppercase">Frontend</h3>
                            <ul className="space-y-2 text-white/80">
                              <li>React</li>
                              <li>TypeScript</li>
                              <li>Tailwind CSS</li>
                              <li>Next.js</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-normal mb-4 tracking-[0.1em] uppercase">Backend</h3>
                            <ul className="space-y-2 text-white/80">
                              <li>Node.js</li>
                              <li>Python</li>
                              <li>PostgreSQL</li>
                              <li>AWS</li>
                            </ul>
                          </div>
                        </div>
                        {/* Additional content to demonstrate scrolling */}
                        <div className="space-y-6">
                          <h3 className="font-normal tracking-[0.1em] uppercase">Additional Skills</h3>
                          <p className="text-white/80 leading-relaxed">
                            Beyond core development skills, I bring expertise in:
                          </p>
                          <ul className="list-disc list-inside text-white/80 space-y-2">
                            <li>CI/CD Pipeline Implementation</li>
                            <li>Cloud Architecture Design</li>
                            <li>Performance Optimization</li>
                            <li>Security Best Practices</li>
                            <li>Team Leadership</li>
                            <li>Agile Methodologies</li>
                          </ul>
                          <h3 className="font-normal tracking-[0.1em] uppercase mt-8">Certifications</h3>
                          <ul className="list-disc list-inside text-white/80 space-y-2">
                            <li>AWS Certified Solutions Architect</li>
                            <li>Google Cloud Professional Developer</li>
                            <li>MongoDB Certified Developer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Experience Section */}
                {activeSection === 'experience' && (
                  <div className="space-y-6">
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Senior Full Stack Developer</h3>
                          <p className="text-white/60">Tech Corp Inc.</p>
                        </div>
                        <p className="text-white/60">2020 - Present</p>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-2">
                        <li>Led development of microservices architecture</li>
                        <li>Improved application performance by 40%</li>
                        <li>Mentored junior developers</li>
                        <li>Implemented CI/CD pipelines using GitHub Actions</li>
                        <li>Optimized database queries resulting in 60% faster response times</li>
                        <li>Introduced automated testing practices increasing code coverage to 85%</li>
                        <li>Coordinated with product managers to define technical requirements</li>
                        <li>Conducted code reviews and maintained coding standards</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Frontend Developer</h3>
                          <p className="text-white/60">Web Solutions Ltd</p>
                        </div>
                        <p className="text-white/60">2018 - 2020</p>
                      </div>
                      <ul className="list-disc list-inside text-white/80 space-y-2">
                        <li>Developed responsive web applications</li>
                        <li>Implemented CI/CD pipelines</li>
                        <li>Reduced load times by 60%</li>
                        <li>Built reusable component library used across multiple projects</li>
                        <li>Integrated third-party APIs and services</li>
                        <li>Collaborated with UX designers to implement pixel-perfect designs</li>
                        <li>Participated in daily stand-ups and sprint planning meetings</li>
                        <li>Mentored junior developers in React best practices</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Education Section */}
                {activeSection === 'education' && (
                  <div className="space-y-6">
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Master of Computer Science</h3>
                          <p className="text-white/60">Stanford University</p>
                        </div>
                        <p className="text-white/60">2016 - 2018</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-white/80">
                          Specialized in Artificial Intelligence and Machine Learning
                        </p>
                        <h4 className="font-normal tracking-wide">Key Courses:</h4>
                        <ul className="list-disc list-inside text-white/80 space-y-2">
                          <li>Advanced Algorithms and Data Structures</li>
                          <li>Machine Learning and Neural Networks</li>
                          <li>Distributed Systems</li>
                          <li>Cloud Computing Architecture</li>
                          <li>Advanced Database Systems</li>
                        </ul>
                        <h4 className="font-normal tracking-wide mt-6">Research:</h4>
                        <ul className="list-disc list-inside text-white/80 space-y-2">
                          <li>Published paper on efficient distributed computing algorithms</li>
                          <li>Contributed to university's AI research lab</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Bachelor of Engineering</h3>
                          <p className="text-white/60">MIT</p>
                        </div>
                        <p className="text-white/60">2012 - 2016</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-white/80">
                          Major in Computer Science and Engineering
                        </p>
                        <h4 className="font-normal tracking-wide">Achievements:</h4>
                        <ul className="list-disc list-inside text-white/80 space-y-2">
                          <li>Graduated with Honors (GPA: 3.9/4.0)</li>
                          <li>President of Computer Science Club</li>
                          <li>Won first place in Annual Hackathon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Projects Section */}
                {activeSection === 'projects' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                      <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-8">
                          <h3 className="text-xl font-normal tracking-wide mb-3">{project.title}</h3>
                          <p className="text-white/80 mb-6">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link}
                            className="inline-flex items-center text-white/80 hover:text-white"
                          >
                            View Project <ExternalLink size={16} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Contact Section */}
                {activeSection === 'contact' && (
                  <div className="text-center">
                    <p className="text-lg text-white/80 mb-12 leading-relaxed">
                      I'm always open to new opportunities and interesting projects.
                      Feel free to reach out!
                    </p>
                    <div className="flex justify-center space-x-8">
                      <a
                        href="mailto:contact@example.com"
                        className="flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Mail size={20} className="mr-3" />
                        Email Me
                      </a>
                      <a
                        href="https://linkedin.com"
                        className="flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Linkedin size={20} className="mr-3" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;