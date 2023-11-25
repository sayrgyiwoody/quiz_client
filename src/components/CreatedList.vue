<template>
    
    
    <div  v-for="(quiz,index) in quizzes" :key="index" class=" animate__animated animate__bounceIn group bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 shadow rounded-md border border-slate-200 dark:border-zinc-700">
        <div class=" w-full flex justify-between">
            <p class=" h-fit flex items-center bg-violet-600 px-3 py-2 text-white rounded-tl rounded-br text-sm font-inter">{{quiz.category_name}}</p>
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
                <img class="rounded-full ring-1 ring-slate-400 dark:ring-zinc-500 w-8 h-8 me-2 object-cover"  :src="quiz.provider_avatar && quiz.user_image === null ?quiz.provider_avatar:'http://127.0.0.1:8000/storage/'+quiz.user_image"  alt="profile image">
                <span class="">{{quiz.user_name}}</span>
                <span class="mx-1">|</span>
               <span class="">{{formatDate(quiz.created_at)}}</span>
              </div>
              <button @click="viewQuiz(quiz.quiz_id)" class="px-3 py-2 cursor-pointer group bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 text-zinc-800 dark:text-slate-200 rounded group font-inter font-medium">
                <svg class=" group-hover:rotate-45 inline-block duration-150 me-1 group-hover:text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="m18.165 2.765l.255.032c.674.093 1.566.218 2.071.724c.414.413.573 1.085.668 1.685l.056.386c.126.91.159 2.102-.056 3.426c-.424 2.613-1.815 5.731-5.308 8.145c-.019.188-.02.378-.016.568l.01.284c.016.437.032.873-.09 1.298c-.19.66-.867 1.095-1.5 1.407l-.31.147l-.4.176c-.748.318-1.758.644-2.391.01c-.38-.379-.536-.935-.663-1.488l-.047-.207a7.55 7.55 0 0 0-.2-.774c-.05-.146-.104-.295-.162-.445a3.004 3.004 0 0 1-.203.225c-.345.345-.86.586-1.284.755c-.463.183-.987.343-1.472.475l-.249.066l-.477.119l-.432.1l-.517.11l-.323.063a1.01 1.01 0 0 1-1.177-1.177l.086-.431l.154-.698l.124-.51l.094-.36c.132-.484.292-1.008.476-1.47c.168-.425.409-.94.754-1.285l.08-.077l-.064-.026a7.912 7.912 0 0 0-.519-.177l-.277-.085c-.694-.21-1.436-.436-1.897-.898c-.56-.559-.371-1.41-.101-2.118l.11-.274l.177-.4l.147-.31c.312-.632.747-1.309 1.407-1.499c.35-.1.714-.106 1.08-.096l.22.007c.286.01.571.021.85-.006c2.414-3.494 5.532-4.885 8.145-5.309a11.8 11.8 0 0 1 3.171-.088ZM8.353 15.44a1.001 1.001 0 0 0-1.1-.06l-.11.074l-.093.083l-.125.158c-.26.376-.408.896-.523 1.382l-.108.468l-.051.213l.191-.046l.418-.096c.578-.135 1.219-.31 1.613-.665a1 1 0 0 0 .088-1.314l-.082-.094l-.024-.023l-.094-.08Zm7.183-6.974a2 2 0 1 0-2.829 2.828a2 2 0 0 0 2.829-2.828Z"/></g></svg>
                <!-- <i class="duration-150 me-3 group-hover:text-blue-500"></i> -->
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

 