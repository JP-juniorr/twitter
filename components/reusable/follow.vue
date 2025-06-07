<script setup>
import Button from "../reusable/button.vue";
import card from "../reusable/card.vue";
import showmore from "./showmore.vue";
</script>

<template>
  <card class="card">
    <template #title> who to follow</template>
    <template #content>
      <li class="follow-item">
        <div class="profile">
          <div class="profile-left">
            <img
              src="../../assets/images/human.png"
              alt="Profile Picture"
              class="profile-image"
            />
          </div>
          <div class="profile-middle">
            <h3 class="profile-name">JP Junior</h3>
            <p class="profile-username">@iamjpjunior</p>
          </div>
        </div>
        <Button class="button-card">
          <template #follow> Follow</template>
        </Button>
      </li>
      <li class="follow-item">
        <div class="profile">
          <div class="profile-left">
            <img
              src="../../assets/images/human.png"
              alt="Profile Picture"
              class="profile-image"
            />
          </div>
          <div class="profile-middle">
            <h3 class="profile-name">JP Junior</h3>
            <p class="profile-username">@iamjpjunior</p>
          </div>
        </div>
        <Button class="button-card">
          <template #follow> Follow</template>
        </Button>
      </li>
      <li class="follow-item">
        <div class="profile">
          <div class="profile-left">
            <img
              src="../../assets/images/human.png"
              alt="Profile Picture"
              class="profile-image"
            />
          </div>
          <div class="profile-middle">
            <h3 class="profile-name">JP Junior</h3>
            <p class="profile-username">@iamjpjunior</p>
          </div>
        </div>
        <Button class="button-card">
          <template #follow> Follow</template>
        </Button>
      </li>
      <li class="follow-item">
        <div class="profile">
          <div class="profile-left">
            <img
              src="../../assets/images/human.png"
              alt="Profile Picture"
              class="profile-image"
            />
          </div>
          <div class="profile-middle">
            <h3 class="profile-name">JP Junior</h3>
            <p class="profile-username">@iamjpjunior</p>
          </div>
        </div>
        <Button class="button-card">
          <template #follow> Follow</template>
        </Button>
      </li>
      <div class="showmore">
        <showmore>
          <template #showmore> Show more </template>
        </showmore>
      </div>
    </template>
  </card>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins.scss" as *;

.follow-item {
  @include flex-align-center;
  justify-content: space-between;
}
.profile {
  @include flex-align-center;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile-left {
  margin-right: 10px;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-middle {
  flex: 1;
}

.profile-name,
.profile-username {
  font-family: "MyFontHeavy", sans-serif;
  font-size: 1rem;
  margin: 0;
}

.profile-right {
  @include flex-align-center;
}

.profile-options {
  color: vars.$dim_icons;
  font-size: 1.25rem;
  top: 35%;
  right: 10%;
  cursor: pointer;
}

.showmore {
  color: vars.$dim_icons;
  display: flex;
  justify-content: left;
  margin-top: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>
