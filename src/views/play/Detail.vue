<template>
    <div class="max-w-xl mx-auto mt-3 md:mt-6 mb-4 font-poppins">
        <button @click="returnBack()" class="flex items-center group  text-zinc-700 hover:text-zinc-800 dark:text-slate-200 dark:hover:text-white px-4 py-2 rounded mt-3 font-medium">
            <svg class="me-2 group-hover:-translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.535 3.464C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536ZM14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
            Back
        </button>
    </div>
    
    <div class="bg-white dark:bg-zinc-800 px-6 py-4 rounded shadow max-w-xl mx-auto font-poppins">
        <h4 class=" capitalize rounded-l-sm border-l-4 ps-2 border-rose-500 dark:border-rose-500 text-zinc-900 dark:text-white text-2xl font-semibold mb-3">{{quiz.title}}</h4>
        <div class="mb-3 flex items-center">
            <img class="  rounded-full w-16 h-16 me-2 object-cover" referrerpolicy="no-referrer" :src="imageUrl" alt="profile image">
            <div class="flex flex-col">
                <div class="text-zinc-800 dark:text-slate-100 font-medium flex items-center flex-wrap">
                    <span class=" font-semibold text-lg">{{quiz.user_name?quiz.user_name:"Unknown"}}</span>
                    <!-- <span class="mx-2">|</span>
                    <span class=""><span class=" text-primary dark:text-blue-500">{{quiz.total_count}}</span> quizzes</span>    -->
                    <!-- <span class="mx-2">|</span> -->
                    <!-- <span class="">Played by <span class=" text-primary dark:text-blue-500">{{played_count}}</span> User</span>       -->
                </div>

                <p class="text-gray-600 dark:text-muted font-medium text-sm">{{formatDate(quiz.created_at)}}</p>
            </div>

        </div>    
        <div class="flex space-x-2">
            <div class=" text-xs cursor-pointer text-zinc-800 duration-150 mb-3 px-3 border-[1.5px] border-slate-200 dark:border-zinc-600 dark:text-slate-200 w-fit py-2 rounded-2xl  flex items-center">
                <svg class="me-2 inline-block w-5 h-5 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path fill="currentColor" d="M12 19c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5zm-3-4h6v1.5H9zm3-10c-2.76 0-5 2.24-5 5c0 1.64.8 3.09 2.03 4h5.95A4.985 4.985 0 0 0 17 10c0-2.76-2.24-5-5-5zm2.43 7.5H9.57A3.473 3.473 0 0 1 8.5 10c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.39 1.84-1.07 2.5z"/></svg>

            <span class=" font-semibold  me-1">{{quiz.total_count}}</span>
            quizzes
            </div>
            <div class=" text-xs cursor-pointer text-zinc-800 duration-150 mb-3 px-3 border-[1.5px] border-slate-200 dark:border-zinc-600 dark:text-slate-200 w-fit py-2 rounded-2xl flex items-center">
                <svg class="me-2 inline-block w-4 h-4 "  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                    <path fill="currentColor" d="M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9zm-.1-7.7c.1 0 .1 0 0 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.9 2.8-2.9z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M32.7 16.7c-1.9-1.7-4.4-2.6-7-2.5h-.8c-.2.8-.5 1.5-.9 2.1c.6-.1 1.1-.1 1.7-.1c1.9-.1 3.8.5 5.3 1.6V25h2v-8l-.3-.3z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M23.4 7.8c.5-1.2 1.9-1.8 3.2-1.3c1.2.5 1.8 1.9 1.3 3.2c-.4.9-1.3 1.5-2.2 1.5c-.2 0-.5 0-.7-.1c.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1c2.5 0 4.5-2 4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6 0-3 .8-3.8 2.2c.5.3 1 .7 1.4 1.3z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M12 16.4c-.4-.6-.7-1.3-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6c.6 0 1.2.1 1.7.2z" class="clr-i-outline clr-i-outline-path-4"/><path fill="currentColor" d="M10.3 13.1c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4c-.2.1-.5.1-.7.1c-1.3 0-2.4-1.1-2.4-2.4c0-1.3 1.1-2.4 2.4-2.4c1 0 1.9.6 2.3 1.5c.4-.5 1-1 1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1 1.3-2.8 4-1.5 6.1c.8 1.3 2.2 2.1 3.8 2.1z" class="clr-i-outline clr-i-outline-path-5"/><path fill="currentColor" d="m26.1 22.7l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4c-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4c2.2-.1 4.4.8 6 2.4V30z" class="clr-i-outline clr-i-outline-path-6"/><path fill="none" d="M0 0h36v36H0z"/>
                </svg>
            <span class=" font-semibold  me-1">{{played_count}}</span>
            <span class="me-1" v-if="played_count === 1">user</span> 
            <span class="me-1" v-if="played_count > 1">users</span> 
            played
            </div>
        </div>
        <div class=" font-inter text-sm bg-slate-50 border border-slate-200 dark:border-zinc-600 dark:bg-zinc-700 px-4 py-3 mb-2 rounded text-zinc-600 dark:text-slate-200">
            {{quiz.desc}}
            
        </div>
        <div class="flex items-center space-x-2">

            <button @click="createRoom" class=" font-inter border-[1.5px] border-sky-500 dark:border-sky-500 flex items-center group hover:bg-sky-500 duration-200 dark:hover:bg-sky-500 hover:text-white dark:hover:text-slate-50  text-sky-500 dark:text-sky-500 px-3 py-2 rounded-lg mt-3 font-medium ">
                Multiplayer
                <svg class="ms-2 group-hover:translate-x-1 duration-150 inline-block w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100"><path fill="currentColor" d="M49.947 0C22.354.03 0 22.406 0 50a50 50 0 0 0 20.404 40.21c-.265-2.031-.213-4.128.117-6.202a45.22 45.22 0 0 1-8.511-9.877h12.445c1.182-1.845 2.4-3.67 4.525-5c-1.245-5.1-2.006-10.716-2.146-16.631h1.346a18.653 18.653 0 0 1 1.93-5h-3.243c.212-5.935 1.043-11.554 2.363-16.63H47.5v8.888a13.75 13.75 0 0 1 5 1.804V30.87h19.195c.26.997.495 2.02.715 3.057a19.769 19.769 0 0 1 5.084-.117a76.416 76.416 0 0 0-.639-2.94h13.89a44.747 44.747 0 0 1 3.965 14.028c.58 5.049.591 10.975-1.246 16.771a45.007 45.007 0 0 1-2.286 6.478c1.128 1.187 2.494 2.309 3.867 3.454A50 50 0 0 0 100 50c0-27.614-22.386-50-50-50ZM52.5 5.682c5.268.896 10.302 5.236 14.268 12.437c1.278 2.321 2.42 4.927 3.408 7.75H52.5Zm-5 .197v19.99H30.75c.988-2.823 2.13-5.429 3.408-7.75C37.89 11.341 42.571 7.102 47.5 5.88M35.98 7.232c-2.324 2.352-4.41 5.22-6.203 8.475c-1.68 3.05-3.125 6.467-4.312 10.162H12.01c5.535-8.706 13.975-15.37 23.97-18.637Zm29.41.463c9.398 3.413 17.32 9.868 22.6 18.174H75.455c-1.184-3.695-2.627-7.112-4.307-10.162c-1.676-3.045-3.613-5.749-5.757-8.012M9.257 30.87h14.808c-1.245 5.162-2.008 10.76-2.203 16.631H5.072a44.79 44.79 0 0 1 4.184-16.63ZM5.072 52.5h16.762c.129 5.856.82 11.454 1.994 16.63H9.256A44.79 44.79 0 0 1 5.072 52.5" color="currentColor"/><path fill="currentColor" d="M76 37.769c-8.285 0-15 6.716-15 15c0 8.284 6.715 15 15 15c8.283 0 15-6.716 15-15c0-8.284-6.717-15-15-15zm0 32.223c-16.57 0-24 7.431-24 24v2c.075 3.94 1.817 4.056 5.5 4h37c4.695-.004 5.532.005 5.5-4v-2c0-16.569-7.432-24-24-24M44 43.39c-6.787 0-12.291 5.504-12.291 12.292c0 6.787 5.504 12.289 12.291 12.289c6.787 0 12.29-5.502 12.29-12.29c0-6.787-5.503-12.29-12.29-12.29m0 26.401c-13.575 0-19.664 6.09-19.664 19.664v1.639c.062 3.228 1.489 3.323 4.506 3.277h19.123c-.488-8.088 1.901-16.678 7.851-22.139c-3.012-1.646-6.925-2.441-11.816-2.441"/></svg>
    
            </button>
            <button @click="playQuiz(quiz.quiz_id)" class=" flex items-center group bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500  hover dark:hover:bg-indigo-600  text-white px-3 py-2 rounded-lg mt-3 font-medium ">
                Play
                <svg  class=" ms-2 group-hover:translate-x-1 duration-150 inline-block w-6 h-6 mt-1"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M176 112h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m-72-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m137.48 104.65a36 36 0 0 1-54.94 4.81c-.12-.12-.24-.24-.35-.37L146.48 160h-37l-39.67 45.09l-.35.37A36.08 36.08 0 0 1 44 216a36 36 0 0 1-35.44-42.25a.68.68 0 0 1 0-.14l16.37-84.09A59.88 59.88 0 0 1 83.89 40H172a60.08 60.08 0 0 1 59 49.25v.18l16.37 84.17a.68.68 0 0 1 0 .14a35.74 35.74 0 0 1-5.89 26.91M172 144a44 44 0 0 0 0-88H83.89a43.9 43.9 0 0 0-43.21 36.37v.13L24.3 176.59A20 20 0 0 0 58 194.3l41.92-47.59a8 8 0 0 1 6-2.71Zm59.7 32.59l-8.74-45A60 60 0 0 1 172 160h-4.2l30.2 34.31a20.09 20.09 0 0 0 17.46 5.39a20 20 0 0 0 16.23-23.11Z"/></svg>
    
            </button>
            

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'

