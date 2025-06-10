<script setup>
import topnavVue from "../components/topnav.vue";
import twwetBoxVue from "../components/tweet-box.vue";

const {
  data: tweets,
  pending,
  refresh,
} = useAsyncData("tweets", () => $fetch("/api/fake-tweets"), {
  server: false, // client-side only
  lazy: false,
  watch: false,
});

onMounted(() => {
  setInterval(() => {
    refreshNuxtData("tweets"); // 🔁 Lighter way to refresh one key
  }, 20000);
});
</script>

<template>
  <div class="top-nav">
    <topnavVue />
  </div>

  <div class="tweet-box">
    <twwetBoxVue />
  </div>

  <div class="tweet-feed">
    <!-- Loader -->
    <div v-if="pending" class="loader">
      <Icon name="eos-icons:loading" class="spinner" />
    </div>

    <!-- Tweets -->
    <div v-else>
      <div v-for="tweet in tweets" :key="tweet.id" class="tweet">
        <img :src="tweet.user.avatar" class="avatar" />
        <div class="content">
          <div class="header">
            <strong>{{ tweet.user.name }}</strong>
            <span class="handle">{{ tweet.user.handle }}</span>
            <span class="time">· {{ tweet.timestamp }}</span>
          </div>

          <p class="text">{{ tweet.content }}</p>

          <img
            v-if="tweet.image"
            :src="tweet.image"
            alt="Tweet image"
            class="tweet-image"
            loading="lazy"
            @load="(e) => e.target.classList.add('loaded')"
          />

          <div class="actions">
            <Icon name="material-symbols:chat-bubble-outline" />
            <Icon name="tabler:repeat" />
            <Icon name="tabler:heart" />
            <Icon name="material-symbols:share" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tweet-feed {
  max-width: 100%;
  margin: auto;
  font-family: Arial, sans-serif;
}

.loader {
  text-align: center;
  padding: 24px;
}
.spinner {
  font-size: 32px;
  color: #1da1f2;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.tweet {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #eee;
  gap: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.content {
  flex: 1;
}

.header {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  margin-bottom: 4px;
}

.handle,
.time {
  color: #555;
}

.text {
  font-size: 15px;
  margin-bottom: 8px;
}
.tweet-image {
  margin: 15px 0px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &.loaded {
    opacity: 1;
  }
}

.actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #555;
}

.actions :deep(svg) {
  cursor: pointer;
  transition: color 0.2s ease;
}

.actions :deep(svg):hover {
  color: #1da1f2;
}
</style>
