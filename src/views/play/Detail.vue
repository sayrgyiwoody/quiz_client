<template>
    <div class="max-w-xl mx-auto mt-3 md:mt-6 mb-4">
        <button @click="returnBack()" class="flex items-center group  text-zinc-700 hover:text-zinc-800 dark:text-slate-200 dark:hover:text-white px-4 py-2 rounded mt-3 font-medium">
            <svg class="me-2 group-hover:-translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.535 3.464C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536ZM14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
            Back
        </button>
    </div>
    
    <div class="bg-white dark:bg-zinc-800 px-6 py-4 rounded shadow max-w-xl mx-auto ">
        <h4 class=" capitalize rounded-l-sm border-l-4 ps-2 border-rose-500 dark:border-rose-500 text-zinc-900 dark:text-white text-2xl font-semibold mb-3">{{quiz.title}}</h4>
        <div class="mb-3 flex items-center">
            <img class="rounded-full w-16 h-16 me-2 object-cover" :src="imageUrl" alt="profile image">
            <div class="flex flex-col">
                <div class="text-zinc-800 dark:text-slate-100 font-medium flex items-center flex-wrap">
                    <span class=" font-semibold text-lg">{{quiz.user_name}}</span>
                    <!-- <span class="mx-2">|</span>
                    <span class=""><span class=" text-primary dark:text-blue-500">{{quiz.total_count}}</span> quizzes</span>    -->
                    <!-- <span class="mx-2">|</span> -->
                    <!-- <span class="">Played by <span class=" text-primary dark:text-blue-500">{{played_count}}</span> User</span>       -->
                </div>

                <p class="text-gray-600 dark:text-muted font-medium text-sm">{{formatDate(quiz.created_at)}}</p>
            </div>

        </div>    
        <div class="flex space-x-2">
            <div class=" text-sm cursor-pointer text-white duration-150 mb-3 px-3 bg-indigo-500 hover:bg-indigo-600 w-fit py-2 rounded  flex items-center">
                <svg class="me-2 inline-block w-6 h-6 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path fill="currentColor" d="M12 19c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5zm-3-4h6v1.5H9zm3-10c-2.76 0-5 2.24-5 5c0 1.64.8 3.09 2.03 4h5.95A4.985 4.985 0 0 0 17 10c0-2.76-2.24-5-5-5zm2.43 7.5H9.57A3.473 3.473 0 0 1 8.5 10c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.39 1.84-1.07 2.5z"/></svg>

            <span class=" font-semibold  me-1">{{quiz.total_count}}</span>
            quizzes
            </div>
            <div class=" text-sm cursor-pointer text-white duration-150 mb-3 px-3 bg-emerald-500 hover:bg-emerald-600 w-fit py-2 rounded  flex items-center">
                <svg class="me-2 inline-block w-6 h-6 "  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                    <path fill="currentColor" d="M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9zm-.1-7.7c.1 0 .1 0 0 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.9 2.8-2.9z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M32.7 16.7c-1.9-1.7-4.4-2.6-7-2.5h-.8c-.2.8-.5 1.5-.9 2.1c.6-.1 1.1-.1 1.7-.1c1.9-.1 3.8.5 5.3 1.6V25h2v-8l-.3-.3z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M23.4 7.8c.5-1.2 1.9-1.8 3.2-1.3c1.2.5 1.8 1.9 1.3 3.2c-.4.9-1.3 1.5-2.2 1.5c-.2 0-.5 0-.7-.1c.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1c2.5 0 4.5-2 4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6 0-3 .8-3.8 2.2c.5.3 1 .7 1.4 1.3z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M12 16.4c-.4-.6-.7-1.3-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6c.6 0 1.2.1 1.7.2z" class="clr-i-outline clr-i-outline-path-4"/><path fill="currentColor" d="M10.3 13.1c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4c-.2.1-.5.1-.7.1c-1.3 0-2.4-1.1-2.4-2.4c0-1.3 1.1-2.4 2.4-2.4c1 0 1.9.6 2.3 1.5c.4-.5 1-1 1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1 1.3-2.8 4-1.5 6.1c.8 1.3 2.2 2.1 3.8 2.1z" class="clr-i-outline clr-i-outline-path-5"/><path fill="currentColor" d="m26.1 22.7l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4c-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4c2.2-.1 4.4.8 6 2.4V30z" class="clr-i-outline clr-i-outline-path-6"/><path fill="none" d="M0 0h36v36H0z"/>
                </svg>
            <span class=" font-semibold  me-1">{{played_count}}</span>
            <span class="me-1" v-if="played_count === 1">user</span> 
            <span class="me-1" v-if="played_count > 1">users</span> 
            played
            </div>
            <!-- <div class=" text-sm cursor-pointer text-white duration-150 mb-3 px-3 bg-amber-500 hover:bg-amber-600 w-fit py-2 rounded  flex items-center">
                <svg class="me-2 inline-block w-6 h-6 "  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36">
                    <path fill="currentColor" d="M17.9 17.3c2.7 0 4.8-2.2 4.8-4.9s-2.2-4.8-4.9-4.8S13 9.8 13 12.4c0 2.7 2.2 4.9 4.9 4.9zm-.1-7.7c.1 0 .1 0 0 0c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.8-2.9 2.8c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.9 2.8-2.9z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M32.7 16.7c-1.9-1.7-4.4-2.6-7-2.5h-.8c-.2.8-.5 1.5-.9 2.1c.6-.1 1.1-.1 1.7-.1c1.9-.1 3.8.5 5.3 1.6V25h2v-8l-.3-.3z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M23.4 7.8c.5-1.2 1.9-1.8 3.2-1.3c1.2.5 1.8 1.9 1.3 3.2c-.4.9-1.3 1.5-2.2 1.5c-.2 0-.5 0-.7-.1c.1.5.1 1 .1 1.4v.6c.2 0 .4.1.6.1c2.5 0 4.5-2 4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6 0-3 .8-3.8 2.2c.5.3 1 .7 1.4 1.3z" class="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M12 16.4c-.4-.6-.7-1.3-.9-2.1h-.8c-2.6-.1-5.1.8-7 2.4L3 17v8h2v-7.2c1.6-1.1 3.4-1.7 5.3-1.6c.6 0 1.2.1 1.7.2z" class="clr-i-outline clr-i-outline-path-4"/><path fill="currentColor" d="M10.3 13.1c.2 0 .4 0 .6-.1v-.6c0-.5 0-1 .1-1.4c-.2.1-.5.1-.7.1c-1.3 0-2.4-1.1-2.4-2.4c0-1.3 1.1-2.4 2.4-2.4c1 0 1.9.6 2.3 1.5c.4-.5 1-1 1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1 1.3-2.8 4-1.5 6.1c.8 1.3 2.2 2.1 3.8 2.1z" class="clr-i-outline clr-i-outline-path-5"/><path fill="currentColor" d="m26.1 22.7l-.2-.3c-2-2.2-4.8-3.5-7.8-3.4c-3-.1-5.9 1.2-7.9 3.4l-.2.3v7.6c0 .9.7 1.7 1.7 1.7h12.8c.9 0 1.7-.8 1.7-1.7v-7.6zm-2 7.3H12v-6.6c1.6-1.6 3.8-2.4 6.1-2.4c2.2-.1 4.4.8 6 2.4V30z" class="clr-i-outline clr-i-outline-path-6"/><path fill="none" d="M0 0h36v36H0z"/>
                </svg>
            <span class=" font-semibold  me-1">{{quiz.played_count}}</span>
            <span class="me-1" v-if="quiz.played_count === 1">time</span> 
            <span class="me-1" v-if="quiz.played_count > 1">times</span> 
            played
            </div> -->
        </div>
        <div class="bg-slate-50 dark:bg-zinc-700 px-4 py-3 mb-2 rounded text-zinc-600 dark:text-slate-200">
            {{quiz.desc}}
            
        </div>
        <div class="flex justify-between items-center">

            
            <button @click="playQuiz(quiz.quiz_id)" class=" flex items-center group bg-primary hover:bg-primary_hover text-white px-12 py-2 rounded mt-3 font-medium text-xl">
                Play Now
                <svg class="ms-2 group-hover:translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M135.123 204.568c-10.688 0-19.343 8.717-19.343 19.441 0 10.727 8.655 19.447 19.343 19.447 10.641 0 19.297-8.721 19.297-19.447 0-10.724-8.656-19.441-19.297-19.441z" fill="currentColor"/><path d="M466.279 248.866c-21.157-88.471-43.631-135.489-88.454-148.83C368.06 97.135 359.748 96 352.076 96c-27.598 0-46.938 14.683-96.08 14.683-49.174 0-68.502-14.681-96.062-14.683-7.665 0-15.963 1.135-25.721 4.036-44.869 13.341-67.342 60.359-88.461 148.83-21.181 88.473-17.334 152.363 7.679 164.289C57.502 415.1 61.662 416 65.885 416c21.694 0 45.139-23.838 67.659-52.047C159.198 331.848 165.658 331 243.822 331h24.343c78.147 0 84.628.846 110.282 32.953 22.526 28.207 45.97 52.004 67.665 52.004 4.226 0 8.384-.879 12.457-2.823 25.005-11.926 28.852-75.795 7.71-164.268zm-331.045 14.767c-21.64 0-39.234-17.758-39.234-39.623 0-21.84 17.594-39.643 39.234-39.643 21.655 0 39.249 17.803 39.249 39.643 0 21.865-17.593 39.623-39.249 39.623zm172.842-19.493c-11.058 0-20.076-9.019-20.076-20.107 0-11.09 9.019-20.104 20.076-20.104 11.131 0 20.148 9.014 20.148 20.104.001 11.088-9.017 20.107-20.148 20.107zM351.988 288c-11.058 0-20.053-8.951-20.053-20.016 0-11.157 8.995-20.106 20.053-20.106 11.146 0 20.148 8.949 20.148 20.106.001 11.065-9.002 20.016-20.148 20.016zm0-87.81c-11.058 0-20.053-8.993-20.053-20.083 0-11.094 8.995-20.107 20.053-20.107 11.146 0 20.148 9.014 20.148 20.107.001 11.09-9.002 20.083-20.148 20.083zm43.959 43.95c-11.105 0-20.101-9.019-20.101-20.107 0-11.09 8.995-20.104 20.101-20.104 11.059 0 20.053 9.014 20.053 20.104 0 11.088-8.994 20.107-20.053 20.107z" fill="currentColor"/></svg>
    
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
                if(response.data.quiz.user_image != null){
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
    },
    mounted () {
        this.getQuiz();
    },
}
</script>