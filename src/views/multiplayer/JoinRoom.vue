<template>
    <div class="max-w-lg mx-auto mt-4 md:mt-10 font-poppins mb-4">
        <button @click="returnBack()" class="flex items-center group  text-zinc-700 hover:text-zinc-800 dark:text-slate-200 dark:hover:text-white  py-2 rounded mt-3 font-medium">
            <svg class="me-2 group-hover:-translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.535 3.464C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536ZM14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
            Back
        </button>
    </div>
    <div class="animate__animated animate__bounceIn max-w-lg mx-auto mt-4  bg-white shadow dark:bg-zinc-800 px-5 py-4 rounded-lg font-inter">
        <h4 class=" text-xl font-medium text-zinc-800 dark:text-slate-100 mb-4 px-1">Join Room to play multiplayer</h4>
        <p v-if="errorMsg" class="animate__animated animate__bounceIn text-slate-700 dark:text-slate-200 font-medium text-sm p-2 border rounded mb-4 bg-slate-100 dark:bg-zinc-700 dark:border-zinc-600">
            <svg class=" inline-block me-1 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm16-40a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8Zm-32-92a12 12 0 1 1 12 12a12 12 0 0 1-12-12Z"/></svg>
            {{ errorMsg }}
        </p>
        <form @submit.prevent="joinRoom">
            <div class="relative   mb-4 ">
                <input v-model="room_code" type="text" id="floating_filled" class="bg-white text-zinc-900 dark:text-white block rounded px-4 pb-2.5 pt-7 w-full text-sm border-0 shadow dark:border-[1.5px] dark:border-zinc-700 dark:bg-zinc-800  appearance-none peer" placeholder=" " />
                <label for="floating_filled" class=" peer-valid:border-b peer-valid:mt-1 peer-focus:border-b pb-1 border-zinc-800 dark:border-zinc-500 absolute text-sm text-zinc-800 dark:text-slate-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter Room Code</label>
                <i @click="pasteText" :class="pasteSuccess?'fa-solid fa-check-double':'fa-regular fa-paste'" class="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                
            </div>
            <button type="submit" class=" font-semibold w-full border-b-4 shadow-lg hover:border-y-2 border-blue-800 bg-primary flex items-center justify-center px-6 py-2 text-gray-900 rounded-lg dark:text-white group">
                <svg class="text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M3 4a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 14 4v5a1.5 1.5 0 0 1-1.5 1.5h-4v-1h4A.5.5 0 0 0 13 9V4a.5.5 0 0 0-.5-.5h-8A.5.5 0 0 0 4 4h-.5c-.173 0-.34.022-.5.063V4Zm11.5 8.5h-6v-1h6a.5.5 0 0 1 0 1Zm-10 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-3-6A1.5 1.5 0 0 1 3 5h3a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 6 14H3a1.5 1.5 0 0 1-1.5-1.5v-6ZM3 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6A.5.5 0 0 0 6 6H3Z"/></svg>
                <span class="ml-3 text-white">Join</span>
             </button>
        </form>
        
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            room_code: '',
            pasteSuccess : false,
            errorMsg : '',
        }
    },
    computed: {
        ...mapGetters(["getToken"]),
    },
    methods: {
        ...mapActions(["setLoadingStatus"]),
        returnBack() {
            this.$router.back();
        },
        async pasteText() {
            try {
                const text = await navigator.clipboard.readText();
                this.room_code = text;
                this.pasteSuccess = true;
                setTimeout(() => {
                    this.pasteSuccess = false;
                }, 1500);
            } catch (error) {
                alert("Error reading clipboard:", error);
            }
        },
        joinRoom(){
            this.errorMsg = '';
            if(this.room_code === '' || this.room_code === null || this.room_code === undefined){
                this.errorMsg = "Please fill room code";
            }else{
                this.setLoadingStatus(true);
                axios.post(`http://127.0.0.1:8000/api/multiplayer/joinRoom`,{
                    'room_code' : this.room_code
                    },
                    {
                        headers : {
                            'Authorization' : `Bearer ${this.getToken}`,
                        }
                    }).then((response) => {         
                        if(response.data.status === true){
                            this.$router.push({
                                name :'waitingRoom',
                                params : {
                                room_code : this.room_code,
                                }
                                
                            }) 
                        }else {
                            this.errorMsg = response.data.message;
                        }
                        this.setLoadingStatus(false);
                }).catch(error => console.log(error));
            }
            
        },
        
    },
}
</script>