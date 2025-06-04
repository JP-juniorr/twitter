<script setup>
import Button from "../reusable/button.vue";
import search from "../reusable/search.vue";
</script>

<template>
  <div class="main">
    <div>
      <search></search>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        explicabo, enim perferendis inventore recusandae quas error optio earum?
        Necessitatibus, quae? Eius quae recusandae, earum exercitationem aliquam
        mollitia placeat. Unde porro libero, repudiandae ut est modi voluptas id
        quos hic laboriosam ipsam blanditiis vero doloribus, ratione, dicta
        laudantium esse molestiae animi? Laborum itaque nostrum iste. Minima
        sunt maiores ad iste? Repellat, at amet eum dolorum natus ea perferendis
        sed expedita delectus dolores laboriosam sequi nihil repudiandae
        asperiores voluptas rerum. Eligendi distinctio neque nisi magnam, et
        maxime ab fugit fuga molestiae necessitatibus quod iste eum expedita.
        Unde asperiores cupiditate temporibus quas expedita?
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
.main {
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2rem;
  font-size: 1rem;
}
p {
  font-size: 1rem;
  color: black;
}
</style>
