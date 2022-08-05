<template>
  <div>
    <div v-if="!auth">
      <form action="/" @submit="handleSubmit" class="form">
        <el-input
          v-model="email"
          required
          type="email"
          class="auth-field"
          placeholder="Please input"
        />
        <el-button type="warning" native-type="submit">Log in</el-button>
      </form>
    </div>
    <div v-if="auth">
      <span style="margin-right: 16px">Hello {{ authUser.email }}</span>
      <el-button @click="handleSignOut" type="danger">Log out</el-button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
export default {
  data() {
    return {
      email: null,
    };
  },
  setup() {
    const store = useAuthStore();
    const { auth, authUser } = storeToRefs(store);
    const { signIn, signOut } = store;

    return { auth, signIn, authUser, signOut };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.signIn(this.email);
    },
    handleSignOut() {
      this.signOut();
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
}
.auth-field {
  margin-right: 8px;
}
</style>
