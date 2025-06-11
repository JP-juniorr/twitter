<script setup>
import topnavVue from "./../components/topnav.vue";
import tweetBoxVue from "./../components/tweet-box.vue";
import { ref, onMounted } from "vue";

const tweets = ref([]);
const loading = ref(true);
const { $supabase } = useNuxtApp();
const fetchTweets = async () => {
  loading.value = true;
  const { data, error } = await $supabase
    .from("tweets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching tweets:", error);
  } else {
    tweets.value = data;
  }

  loading.value = false;
};

onMounted(fetchTweets);
</script>

<template>
  <div class="main-container">
    <div class="top-nav"><topnavVue /></div>
    <div>
      <tweetBoxVue />
    </div>
    <div class="tweet-feed">
      <!-- Loader -->
      <div v-if="loading" class="loader">
        <Icon name="eos-icons:loading" class="spinner" />
      </div>

      <!-- Tweets List -->
      <div v-else>
        <div v-for="tweet in tweets" :key="tweet.id" class="tweet">
          <img :src="tweet.user_avatar" alt="avatar" class="avatar" />
          <div class="content">
            <div class="header">
              <strong>{{ tweet.user_name }}</strong>
              <span class="handle">{{ tweet.user_handle }}</span>
              <span class="time">
                · {{ new Date(tweet.created_at).toLocaleTimeString() }}
              </span>
            </div>
            <p class="text">{{ tweet.content }}</p>
            <img
              v-if="tweet.image"
              :src="tweet.image"
              alt="Tweet image"
              class="tweet-image"
            />
            <div class="actions">
              <div class="action">
                <Icon name="material-symbols:chat-bubble-outline" />
                <span>{{ tweet.replies }}</span>
              </div>
              <div class="action">
                <Icon name="tabler:repeat" />
                <span>{{ tweet.retweets }}</span>
              </div>
              <div class="action">
                <Icon name="tabler:heart" />
                <span>{{ tweet.likes }}</span>
              </div>
              <div class="action">
                <Icon name="material-symbols:share" />
                <span>{{ tweet.views }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins.scss" as *;

.main-container {
  width: 100%;
  .top-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #f5f8fa; // Light background for the top nav
    border-bottom: 1px solid #e6ecf0; // Subtle border for separation
  }
}
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
  margin-bottom: 10px;
}
.tweet-image {
  margin-top: 10px;
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 400px;
  min-height: 200px; // ADD THIS if it's rendering with 0 height
  display: block;
  margin-bottom: 20px;
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
.actions {
  display: flex;
  gap: 32px;
  font-size: 18px;
  color: #555;

  .action {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #1da1f2;
    }

    span {
      font-size: 14px;
    }
  }
}
</style>
