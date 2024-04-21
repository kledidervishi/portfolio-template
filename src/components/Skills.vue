<template>
  <div v-for="skill in skills" :key="skill.skillType">
    <p>
      <span class="main-content-heading">{{ skill.skillType }}:</span>
      <span>{{ skill.skillsList.join(", ") }}</span>
    </p>
    <br />
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          skillType: "Core",
          skillsList: ["Java", "Javascript", "C#", "C++", "C"],
        },
        {
          skillType: "Frameworks",
          skillsList: [
            "Node.js",
            "Express.js",
            "Vue.js",
            "Spring Boot",
            "Apache Maven",
            "Bootstrap",
          ],
        },
        { skillType: "Databases", skillsList: ["MongoDB", "Oracle DB"] },
        {
          skillType: "Tools",
          skillsList: ["Git", "Github", "VS Code", "Pycharm"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.main-content-heading {
  color: $content-heading-color;
}
</style>
