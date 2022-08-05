import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  id: "auth",
  state: () => ({
    auth: false,
    authUser: null,
    users: [
      {
        email: "admin@admin.com",
        role: "admin",
      },
    ],
  }),
  actions: {
    signIn(email) {
      const user = this.users.find((u) => u.email === email.toLowerCase());

      if (user) {
        this.auth = true;
        this.authUser = user;
      } else {
        this.users.push({
          email,
          role: "user",
        });
      }
    },
    signOut() {
      this.auth = false;
    },
  },
});
