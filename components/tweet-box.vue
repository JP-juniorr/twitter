<script setup>
import Button from "./reusable/Button.vue";
import { ref } from "vue";
const { $supabase } = useNuxtApp();
import GifPickerModal from "./GifPickerModal.vue";
const tweetContent = ref("");
const selectedImage = ref(null);
const previewUrl = ref(null);
const showGifModal = ref(false);
const selectedGifUrl = ref(null);
const emit = defineEmits(["posted"]);
const onGifSelected = (url) => {
  if (url) selectedGifUrl.value = url;
  showGifModal.value = false;
};
const postTweet = async () => {
  if (!tweetContent.value.trim()) return;

  let imageUrl = null;

  if (selectedImage.value) {
    const filePath = `tweet_${Date.now()}_${selectedImage.value.name}`;
    const { error } = await $supabase.storage
      .from("tweets")
      .upload(filePath, selectedImage.value);

    if (error) {
      console.error("Image upload failed:", error.message);
      return;
    }

    const { data: publicData } = await $supabase.storage
      .from("tweets")
      .getPublicUrl(filePath);
    imageUrl = publicData.publicUrl;
  }

  emit("posted", {
    content: tweetContent.value,
    image: imageUrl,
    gif: selectedGifUrl.value,
  });

  tweetContent.value = "";
  previewUrl.value = null;
  selectedImage.value = null;
  selectedGifUrl.value = null;
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
      <img class="avatar" src="https://randomuser.me/api/portraits/men/75.jpg" alt="Avatar" />
      <textarea
        v-model="tweetContent"
        class="tweet-textarea"
        placeholder="What’s happening?"
        rows="2"
      ></textarea>
    </div>

    <!-- Unified preview container for image and gif -->
    <div v-if="previewUrl || selectedGifUrl" class="preview-container">
      <img
        v-if="previewUrl"
        :src="previewUrl"
        alt="Image preview"
        class="preview-image"
      />
      <img
        v-if="selectedGifUrl"
        :src="selectedGifUrl"
        alt="GIF preview"
        class="preview-image"
      />
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

        <div class="icon-button" @click="showGifModal = true">
          <Icon name="hugeicons:gif-02" />
        </div>
        <GifPickerModal v-if="showGifModal" @selected="onGifSelected" />

        <div class="icon-button">
          <Icon name="tabler:list" />
        </div>

        <div class="icon-button">
          <Icon name="stash:emoji-wink-plus-duotone" />
        </div>

        <div class="icon-button">
          <Icon name="material-symbols:auto-schedule" />
        </div>

        <div class="icon-button">
          <Icon name="material-symbols:add-location" />
        </div>
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
  align-items: center;
  height: 32px;

  svg {
    width: 24px;
    height: 24px;
  }

  label,
  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 32px;
    width: 32px;
  }
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

.gif-badge {
  background-color: #1da1f2;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 4px;
}

.upload-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
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
  margin-top: 10px;
}
.modal {
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 1000;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 360px;
}

input {
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border 0.3s ease;
}

input:focus {
  border-color: #1da1f2;
  box-shadow: 0 0 0 2px rgba(29, 161, 242, 0.2);
}

.gif-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  justify-content: center;
}

.gif-grid img {
  width: 100px;
  height: auto;
  cursor: pointer;
  border-radius: 6px;
  transition: transform 0.2s ease;
}

.gif-grid img:hover {
  transform: scale(1.05);
}
</style>
