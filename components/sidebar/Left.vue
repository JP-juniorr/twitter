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
        <NuxtLink to="/home"
          ><Icon name="dashicons:admin-home" class="blue" /> Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/explore"
          ><Icon name="tabler:hash" class="blue" /> Explore</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/notification"
          ><Icon name="tabler:bell" class="blue" /> Notifications</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/messages"
          ><Icon name="tabler:mail" class="blue" /> Messages</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/bookmark"
          ><Icon name="tabler:bookmark" class="blue" /> Bookmark</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/lists"
          ><Icon name="tabler:list" class="blue" /> Lists</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/profile"
          ><Icon name="tabler:user" class="blue" /> Profile</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/jobs">
          <Icon name="tabler:device-airpods-case" class="blue" />
          Jobs
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/communities"
          ><Icon name="tabler:users" class="blue" /> Communities</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/more">
          <Icon
            name="tabler:dots-circle-horizontal"
            class="blue"
          />More</NuxtLink
        >
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
  margin: 10px 0;
  padding: 10px 0;
  display: flex; /* Align icon and text horizontally */
  justify-content: flex-start;
  height: 100%;
  align-items: center; /* Center items vertically */
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}
a {
  display: flex; /* Align icon and text horizontally */
  align-items: center; /* Center items vertically */
  font-size: 18px;
}
h1 {
  font-family: "MyFontHeavy", sans-serif !important;
}
.blue {
  color: vars.$dim_icons;
  font-size: 1.5rem;
  margin-right: 10px; /* Space between icon and text */
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
