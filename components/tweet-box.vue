<script setup>
import Button from "./reusable/Button.vue";
import { ref } from "vue";
const { $supabase } = useNuxtApp(); // ✅ this was missing

const tweetContent = ref("");
const selectedImage = ref(null);
const previewUrl = ref(null);

const emit = defineEmits(["posted"]);

const postTweet = async () => {
  if (!tweetContent.value.trim()) return;

  let imageUrl = null;

  // Upload the image if one was selected
  if (selectedImage.value) {
    const filePath = `tweet_${Date.now()}_${selectedImage.value.name}`;
    const { data, error } = await $supabase.storage
      .from("tweets")
      .upload(filePath, selectedImage.value);

    if (error) {
      console.error("Image upload failed:", error.message);
      return;
    }

    // Get the public URL
    const { data: publicData } = await $supabase.storage
      .from("tweets")
      .getPublicUrl(filePath);
    imageUrl = publicData.publicUrl;
  }

  // Emit tweet content and image URL
  emit("posted", {
    content: tweetContent.value,
    image: imageUrl,
  });

  // Clear fields
  tweetContent.value = "";
  previewUrl.value = null;
  selectedImage.value = null;
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = file;
    previewUrl.value = URL.createObjectURL(file);
  }
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

    <!-- Move preview outside the input-section -->
    <div v-if="previewUrl" class="preview-container">
      <img :src="previewUrl" alt="Image preview" class="preview-image" />
    </div>

    <div class="footer-section">
      <div class="icons">
        <label>
          <Icon name="tabler:photo" />
          <input
            type="file"
            accept="image/*"
            hidden
            @change="handleFileChange"
          />
        </label>
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
.preview-image {
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  margin-top: 10px;
}
.icon-label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.preview-container {
  margin-left: 60px;
  margin-top: -5px;
}

.preview-image {
  max-width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 300px;
  display: block;
}
</style>
