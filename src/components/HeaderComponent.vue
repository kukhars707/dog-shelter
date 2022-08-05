<template>
  <header class="header">
    <h1>Dog shelter</h1>
    <AuthComponentVue />
  </header>
</template>

<script>
import AuthComponentVue from "./AuthComponent.vue";
import { useAuthStore } from "@/stores/auth";

export default {
  setup() {
    const store = useAuthStore();

    return { auth: store.auth };
  },
  components: {
    AuthComponentVue,
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(42, 164, 52);
  margin-bottom: 24px;
  padding: 8px 24px;
  color: #ffffff;
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
