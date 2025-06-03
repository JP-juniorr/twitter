<script setup></script>

<template>
  <div class="logo">
    <NuxtLink to="/">
      <div class="w-8 h-8">
        <LogoTwitter />
      </div>
    </NuxtLink>
  </div>
  <div>
    <ul>
      <li>
        <Icon name="dashicons:admin-home" class="blue" /><span>Home</span>
      </li>
      <li>
        <Icon name="tabler:hash" class="blue" />
        Explore
      </li>
      <li>
        <Icon name="tabler:bell" class="blue" />
        Notifications
      </li>
      <li>
        <Icon name="tabler:mail" class="blue" />
        Messages
      </li>
      <li>
        <Icon name="tabler:bookmark" class="blue" />
        Bookmarks
      </li>
      <li>
        <Icon name="tabler:clipboard-list" class="blue" />
        Lists
      </li>
      <li>
        <Icon name="tabler:user" class="blue" />
        Profile
      </li>
      <li>
        <Icon name="tabler:device-airpods-case" class="blue" />
        Jobs
      </li>
      <li>
        <Icon name="tabler:users" class="blue" />
        Communities
      </li>
      <li>
        <Icon name="tabler:dots-circle-horizontal" class="blue" />
        More
      </li>
      <li>
        <button>Tweet</button>
      </li>
      <li class="special">
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
          <div class="profile-right">
            <Icon name="tabler:dots" class="profile-options" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/fonts.scss";
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 15px 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}
h1 {
  font-family: "MyFontHeavy", sans-serif !important;
}
.blue {
  color: vars.$dim_icons;
  font-size: 1.5rem;
  margin-right: 5px;
}
button {
  background-color: vars.$dim_50;
  color: white;
  padding: 10px 20px;
  border-radius: 9999px;
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
}
.lgoo {
  display: inline-block;
}
.profile {
  display: flex;
  align-items: center;
  padding: 10px 0px;
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

.profile-name {
  font-family: "MyFontHeavy", sans-serif;
  font-size: 1rem;

  margin: 0;
}

.profile-username {
  font-family: "MyFontRegular", sans-serif;
  font-size: 0.875rem;

  margin: 0;
}

.profile-right {
  display: flex;
  align-items: center;
}

.profile-options {
  color: vars.$dim_icons;
  font-size: 1.25rem;
  position: absolute;
  top: 35%;
  right: 10%;
  cursor: pointer;
}
.special {
  width: 127%;
  position: relative;
}
</style>
