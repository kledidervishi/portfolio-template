<template>
  <div>
    <p>
      My name is
      <a href="https://www.linkedin.com/in/samueldervishi/" target="_blank"
        >Samuel Dervishi</a
      >, and I love
      <a href="https://github.com/echomaverick" target="_blank"
        >developing websites and software engineering</a
      >. From a young age, I've been captivated by problem-solving, finding joy
      in dismantling gadgets and deciphering their inner workings. This passion
      drives me to constantly seek innovative strategies for today's digital
      challenges. When not immersed in problem-solving, I enjoy basketball,
      coding, and exploring diverse narratives through movies, always eager to
      connect with like-minded individuals and explore new opportunities.
      <br />
      <a href="mailto:dervishisamuel360@gmail.com"
        >Feel free to reach out to me</a
      >
      through my inbox for networking and connections.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
div {
  width: 75%;
}

a {
  color: $green;
}
</style>