export default {
    name : 'Detail',
    computed: {
        ...mapGetters(['getToken']),
    },
    data() {
        return {
            quiz: {},
            imageUrl : '/images/default_user.png',
            played_count : 0,

        }
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        returnBack() {
            this.$router.back();
        },
        getQuiz() {
            this.setLoadingStatus(true);
            axios.post(`http://127.0.0.1:8000/api/quiz/detail`,{
                'quiz_id' : this.$route.params.quiz_id
                },
                {
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                }).then((response) => {
                this.quiz = response.data.quiz;
                this.played_count = response.data.played_count;
                if(response.data.quiz.provider_avatar != null && response.data.quiz.user_image === null){
                    this.imageUrl =  response.data.quiz.provider_avatar;
                }else if(response.data.quiz.user_image != null){
                    this.imageUrl =  'http://127.0.0.1:8000/storage/'+ response.data.quiz.user_image;
                }

                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        formatDate(dateString) {
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options);
        },
        // play quiz 
        playQuiz(quiz_id){
          this.$router.push({
            name :'playQuiz',
            params : {
              quiz_id : quiz_id,
            }
            
          })
        },
        createRoom(){
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire({
                // imageUrl: "../../../public/images/online_2.gif",
                // imageWidth: 300,
                color: `${textColor}`,
                background: `${bgColor}`,
                html: `<img class="rounded dark:mb-3 dark:h-48 w-full h-40 object-cover mx-auto" src="../../../public/images/online_2.gif">
                <p class="mb-2 font-inter text-2xl text-zinc-800 dark:text-slate-100 text-center font-semibold">Online multiplayer</p>
                <p class=" font-inter text-sm text-slate-500 dark:text-muted font-medium">Create Quiz Multiplayer Room to play with friends</p>
                `,
                confirmButtonText: `
                <svg class=" inline-block me-2 hover:scale-110 duration-150 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11z"/></svg>
                Create Room
                `,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: true,
                showConfirmButton :true,
              }).then(result=>{
                if(result.isConfirmed){
                    this.generateRoomCode();
                }
              });
        },
        generateRoomCode(){
            this.setLoadingStatus(true);
            axios.post(`http://127.0.0.1:8000/api/multiplayer/generateRoom`,{
                'quiz_id' : this.$route.params.quiz_id
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
                          room_code : response.data.room.room_code,
                        }
                        
                    }) 
                }
                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
            
        }
    },
    mounted () {
        this.getQuiz();
    },
}
</script>