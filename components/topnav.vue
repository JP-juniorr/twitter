<script setup></script>

<template>
  <div class="upper-bar">
    <div>
      <NuxtLink to="/" exact-active-class="active-tab">
        <h1>For you</h1>
      </NuxtLink>
    </div>

    <div>
      <NuxtLink to="/following" exact-active-class="active-tab">
        <h1>Following</h1>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins.scss" as *;
.upper-bar {
  background-color: transparent;
  color: vars.$dim_50;
  @include flex-around;
  align-items: center;
  border-bottom: 1px solid vars.$dim_border;

  div {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid vars.$dim_border;
    border-right: 1px solid vars.$dim_border;
    padding: 10px 0;
    &:hover {
      background-color: vars.$dim_border;
      color: black;
    }
  }
  h1 {
    display: inline-block;
    font-size: 1em;
    margin-bottom: 10px;
    color: black;
    font-weight: regular;
    cursor: pointer;
  }

  p {
    font-size: 1.2em;
  }
}
.active-tab {
  font-weight: bold;

  h1 {
    color: black;
  }
}
</style>
