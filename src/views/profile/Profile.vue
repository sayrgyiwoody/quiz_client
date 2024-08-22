<template>
    <div class="flex mt-6 flex-col items-center justify-center animate__animated animate__fadeIn">
        <form @submit.prevent="updateProfileInfo" class="w-full px-6 py-3 md:px-7 md:py-4 max-w-3xl bg-white dark:bg-zinc-800 shadow-sm rounded">
            <h4 class="text-center text-2xl font-semibold text-zinc-900 dark:text-white">Personal Profile</h4>
            <p class="text-center text-zinc-600 dark:text-muted font-medium mb-4">Update your own personal informations</p>
            <hr class="mb-6  bg-zinc-900 h-[1.6px]">
            <div class="md:grid md:grid-cols-3 md:space-x-6">
                <div class="">
                        <img id="profile-image" class="object-cover w-full h-60 rounded-md" :src="imageUrl" alt="">
                    
                    <div class="mt-3 mb-5">
                        <div
                          @dragover.prevent
                          @drop.prevent="handleDrop"
                          class="flex items-center justify-center w-full"
                        >
                          <label
                            for="dropzone-file"
                            class="relative flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-600"
                          >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                ></path>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"
                                ><span class="font-semibold">Click to upload</span> or drag and drop</p
                              >
                            </div>
                            <input
                              @change="handleImageChange"
                              name="image"
                              id="dropzone-file"
                              type="file"
                              class="image-input absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </label>
                        </div>
                        <p v-if="errorMsg.image" class=" text-red-600 text-sm mt-2">{{ errorMsg.image[0] }}</p>

                      </div>
    
    
                    <div class="flex items-center space-x-3 justify-center">
                        <div class="flex items-center">
                            <input :checked="userData.gender === 'male'" id="default-radio-1" type="radio" v-model="userData.gender" value="male" name="gender" class=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div class="flex items-center">
                            <input :checked="userData.gender === 'female'"  id="default-radio-2" type="radio" v-model="userData.gender" value="female" name="gender" class=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                        <div class="flex items-center">
                            <input :checked="userData.gender === 'other'"  id="default-radio-3" type="radio" v-model="userData.gender" value="other" name="gender" class=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-3" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                        </div>
                    </div>
                    <p v-if="errorMsg.gender" class=" text-red-600 text-sm mt-2">{{ errorMsg.gender[0] }}</p>

                </div>
                <div class=" col-span-2">
    
                    <div class="relative z-0 w-full mb-6 group mt-4">
                        <input v-model="userData.name" name="name" type="text" class=" border-slate-300 dark:border-zinc-700 dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none  border-[1.5px]  rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="bg-white dark:bg-zinc-800 peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Name</label>
                            <p v-if="errorMsg.name" class=" text-red-600 text-sm mt-2">{{ errorMsg.name[0] }}</p>
                    </div>
                    <div class="relative z-0 w-full mb-6 group mt-6">
                        <input v-model="userData.email" name="email" type="text" class="read-only:-z-10  border-slate-300 dark:border-zinc-700 dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px]  rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="bg-white dark:bg-zinc-800 peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Email</label>
                            <p v-if="errorMsg.email" class=" text-red-600 text-sm mt-2">{{ errorMsg.email[0] }}</p>
                    </div>
    
    
    
                    <div class="relative z-0 w-full mb-4 group mt-6">
                        <input v-model="userData.birthday" name="birthday" type="date" class=" border-slate-300 dark:border-zinc-700 dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="bg-white dark:bg-zinc-800 peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Birthday</label>
                                <p v-if="errorMsg.birthday" class=" text-red-600 text-sm mt-2">{{ errorMsg.birthday[0] }}</p>
                    </div>
                    <div class="relative z-0 w-full mb-4 group mt-6">
                        <textarea name="address"  cols="30" rows="8" class=" border-slate-300 dark:border-zinc-700 dark:text-white relative block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required v-model="userData.address"></textarea>
                        <label class="bg-white dark:bg-zinc-800 peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Address</label>
                        <p v-if="errorMsg.address" class=" text-red-600 text-sm mt-2">{{ errorMsg.address[0] }}</p>
                    </div>
                </div>
    
            </div>
    
    
            <button type="submit" class="font-semibold flex items-center mt-2 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-zinc-700 dark:hover:bg-zinc-600 focus:outline-none dark:focus:ring-blue-800"><svg class=" inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16v-6H5l7-7l7 7h-4v6H9m-4 4v-2h14v2H5Z"/></svg>Update</button>
        </form>
     </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'

