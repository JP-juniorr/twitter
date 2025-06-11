<script setup>
import Button from "./reusable/Button.vue";
import { ref } from "vue";

const tweetContent = ref("");
const emit = defineEmits(["posted"]);
console.log("tweetContent from child:", tweetContent.value); // ← This should show
console.log("emit from child:", emit); // ← This should show in browser

const postTweet = () => {
  console.log("✅ tweetContent from child:", tweetContent.value); // ← This should show in browser

  if (!tweetContent.value.trim()) return;
  emit("posted", tweetContent.value);
  tweetContent.value = "";
};
</script>

<template>
  <div class="tweet-box">
    <div class="input-section">
      <img class="avatar" src="../assets/images/human.png" alt="Avatar" />
      <textarea
        v-model="tweetContent"
        class="tweet-textarea"
        placeholder="What’s happening?"
        rows="2"
      ></textarea>
    </div>

    <div class="footer-section">
      <div class="icons">
        <Icon name="tabler:photo" />
        <Icon name="hugeicons:gif-02" />
        <Icon name="tabler:list" />
        <Icon name="stash:emoji-wink-plus-duotone" />
        <Icon name="material-symbols:auto-schedule" />
        <Icon name="material-symbols:add-location" />
      </div>
      <div class="button-wrap">
        <Button @click="postTweet" class="post-button">
          <template #follow> Post </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins.scss" as *;
.tweet-box {
  background-color: #fff;
  border-bottom: 1px solid #e6ecf0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  margin: auto;
  font-family: Arial, sans-serif;
}

.input-section {
  display: flex;
  gap: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.tweet-textarea {
  flex: 1;
  border: none;
  font-size: 18px;
  resize: none;
  outline: none;
  color: #000;
  padding-top: 8px;
  line-height: 1.4;
  font-family: inherit;
}

.footer-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px; // aligns with textarea
  margin-top: 0px;
}

.icons {
  display: flex;
  gap: 16px;
  color: #1da1f2;
  font-size: 20px;
}

.button-wrap {
  display: flex;
  align-items: center;
}

.post-button .follow-button {
  background-color: #1da1f2;
  color: white;
  font-size: 15px;
  padding: 8px 20px;
  border-radius: 9999px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.tweet {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.content {
  flex: 1;
}
</style>
