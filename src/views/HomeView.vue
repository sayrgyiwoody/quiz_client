<template>
    <div class="pb-4">
        <h4 class="animate__animated animate__bounceIn my-5 md:my-8 dark:text-slate-100 text-center text-xl md:text-2xl font-semibold font-poppins">What <span class="text-primary dark:text-blue-500">Quiz</span> you will play today?</h4>
        <div class="mx-auto max-w-2xl flex gap-2">
            <div class="relative w-4/6 animate__animated animate__bounceIn mb-3 col-span-2">
                <input @input="searchQuizzes" v-model="searchKey" type="text" id="floating_filled" class="bg-white text-zinc-900 dark:text-white block rounded px-4 pb-2.5 pt-7 w-full text-sm border-0 shadow dark:border-[1.5px] dark:border-zinc-700 dark:bg-zinc-800  appearance-none peer" placeholder=" " />
                <label for="floating_filled" class="peer-valid:border-b peer-valid:mt-1 peer-focus:border-b pb-1 border-zinc-800 dark:border-zinc-500 absolute text-sm text-zinc-800 dark:text-slate-100 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Search for quizzes</label>
                <i @click="clearSearchInput" v-if="searchKey" class=" fa-solid fa-circle-xmark cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                <i v-else class="fa-solid fa-magnifying-glass cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-2 text-xl right-5"></i>
                
            </div>
            <div @click="directAll" class="h-fit py-4 cursor-pointer animate__animated animate__bounceIn font-medium hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 p-3 md:w-2/6 text-zinc-900 dark:text-white bg-white shadow dark:bg-zinc-800 flex items-center justify-center md:ms-3 rounded px-3 dark:border border-zinc-800 border-0 dark:border-zinc-700">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M174 232a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6Zm40-128a85.56 85.56 0 0 1-32.88 67.64A18.23 18.23 0 0 0 174 186v6a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14v-6a18 18 0 0 0-7-14.23a85.59 85.59 0 0 1-33-67.24C41.74 57.91 79.39 19.12 125.93 18A86 86 0 0 1 214 104Zm-12 0a74 74 0 0 0-75.79-74C86.17 31 53.78 64.34 54 104.42a73.67 73.67 0 0 0 28.4 57.87A29.92 29.92 0 0 1 94 186v6a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2v-6a30.18 30.18 0 0 1 11.7-23.78A73.59 73.59 0 0 0 202 104Zm-20.08-9A55.58 55.58 0 0 0 137 50.08a6 6 0 1 0-2 11.84c17.38 2.92 32.13 17.68 35.08 35.08a6 6 0 0 0 5.91 5a6.87 6.87 0 0 0 1-.08a6 6 0 0 0 4.93-6.92Z"/></svg>
                <span class="ms-2 text-xs">All Quizzes</span>
            </div>
            <!-- <div @click="enterRoom" class="h-fit py-4 cursor-pointer animate__animated animate__bounceIn font-medium hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 p-3 ms-2 md:w-2/6 text-zinc-900 dark:text-white bg-white shadow dark:bg-zinc-800 flex items-center justify-center md:ms-3 rounded px-3 dark:border border-zinc-800 border-0 dark:border-zinc-700">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M24 168V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v112a8 8 0 0 1-16 0V56H40v112a8 8 0 0 1-16 0Zm224 32a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h96v-24a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v24h48a8 8 0 0 1 8 8Zm-120-8h48v-16h-48Z"/></svg>
                <span class="ms-2">Enter Code</span>
            </div> -->
        </div>
        <div class="max-w-2xl mx-auto">
            <p v-if="searchKey && searchKey.length < 4" class=" text-emerald-600 font-semibold"><i class="fa-solid fa-info-circle me-2"></i>Please type at least three character to search</p>
        </div>

        <div v-if="searchKey" class="mx-auto max-w-5xl mt-4">
            <div class="flex  justify-between items-center text-zinc-800 dark:text-slate-200 mb-3 text-xl">
                <span class="flex items-center hover:text-primary duration-100 font-semibold">
                    <svg class=" inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 9H3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1zm0 3H3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm13.88 6.29l-3.12-3.12c-.86.56-1.89.88-3 .82c-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78c.33 1.46.01 2.82-.7 3.9l3.13 3.13c.39.39.39 1.02 0 1.41c-.39.39-1.03.39-1.42 0zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3zM3 19h8c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>
                    Searched : <span class="text-primary ms-2">{{searchKey}}</span></span>
                <span class="me-4">Total Quizzes: <span class="text-primary font-semibold">{{searched_quizzes.total}}</span> </span>
            </div>

            <p v-if="searched_quizzes && searched_quizzes.data == []" class=" text-emerald-600 font-semibold"><i class="fa-solid fa-info-circle me-2"></i>No Quizzes Found !</p>

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
                    <p class="mb-5 text-zinc-800 dark:text-slate-200"><i class="fa-solid fa-bell txt-primary me-2"></i>Latest Quizzes : <span class="text-blue-600 dark:text-blue-">{{ latest_quizzes.length }}</span></p>
                  </div>
                  <div v-if="latest_quizzes.length === 0" class=" font-semibold text-zinc-900 dark:text-slate-100">No Quiz to show </div>
                  <quizzes-swiper v-else @saveQuiz="handleSaveQuiz" @unsaveQuiz="handleUnsaveQuiz" :quizzes="latest_quizzes"></quizzes-swiper>
            </div>

            <div class="mx-auto max-w-5xl mt-4 md:mt-6">
                <div class="flex justify-between items-center">
                    <p class="mb-5 text-zinc-800 dark:text-slate-200"><i class="fa-solid fa-chart-simple txt-primary me-2"></i>Most Played Quizzes : <span class="text-blue-600 dark:text-blue-">{{ most_played_quizzes.length }}</span></p>
                  </div>
                  <div v-if="most_played_quizzes.length === 0" class=" font-semibold text-zinc-900 dark:text-slate-100">No Quiz to show </div>
                  <quizzes-swiper v-else @saveQuiz="handleSaveQuiz" @unsaveQuiz="handleUnsaveQuiz" :quizzes="most_played_quizzes"></quizzes-swiper>
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
      getHomeQuizzes(){
        this.setLoadingStatus(true);
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/quiz/getHomeQuizzes`,{
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                })
        .then((response) => {
            if(response.data.status == true){
                this.setLoadingStatus(false);
                this.most_played_quizzes = response.data.most_played_quizzes;
                this.latest_quizzes = response.data.latest_quizzes;
            }
        })
        .catch(error =>{
            if(error.response.status===401){
                this.$router.push({
                    name : "login"
                });
                this.setLoadingStatus(false);

            }
        });
        },
        
        searchQuizzes() {
            this.searched_quizzes = [];
            if(this.searchKey.length > 3){
                this.setLoadingStatus(true);
                axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/quiz/search?page=${this.currentPage}`,{
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
        handleSaveQuiz(quiz_id){
            this.latest_quizzes = this.latest_quizzes.map(quiz => {
                if (quiz.quiz_id === quiz_id) {
                    return { ...quiz, saved: true };
                }
                return quiz;
            });
            this.most_played_quizzes = this.most_played_quizzes.map(quiz => {
                if (quiz.quiz_id === quiz_id) {
                    return { ...quiz, saved: true };
                }
                return quiz;
            });
        },
        handleUnsaveQuiz(quiz_id){
            this.latest_quizzes = this.latest_quizzes.map(quiz => {
                if (quiz.quiz_id === quiz_id) {
                    return { ...quiz, saved: false };
                }
                return quiz;
            });
            this.most_played_quizzes = this.most_played_quizzes.map(quiz => {
                if (quiz.quiz_id === quiz_id) {
                    return { ...quiz, saved: false };
                }
                return quiz;
            });
        },
        checkToken(){
                if(this.getToken !== null && this.getToken !== undefined && this.getToken !== ""){
                
                }else {
                    this.loginStatus = false;
                    console.log("redirected to login");
                    this.directLogin();
                }
        },
        enterRoom(){
            this.$router.push({
                    name : "joinRoom"
            });
        },
    },
    mounted () {
        this.getHomeQuizzes();
        
        // this.getProfileInfo();
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
