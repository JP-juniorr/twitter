// composables/useTrending.js
import { ref } from "vue";
import { useRuntimeConfig } from "#imports";

export function useTrending() {
  const headlines = ref([]);
  const error = ref(null);
  const config = useRuntimeConfig();

  const load = async () => {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?apikey=${config.public.gnewsApiKey}&lang=en&country=us&max=8`
      );
      const json = await res.json();
      headlines.value = json.articles || [];
    } catch (err) {
      error.value = err;
    }
  };

  return { headlines, error, load };
}
