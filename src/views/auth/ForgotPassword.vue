<template>
    <div class=" font-poppins animate__animated animate__bounceIn mt-6 flex items-center justify-center flex-col">
        <a @click="returnBack" class="group w-full max-w-lg flex items-center text-zinc-900 dark:text-slate-100 dark:hover:text-primary hover:text-primary duration-150">
            <svg class="me-1 group-hover:-translate-x-1 duration-150" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-3.29 13.59L14.29 18l-6-6l6-6l1.42 1.41L11.12 12l4.59 4.59Z"/></svg>Back
        </a>

        <div class="max-w-lg mt-4 p-6  bg-white dark:bg-zinc-800 shadow-sm rounded">
            
            <p class=" text-zinc-900 dark:text-slate-100 mb-3 text-sm border-slate-300 dark:border-zinc-700">Forgot your password? No problem. Just request password reset link for your email address and we will email you a password reset link that will allow you to choose a new one.</p>
            <div v-if="message" :class="validateEmail? 'bg-rose-500' : 'bg-emerald-500'" class="animate__animated animate__bounceIn  text-white rounded-lg px-4 py-2 mb-4 w-full">
                <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>
                {{ message }}
            </div>
            <form @submit.prevent="requestPassword" class="mt-5">
                <div class="relative z-0 w-full group input-gp">
                <input name="email" v-model="email" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label class="peer-focus:font-medium absolute bg-white dark:bg-zinc-800 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 text-zinc-900  origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Your Email</label>
                </div>
                    <p class=" text-red-600 text-sm mt-2"></p>
                <button type="submit" class="font-medium flex items-center mt-3 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 dark:bg-zinc-700 dark:hover:bg-zinc-600 focus:outline-none dark:focus:ring-blue-800">Request Password Reset Link</button>
    
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'

export default {
    name : 'ForgotPassword',
    data() {
        return {
            email : '',
            validateEmail : false,
            message : '',
            
        }
    },
    
    methods: {
        ...mapActions(["setLoadingStatus"]),
        returnBack() {
            this.$router.back();
        },
       requestPassword(){
        this.setLoadingStatus(true);
        axios.post('http://127.0.0.1:8000/api/requestPassword',
                {
                    email : this.email,
                }
                )
                .then((response) => {
                    this.setLoadingStatus(false);
                    if(response.data.status === true){
                        this.validateEmail = false;
                        this.message = response.data.message;
                    }else {
                        this.message = response.data.errors.email[0];
                        this.validateEmail = true;
                    }
                })
                .catch(error => {
                    this.setLoadingStatus(false);
                    console.log(error);
                }
                );
       },
    },
}
</script>