<template>
    <div class="flex  justify-between items-center text-zinc-800 dark:text-slate-200 mb-3 text-xl">
        <a @click="directHome()" class="hover:text-primary duration-100 font-semibold"><i class="fa-solid fa-arrow-left me-2 cursor-pointer"></i>Back</a>
    </div>
    <div class="md:px-4 font-medium text-primary dark:text-blue-500 mb-4">
        <h4 class="mb-3 flex items-center">Total : {{quizzes.total}}
            <button v-if="showSearch===false" @click="showSearch=true" class="ms-6 flex items-center ps-1 pe-3 py-1 bg-primary duration-100 hover:bg-primary_hover dark:hover:bg-blue-500 dark:bg-blue-600 rounded text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.586 7.879l1.268 1.267a.5.5 0 0 1-.708.708l-1.267-1.268a2.5 2.5 0 1 1 .707-.707ZM8 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/></svg>
                <span class="ms-2">Search Quiz</span>
            </button>
            <button v-if="showSearch===true" @click="showSearch=false" class="ms-6 flex items-center ps-1 pe-3 py-1 bg-primary duration-100 hover:bg-primary_hover dark:hover:bg-blue-500 dark:bg-blue-600 rounded text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.586 7.879l1.268 1.267a.5.5 0 0 1-.708.708l-1.267-1.268a2.5 2.5 0 1 1 .707-.707ZM8 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/></svg>
                <span class="ms-2">Hide</span>
            </button>
        </h4>
        <div v-if="showSearch" class=" max-w-md flex">
            <div class="relative w-full animate__animated animate__bounceIn">
                <input @input="getQuizzes" v-model="searchKey" type="text" id="floating_filled" class="bg-white text-zinc-900 dark:text-white block rounded px-4 pb-2.5 pt-7 w-full text-sm border-0 shadow dark:border-[1.5px] dark:bg-zinc-800  appearance-none peer" placeholder=" " />
                <label for="floating_filled" class=" peer-focus:border-b pb-1 border-zinc-800 dark:border-zinc-500 absolute text-sm text-zinc-800 dark:text-slate-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Search for quizzes</label>
                <i @click="clearSearchInput" v-if="searchKey" class=" fa-solid fa-circle-xmark cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                <i v-else class="fa-solid fa-magnifying-glass cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                
            </div>
        </div>
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
import QuizList from '../components/QuizList.vue'
import {mapActions,mapGetters} from 'vuex'
import axios from 'axios'


export default {
    name : 'AllQuiz',
    components: {
        QuizList,
    },
    data() {
    
        return {
            quizzes: {},
            currentPage : 1,
            searchKey : '',
            showSearch : false,
        }
    },
    computed: {
        ...mapGetters(['getToken']),
     },
    methods: {
        ...mapActions(['setLoadingStatus']),
        getQuizzes() {
            this.setLoadingStatus(true);
            axios.post(`http://127.0.0.1:8000/api/quiz/categoryFilter?page=${this.currentPage}`,{
                'category_id' : this.$route.params.category_id,
                'searchKey' : this.searchKey,
                },
                {
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                }).then((response) => {
                this.quizzes = response.data.all_quizzes;
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

