<template>
  <div class="projects">
    <div
      class="sub-project m-30"
      v-for="project in projects"
      :key="project.projectName"
    >
      <p class="main-content-heading">{{ project.projectName }}</p>
      <p>- {{ project.projectDescription }}</p>
      <div v-if="project.githubLink && project.websiteLink">
        <p>
          - Links:
          <span>
            <a :href="project.githubLink" target="_blank">[GitHub]</a> |
            <a :href="project.websiteLink" target="_blank">[Website]</a></span
          >
        </p>
      </div>
      <div v-else-if="project.githubLink">
        <p>
          - Link:
          <span
            ><a :href="project.githubLink" target="_blank">[GitHub]</a></span
          >
        </p>
      </div>
      <div v-else-if="project.websiteLink">
        <p>
          - Link:
          <span
            ><a :href="project.websiteLink" target="_blank">[Website]</a></span
          >
        </p>
      </div>
      <p>
        - Technologies:
        <span class="color-green">{{ project.tags.join(", ") }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          projectName: "Portfolio",
          projectDescription:
            "A retro and terminal themed portfolio made with Vue.js and Scss.",
          githubLink: "https://github.com/echomaverick/portfolio",
          websiteLink: "https://samueldervishi.netlify.app",
          tags: ["Vue.js", "Javascript", "Scss"],
        },
        {
          projectName: "VigilentEye",
          projectDescription:
            "The Crime Alert Web App is a full-stack application built to allow users to report incidents and share alerts related to criminal activities. The app includes features such as incident reporting, real-time notifications, and a map interface to visualize reported incidents.",
          githubLink: "https://github.com/echomaverick/studious-dollop",
          tags: ["Node.js", "ReactJS", "MongoDB"],
        },
        {
          projectName: "CareerCrush",
          projectDescription:
            "Welcome to the Node.js backend of our JavaScript web application! This backend is built using AWS CDK to manage infrastructure components. ",
          githubLink: "https://github.com/echomaverick/taleas-project-backend",
          websiteLink: "https://www.career-crush.com/",
          tags: [
            "Node.js",
            "Express.js",
            "AWS CDK",
            "AWS Cognito",
            "AWS Rekognition",
          ],
        },
        {
          projectName: "Project Management Application",
          projectDescription:
            "Proventus Nexus is a project management application built with ReactJS and AWS Amplify.",
          githubLink:
            "https://github.com/echomaverick/ToDoApp-serverless-framework",
          tags: ["Node.js", "AWS", "MongoDB", "Serverless framework"],
        },
        {
          projectName: "To Do List Web Application",
          projectDescription: "Welcome to the To-Do List App!",
          githubLink: "https://github.com/echomaverick/ToDoTasks",
          tags: [
            "C#",
            "ASP.NET",
            "Entity Framework",
            "SQL Server Management Studio (SSMS)",
          ],
        },
        {
          projectName: "Quotes Website",
          projectDescription:
            "This is a simple ReactJS web application that displays random quotes. ",
          githubLink: "https://github.com/echomaverick/quotes-website",
          tags: ["Javascript", "CSS", "ReactJS"],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.projects {
  width: 75%;

  & div div {
    margin: 0;
  }

  & .sub-project {
    border-bottom: 2px dashed $grey;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
}

.main-content-heading {
  color: $content-heading-color;
}

a {
  color: $green;
}
</style>
