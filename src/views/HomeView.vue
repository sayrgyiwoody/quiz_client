<template>
    <div class="pb-4">
        <h4 class="animate__animated animate__bounceIn my-5 md:my-8 dark:text-slate-100 text-center text-xl md:text-2xl font-semibold font-poppins">What <span class="text-primary dark:text-blue-500">Quiz</span> you will play today?</h4>
        <div class="mx-auto max-w-2xl flex">
            <div class="relative w-4/6 animate__animated animate__bounceIn">
                <input @input="searchQuizzes" v-model="searchKey" type="text" id="floating_filled" class="bg-white text-zinc-900 dark:text-white block rounded px-4 pb-2.5 pt-7 w-full text-sm border-0 shadow dark:border-[1.5px] dark:bg-zinc-800  appearance-none peer" placeholder=" " />
                <label for="floating_filled" class=" peer-focus:border-b pb-1 border-zinc-800 dark:border-zinc-500 absolute text-sm text-zinc-800 dark:text-slate-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Search for quizzes</label>
                <i @click="clearSearchInput" v-if="searchKey" class=" fa-solid fa-circle-xmark cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                <i v-else class="fa-solid fa-magnifying-glass cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                
            </div>
            <div @click="directAll" class=" cursor-pointer animate__animated animate__bounceIn font-medium hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 w-2/6 text-zinc-900 dark:text-white bg-white shadow dark:bg-zinc-800 flex items-center justify-center ms-3 rounded px-3 dark:border border-zinc-800 border-0 dark:border-zinc-100">
                <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.687 1.687 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.105 4.105 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.592 2.592 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.968.968 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4c-.15-.26-.28-.53-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25l.33-.11m-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92Z"/></svg>
                <span class="ms-2">All Quizzes</span>
            </div>
        </div>
        <div v-if="searchKey" class="mx-auto max-w-5xl mt-4">
            <div class="flex  justify-between items-center text-zinc-800 dark:text-slate-200 mb-3 text-xl">
                <span class="flex items-center hover:text-primary duration-100 font-semibold">
                    <svg class=" inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 9H3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0 3H3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm13.88 6.29l-3.12-3.12c-.86.56-1.89.88-3 .82c-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78c.33 1.46.01 2.82-.7 3.9l3.13 3.13c.39.39.39 1.02 0 1.41c-.39.39-1.03.39-1.42 0zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3zM3 19h8c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>
                    Searched : <span class="text-primary ms-2">{{searchKey}}</span></span>
                <span class="me-4">Total : <span class="text-primary font-semibold">{{searched_quizzes.total}}</span> </span>
            </div>
            <div class="grid md:grid-cols-3 md:gap-3 gap-y-3">
                
                <quiz-list :quizzes="searched_quizzes.data">
                    
                </quiz-list>
                
            </div>
            <div v-if="searched_quizzes.total" class="flex justify-end my-4 me-3">
                <div class="flex items-center">
                    <button @click="changePage(currentPage -1)" :hidden="currentPage === 1" class="me-4" >
                    <svg class="text-primary hover:text-blue-500 duration-150 hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6l1.4-1.4Z"/></svg>
                    </button>
                    <span class="text-zinc-900 dark:text-slate-100">Page {{currentPage}}/{{searched_quizzes.last_page}} </span>
                <button  @click="changePage(currentPage + 1)" :hidden="currentPage == searched_quizzes.last_page" class="ms-4">
                <svg class="text-primary hover:text-blue-500 duration-150 hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-12 6l6-6l-6-6l-1.4 1.4l4.6 4.6l-4.6 4.6L10 18Z"/></svg>
                </button>
                </div>
            </div>
        </div>
        <div v-else>
           
            
            <category-list></category-list>

            <div class="mx-auto max-w-5xl mt-4 md:mt-6">
                <div class="flex justify-between items-center">
                    <p class="mb-5 text-zinc-800 dark:text-slate-200"><i class="fa-solid fa-bell txt-primary me-2"></i>Latest Quizzes</p>
                  </div>
                  <div v-if="latest_quizzes.length === 0" class=" font-semibold text-zinc-900 dark:text-slate-100">No Quiz to show </div>
                  <quizzes-swiper v-else :quizzes="latest_quizzes"></quizzes-swiper>
            </div>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
import QuizzesSwiper from '../components/QuizzesSwiper.vue'
import QuizList from '../components/QuizList.vue'
import CategoryList from '../components/CategoryList.vue'

export default {
    name : 'HomeView',
    components: {
        QuizzesSwiper,
        QuizList,
        CategoryList,
    },
    data() {
        return {
            searchKey: '',
            latest_quizzes : [],
            saved_quizzes : [],
            most_played_quizzes : [],
            searched_quizzes : [],
            currentPage : 1,
        }
    },
    computed: {
        ...mapGetters(['getToken']),
        
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        clearSearchInput() {
            this.searchKey = '';
        },
        directCreate() {
         this.$router.push({
            name : "createPage"
         })
        },
        directAll() {
         this.$router.push({
            name : "allQuiz"
         })
        },
      getLatestQuizzes(){
        this.setLoadingStatus(true);
        axios.get('http://127.0.0.1:8000/api/quiz/latest',{
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                })
        .then((response) => {
            if(response.data.status == true){
                this.setLoadingStatus(false);
                this.latest_quizzes = response.data.latest_quizzes;
            }
        })
        .catch(error => console.log(error));
        },
        searchQuizzes() {
            if(this.searchKey.length > 3){
                this.setLoadingStatus(true);
                axios.post(`http://127.0.0.1:8000/api/quiz/search?page=${this.currentPage}`,{
                    'searchKey' : this.searchKey,
                    },
                    {
                        headers : {
                            'Authorization' : `Bearer ${this.getToken}`,
                        }
                    }).then((response) => {
                        this.searched_quizzes = response.data.searched_quizzes;
                        this.setLoadingStatus(false);
                }).catch(error => console.log(error));
            }
        },
        changePage(page){
            this.currentPage = page;
            this.searchQuizzes();
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
    },
    mounted () {
        this.getLatestQuizzes();
        // this.showAlert(`<h4 class="flex items-center text-primary mb-1 justify-center mb-3">
        //                 <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        //                     <path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 13h-2v-1h2v1m1.6-4.5c-.3.4-.6.8-1.1 1.1V12h-3v-1.4c-1.4-.8-1.9-2.7-1.1-4.1s2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1Z"/>
        //                 </svg>
        //                 <span class="ms-2 text-2xl  font-semibold">Welcome to Brain Bulb</span>
        //             </h4>
        //         <p class="text-center text-slate-600 dark:text-muted text-sm ">You can play Quiz games for free with your friend or on your own. Enjoy a variety of quizzes and unleash your creativity. Let's start quizzing!</p>
        //             `,'info');
    },
}
</script>
