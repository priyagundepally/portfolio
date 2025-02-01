import { useState } from 'react';
import { Github, Linkedin, Mail, X, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const githubProjects = [
    { title: "EmployeeBonusAnalytics", link: "https://github.com/priyagundepally/EmployeeBonusAnalytics" },
    { title: "SQL-Financial-Transaction-Analysis", link: "https://github.com/priyagundepally/SQL-Financial-Transactions-Analysis" },
    { title: "Tableau-Women-in-Workforce-Analysis-Dashboard", link: "https://github.com/priyagundepally/Tableau-Women-in-Workforce-Analysis-Dashboard" },
    { title: "BI-Olympic-Games-Dashboard", link: "https://github.com/priyagundepally/BI-Olympic-Games-Dashboard" },
    { title: "CaseStudy-Statistics-Optimization-Simulation", link: "https://github.com/priyagundepally/CaseStudy-Statistics-Optimization-Simulation" },
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
                      <li>Ingested and transformed data using Apache NiFi and API calls into Databricks, managing delta  tables and performing data cleaning/manipulation with PySpark across formats like JSON, Parquet, and CSV. </li>
                      <li>Automated daily data workflows in Databricks with real-time email triggers, optimized clusters,  scheduled jobs, migrated NiFi processes, and integrated with Databricks for historical data ingestion. </li>
                      <li>Resolved production issues with clients, transformed raw data into actionable insights, managed  Linux-to-S3 workflows for UAT Databricks, and created comprehensive documentation and run books for deployments.</li>
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
                      <li>Designed real-time data pipelines using Databricks and SQL for supply chain optimization, reducing  costs by 15%, and automated ETL workflows with Python for accurate and efficient data preparation. </li>
                      <li>Conducted predictive modeling with PySpark to improve inventory management by 30%, developed machine learning pipelines for marketing strategies, and visualized insights in Tableau  dashboards. </li>
                      <li>Migrated data reporting systems to Snowflake, authored Tableau newsletters on supply chain metrics, and delivered training workshops to cross-departmental teams on leveraging advanced data insights. </li>
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
                      <li>Built and deployed ETL workflows using Apache NiFi, automated SQL-driven reporting processes to reduce errors by 30%, and implemented Apache Airflow for workflow management and timely data delivery. </li>
                      <li>Developed KPI dashboards for marketing and sales, created Python scripts for data preprocessing, and supported real-time reporting needs for client projects. </li>
                      <li>Optimized large-scale data handling with Hive, enhancing query performance and response times. </li>
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
                      <li>Developed Python scripts to automate customer data collection and preprocessing, reducing manual efforts by 40%, and migrated data from legacy systems to Hive and NoSQL databases for modern ETL workflows. </li>
                      <li>Designed SQL-driven models to visualize customer engagement metrics, assisted in implementing data governance frameworks, and provided training to improve analytics tool adoption among nontechnical teams. </li>
                      <li>Built proof-of-concept ETL workflows for experimental analytics, reducing project turnaround times by 20%. </li>
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
                        <li>Migrated legacy Cloudera workflows to Apache NiFi, integrating with Databricks for efficient historical data ingestion, and designed ETL workflows to automate daily data ingestion and transformation. </li>
                        <li>Optimized Delta Lake tables with Databricks SQL and PySpark, automated real-time ticker updates with NiFi and email triggers, and managed Hive databases for complex data transformations. </li>
                        <li>Monitored Databricks cluster performance, resolved production issues with cross-functional teams, and documented workflows for seamless UAT deployments. </li>
                        <li>Technologies used: PySpark, Databricks, SQL, Apache NiFi, Linux (Putty), Hue (Hive). </li>
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
                        <li>Designed real-time data pipelines with Databricks and SQL, achieving a 15% reduction in supply chain costs, and automated ETL workflows with Python to improve data accuracy and operational efficiency. </li>
                        <li>Conducted predictive modeling using PySpark to enhance inventory management by 30%, developed machine learning pipelines for marketing optimization, and visualized insights in Tableau dashboards. </li>
                        <li>Migrated legacy reporting systems to Snowflake, authored Tableau newsletters on supply chain metrics, and delivered training workshops to empower teams with advanced data insights. </li>
                        <li>Technologies used: Python, SQL, Databricks, Apache NiFi, Snowflake, Linux (Putty). </li>
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
                        <li>Analyzed supply chain processes using Python for automation of data extraction and transformation, identifying inefficiencies and uncovering cost-saving opportunities. </li>
                        <li>Designed Tableau dashboards to visualize supply chain metrics, implemented Databricks for advanced analytics, and developed ETL pipelines to integrate data sources, reducing supply chain expenses by 20%. </li>
                        <li>Utilized Apache Airflow to coordinate data workflows, leveraged Snowflake for managing large-scale datasets, and enhanced decision-making with real-time analytics and Tableau visualizations. </li>
                        <li>Technologies used: Tableau, Python, Databricks, Apache Airflow, Supply Chain Analysis, Cost Optimization. </li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-normal tracking-wide mb-2">Women in the Workforce Analysis</h3>
                          <p className="text-white/60">University of Dayton</p>
                        </div>
                        <p className="text-white/60">March 2023 - May 2023</p>
                      </div>
                      <ul className="list-disc text-white/80">
                        <li>Designed Tableau dashboards to analyze workforce participation trends of women across five countries, visualizing employment structures and disparities using time-series data (2002–2011). </li>
                        <li>Automated data extraction and transformation workflows with Python, integrated datasets with SQL, and developed interactive Tableau dashboards to compare Women Business and Law Index scores and gender equality policies. </li>
                        <li>Conducted an in-depth analysis of economic opportunities for women, presenting insights into employment categories and identifying progress and challenges in vulnerable sectors. </li>
                        <li>Technologies used: Tableau, Python, SQL, Data Visualization, Gender Analytics. </li>
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
