<template>
        
        <div class="w-full sm:w-auto max-w-lg mx-auto bg-white dark:bg-zinc-800 shadow px-6 py-4 rounded mt-8 md:mt-20">
            <p class="flex justify-end cursor-pointer group text-zinc-800 dark:text-slate-100">
                <a @click="directRegister" class="hover:text-primary duration-150  flex items-center">Register Here
                    <svg class="ms-1 inline-block group-hover:translate-x-1 duration-150" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-12 6l6-6l-6-6l-1.4 1.4l4.6 4.6l-4.6 4.6L10 18Z"/></svg>
                </a>
        
                </p>
            <img :src="'./images/logo.png'" class="mt-2 w-20 mx-auto rounded  mb-2 " alt="Logo" />
            
            <h4 class=" font-poppins font-medium text-2xl text-center text-zinc-900 dark:text-slate-100">Brain Lab</h4>
            <p class="text-center text-slate-500 dark:text-muted font-medium mb-3">Learn and Create your own quizzes</p>
            <hr class="mb-6 h-[1.5px] bg-zinc-700">
    
    
                <div v-if="validateStatus" class="mb-6 flex items-center bg-slate-50 border-[1.5px] dark:border-zinc-600 dark:bg-zinc-700 dark:text-white py-4 px-6 rounded-md text-red-600">
                    <svg class="me-2 inline-block w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm0-4.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" clip-rule="evenodd"/>
                    </svg>
                    {{validateMessage}}
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
            <p class=" font-bold text-center mb-2">Or</p>
        <div class="flex flex-col justify-center items-center">
            <a href="http://127.0.0.1:8000/auth/google/redirect" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                </svg>
                Sign in with Google
                </a>

                <a href="http://127.0.0.1:8000/auth/github/redirect" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                </svg>
                Sign in with Github
                </a>
        </div>
        </div>
        
    
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'

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
        }
    },
    methods: {
        ...mapActions(["setLoadingStatus"]),
        togglePasswordType() {
            this.showPassword = !this.showPassword;
        },
        login(){
            if(this.validateEmail()){
                this.setLoadingStatus(true);
                axios.post('http://127.0.0.1:8000/api/login',this.userData)
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
}
</script>