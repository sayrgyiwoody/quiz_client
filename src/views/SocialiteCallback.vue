<template>
    <div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    created() {
        const userId = this.$route.params.userId;
        const token = this.$route.query.token;
  
      if (userId) {
        localStorage.setItem('userId', userId);
        localStorage.setItem("login_token",token);

        this.$store.dispatch("setUserId",userId);
        this.$store.dispatch("setToken",token);

        this.$router.push('/home');
      } else {
        console.error('Socialite authentication failed.');
        this.$router.push('/login');
      }
    },
  };
  </script>
  