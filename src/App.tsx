import { FC, useMemo, useEffect } from "react";
            import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
            import Header from "./common/Header/Header.tsx";
            import Home from "./pages/Home/Home.tsx";
            import "./App.css";
            import About from "./pages/About/About.tsx";
            import { HomeData } from "./common/types/HomeData.tsx";
            import { AboutData } from "./common/types/AboutData.tsx";
            import Contact from "./pages/Contact/Contact.tsx";
            import ContactData from "./common/types/ContactData.tsx";
            import Projects from "./pages/Projects/Projects.tsx";
            import NotFound from "./NotFound.tsx";
            import Project from "./pages/Project/Project.tsx";
                        
            const App: FC = () => {
            
            useEffect(() => {
                const userTheme = window.localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.body.classList.add(userTheme || systemTheme)
                localStorage.setItem('theme', userTheme || systemTheme)
            }, []);
            
              const ProjectOr404 = () => {
                const { slug } = useParams();
                  if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
                      return <Project userData={userData} />;
                  } else {
                      return <NotFound />;
                  }
              };
                        
              const userData = useMemo(() => ({
                name: "Samuel Dervishi",
                email: "dervishisamuel360@gmail.com",
                phone: "",
                company: "Tegeria",
                location: "Tirana, Albania",
                about: "Hello! 👋 I'm Samuel a backend developer with a knack for problem-solving. Currently immersed in the world of Java development. Outside of coding, you'll find me on the basketball court and exploring the art of storytelling in cinema.",
                skills: ["Java","C#","C++","AWS","JavaScript","React","NodeJs","ASP.NET","Oracle DB","MongoDB","TypeScript","Express.js"],
                projects: [{"name":"Career Crush Back end","description":"","languages":["JavaScript","AWS","MongoDB","GitHub Actions"],"updatedAt":"October 2023","image":"https://images.codefoli.com/320-projects-image-428","id":"428","slug":"career-crush-back-end"},{"name":"Task App","description":"Welcome to the To-Do List App! ","languages":["C#","SQL Server","ASP.NET"],"updatedAt":"2024-02-09T09:49:02.300Z","image":"https://images.codefoli.com/320-projects-image-430","id":"430","slug":"task-app"},{"name":"Quotes Web Application","description":"Daily motivation quotes","languages":["JavaScript","ReactJs","Netlify"],"updatedAt":"2024-02-09T10:43:45.534Z","image":"https://images.codefoli.com/320-projects-image-431","id":"431","slug":"quotes-web-application"}], 
                work: [{"id":238,"company":"Tegeria","position":"Back end Developer","startDate":"December 2023","endDate":"Present","description":"Currently focused on refining and optimizing Java code to enhance overall system efficiency.","orderId":1,"image":"https://images.codefoli.com/320-job-image-upload-238"},{"id":239,"company":"Taleas","position":"Software Developer Intern","startDate":"July 2023 ","endDate":"October 2023","description":"Completed software developer internship with JavaScript, Node.js, React, AWS, and MongoDB.","orderId":2,"image":"https://images.codefoli.com/320-job-image-upload-239"},{"id":240,"company":"Coders SHPK","position":"Software Developer Intern","startDate":"April 2023","endDate":"May 2023","description":"Completed internship utilizing Next.js, TypeORM, SQL Server, and JWT for full-stack development.","orderId":3,"image":"https://images.codefoli.com/320-job-image-upload-240"},{"id":241,"company":"Yellow Pages Canda","position":" Sales Representative","startDate":"June 2022","endDate":"September 2022","description":"Experienced Sales Representative proficient in marketing and Google Ads.","orderId":4,"image":"https://images.codefoli.com/320-job-image-upload-241"}],
                role: "USER",
                profession: "Back end Developer",
                services: ["WEB_DEVELOPMENT"],
                slugs: [{"slug":"career-crush-back-end","header":"Career Crush Back end","description":"RESTful API with controllers for handling various requests, user authentication using AWS Cognito User Pool, github checks for continuous integration, automatic deployment from GitHub using AWS CDK, content moderation for user-generated content, image checking using AWS Rekognition for identifying inappropriate images.","about":"This backend is built using AWS CDK to manage infrastructure components.","image":"https://images.codefoli.com/320-project-content-428","overview":"Overview","platforms":"Web, Android, iOS","link":"https://github.com/echomaverick/taleas-project-backend"},{"slug":"task-app","header":"To Do List Application","description":"Create, read, update, and delete tasks. Organize tasks with categories, User authentication and authorization.","about":"Welcome to the To-Do List App! This application is built using C# with the ASP.NET MVC framework.","image":"https://images.codefoli.com/320-project-content-430","overview":"Overview","platforms":"Web","link":"https://github.com/echomaverick/ToDoTasks"},{"slug":"quotes-web-application","header":"Quotes Web Application","description":"This project is a simple ReactJS application designed to provide users with daily motivation quotes. It's a straightforward tool for individuals seeking daily inspiration or motivation.","about":"","image":"https://images.codefoli.com/320-project-content-431","overview":"Overview","platforms":"Web, Android, iOS","link":"https://github.com/echomaverick/quotes-website"}]
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "I'm Samuel Dervishi, a Back end Developer from Tirana, Albania",
                      descriptionOne: "Hello! 👋 I'm Samuel a backend developer with a knack for problem-solving. Currently immersed in the world of Java development. Outside of coding, you'll find me on the basketball court and exploring the art of storytelling in cinema.",
                      profileImage: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My broad set of services and skills",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const aboutData = useMemo(
                    () => ({
                      headerOne: "Hello, I'm Samuel Dervishi",
                      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
                      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
                      iconThree: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png",
                      headerTwo: "My story as a programmer",
                      descriptionOne: "Hello! 👋 I'm Samuel a backend developer with a knack for problem-solving. Currently immersed in the world of Java development. Outside of coding, you'll find me on the basketball court and exploring the art of storytelling in cinema.",
                      descriptionTwo: "From a young age, I've been captivated by problem-solving, finding joy in dismantling gadgets and deciphering their inner workings. This passion drives me to constantly seek innovative strategies for today's digital challenges. When not immersed in problem-solving, I enjoy basketball, coding, and exploring diverse narratives through movies, always eager to connect with like-minded individuals and explore new opportunities.",
                      sections: [
                        {
                          type: "RESUME",
                          details: {
                            headerOne: "Take a look at my resume",
                            order: 1
                          }
                        },
                        {
                          type: "VALUE",
                          details: {
                            headerOne: "the core values that drive my work.",
                            descriptionOne: "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach design. Let's delve into the convictions that drive my professional journey.",
                            values: [{"value":"HARD_WORK"},{"value":"TRANSPARENCY"},{"value":"INNOVATION"},{"value":"GROWTH"}],
                            order: 2
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Projects",
                      descriptionOne: "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                      ],
                    }),
                    []
                  );
            
            return (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={<Home userData={userData} pageData={homeData as HomeData} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <Contact
                        pageData={contactData as ContactData}
                        userData={userData}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects pageData={projectsPageData} userData={userData} />}
                  />
                  <Route
                    path="/about"
                    element={
                      <About pageData={aboutData as AboutData} userData={userData} />
                    }
                  />
                  <Route path="/:slug" element={<ProjectOr404 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            );
          };
                    
          export default App;