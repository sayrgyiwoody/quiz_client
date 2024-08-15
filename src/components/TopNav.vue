<template>
    <div :class="{'hidden':isLoggedIn && !isAuthView}" class="flex md:flex items-center justify-between h-16 shadow bg-white dark:bg-zinc-800 px-4 py-2">
        <a @click="directHome" class=" cursor-pointer flex items-center pl-2.5">
          <img :src="'/images/logo.png'" class="h-12 mr-2 rounded-full" alt="Logo" />
            
            <span class="font-poppins font-medium self-center text-xl whitespace-nowrap dark:text-white">Quiz Lab</span>
         </a>
        <div @click="toggleDarkMode" class="cursor-pointer rounded-full w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-zinc-600 dark:border-none border border-3 duration-150 hover:bg-slate-200 border-slate-300">
            <svg class="text-white" v-if="darkMode" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"/><path stroke-linecap="round" d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"/></g></svg>
            <svg class="text-gray-600" v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"/></svg>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      
        darkMode: localStorage.getItem('darkMode') === 'true',
    }

  },
  computed: {
    ...mapGetters(["getToken"]),
    isLoggedIn() {
      return this.getToken !== '' || this.getToken !== undefined || this.getToken !== null;

    },
    isAuthView(){
        return this.$route.name=== 'login' || this.$route.name === 'register' || this.$route.name === 'forgotPassword' ; 

    }
  },
  methods: {
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', this.darkMode.toString());
    },
    directHome() {
         if(this.isLoggedIn && !this.isAuthView){
          this.$router.push({
            name : "home"
         })
         }
      },
  },

  
}


</script>