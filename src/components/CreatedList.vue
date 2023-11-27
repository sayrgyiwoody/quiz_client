<template>
    
    
    <div  v-for="(quiz,index) in quizzes" :key="index" class=" animate__animated animate__bounceIn bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 shadow rounded-md border dark:border-[1.5px] border-slate-200 dark:border-zinc-700">
        <div class=" w-full flex justify-between">
            <p class=" h-fit flex items-center bg-indigo-600 px-3 py-2 text-white rounded-tl rounded-br text-sm font-inter">{{quiz.category_name}}</p>
            <div class="flex flex-col justify-end items-end">
            <button v-if="currentDropdownIndex != index" @click="showDropDown(index)" class=" inline-flex items-center px-2 text-sm font-medium text-center text-gray-900 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" type="button"> 
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
            <button v-if="currentDropdownIndex == index" @click="hideDropDown" class=" inline-flex items-center px-2 text-sm font-medium text-center text-gray-900 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" type="button"> 
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12 11.325l2.375 2.375q.275.275.688.275t.712-.275q.3-.3.3-.712t-.3-.713L12.7 9.2q-.3-.3-.7-.3t-.7.3l-3.1 3.1q-.3.3-.287.7t.312.7q.3.275.7.288t.7-.288L12 11.325ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="currentDropdownIndex == index" class="absolute top-10 right-2 w-fit rounded z-10 bg-white divide-y divide-zinc-100 shadow border-[1.5px] border-1 border-primary dark:border-blue-500 dark:bg-gray-700 dark:divide-gray-600 ">
                <ul class="text-sm text-zinc-700 dark:text-zinc-200 " >
                <li @click="editPage(quiz.quiz_id)" class="cursor-pointer">
                    <a class="rounded-t border dark:border-gray-500 block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600  hover:text-primary dark:hover:text-blue-500">
                        <svg class="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.38 6.808H18.6l-1.33-1.596q-.097-.097-.222-.154Q16.923 5 16.788 5H7.192q-.134 0-.26.058q-.124.057-.22.154L5.38 6.808ZM10 12.962l2-1l2 1V7.808h-4v5.154ZM5.615 20q-.67 0-1.143-.472Q4 19.056 4 18.385V7.487q0-.293.093-.55q.094-.258.28-.475L5.931 4.59q.217-.292.543-.441Q6.8 4 7.174 4h9.614q.374 0 .71.149q.335.15.552.441l1.577 1.91q.186.217.28.485q.093.267.093.56v2.32q-.275.02-.518.066q-.244.046-.482.136v-2.26h-4v5.856l-.617.618L12 13.096l-3 1.5V7.808H5v10.577q0 .269.173.442t.442.173h6.231v1h-6.23ZM15 7.808h4h-4Zm-10 0h9.383H5ZM14.23 20v-2.21l5.333-5.307q.149-.148.308-.2q.16-.052.32-.052q.165 0 .334.064t.298.193l.925.945q.123.148.188.307q.064.16.064.32t-.062.322q-.061.162-.19.31L16.44 20h-2.21Zm6.885-5.94l-.925-.945l.925.945Zm-6 5.055h.95l3.468-3.473l-.47-.475l-.455-.488l-3.493 3.486v.95Zm3.948-3.948l-.455-.488l.925.963l-.47-.475Z"/></svg>
                        Edit</a>
                </li>
                <li @click="deleteQuiz(quiz.quiz_id)" class="cursor-pointer">
                    <a class=" rounded border-b dark:border-gray-500 block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 hover:text-red-600 dark:hover:text-red-500">
                        <svg class="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.615 20q-.666 0-1.14-.475Q6 19.051 6 18.385V6h-.5q-.213 0-.356-.144T5 5.499q0-.212.144-.356Q5.288 5 5.5 5H9q0-.31.23-.54q.23-.23.54-.23h4.46q.31 0 .54.23q.23.23.23.54h3.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q18.713 6 18.5 6H18v12.385q0 .666-.475 1.14q-.474.475-1.14.475h-8.77ZM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.269 0 .442-.173t.173-.442V6Zm-6.692 11q.213 0 .356-.144q.144-.144.144-.356v-8q0-.213-.144-.356T10.307 8q-.213 0-.356.144t-.143.356v8q0 .213.144.356t.356.144Zm3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356T13.692 8q-.213 0-.356.144q-.144.144-.144.356v8q0 .213.144.356t.357.144ZM7 6v13V6Z"/></svg>
                        Delete</a>
                </li>
               
                </ul>
                
            </div>
            </div>
        </div>
        
        
          <div class="px-5 py-2">
            <h4 class="text-zinc-800 dark:text-slate-100 text-2xl font-semibold font-poppins mb-1 capitalize">{{ quiz.title }}</h4>
            <p class="text-slate-500 dark:text-slate-300 font-medium text-sm leading-[14px] mb-2 font-poppins">{{quiz.total_count}} Quizzes</p>
            <p class="mb-3 text-xs text-slate-500 dark:text-muted font-inter">{{limitString(quiz.desc,80)}}</p>
            <div class="flex justify-between items-center">
              <div class="text-xs font-medium text-zinc-800 dark:text-slate-100 flex items-center font-inter ">
                <img v-if="quiz.provider_avatar || quiz.user_image" class="rounded-full ring-1 ring-slate-400 dark:ring-zinc-500 w-8 h-8 me-2 object-cover" :src="quiz.provider_avatar && quiz.user_image === null ?quiz.provider_avatar:'http://127.0.0.1:8000/storage/'+quiz.user_image" referrerpolicy="no-referrer" alt="profile image">
                <img v-else class="rounded-full  w-8 h-8 me-2 object-cover" :src="'/images/default_user.png'" alt="profile image">
                    
                <span class="">{{quiz.user_name}}</span>
                <span class="mx-1">|</span>
               <span class="">{{formatDate(quiz.created_at)}}</span>
              </div>
              <button @click="viewQuiz(quiz.quiz_id)" class="px-3 py-2 cursor-pointer bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 text-zinc-800 dark:text-slate-200 rounded-lg hover:rounded-xl group font-inter font-medium">
                <svg class=" rotate-45 group-hover:rotate-90 inline-block duration-150 me-1 group-hover:text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M152 224a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm-24-112a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm95.62 43.83l-12.36 55.63a16 16 0 0 1-25.51 9.11L158.51 200h-61l-27.26 20.57a16 16 0 0 1-25.51-9.11l-12.36-55.63a16.09 16.09 0 0 1 3.32-13.71l28.56-34.26a123.07 123.07 0 0 1 8.57-36.67c12.9-32.34 36-52.63 45.37-59.85a16 16 0 0 1 19.6 0c9.34 7.22 32.47 27.51 45.37 59.85a123.07 123.07 0 0 1 8.57 36.67l28.56 34.26a16.09 16.09 0 0 1 3.32 13.71ZM99.43 184h57.14c21.12-37.54 25.07-73.48 11.74-106.88C156.55 47.64 134.49 29 128 24c-6.51 5-28.57 23.64-40.33 53.12c-13.31 33.4-9.36 69.34 11.76 106.88Zm-15 5.85q-16.15-29.35-19.6-57.69L48 152.36L60.36 208l.18-.13ZM208 152.36l-16.83-20.2q-3.42 28.28-19.56 57.69l23.85 18l.18.13Z"/></svg>
                View</button>

            </div>

          </div>
    </div>
    
