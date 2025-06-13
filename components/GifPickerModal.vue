<script setup>
import { ref, watch } from "vue";
import { useRuntimeConfig } from "#imports";

const search = ref("");
const gifs = ref([]);
const emit = defineEmits(["selected"]);

const config = useRuntimeConfig();
const API_KEY = config.public.giphyApiKey;

const closeModal = () => emit("selected", null);

watch(search, async () => {
  if (search.value.length < 2) return;
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search.value}&limit=12`
  );
  const json = await res.json();
  gifs.value = json.data;
});

const selectGif = (gif) => {
  emit("selected", gif.images.original.url);
};
</script>

<template>
  <div class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <input v-model="search" placeholder="Search GIFs..." class="gif-input" />
      <div class="gif-grid">
        <img
          v-for="gif in gifs"
          :key="gif.id"
          :src="gif.images.fixed_height.url"
          @click="selectGif(gif)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
}

.gif-input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}

.gif-input:focus {
  border-color: #1da1f2;
  box-shadow: 0 0 0 2px rgba(29, 161, 242, 0.1);
}

.gif-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  max-height: 320px;
  overflow-y: auto;
}

.gif-grid img {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.gif-grid img:hover {
  transform: scale(1.05);
}
</style>
