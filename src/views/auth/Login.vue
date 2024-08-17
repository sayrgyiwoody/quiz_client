<template>
        
        <div class="w-full sm:w-auto max-w-lg mx-auto bg-white dark:bg-zinc-800 shadow px-6 py-4 rounded mt-8 md:mt-20">
            <p class="flex justify-end cursor-pointer group text-zinc-800 dark:text-slate-100">
                <a @click="directRegister" class="hover:text-primary duration-150  flex items-center">Register Here
                    <svg class="ms-1 inline-block group-hover:translate-x-1 duration-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-12 6l6-6l-6-6l-1.4 1.4l4.6 4.6l-4.6 4.6L10 18Z"/></svg>
                </a>
        
                </p>
            <img :src="'./images/logo.png'" class="mt-2 w-20 mx-auto rounded  mb-2 " alt="Logo" />
            
            <h4 class=" font-poppins font-medium text-2xl text-center text-zinc-900 dark:text-slate-100">Quiz Lab</h4>
            <p class="text-center text-slate-500 dark:text-muted font-medium mb-3">Learn and Create your own quizzes</p>
            <hr class="mb-6 h-[1.5px] bg-zinc-700">
    
    
                <div v-if="validateStatus" class="mb-6 flex items-center bg-slate-50 border-[1.5px] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white py-4 px-6 rounded-md text-red-600">
                    <svg class="me-2 inline-block w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm0-4.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" clip-rule="evenodd"/>
                    </svg>
                    {{validateMessage}}
                </div>

                <div v-if="getCallbackError" class="mb-6  bg-slate-50 border-[1.5px] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white py-2 px-3 rounded-md text-red-600">
                    <svg class="me-1 inline-block w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm0-4.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" clip-rule="evenodd"/>
                    </svg>
                    {{getCallbackError}}
                </div>
    
    
            
    
            <form @submit.prevent="login">
                <div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="userData.email" name="email" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Email</label>
                    </div>
                </div>
    
                <div class="">
                    <div class="relative z-0 w-full mb-6 group input-gp">
                    <input v-model="userData.password" name="password" :type="showPassword? 'text':'password'" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Password</label>
                    <i @click="togglePasswordType" :class="showPassword?'fa-eye-slash':'fa-eye'" class="fa-solid  eye-icon cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                    </div>
                </div>
                <a @click="directForgotPassword" class="underline text-sm text-blue-600 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Forgot your password?
                </a>
    
    
                <button type="submit" class=" border-b-4 shadow-lg hover:border-y-2 border-blue-800 mb-2 flex justify-center items-center bg-primary hover:bg-primary_hover px-8 py-3 w-full text-xl font-semibold text-white rounded-md mt-4 w-fit">
                    Login
                </button>
            </form>
            <p class=" font-bold text-center mb-3 text-zinc-900 dark:text-slate-100">Or</p>
            <div class="flex items-center justify-center space-x-3 text-xs md:text-base">
                
                <a @click="socialiteLogin" :href="`${api_url}/auth/github/redirect`" class="border-[1.5px] border-slate-200 dark:border-zinc-600 hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 rounded-xl px-3 md:px-5 py-2 flex  items-center justify-center font-semibold text-zinc-800 dark:text-slate-200">
                    <svg class=" inline-block me-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="31.6" height="32" viewBox="0 0 256 259.3"><path fill="#9EDCF2" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"/><defs><path id="logosGithubOctocat0" d="M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5c0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2c0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6c-7-1.6-3.8 4.2-3.8 4.2c4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5 1.6-.3 4.5-.3 4.5c7 2.6 7.7 10.2 7.7 10.2v21.7l.4 16.6z"/></defs><clipPath id="logosGithubOctocat1"><use href="#logosGithubOctocat0"/></clipPath><path fill="#7DBCE7" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0" clip-path="url(#logosGithubOctocat1)"/><path fill="#9EDCF2" d="m46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2l-2-7.1zm0 0"/><path fill="#010101" d="m255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7 2.8-16.7 2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9 3.5-15.8-2-29.7c0 0-9.8-3.1-32.1 11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8c-7.8 8.4-12.5 19.1-12.5 32.2c0 9.9 1.1 18.8 3.9 26.5c-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7c.6 1.6 1.3 3.2 2 4.7c-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8c7.8 14.4 23 23.8 50.2 26.7c-3.9 2.6-7.8 7-9.4 14.5c-5.3 2.5-21.9 8.7-31.9-8.5c0 0-5.6-10.2-16.3-11c0 0-10.4-.2-.7 6.5c0 0 6.9 3.3 11.7 15.6c0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5c0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2c0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6c7 1.6 3.8-4.2 3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4c4.5-1.6.3-4.5.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9 42.9-12.2 49.3-26.8c12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1c.6-1.5 1.1-3 1.6-4.6c13.4-.5 35.1-.5 56.3 3.7zm0 0"/><path fill="#F5CCB3" d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8c0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7c10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0"/><path fill="#FFF" d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.6-.1 11.9 7.6 11.9 17.1zm0 0"/><path fill="#AF5C51" d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.3 0 7.9 5.1 7.9 11.4zm0 0"/><path fill="#FFF" d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.5-.1 11.9 7.6 11.9 17.1zm0 0"/><path fill="#AF5C51" d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4zm-37.8 15c0 1.6-1.3 3-3 3c-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm-9.9 7.5c-.2-.5.1-1 .6-1.2c.5-.2 1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6c.5.2.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9c-3.1 0-5.9-2-6.9-4.9zm0 0"/><path fill="#C4E5D9" d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm5.8 3.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm3.5 4.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.2 4.8c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.5 4.4c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm4.8 3.9c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm6.7 2.5c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.7 0c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.8-1.1c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4zm0 0"/></svg>
                    Github Login
                </a>
                <a @click="socialiteLogin" :href="`${api_url}/auth/google/redirect`" class="border-[1.5px] border-slate-200 dark:border-zinc-600 hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 rounded-xl px-3 md:px-5 py-2 flex  items-center justify-center font-semibold text-zinc-800 dark:text-slate-200">
                    <svg class=" inline-block me-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="31.27" height="32" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                    Google Login
                </a>
                <!-- <a @click="socialiteLogin" :href="`${api_url}/auth/facebook/redirect`" class="border-[1.5px] border-slate-200 dark:border-zinc-600 hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 rounded-xl px-3 py-2 flex  items-center justify-center font-semibold text-zinc-800 dark:text-slate-200">
                    <svg class=" inline-block me-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"/></svg>
                    Facebook
                </a> -->
            </div>
        </div>
        
    
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'

