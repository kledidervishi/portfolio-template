<template>
  <div class="m-30" v-for="edu in eduction" :key="edu.institution">
    <p class="main-content-heading">{{ edu.institution }}</p>
    <p>{{ edu.degree }} | {{ edu.dateRange }}</p>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      eduction: [
        {
          institution:
            "Faculty of Economics, Univeristy of Tirana",
          degree: "Bachelor of Business Informatics",
          dateRange: "2021 ~ 2024",
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
