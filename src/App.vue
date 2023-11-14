<script>
import axios from 'axios'
import SideNav from './components/SideNav.vue'
import TopNav from './components/TopNav.vue'
import { mapGetters , mapActions } from 'vuex'

    export default {
        components: {
            SideNav,
            TopNav,
        },
        data() {
            return {
                loginStatus : '',
            }
        },
        computed: {
            isLoginView() {
                return this.$route.name=== 'login'; 
            },
            ...mapGetters(["getToken"]),

        },
        methods: {
            ...mapActions(["setLoadingStatus","setUserData"]),
            checkDarkMode() {
                const localDarkMode = localStorage.getItem('darkMode');
                if(JSON.parse(localDarkMode) == true ){
                    document.documentElement.classList.add('dark');
                }else if (JSON.parse(localDarkMode) == false ) {
                    document.documentElement.classList.remove('dark');
                }
            },
            checkToken(){

                if(this.getToken != null && this.getToken != undefined && this.getToken != ""){
                    
                }else {
                    this.loginStatus = false;
                    console.log("redirected to login");
                    this.directLogin();
                }
            },
                   
            getLocalData(){
                this.$store.dispatch("setUserData",JSON.parse(localStorage.getItem('userData')));
                this.$store.dispatch("setToken",localStorage.getItem('login_token'));
            },
            directLogin() {
                this.$router.push({
                    name : "login"
                })
            },
            logout(){
                localStorage.removeItem("login_token");
                this.$store.dispatch("setToken",null);
                this.directLogin();
            },
            
            
        },
        mounted () {
            this.checkDarkMode();
            this.getLocalData();
            this.checkToken();
        }
    }
</script>

<template>
 

    <div v-if="$store.state.loadingStatus" class="min-h-screen h-full z-50 bg-[#cbd5e1ad] dark:bg-[#18181b82]  loader-container" >
        <div class="w-100 h-screen flex justify-center items-center ">
          <div class="loader" >
            <span class="loader-text">loading</span>
            <span class="load"></span>
          </div>
        </div>
    </div>
     
     <side-nav></side-nav>
     <div class="sm:ml-52 bg-slate-100 dark:bg-zinc-900 min-h-screen">
        <top-nav></top-nav>
        
        <div class="p-3 md:p-4">
            
           <router-view></router-view>
        </div>
        
     </div>
     
  
</template>

<style>

textarea:valid ~ label, input:valid ~ label  {
    z-index: 10;
    font-weight: 600;
}
</style>