</template>

<script setup>
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initDropdowns();
})
</script>

<script>

import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'


export default {
    name : 'QuizList',
    data() {
        return {
            currentDropdownIndex: null
        }
    },
    props: {
        quizzes : Array,
    },
    emits: ['delete-quiz'],
    computed: {
        ...mapGetters(['getToken']),

    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        showDropDown(index){
            this.currentDropdownIndex = index;
        },
        hideDropDown(){
            this.currentDropdownIndex = null;
        },
        // limit description 
        limitString(str, limit) {
            if (str.length > limit) {
                return str.substring(0, limit) + "...";
            } else {
                return str;
            }
        },
        // format date to MM dd
        formatDate(dateString) {
            const options = { month: 'short', day: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options);
        },
        // view quiz 
        viewQuiz(quiz_id){
          this.$router.push({
            name :'detail',
            params : {
              quiz_id : quiz_id,
            }
            
          })
        },
        deleteQuiz(quiz_id){
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire({
                html: `<p class="text-center text-xl font-semibold">Are you Sure?</p"><p class="text-center">This question will be deleted.</p>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                color: `${textColor}`,
                background: `${bgColor}`,
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(`http://127.0.0.1:8000/api/quiz/deleteQuiz`,{
                    'quiz_id' : quiz_id,
                    },
                    {
                        headers : {
                            'Authorization' : `Bearer ${this.getToken}`,
                        }
                    }).then((response) => {
                        this.$emit('delete-quiz');
                        const index = this.quizzes.findIndex(q=>q.quiz_id==quiz_id);
                        this.quizzes.splice(index,1);
                        this.hideDropDown();
                        this.showAlert(response.data.message,response.data.icon);
                }).catch(error => console.log(error));
                    
                    
                }
              })
          
        },
        isQuizSaved(quiz_id) {
          return this.quizzes.some(savedQuiz => savedQuiz.quiz_id === quiz_id && savedQuiz.saved === true);
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
        editPage(quiz_id){
          this.$router.push({
            name :'editPage',
            params : {
              quiz_id : quiz_id,
            }
            
          })
        },
        
    },
   
    
    
}
</script>

 