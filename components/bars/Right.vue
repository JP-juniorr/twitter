<script setup>
import { ref, onMounted } from "vue";

import Button from "../reusable/button.vue";
import search from "../reusable/search.vue";
import card from "../reusable/card.vue";
import follow from "../reusable/follow.vue";
import Footer from "../footer.vue";
import { useTrending } from "@/composables/useTrending";
const trends = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await fetch("/api/trends");
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    trends.value = data;
  } catch (error) {
    console.error("❌ Failed to load trends:", error);
  } finally {
    loading.value = false;
  }
});

const loadTrends = async () => {
  loading.value = true;
  try {
    const res = await fetch("/api/trends");
    const data = await res.json();
    trends.value = data;
  } catch (err) {
    console.error("Failed to load trends:", err);
  } finally {
    loading.value = false;
  }
};

const { headlines, error, load } = useTrending();
onMounted(() => load());
</script>

<template>
  <div class="main">
    <div class="right_core">
      <search></search>
      <card class="card">
        <template #title> Subscribe to Premium </template>
        <template #content>
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </template>
        <template #button>
          <Button>
            <template #subscribe> Subscribe </template>
          </Button>
        </template>
      </card>
      <card class="trend-card">
        <template #title> Trends for you </template>

        <template #content>
          <div v-if="loading" class="loading">Loading trends...</div>

          <div v-else>
            <div
              v-for="(countryTrends, country) in trends"
              :key="country"
              class="country-block"
            >
              <div class="country-name">Trending in {{ country }}</div>

              <div v-if="countryTrends && countryTrends.length">
                <div
                  v-for="(trend, i) in countryTrends"
                  :key="i"
                  class="trend-item"
                >
                  <a :href="trend.url" target="_blank" class="trend-title">
                    {{ trend.title }}
                  </a>
                </div>
              </div>

              <div v-else class="trend-unavailable">Unable to fetch</div>
            </div>
          </div>
        </template>
      </card>

      <follow> </follow>
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins" as *;
.main {
  display: block;
  padding: 0.5rem;
}
.right_core {
  margin-bottom: 20px;
}
.card {
  margin: 15px 0px;
}
p {
  font-size: 1rem;
  color: black;
}
ul {
  @include list-reset;
}
li {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #536471;
}
a {
  text-decoration: none;

  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}

.trend-card {
  padding: 16px;
  background-color: #f5f8fa;
}

.country-block {
  margin-bottom: 16px;
}

.country-name {
  font-weight: bold;
  color: #555;
  margin-bottom: 4px;
  font-size: 14px;
}

.trend-item {
  margin-left: 8px;
  padding: 4px 0;
}

.trend-title {
  color: #1da1f2;
  text-decoration: none;
  font-size: 15px;
}

.trend-title:hover {
  text-decoration: underline;
}

.trend-unavailable {
  margin-left: 8px;
  color: #999;
  font-size: 14px;
}

.loading {
  font-style: italic;
  color: #666;
}
</style>
