<script setup>
import Button from "./Button.vue";
import Card from "./Card.vue";
import Showmore from "./Showmore.vue";
import { ref, computed, onMounted } from "vue";

const users = ref([]);
const showAll = ref(false);

onMounted(async () => {
  const data = await import("../../server/data/accounts.json");
  users.value = data.default;
});

const visibleUsers = computed(() =>
  showAll.value ? users.value : users.value.slice(0, 4)
);

const toggleShow = () => {
  showAll.value = !showAll.value;
};
</script>

<template>
  <card class="card">
    <template #title> who to follow </template>
    <template #content>
      <ul>
        <li
          v-for="(user, index) in visibleUsers"
          :key="index"
          class="follow-item"
        >
          <div class="profile">
            <div class="profile-left">
              <img
                :src="user.avatar"
                alt="Profile Picture"
                class="profile-image"
              />
            </div>
            <div class="profile-middle">
              <h3 class="profile-name">{{ user.name }}</h3>
              <p class="profile-username">{{ user.username }}</p>
            </div>
          </div>
          <Button class="button-card">
            <template #follow> Follow </template>
          </Button>
        </li>
      </ul>

      <div class="showmore" @click="toggleShow">
        {{ showAll ? "Show less" : "Show more" }}
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
  padding: 10px 0;
}

.profile {
  @include flex-align-center;
  gap: 10px;
  cursor: pointer;
}

.profile-left {
  flex-shrink: 0;
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
  margin: 0;
  font-size: 0.9rem;
}

.profile-name {
  font-weight: bold;
}

.profile-username {
  color: #777;
}

.showmore {
  color: vars.$dim_icons;
  display: flex;
  justify-content: left;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
}
</style>
