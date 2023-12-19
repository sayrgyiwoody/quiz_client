<template>
    <div class="max-w-lg mx-auto mt-4 md:mt-10 font-poppins mb-4">
        <button v-if="isCurrentUserHost" @click="deleteRoom"  class="flex items-center group  text-rose-600 hover:text-rose-500 dark:text-rose-500 dark:hover:text-rose-600  py-2 rounded mt-3 font-medium">
          <svg class="me-2 group-hover:scale-110 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16Zm10-6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8Z"/></svg>
            End Room
        </button>
        <button v-else @click="directHome"  class="flex items-center group  text-zinc-700 hover:text-zinc-800 dark:text-slate-200 dark:hover:text-white  py-2 rounded mt-3 font-medium">
          <svg class="me-2 group-hover:-translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.535 3.464C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536ZM14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
          Back Home
      </button>
    </div>
    <div :class="isCurrentUserHost?'pb-14':'pb-5'" class="relative font-inter max-w-lg mx-auto bg-white dark:bg-zinc-800 px-5 pt-3  rounded-xl  shadow">
      <div class="mb-3 flex items-center">
        <img class="  rounded-full w-8 h-8 me-1 object-cover" referrerpolicy="no-referrer" :src="getImageUrl(host)" alt="profile image">
          <div class="text-zinc-800 dark:text-slate-100 font-medium flex items-center flex-wrap">
            <span class=" font-semibold text-sm me-1">{{host.name?host.name:"Unknown"}}</span>
            <span class="text-xs">is the host.</span>
        </div>
      </div> 
      <p class="flex items-center space-x-2 mb-2">
            <!-- <button class="bg-slate-100 dark:bg-zinc-700 p-3 text-zinc-800 dark:text-slate-100 rounded-full">
                <svg class=" w-7 h-7 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linejoin="round"><path stroke-linecap="round" d="M4.4 5.02v2.31m1.156-1.155H3.245"/><path d="m1.256 5.212l-.412 3.71a2.283 2.283 0 0 0 4.311 1.273l.36-.72h2.97l.36.72a2.283 2.283 0 0 0 4.31-1.273l-.411-3.71a3 3 0 0 0-2.982-2.669H4.238a3 3 0 0 0-2.982 2.669Z"/><path stroke-linecap="round" d="M10.466 5.514a.248.248 0 0 1 0-.495m0 .495a.248.248 0 1 0 0-.495M8.733 6.752a.248.248 0 0 1 .495 0m-.495 0a.248.248 0 1 0 .495 0"/></g></svg>
            </button> -->
            <span class=" font-semibold text-2xl text-zinc-800 dark:text-slate-100">Share room code</span>
        </p>
        <p class="text-slate-600 dark:text-muted">Participants to enter the code on <a href="http://localhost:5174/home" class="text-zinc-900 font-semibold dark:text-slate-50 underline hover:text-blue-600 dark:hover:text-blue-500 duration-150">home page</a></p>
        <div class="bg-slate-50 border border-slate-200 dark:border-zinc-600 dark:bg-zinc-700 flex rounded-lg items-center mt-4">
            <!-- <div class="w-full p-2 text-center text-zinc-800 font-semibold dark:text-white tracking-widest text-xl">
                {{ $route.params.room_code }}
            </div> -->
            <input disabled class="disabled:bg-transparent w-full px-2 text-center text-zinc-800 font-semibold dark:text-white tracking-widest text-xl"  v-model="room_code"  ref="roomCode" />
            <button @click="copyRoomCode" class="p-2 bg-sky-500 dark:bg-white rounded dark:hover:bg-slate-100 hover:bg-sky-600 duration-100 text-white dark:hover:text-blue-500 dark:text-zinc-800">
                <svg v-if="copySuccess" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m149.61 85.71l-89.6 88a8 8 0 0 1-11.22 0L10.39 136a8 8 0 1 1 11.22-11.41l32.79 32.2l84-82.5a8 8 0 1 1 11.22 11.42Zm96.1-11.32a8 8 0 0 0-11.32-.1l-84 82.5l-18.83-18.5a8 8 0 0 0-11.21 11.42l24.43 24a8 8 0 0 0 11.22 0l89.6-88a8 8 0 0 0 .11-11.32Z"/></svg>
                <svg v-else class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"/></svg>
            </button>
        </div>
        <p v-if="copySuccess" class="text-zinc-800 dark:text-slate-100 text-sm mt-2 font-medium">Copied to clipboard!</p>
        <div v-if="isCurrentUserHost" class="absolute -bottom-8 w-full flex justify-center left-0">
            <button class=" text-white mb-4 border-b-4 shadow-lg hover:border-y-2 border-blue-800 bg-primary flex items-center justify-center px-16 md:px-20 font-semibold text-xl py-2  rounded-lg dark:text-white group">
          
                START
             </button>
        </div>
        
    </div>
    <div class="max-w-3xl min-h-[200px] pt-12 px-8 flex flex-col items-center justify-center mx-auto bg-white dark:bg-zinc-800 pb-4 mt-16 md:mt-20 rounded-lg shadow relative font-inter">
        <div class="absolute -top-6 w-full flex justify-center left-0">
            <div class=" flex items-center space-x-3 border dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 rounded-lg dark:text-white">
                <svg class=" inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M64.12 147.8a4 4 0 0 1-4 4.2H16a8 8 0 0 1-7.8-6.17a8.35 8.35 0 0 1 1.62-6.93A67.79 67.79 0 0 1 37 117.51a40 40 0 1 1 66.46-35.8a3.94 3.94 0 0 1-2.27 4.18A64.08 64.08 0 0 0 64 144c0 1.28 0 2.54.12 3.8m182-8.91A67.76 67.76 0 0 0 219 117.51a40 40 0 1 0-66.46-35.8a3.94 3.94 0 0 0 2.27 4.18A64.08 64.08 0 0 1 192 144c0 1.28 0 2.54-.12 3.8a4 4 0 0 0 4 4.2H240a8 8 0 0 0 7.8-6.17a8.33 8.33 0 0 0-1.63-6.94Zm-89 43.18a48 48 0 1 0-58.37 0A72.13 72.13 0 0 0 65.07 212A8 8 0 0 0 72 224h112a8 8 0 0 0 6.93-12a72.15 72.15 0 0 0-33.74-29.93Z"/></svg>
                <span>{{ participants.length }} players</span>
            </div>
        </div>
        <div class="flex flex-wrap justify-center items-center">
            <img v-for="(participant,index) in participants" :key="index" class=" border-2 bg-slate-100 cursor-pointer dark:bg-zinc-700 border-slate-200 dark:border-zinc-600 mb-3 animate__animated animate__bounceIn rounded-full w-16 h-16 me-2 object-cover" referrerpolicy="no-referrer" :src="getImageUrl(participant)" alt="profile image">
          </div>
        

        <div  class="waiting-loader mt-3 mb-5 dark:sr-only">
            <span class="bar bar-light"></span>
            <span class="bar bar-light"></span>
            <span class="bar bar-light"></span>
        </div>
        <div  class="waiting-loader dark:mt-3 dark:mb-5 sr-only dark:not-sr-only">
            <span class="bar bar-dark"></span>
            <span class="bar bar-dark"></span>
            <span class="bar bar-dark"></span>
        </div>
        <p v-if="participants.length > 0" class="text-center text-slate-600 dark:text-muted">Wait for the host to start the game.</p>
        
        <p v-else class="text-center text-slate-600 dark:text-muted">No participants have joined, Ask them to join using the room code above.</p>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            copySuccess: false,
            participants : [],
            host : {},
            isCurrentUserHost : null,
        }
    },
    computed: {
      ...mapGetters(["getToken"]),
        room_code() {
            return this.$route.params.room_code;
        }
    },
    methods: {
      ...mapActions(["setLoadingStatus"]),
      getImageUrl(p){
        if(p.provider_avatar != null && p.profile_photo_path === null){
            return p.provider_avatar;
        }else if(p.profile_photo_path != null){
            return 'http://127.0.0.1:8000/storage/'+ p.profile_photo_path;
        }else {
          return'/images/default_user.png' ;
        }
      },
      async copyRoomCode() {
          const element = this.$refs.roomCode;
          element.select();
          element.setSelectionRange(0, 99999);

          try {
            await navigator.clipboard.writeText(this.room_code);
            this.copySuccess = true;

            // Reset copySuccess after a short delay
            setTimeout(() => {
            this.copySuccess = false;
            }, 1500);
          } catch (error) {
            console.error("Error copying text to clipboard:", error);
          }
        },
        getRoomInfo(){
          this.setLoadingStatus(true);
          axios.post(`http://127.0.0.1:8000/api/multiplayer/getRoomInfo`,{
                'room_code' : this.room_code
                },
                {
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                }).then((response) => {
                  if(response.data.status === true){
                    this.isCurrentUserHost = response.data.isCurrentUserHost;
                    this.host = response.data.host;
                    this.participants = response.data.participants;
                  }else {
                    this.directHome();
                  }
                  this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        deleteRoom(){
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire({
                html: `<p class="text-center text-xl font-semibold">Are you Sure?</p"><p class="text-center">This room will be deleted.</p>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                color: `${textColor}`,
                background: `${bgColor}`,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.endRoom();
                }
              })
          
        },
        endRoom(){
          axios.post(`http://127.0.0.1:8000/api/multiplayer/endRoom`,{
                'room_code' : this.room_code
                },
                {
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                }).then((response) => {
                  if(response.data.status === true){
                    this.directHome();
                  }
                  this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        directHome(){
            this.$router.push({
                name :'home',
            }) 
        }
    },
    mounted () {
      this.getRoomInfo();
      window.Echo.channel(`room.${this.room_code}`)
        .listen('ParticipantJoined',(e)=>{
          this.participants.push(e.participant);
        });
    },
}
</script>

<style  scoped>
.waiting-loader {
    display: flex;
    align-items: center;
  }
  
  .bar {
    display: inline-block;
    width: 3px;
    height: 20px;
    border-radius: 10px;
  }

  .bar-light {
    background-color: rgba(40, 40, 40, 0.5);
    animation: scale-up4 1s linear infinite;
  }

  .bar-dark {
    background-color: rgba(255, 255, 255, .5);
    animation: scale-up4-dark 1s linear infinite;
  }
  
  .bar:nth-child(2) {
    height: 35px;
    margin: 0 5px;
    animation-delay: .25s;
  }
  
  .bar:nth-child(3) {
    animation-delay: .5s;
  }
  
  @keyframes scale-up4-dark {
    20% {
      background-color: #ffff;
      transform: scaleY(1.5);
    }
  
    40% {
      transform: scaleY(1);
    }
  }

  @keyframes scale-up4 {
    20% {
      background-color: #000000;
      transform: scaleY(1.5);
    }
  
    40% {
      transform: scaleY(1);
    }
  }
</style>