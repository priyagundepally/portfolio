import { useState } from 'react';
import { Github, Linkedin, Mail, X, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const githubProjects = [
    { title: "EmployeeBonusAnalytics", link: "https://github.com/priyagundepally/EmployeeBonusAnalytics" },
    { title: "SQL-Financial-Transaction-Analysis", link: "https://github.com/priyagundepally/SQL-Financial-Transactions-Analysis" },
    { title: "Tableau-Women-in-Workforce-Analysis-Dashboard", link: "https://github.com/priyagundepally/Tableau-Women-in-Workforce-Analysis-Dashboard" },
    { title: "BI-Olympic-Games-Dashboard", link: "https://github.com/priyagundepally/BI-Olympic-Games-Dashboard" },
    { title: "Case Study: Swirltubs After Market Product Inventory and Service Cost Reduction", link: "https://github.com/priyagundepally/CaseStudy-Statistics-Optimization-Simulation" },
    { title: "Tableau Dashboards", link: "https://github.com/priyagundepally/Tableau-Dashboards" },
    { title: "Capstone-Analysis-Sizing-Scheduling-AnamolyDetection", link: "https://github.com/priyagundepally/Capstone-Analysis-Sizing-Scheduling-AnamolyDetection" }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000")'
    }}>
      <div className="min-h-screen flex items-center justify-center bg-black/40">
        <div className="w-full max-w-4xl mx-4">
          <div className="bg-black/35 backdrop-blur-sm p-12 rounded-lg text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-center tracking-[0.25em] uppercase">
               Priya Gundepally
            </h1>
            <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
            <p className="text-lg md:text-xl mb-12 text-center tracking-[0.15em] uppercase font-light">
              Data Engineer & Analytics
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {["About", "Experience", "Education", "Projects", "GitHub Projects", "Contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section.toLowerCase().replace(' ', '-'))}
                  className="text-white/90 hover-underline tracking-[0.15em] uppercase text-sm font-light"
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex justify-center space-x-8 mt-12">
              <a href="https://github.com/priyagundepally?tab=repositories" className="text-white/80 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/priya-gundepally-42a1a581/" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:priyagundepally95@gmail.com" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {activeSection && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-black/90 backdrop-blur-sm rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto text-white">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-black/65 py-4 z-10">
                <h2 className="text-2xl font-light tracking-[0.15em] uppercase">{activeSection.replace('-', ' ')}</h2>
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
                    {/* Image Section */}
                    <img
                      src={`${import.meta.env.BASE_URL}images/IMG_7128.jpeg`}
                      alt="Profile"
                      className="rounded-lg shadow-lg md:sticky md:top-24 w-full max-w-sm"
                    />
                
                    {/* Text Section */}
                    <div className="space-y-8">
                      <p className="text-lg text-white/80 leading-relaxed">
                        I'm a passionate Data Engineer with 5.6 years of experience specializing in designing, implementing, and optimizing data solutions using tools like Apache NiFi, Databricks, PySpark, and Hive. Proficient in SQL, Python, and Tableau, with expertise in developing robust ETL workflows, real-time data ingestion, and user-friendly visualizations. Skilled in managing Databricks clusters, automating workflows, and leveraging statistical techniques for actionable insights, while ensuring scalable and efficient data processes.
                      </p>
                      <p className="text-lg text-white/80 leading-relaxed">
                        Beyond data, I enjoy cooking different cuisines, exploring scenic in-state locations, and freestyle dancing. These interests fuel my creativity, problem-solving mindset, and adaptability—key skills I bring into my work as a data engineer.
                      </p>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-normal mb-4 tracking-[0.1em] uppercase">Data Engineer</h3>
                          <ul className="space-y-2 text-white/80">
                            <li>Apache Nifi</li>
                            <li>Hive</li>
                            <li>Pyspark</li>
                            <li>SQL</li>
                            <li>Databricks</li>
                            <li>Azure</li>
                            <li>AWS</li>
                            <li>Putty (Linux)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-normal mb-4 tracking-[0.1em] uppercase">Data Analytics</h3>
                          <ul className="space-y-2 text-white/80">
                            <li>Tableau</li>
                            <li>Power BI</li>
                            <li>Python</li>
                            <li>Pandas</li>
                            <li>NumPy</li>
                            <li>MS Excel</li>
                            <li>Statistical Analysis</li>
                            <li>ML Techniques</li>
                          </ul>
                        </div>
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
                        <h3 className="text-xl font-normal tracking-wide mb-2">Data Engineer</h3>
                        <p className="text-white/60">State Street</p>
                      </div>
                      <p className="text-white/60">June 2024 - Dec 2024</p>
                    </div>
                    <ul className="list-disc text-white/80">
                      <li>Developed and maintained ETL/ELT data pipelines using Apache NiFi, Python, SQL, and Databricks, transforming structured and unstructured
                      data (JSON, Parquet, CSV) for analytics. </li>
                      <li>Automated data workflows by scheduling jobs, optimizing cluster performance, and integrating API-based data ingestion, improving
                      processing efficiency. </li>
                      <li>Managed cloud-based data systems using Linux, S3 storage, and query optimization techniques, while troubleshooting production issues
                      and improving data models
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-8 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-normal tracking-wide mb-2">Senior Analyst</h3>
                        <p className="text-white/60">Google Operations</p>
                      </div>
                      <p className="text-white/60">Aug 2019 - July 2022</p>
                    </div>
                    <ul className="list-disc text-white/80">
                      <li>Built and optimized real-time data pipelines using Databricks, SQL, and Python, automating ETL workflows to improve data accuracy and
                      reduce supply chain costs by 15%. </li>
                      <li>Applied predictive modeling with PySpark to enhance inventory management by 30%, developed machine learning pipelines, and created
                      Tableau dashboards for data visualization.</li>
                      <li>Migrated reporting systems to Snowflake, improved query performance, and conducted training workshops to help teams use data-driven
                      insights for decision-making.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-8 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-normal tracking-wide mb-2">Senior Process Executive</h3>
                        <p className="text-white/60">Cognizant</p>
                      </div>
                      <p className="text-white/60">July 2018 - Aug 2019</p>
                    </div>
                    <ul className="list-disc text-white/80">
                      <li>Developed and deployed ETL workflows using Apache NiFi, automated SQL-based reporting, and improved data accuracy by 30% through error reduction. </li>
                      <li>Created KPI dashboards for marketing and sales, developed Python scripts for data preprocessing, and supported real-time reporting for
                      client projects. </li>
                      <li>Optimized large-scale data processing using Hive, improving query performance and reducing response times for complex data queries.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-8 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-normal tracking-wide mb-2">Technical Associate</h3>
                        <p className="text-white/60">Tech Mahindra</p>
                      </div>
                      <p className="text-white/60">July 2017 - June 2018</p>
                    </div>
                    <ul className="list-disc text-white/80">
                      <li>Automated customer data collection and preprocessing using Python, reducing manual work by 40%, and migrated legacy data to Hive and
                      NoSQL databases for modern ETL workflows. </li>
                      <li>• Designed SQL-driven models for customer engagement insights, supported data governance implementation, and trained teams on
                      analytics tools to improve adoption. </li>
                      <li>Developed proof-of-concept ETL workflows for experimental analytics, optimizing data processing and cutting project turnaround time by
                      20%. </li>
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
                        <h3 className="text-xl font-normal tracking-wide mb-2">Master of Business Analytics</h3>
                        <p className="text-white/60">University of Dayton</p>
                      </div>
                      <p className="text-white/60">Sept 2022 - June 2024</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-white/80">
                        GPA: 3.48/4
                      </p>
                      <h4 className="font-normal tracking-wide">Key Courses:</h4>
                      <ul className="list-disc text-white/80 ">
                        <li>Problem Solving Methods/Tools</li>
                        <li>Case Studies in Anlytics</li>
                        <li>Tableau & Business Intelligence</li>
                        <li>Advanced Business Analytics</li>
                        <li>Data Management for Analytics</li>
                        <li>Intro to Machine Learning</li>
                        <li>Capstone Project in Analytics</li>
                      </ul>
                      <h4 className="font-normal tracking-wide mt-6">Research:</h4>
                      <ul className="list-disc text-white/80">
                        <li>Published paper on <strong>"Operational Analytics for the American Birkebeiner Ski Foundation"</strong>, focusing on race logistics optimization and integrity assurance. </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-normal tracking-wide mb-2">Bachelor of Engineering</h3>
                        <p className="text-white/60">JNTUH</p>
                      </div>
                      <p className="text-white/60">2013 - 2017</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-white/80">
                        Major in Computer Science and Engineering
                      </p>
                      <h4 className="font-normal tracking-wide">Achievement:</h4>
                      <ul className="list-disc text-white/80">
                        <li>Being passionate about nature and sustainable living, participated and stood as a runner up at a national competition funded by Government of India to promote sustainable solutions for lake rejuvenation.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

                {/* Projects Section */}
                {activeSection === 'projects' && (
                  <div className="space-y-6">
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Cloud Migration</h3>
                          <p className="text-white/60">State Street</p>
                        </div>
                        <p className="text-white/60">June 2024 - Dec 2024</p>
                      </div>
                      <ul className="list-disc text-white/80">
                        <li>• Migrated legacy Cloudera workflows to Apache NiFi, integrated with Databricks, and designed ETL workflows for automated data ingestion
                        and transformation. </li>
                        <li>Optimized Delta Lake tables using Databricks SQL and PySpark, automated real-time ticker updates, and managed Hive databases for
                        complex data processing. </li>
                        <li>Monitored Databricks cluster performance, troubleshot production issues, and documented workflows for seamless UAT deployments. </li>
                        <li>Technologies: PySpark, Databricks, SQL, Apache NiFi, Hive, Linux
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Supply Chain Optimization</h3>
                          <p className="text-white/60">Google Operations</p>
                        </div>
                        <p className="text-white/60">Aug 2019 - July 2022</p>
                      </div>
                      <ul className="list-disc text-white/80">
                        <li>Built real-time data pipelines using Databricks and SQL, reducing supply chain costs by 15%, and automated ETL workflows with Python to
                        improve data accuracy. </li>
                        <li>Applied predictive modeling with PySpark to enhance inventory management by 30%, developed machine learning pipelines, and created
                        Tableau dashboards for insights. </li>
                        <li>Migrated legacy reporting systems to Snowflake, improved query performance, and conducted training workshops to enhance data-driven decision-making. </li>
                        <li>Technologies: Python, SQL, Databricks, Apache NiFi, Snowflake, Tableau, Linux </li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Business Optimization for Manufacturing Firm</h3>
                          <p className="text-white/60">Cognizant</p>
                        </div>
                        <p className="text-white/60">Aug 2018 - Aug 2019</p>
                      </div>
                      <ul className="list-disc text-white/80">
                        <li>Automated data extraction and transformation using Python, identifying inefficiencies and uncovering cost-saving opportunities in supply
                        chain processes. </li>
                        <li>Designed Tableau dashboards for supply chain metrics, implemented Databricks for analytics, and built ETL pipelines, reducing supply chain
                        expenses by 20%. </li>
                        <li>Managed large-scale datasets using Snowflake, automated data workflows with Apache Airflow, and enabled real-time analytics for better
                        decision-making. </li>
                        <li>Technologies: Python, Databricks, Apache Airflow, Snowflake, Tableau </li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Swirltubs After-Market Product Inventory & Service Cost Reduction</h3>
                          <p className="text-white/60">University of Dayton</p>
                        </div>
                        <p className="text-white/60">April 2023 - June 2023</p>
                      </div>
                      <ul className="list-disc text-white/80">
                        <li>Developed a stocking recommendation model by analyzing parts data and demand patterns, using 50 replications to optimize inventory
                        based on Net Benefit per Cubic Foot. </li>
                        <li>Applied predictive analytics, data mining, and statistical modeling to identify high-demand parts, reducing unnecessary inventory and
                        improving service efficiency. </li>
                        <li>Automated data analysis and reporting, improving decision-making for aftermarket logistics and enhancing customer service strategies. </li>
                        <li>Technologies: Machine Learning, Predictive Analytics, Data Mining, Statistics, Data Interpretation, Reporting </li>
                      </ul>
                    </div>
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
                      href="mailto:priyagundepally95@gmail.com"
                      className="flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Mail size={20} className="mr-3" />
                      priyagundepally95@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/priya-gundepally-42a1a581/"
                      className="flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Linkedin size={20} className="mr-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}

                {activeSection === 'github-projects' && (
                  <div className="space-y-6">
                    {githubProjects.map((project, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-lg flex justify-between items-center">
                        <span className="text-lg text-white/80">{project.title}</span>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    ))}
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
