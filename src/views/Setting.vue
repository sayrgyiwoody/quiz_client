<template>
    <div class="flex md:mt-6 flex-col items-center justify-center animate__animated animate__fadeIn">
        <div class="w-full mt-4 p-6 md:w-2/4 bg-white dark:bg-zinc-800 shadow-sm rounded">
    
            <h4 class="text-zinc-900 dark:text-slate-100 ms-3 mb-2 text-xl">Change Your Account Password</h4>
            <form @submit.prevent="changePassword" class="px-3 py-2">
                <div v-if="formStatus === true && message" class="flex items-center border-[1.5px] dark:border-zinc-700 text-green-500 rounded px-4 py-3 mb-4">
                    {{ message }}
                    <svg class=" inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z"/></svg>
                </div>
                <div v-if="formStatus === false && message" class="flex flex-col border-[1.5px] dark:border-zinc-700 text-red-600 rounded px-4 py-3 mb-4">
                    <p v-for="(m,index) in message" :key="index">
                    <svg class=" inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
                        
                        {{ m[0] }} </p>
                </div>
                <div class="mb-5">
                    <div class="relative z-0 w-full group input-gp">
                    <input name="oldPassword" v-model="passwords.oldPassword" :type="showPassword.oldPassword?'text':'password'" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute bg-white dark:bg-zinc-800 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Old Password</label>
                    <i @click="togglePassword('oldPassword')" :class="showPassword.oldPassword?'fa-eye-slash':'fa-eye'" class="fa-solid cursor-pointer text-slate-600 dark:text-zinc-600 eye-icon absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                    </div>
                    
                </div>
                <div class="mb-5">
                    <div class="relative z-0 w-full group input-gp">
                    <input name="newPassword" v-model="passwords.newPassword" :type="showPassword.newPassword?'text':'password'" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute bg-white dark:bg-zinc-800 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">New Password</label>
                    <i @click="togglePassword('newPassword')" :class="showPassword.newPassword?'fa-eye-slash':'fa-eye'" class="fa-solid cursor-pointer text-slate-600 dark:text-zinc-600 eye-icon absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                    </div>
                    
                </div>
                <div class="mb-5">
                    <div class="relative z-0 w-full group input-gp">
                    <input name="confirmPassword" v-model="passwords.confirmPassword" :type="showPassword.confirmPassword?'text':'password'" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label class="peer-focus:font-medium absolute bg-white dark:bg-zinc-800 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Confirm Password</label>
                    <i @click="togglePassword('confirmPassword')" :class="showPassword.confirmPassword?'fa-eye-slash':'fa-eye'" class="fa-solid cursor-pointer text-slate-600 dark:text-zinc-600 eye-icon absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                    </div>
                </div>
                <a href="" class="text-blue-500 hover:text-blue-600 duration-100">Forgotten your password?</a>
                <button type="submit" class="font-medium flex items-center mt-2 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-zinc-700 dark:hover:bg-zinc-600 focus:outline-none dark:focus:ring-blue-800">Change Password</button>
    
            </form>
    
        </div>
        <div class="w-full mt-4 p-6 md:w-2/4 bg-white dark:bg-zinc-800 shadow-sm rounded">
            <h4 class="text-red-600 dark:text-red-600 ms-3 text-xl font-semibold">Danger Zone</h4>
            <p class="ms-3 mb-3 text-zinc-600 dark:text-muted">Permanently delete your account.</p>
    
    
    <!-- Modal toggle -->
    <div class="flex justify-center">
        <button @click="deleteAccount" class=" text-lg w-2/3  flex items-center justify-center mt-2 font-medium text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300  rounded-lg py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800" type="button">
            Delete Account
        </button>
    </div>
  
        </div>
     </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'

export default {
    data() {
        return {
            darkMode: localStorage.getItem('darkMode') === 'true',
            passwords: {
                'oldPassword' : '',
                'newPassword' : '',
                'confirmPassword' : ''
            },
            showPassword : {
                'oldPassword' : false,
                'newPassword' : false,
                'confirmPassword' : false
            },
            formStatus : null,
            message : '',
        
        }
    },
    computed: {
        ...mapGetters(['getToken']),

    },
    methods: {
        ...mapActions(['setLoadingStatus','setToken']),
        changePassword() {
            if(this.validateForm()){
                this.setLoadingStatus(true);
            axios.post(`http://127.0.0.1:8000/api/account/changePassword`,{
                'oldPassword' : this.passwords.oldPassword,
                'newPassword' : this.passwords.newPassword,
                'confirmPassword' : this.passwords.confirmPassword,
            },{
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                }).then((response) => {
                    this.message = response.data.message;
                    this.formStatus = response.data.status == 'success' ? true: false;
                    if(response.data.status == 'success'){
                        this.clearForm();
                    }
                    setTimeout(() => {
                        this.formStatus = null;
                    }, 3000);
                    
                    this.setLoadingStatus(false);
            }).catch(error => console.log(error));
            }
        },
        clearForm(){
            this.passwords.oldPassword = '';
            this.passwords.newPassword = '';
            this.passwords.confirmPassword = '';
        },
        validateForm(){
            if(this.passwords.newPassword === this.passwords.confirmPassword){
                return true;
            }else {
                this.formStatus = false;
                setTimeout(() => {
                    this.formStatus = null;
                }, 3000);
                this.message = {"confirmPassword":["The confirm password field must match new password."]};
                return false;
            }
        },
        togglePassword(fieldName){
            if(fieldName == 'oldPassword'){
                this.showPassword.oldPassword = !(this.showPassword.oldPassword);
            }else if(fieldName == 'newPassword'){
                this.showPassword.newPassword = !(this.showPassword.newPassword);
            }else if(fieldName == 'confirmPassword'){
                this.showPassword.confirmPassword = !(this.showPassword.confirmPassword);
            }
        },
        deleteAccount() {
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire({
                html: `<p class="text-center text-xl font-semibold mb-2">Are you Sure?</p"><p class="text-center">Your account will be permanently deleted.</p>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                color: `${textColor}`,
                background: `${bgColor}`,
              }).then((result) => {
                if (result.isConfirmed) {
                    this.setLoadingStatus(true);
                    axios.post(`http://127.0.0.1:8000/api/account/deleteAccount`,null,{
                            headers : {
                                'Authorization' : `Bearer ${this.getToken}`,
                            }
                        }).then((response) => {
                            
                            this.logout();
                    }).catch(error => console.log(error)); 
                }
              })
            
            
        },
        logout(){
            localStorage.removeItem("login_token");
            this.$store.dispatch("setToken",null);
            this.$store.dispatch("setUserData",null);
            this.directLogin();
      },
      directLogin() {
         this.$router.push({
            name : "login"
         })
      },
        
    },
}
</script>