<template>
    <div class="px-4 mb-3 font-medium text-primary dark:text-blue-500">
        <h4>Total : {{quizzes.total}}</h4>
    </div>
    <div v-if="quizzes.total === 0" class="font-medium flex items-center justify-center text-violet-600">
        <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m8 6V7h-2v2h2m0 8v-6h-2v6h2Z"/></svg>
       No quiz to show.
    </div>
    <div class="grid md:grid-cols-3 md:gap-3 gap-y-3 max-w-6xl mx-auto">
        <quiz-list :quizzes="quizzes"></quiz-list>
        
    </div>
    <div  class="flex justify-end my-4 me-3">
        <div class="flex items-center">
            <button @click="changePage(currentPage -1)" :hidden="currentPage === 1" class="me-4" >
            <svg class="text-primary hover:text-blue-500 duration-150 hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6l1.4-1.4Z"/></svg>
            </button>
            <span class="text-zinc-900 dark:text-slate-100">Page {{currentPage}}/{{quizzes.last_page}} </span>
        <button  @click="changePage(currentPage + 1)" :hidden="currentPage == quizzes.last_page" class="ms-4">
        <svg class="text-primary hover:text-blue-500 duration-150 hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-12 6l6-6l-6-6l-1.4 1.4l4.6 4.6l-4.6 4.6L10 18Z"/></svg>
        </button>
        </div>
    </div>
</template>

<script>
import QuizList from '../../components/QuizList.vue'
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'


export default {
    name : 'CreatedByMe',
    components: {
        QuizList,
    },
    data() {
    
        return {
            quizzes: {},
            currentPage : 1,
        }
    },
    computed: {
        ...mapGetters(['getToken']),
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        getQuizzes() {
            this.setLoadingStatus(true);
            axios.get(`http://127.0.0.1:8000/api/quiz/getCreatedQuizzes?page=${this.currentPage}`,{
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                }).then((response) => {
                    this.quizzes = response.data.created_quizzes;
                    this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        changePage(page){
            this.currentPage = page;
            this.getQuizzes();
        },
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
    },
    mounted () {
        this.getQuizzes();
    },
}
</script>

