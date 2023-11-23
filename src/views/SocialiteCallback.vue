<template>
    <div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions(["setCallbackError"]),
    },
    created() {
        const userId = this.$route.params.userId;
        const token = this.$route.query.token;
        const error = this.$route.query.message || null;
      
      if (userId && token) {
        localStorage.setItem('userId', userId);
        localStorage.setItem("login_token",token);

        this.$store.dispatch("setUserId",userId);
        this.$store.dispatch("setToken",token);

        this.$router.push('/home');
      } else {
        this.$store.dispatch("setCallbackError",error);
        this.$router.push('/login');
      }
    },
  };
  </script>
  