<template>
    <div class="bg-white dark:bg-zinc-800 px-6 py-4 rounded shadow max-w-xl mx-auto mt-3 md:mt-6">
        <h4 class="text-zinc-900 dark:text-white text-2xl font-semibold mb-3">{{quiz.title}}</h4>
        <div class="mb-4 flex items-center">
            <img class="rounded-full w-12 h-12 me-2" :src="'https://ui-avatars.com/api/?background=2563eb&color=ffffff&name='+quiz.user_name" alt="profile image">
            <div class="flex flex-col">
                <div class="text-zinc-700 dark:text-slate-100 font-medium flex items-center">
                    <span class="">{{quiz.user_name}}</span>
                    <span class="mx-2">|</span>
                    <span class="">{{quiz.total_count}} quizzes</span>        
                </div>
                <p class="text-gray-600 dark:text-muted font-medium text-sm">{{formatDate(quiz.created_at)}}</p>
            </div>

        </div>
        <div class="bg-slate-50 dark:bg-zinc-700 px-4 py-3 mb-2 rounded text-zinc-600 dark:text-slate-300">
            {{quiz.desc}}
        </div>
        <div class="flex">
            <button @click="directHome" class="flex items-center group bg-primary hover:bg-primary_hover text-white px-4 py-2 rounded mt-3 font-medium">
                <svg class="me-2 group-hover:-translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.535 3.464C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536ZM14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
                Back
            </button>
            <button class="ms-3 flex items-center group bg-primary hover:bg-primary_hover text-white px-4 py-2 rounded mt-3 font-medium">
                Play
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
        }
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        directHome() {
            this.$router.push({
                name : "home"
            })
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
                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        formatDate(dateString) {
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options);
        },
    },
    mounted () {
        this.getQuiz();
    },
}
</script>