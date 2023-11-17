<template>
    <div v-if="!isAuthView" class="bg-white dark:bg-zinc-800 inline-flex items-center justify-between w-screen p-2 text-sm text-gray-500 sm:hidden  dark:text-gray-400 ">
        <svg @click="toggleNav" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        <a @click="directHome" class="flex items-center pl-2.5">
          <img :src="'/images/logo.png'" class="h-12 mr-2 rounded-full" alt="Logo" />
         <span class="font-poppins font-medium self-center text-xl whitespace-nowrap dark:text-white">Brain Lab</span>
         </a>
      <div @click="toggleDarkMode" class=" cursor-pointer rounded-full w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-zinc-600 dark:border-none border border-3 duration-150 hover:bg-slate-200 border-slate-300">
            <svg class="text-white" v-if="darkMode" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"/><path stroke-linecap="round" d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"/></g></svg>
            <svg class="text-gray-600" v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"/></svg>
      </div>
     </div>
    <aside v-if="!isAuthView" :class="showNavMobile ?'translate-x-0':'-translate-x-full'" class="fixed top-0 left-0 z-40 w-52 h-screen transition-transform  sm:translate-x-0" aria-label="Sidebar">
       
      <div class="h-full  py-4 overflow-y-auto bg-white dark:bg-zinc-800 shadow-md">
         <div v-if="userData" class="px-6">
            <div @click="toggleNav" class="text-zinc-900 dark:text-white md:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 15 15">
                  <path fill="currentColor" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346Zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207L5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5L5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z" clip-rule="evenodd"/>
               </svg>
             </div> 
            <img class="mx-auto rounded-full w-16 h-16 object-cover mb-1" :src="imageUrl" alt="">  
            <p class="text-center text-xl font-semibold text-zinc-900 dark:text-slate-100 ">{{ userData.name }}</p>
            <p class="text-sm text-center text-slate-600 dark:text-muted mb-4">{{ userData.email }}</p>
         </div>
           <ul class="space-y-2 px-6 font-medium">
            
            <li >
               <button @click="directCreate" class="mb-4 w-full border-b-4 shadow-lg hover:border-y-2 border-blue-800 bg-primary flex items-center justify-center px-6 py-2 text-gray-900 rounded-lg dark:text-white group">
                  <svg class="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg> 
                
                  <span class="ml-3 text-white">Create</span>
               </button>
            </li>

            <router-link @click="showNavMobile = false" to="/home" class="nav-link" active-class="router-link-exact-active">
                  <button class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">
                   <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M6.5 17.5L14 14l3.5-7.5L10 10l-3.5 7.5ZM12 13q-.425 0-.713-.288T11 12q0-.425.288-.713T12 11q.425 0 .713.288T13 12q0 .425-.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                   </svg>  
                   
                     <span class="ml-3">Explore</span>
                  </button>
            </router-link>
            <router-link @click="showNavMobile = false" to="/myLibrary" class="nav-link" active-class="router-link-exact-active">
                 <button class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">
                  
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14">
                     <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="3.5" height="13" x=".55" y=".5" rx=".5"/><rect width="3.5" height="11" x="4.05" y="2.5" rx=".5"/><rect width="3" height="11" x="9.26" y="2.3" rx=".5" transform="rotate(-14.05 10.779 7.795)"/><path d="M.55 10h3.5m0-1h3.5m2.5 2l2.88-.72"/></g>
                  </svg>
                  <span class=" ml-3">My Library</span>
               </button>
            </router-link>
            <router-link @click="showNavMobile = false" to="/profile" class="nav-link" active-class="router-link-exact-active">

                 <button class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                     <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32Zm97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0Z"/>
                  </svg>
                    <span class=" ml-3">Profile</span>
                 </button>
            </router-link>
            <router-link @click="showNavMobile = false" to="/setting" class="nav-link" active-class="router-link-exact-active">
                 <button class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98c0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73c0 .21-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7l.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
                  </svg>
                    <span class=" ml-3">Setting</span>
                 </button>
            </router-link>

                 <button @click="logout" class="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 group">
                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                     <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9"/>
                  </svg>
                    <span class=" ml-3">Logout</span>
                 </button>
           </ul>
        </div>
     </aside>
     <div v-if="showNavMobile" class="absolute top-0 w-full h-full bg-gray-900 dark:bg-zinc-900 z-10 opacity-50 dark:opacity-80"></div>
</template>

<style  scoped>
 
     .router-link-exact-active svg , .router-link-exact-active span {
       color:#3b82f6;
     }
</style>

<script>
import { mapActions , mapGetters } from 'vuex'
import axios from 'axios'

export default {
   data() {
      return {
         darkMode: localStorage.getItem('darkMode') === 'true',
         showNavMobile : false,
         isMobile: window.innerWidth <= 768,

      }
   },
   computed: {
      ...mapGetters(['getToken','getUserData']),
      
        isAuthView() {
         return this.$route.name=== 'login'  || this.$route.name === 'register'; 
      },
      imageUrl(){
         if(this.getUserData && this.getUserData.profile_photo_path){
         
         return 'http://127.0.0.1:8000/storage/'+ this.getUserData.profile_photo_path;
         }
         return '/images/default_user.png';
      },
      userData(){
         if(this.getUserData){
         return this.getUserData;
         }
         // return '/images/default_user.png';
      }
    },
   methods: {
      ...mapActions(['setLoadingStatus','setToken']),
      toggleNav(){
         this.showNavMobile = !(this.showNavMobile);
      },
      toggleDarkMode() {
         this.darkMode = !this.darkMode;
         document.documentElement.classList.toggle('dark');
         localStorage.setItem('darkMode', this.darkMode.toString());
      },
      directLogin() {
         this.$router.push({
            name : "login"
         })
      },
      directCreate() {
         this.$router.push({
            name : "createPage"
         });
         this.showNavMobile = false;
      },
      directHome() {
         this.$router.push({
            name : "home"
         })
      },
      logout(){
         this.showNavMobile = false;
         localStorage.removeItem("login_token");
         localStorage.removeItem("userData");
         this.$store.dispatch("setToken",null);
         this.$store.dispatch("setUserData",{});
         this.directLogin();
         
      },
   },
   mounted () {
      
   },

}
</script>
