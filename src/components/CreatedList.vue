<template>
    
    
    
    <div  v-for="(quiz,index) in quizzes" :key="index" class="pb-2 animate__animated animate__bounceIn group bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 shadow rounded border-[1.5px] border-slate-200 dark:border-zinc-500">
        <div class=" w-full flex justify-between mb-3">
            <p class=" h-fit flex items-center bg-violet-600 px-3 py-2 text-white rounded-tl rounded-br text-sm">{{quiz.category_name}}</p>
            <div class="flex flex-col justify-end items-end">
            <button v-if="currentDropdownIndex != index" @click="showDropDown(index)" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" type="button"> 
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
            <button v-if="currentDropdownIndex == index" @click="hideDropDown" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" type="button"> 
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12 11.325l2.375 2.375q.275.275.688.275t.712-.275q.3-.3.3-.712t-.3-.713L12.7 9.2q-.3-.3-.7-.3t-.7.3l-3.1 3.1q-.3.3-.287.7t.312.7q.3.275.7.288t.7-.288L12 11.325ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="currentDropdownIndex == index" class="absolute top-10 right-2 w-fit rounded z-10 bg-white divide-y divide-zinc-100 shadow border-[1.5px] border-1 border-primary dark:border-blue-500 dark:bg-gray-700 dark:divide-gray-600 ">
                <ul class="text-sm text-zinc-700 dark:text-zinc-200 " >
                <li @click="editPage(quiz.quiz_id)">
                    <a class="rounded-t border dark:border-gray-500 block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600  hover:text-primary dark:hover:text-blue-500">
                        <svg class="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.38 6.808H18.6l-1.33-1.596q-.097-.097-.222-.154Q16.923 5 16.788 5H7.192q-.134 0-.26.058q-.124.057-.22.154L5.38 6.808ZM10 12.962l2-1l2 1V7.808h-4v5.154ZM5.615 20q-.67 0-1.143-.472Q4 19.056 4 18.385V7.487q0-.293.093-.55q.094-.258.28-.475L5.931 4.59q.217-.292.543-.441Q6.8 4 7.174 4h9.614q.374 0 .71.149q.335.15.552.441l1.577 1.91q.186.217.28.485q.093.267.093.56v2.32q-.275.02-.518.066q-.244.046-.482.136v-2.26h-4v5.856l-.617.618L12 13.096l-3 1.5V7.808H5v10.577q0 .269.173.442t.442.173h6.231v1h-6.23ZM15 7.808h4h-4Zm-10 0h9.383H5ZM14.23 20v-2.21l5.333-5.307q.149-.148.308-.2q.16-.052.32-.052q.165 0 .334.064t.298.193l.925.945q.123.148.188.307q.064.16.064.32t-.062.322q-.061.162-.19.31L16.44 20h-2.21Zm6.885-5.94l-.925-.945l.925.945Zm-6 5.055h.95l3.468-3.473l-.47-.475l-.455-.488l-3.493 3.486v.95Zm3.948-3.948l-.455-.488l.925.963l-.47-.475Z"/></svg>
                        Edit</a>
                </li>
                <li @click="deleteQuiz(quiz.quiz_id)">
                    <a class=" rounded border-b dark:border-gray-500 block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 hover:text-red-600 dark:hover:text-red-500">
                        <svg class="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.615 20q-.666 0-1.14-.475Q6 19.051 6 18.385V6h-.5q-.213 0-.356-.144T5 5.499q0-.212.144-.356Q5.288 5 5.5 5H9q0-.31.23-.54q.23-.23.54-.23h4.46q.31 0 .54.23q.23.23.23.54h3.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q18.713 6 18.5 6H18v12.385q0 .666-.475 1.14q-.474.475-1.14.475h-8.77ZM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.269 0 .442-.173t.173-.442V6Zm-6.692 11q.213 0 .356-.144q.144-.144.144-.356v-8q0-.213-.144-.356T10.307 8q-.213 0-.356.144t-.143.356v8q0 .213.144.356t.356.144Zm3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356T13.692 8q-.213 0-.356.144q-.144.144-.144.356v8q0 .213.144.356t.357.144ZM7 6v13V6Z"/></svg>
                        Delete</a>
                </li>
               
                </ul>
                
            </div>
            </div>
        </div>
        
        <div class="text-center flex flex-col">
            <div class="font-semibold text-zinc-900 dark:text-slate-100 border-b-2 border-slate-200 dark:border-zinc-500 pb-2 mb-1 w-fit mx-auto">
                <i class="fa-solid fa-user-astronaut me-2 "></i>
                <span class="">{{quiz.user_name}}</span>
        |       <span class="">{{formatDate(quiz.created_at)}}</span>
            </div>
            <h3 class="my-1 text-lg font-medium text-zinc-800 dark:text-slate-200">{{quiz.title}}</h3>
            <p class="px-5 mb-1 text-sm text-slate-500 dark:text-muted" >{{limitString(quiz.desc,130)}}</p>
            <a @click="viewQuiz(quiz.quiz_id)" class=" w-fit mx-auto bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 px-5 text-zinc-800 dark:text-slate-200 py-3 my-2 rounded group"><i class=" group-hover:rotate-[128deg] duration-150 fa-solid fa-play me-3 group-hover:text-blue-500"></i>See more</a>
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

 