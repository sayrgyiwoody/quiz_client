<template>

    <!--  quizzes start -->
    
    <swiper
      :slidesPerView="calculateSlidesPerView"
      :spaceBetween="20"
      :freeMode="false"
      :navigation="false"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
        

        <swiper-slide class="swiper-quiz bg-white pb-2 dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 shadow rounded-md border dark:border-[1.5px] border-slate-200 dark:border-zinc-700 animate__animated animate__bounceIn" v-for="(quiz,index) in quizzes" :key="index">
          <!-- <div class="swiper-slide flex flex-col">
          <p class="  w-full flex justify-between mb-3"><span class="flex items-center bg-indigo-600 px-3 py-1 text-white rounded-tl rounded-br text-sm">{{quiz.category_name}}</span>
            <svg :class="{'hidden':isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.13Q6 17.926 6 17.052V5.616q0-.69.463-1.152Q6.925 4 7.615 4H13v1H7.615q-.23 0-.423.192Q7 5.385 7 5.615v11.393q0 .327.279.519t.586.058L12 15.8l4.135 1.785q.307.134.586-.058q.279-.192.279-.52V11h1v6.052q0 .873-.727 1.35q-.727.477-1.535.129L12 16.923ZM12 5H7h6h-1Zm5 2h-1.5q-.213 0-.356-.144T15 6.499q0-.212.144-.356Q15.288 6 15.5 6H17V4.5q0-.213.144-.356T17.5 4q.212 0 .356.144q.143.144.143.356V6h1.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q19.713 7 19.5 7H18v1.5q0 .213-.144.356Q17.712 9 17.5 9t-.356-.144Q17 8.713 17 8.5V7Z"/></svg>
            <svg :class="{'hidden':!isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.915 6 17.052V5.615q0-.67.472-1.143Q6.944 4 7.615 4h6.154q-.384.596-.577 1.197Q13 5.798 13 6.5q0 1.742 1.157 3.012Q15.313 10.78 17 10.958q.287.036.5.036q.213 0 .5-.036v6.094q0 .863-.727 1.345t-1.535.134L12 16.923Zm5.113-9.325l3.172-3.19q.146-.166.347-.166q.2 0 .366.166q.165.165.165.356t-.165.357l-3.32 3.314q-.241.242-.565.242q-.323 0-.565-.242L15.335 7.22q-.14-.14-.14-.341t.14-.347q.146-.166.356-.156q.21.01.357.156l1.065 1.065Z"/></svg>
          </p>

                <div class="font-semibold text-zinc-900 dark:text-slate-100 border-b-2 border-slate-200 dark:border-zinc-500 pb-1 mb-1 w-fit mx-auto">
                    <i class="fa-solid fa-user-astronaut me-2 "></i>
                    <span class="">{{quiz.user_name}}</span>
            |       <span class="">{{formatDate(quiz.created_at)}}</span>
                </div>
                <h3 class="mb-1 text-lg font-medium text-zinc-800 dark:text-slate-200">{{quiz.title}}</h3>
                <p class="px-3 mb-1 text-sm text-slate-500 dark:text-muted" >{{limitString(quiz.desc,80)}}</p>
                <a @click="viewQuiz(quiz.quiz_id)" class=" cursor-pointer btn-play bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 px-5 text-zinc-800 dark:text-slate-200 py-3 my-2 rounded group"><i class="duration-150 fa-solid fa-play me-3 group-hover:text-blue-500"></i>See more</a>
            </div> -->
              <p class="  w-full flex justify-between"><span class="flex items-center bg-indigo-600 px-3 text-white rounded-tl-md rounded-br-md text-sm font-inter">{{quiz.category_name}}</span>
                <i :class="{'hidden':isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary fa-regular fa-bookmark text-3xl me-3 mt-2" ></i>
                <i :class="{'hidden':!isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary fa-solid fa-bookmark text-3xl me-3 mt-2"></i>
                <!-- <svg :class="{'hidden':isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.13Q6 17.926 6 17.052V5.616q0-.69.463-1.152Q6.925 4 7.615 4H13v1H7.615q-.23 0-.423.192Q7 5.385 7 5.615v11.393q0 .327.279.519t.586.058L12 15.8l4.135 1.785q.307.134.586-.058q.279-.192.279-.52V11h1v6.052q0 .873-.727 1.35q-.727.477-1.535.129L12 16.923ZM12 5H7h6h-1Zm5 2h-1.5q-.213 0-.356-.144T15 6.499q0-.212.144-.356Q15.288 6 15.5 6H17V4.5q0-.213.144-.356T17.5 4q.212 0 .356.144q.143.144.143.356V6h1.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q19.713 7 19.5 7H18v1.5q0 .213-.144.356Q17.712 9 17.5 9t-.356-.144Q17 8.713 17 8.5V7Z"/></svg>
                <svg :class="{'hidden':!isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.915 6 17.052V5.615q0-.67.472-1.143Q6.944 4 7.615 4h6.154q-.384.596-.577 1.197Q13 5.798 13 6.5q0 1.742 1.157 3.012Q15.313 10.78 17 10.958q.287.036.5.036q.213 0 .5-.036v6.094q0 .863-.727 1.345t-1.535.134L12 16.923Zm5.113-9.325l3.172-3.19q.146-.166.347-.166q.2 0 .366.166q.165.165.165.356t-.165.357l-3.32 3.314q-.241.242-.565.242q-.323 0-.565-.242L15.335 7.22q-.14-.14-.14-.341t.14-.347q.146-.166.356-.156q.21.01.357.156l1.065 1.065Z"/></svg> -->
              </p>
              <div class="px-5 py-2">
                <h4 class="text-zinc-800 dark:text-slate-100 text-2xl font-semibold font-poppins mb-1 capitalize">{{ quiz.title }}</h4>
                <p class="text-slate-500 dark:text-slate-300 font-medium text-sm leading-[14px] mb-2 font-poppins">{{quiz.total_count}} Quizzes</p>
                <p class="mb-3 text-xs text-slate-500 dark:text-muted font-inter">{{limitString(quiz.desc,80)}}</p>
                <div class="flex justify-between items-center">
                  <div class="text-xs font-medium text-zinc-800 dark:text-slate-100 flex items-center font-inter ">
                    <img class="rounded-full ring-1 ring-slate-400 dark:ring-zinc-500 w-8 h-8 me-2 object-cover" :src="quiz.provider_avatar && quiz.user_image === null ?quiz.provider_avatar:'http://127.0.0.1:8000/storage/'+quiz.user_image" alt="profile image">
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
        </swiper-slide>
      
    </swiper>
    <!--  quizzes end  -->
  </template>

  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import axios from 'axios'
    import {mapGetters,mapActions} from 'vuex'

  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
  
    // import required modules
    import {FreeMode, Pagination , Navigation } from 'swiper/modules';

    export default {
      name : 'QuizzesSwiper',
        props: {
            quizzes : Array,
        },
        emits: ['saveQuiz','unsaveQuiz'],
        
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [FreeMode,Pagination,Navigation],
        };
      },
      computed: {
        ...mapGetters(['getToken']),

        calculateSlidesPerView() {
          if (window.innerWidth <= 768) {
            return 1; // Show 1 slide on small screens
          } else if (window.innerWidth <= 1024) {
            return 2; // Show 2 slides on medium screens
          } else {
            return 3; // Show 3 slides on larger screens
          }
        },
      },
      methods: {
        ...mapActions(['setLoadingStatus']),

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
        viewQuiz(quiz_id){
          this.$router.push({
            name :'detail',
            params : {
              quiz_id : quiz_id,
            }
            
          })
        },
        saveQuiz(quiz_id){
          this.setLoadingStatus(true);
          axios.post(`http://127.0.0.1:8000/api/quiz/saveQuiz`,{
                    'quiz_id' : quiz_id,
                    },
                    {
                        headers : {
                            'Authorization' : `Bearer ${this.getToken}`,
                        }
                    }).then((response) => {
                      const index = this.quizzes.findIndex(q=>q.quiz_id==quiz_id);

                      if(response.data.status === 'saved'){
                        this.$emit('saveQuiz',quiz_id);
                        this.quizzes[index].saved = true;
                      }else if(response.data.status === 'unsaved'){
                        this.$emit('unsaveQuiz',quiz_id);
                        this.quizzes[index].saved = false;
                      }

                      this.showAlert(response.data.message,response.data.icon);
                      this.setLoadingStatus(false);

                }).catch(error => console.log(error));
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
        
        
      },

    };

  </script>

  

  <style  scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }

  

  .swiper-slide {
    transition: .5s;
  }

  

  

  .swiper-quiz:hover .fa-play{
    transform: rotate(125deg);
  }



  </style>