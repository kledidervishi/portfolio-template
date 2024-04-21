<template>
  <div class="generate-exp">
    <div class="work" v-for="exp in experience" :key="exp.company">
      <p class="main-content-heading">{{ exp.position }} @ {{ exp.company }}</p>
      <p>- {{ exp.dateRange }}</p>
      <p>- {{ exp.location }}</p>
      <div
        class="work-content"
        v-for="content in exp.content"
        :key="content"
        style="margin: 0"
      >
        <p>- {{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experience: [
        {
          company: "Tegeria",
          position: "Java Back-End Developer",
          location: "Tirana, Albania",
          dateRange: "Dec. 2023 - Present",
          content: [
            "Currently focused on refining and optimizing Java code to enhance overall system efficiency."
          ],
        },
        {
          company: "Taleas",
          position: "Software Developer Intern",
          location: "Tirana, Albani",
          dateRange: "July. 2023 - Oct. 2023",
          content: [
            "Completed software developer internship with JavaScript, Node.js, React, AWS, and MongoDB."
          ],
        },
        {
          company: "Coders SHPK",
          position: "Software Developer Intern",
          location: "Tirana, Albania",
          dateRange: "Ap. 2023 - May. 2023",
          content: [
            "Completed internship utilizing Next.js, TypeORM, SQL Server, and JWT for full-stack development."
          ],
        },
        {
          company: "Yellow Pages Canda",
          position: "Sales Representative",
          location: "Tirana, Albania",
          dateRange: "June. 2022 - Sep. 2022",
          content: [
            "Experienced Sales Representative proficient in marketing and Google Ads."
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.work {
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 2px dashed $grey;
}

.main-content-heading {
  color: $content-heading-color;
}

.generate-exp {
  width: 75%;
}
</style>
