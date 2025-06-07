<script setup>
import { useFooterLinks } from "@/composables/useFooterLinks";

const footerLinks = useFooterLinks();
</script>

<template>
  <footer class="footer">
    <ul class="footer-links">
      <li v-for="link in footerLinks" :key="link.id">
        <a :href="link.url">{{ link.label }}</a>
      </li>
    </ul>
    <p class="copyright">© 2025 Twitter</p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  font-size: 0.875rem;
  color: #536471;
  text-align: center;
  padding: 1rem 1rem;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
