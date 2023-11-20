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