export default {
    data() {
        return {
            userData : {

            },
            imageUrl : '/images/default_user.png',
            file : null,
            errorMsg : {
                image : '',
                name : '',
                email : '',
                gender : '',
                birthday : '',
                address : '',
            },
        }
    },
    computed: {
        ...mapGetters(['getToken','getUserId','getUserData']),
        
    },
    methods: {
        ...mapActions(['setLoadingStatus','setUserId','setUserData']),
        updateImageUrl(){
            if(this.userData.provider_avatar && this.userData.profile_photo_path === null ){
                this.imageUrl = this.userData.provider_avatar;
            }else if(this.userData.profile_photo_path){
                this.imageUrl =  `${import.meta.env.VITE_API_BASE_URL}/storage/`+ this.userData.profile_photo_path;
            }
        },
        handleDrop(event) {
            event.preventDefault();

            const file = event.dataTransfer.files[0];
            this.handleFile(file);
        },
        handleImageChange(event) {
            const file = event.target.files[0];
            this.handleFile(file);
        },
        
        handleFile(file) {
            if (file) {
                const reader = new FileReader();

                reader.onload = () => {
                
                this.imageUrl = reader.result;
                };

                reader.readAsDataURL(file);
                this.file = file;
            }
        },
        getProfileInfo() {
            this.userData = JSON.parse(localStorage.getItem('userData'))?JSON.parse(localStorage.getItem('userData')):this.getUserData;
            this.updateImageUrl();
            // this.setLoadingStatus(true);
            // axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/account/getProfileInfo`,{
            //         headers : {
            //             'Authorization' : `Bearer ${this.getToken}`,
            //         }
            //     }).then((response) => {
            //         this.userData = response.data.user;
            //         this.updateImageUrl();
            //         this.setLoadingStatus(false);
            // }).catch(error => console.log(error));
        },
        updateProfileInfo() {
            this.setLoadingStatus(true);
            let formData = new FormData();
            
            // Append JSON data
            formData.append('id', this.userData.id);
            formData.append('name', this.userData.name);
            formData.append('email', this.userData.email);
            formData.append('gender', this.userData.gender);
            formData.append('birthday', this.userData.birthday);
            formData.append('address', this.userData.address);

            // Append the file
            if(this.file !== null){
                formData.append('image', this.file);
            }

            axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/account/updateProfileInfo`,formData , {    
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${this.getToken}`,
                    },
                })
                .then(response => {
                    if(response.data.status == 'success'){
                        this.showAlert(response.data.message,response.data.status);
                        this.setUserData(response.data.userInfo[0]);
                        this.storeLocalData(response.data.userInfo[0]);
                        this.errorMsg = {};
                    }else {
                        this.errorMsg = response.data.errors;
                    }
                    this.setLoadingStatus(false);
                })
                .catch(error => {
                    console.error(error);
                    this.setLoadingStatus(false);
                });
        },
        showAlert(message,icon){
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire(
                        {
                            html: `${message}`,
                            icon: icon,
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            color: `${textColor}`,
                            background: `${bgColor}`,
                        }
                      )
        },
        storeLocalData(data){
            localStorage.setItem("userData",JSON.stringify(data));
        },
        
    },
    mounted() {
        this.getProfileInfo();
    },
    
    
}
</script>