export default {
    name : 'Login',
    data() {
        return {
            userData: {
                email : '',
                password : ''
            },
            showPassword: false,
            validateStatus : false,
            validateMessage : '',
            darkMode: localStorage.getItem('darkMode') === 'true',
            api_url : import.meta.env.VITE_API_BASE_URL,
        }
    },
    computed: {
        ...mapGetters(["getCallbackError","getToken","getSocialiteLogin"]),
        isLoggedIn() {
            return this.getToken !== '' && this.getToken !== undefined && this.getToken !== null;
        },
    },
    methods: {
        ...mapActions(["setLoadingStatus","setCallbackError","setSocialiteLogin"]),
        socialiteLogin(){
            localStorage.setItem('socialiteLogin',true);
        },
        togglePasswordType() {
            this.showPassword = !this.showPassword;
        },
        login(){
            if(this.validateEmail()){
                this.setCallbackError(null);
                this.setLoadingStatus(true);
                axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`,this.userData)
                .then((response) => {
                    // this.storeUserInfo(response);
                if(response.data.status){
                    this.validateStatus = true;
                    this.clearForm();
                    this.directHome();
                    this.storeUserInfo(response);
                    this.storeLocalData(response.data);
                }else {
                    this.validateStatus = true;
                    this.validateMessage = response.data.message;
                }
                this.setLoadingStatus(false);
                })
                .catch(error => console.log(error))
            }else {
                this.validateStatus = true;
            }
        },
        clearForm(){
            this.userData.email = '';
            this.userData.password = '';
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.userData.email)) {
                return true;
            } else {
                this.validateMessage = "Not a valid email type";
                return false;
            }
        },
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
        directRegister(){
            this.$router.push({
                name : "register"
            })
        },
        directForgotPassword(){
            this.$router.push({
                name : "forgotPassword"
            })
        },
        storeUserInfo(response){
            this.$store.dispatch("setUserData",response.data.user);
            this.$store.dispatch("setToken",response.data.token);
        },
        // store token in local storage
        storeLocalData(data){
            localStorage.setItem("login_token",data.token);
            localStorage.setItem("userData",JSON.stringify(data.user));
        },

        
    },
    mounted () {
        localStorage.setItem('socialiteLogin',false);
        if(this.isLoggedIn){
            this.directHome();
        }
    },
    
}
</script>