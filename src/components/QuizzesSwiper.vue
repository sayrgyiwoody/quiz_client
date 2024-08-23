<template>

    <!--  quizzes start -->
    
    <swiper
      :slidesPerView="calculateSlidesPerView"
      :spaceBetween="20"
      :freeMode="false"
      :navigation="false"
      :autoplay="{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }"
      :loop="true"
      
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
                <svg :class="{'hidden':isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" w-10 h-10 cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.916 6 17.052V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616v11.436q0 .864-.727 1.345q-.727.482-1.535.134zm0-1.123l4.135 1.784q.307.135.586-.057q.279-.193.279-.52V5.617q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616v11.392q0 .327.279.519t.586.057zM12 5H7h10z"/></svg>
                <svg :class="{'hidden':!isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" w-10 h-10 cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.916 6 17.052V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616v11.436q0 .864-.727 1.345q-.727.482-1.535.134z"/></svg>
              </p>
              <div class="px-5 py-2">
                <h4 class="text-zinc-800 dark:text-slate-100 text-2xl font-semibold font-poppins mb-1 capitalize">{{ quiz.title }}</h4>
                <p class="text-slate-500 dark:text-slate-300 font-medium text-sm leading-[14px] mb-2 font-poppins">{{quiz.total_count}} Quizzes</p>
                <p class="mb-3 text-xs text-slate-500 dark:text-muted font-inter">{{limitString(quiz.desc,80)}}</p>
                <div class="flex justify-between items-center">
                  <div class="text-xs font-medium text-zinc-800 dark:text-slate-100 flex items-center font-inter ">
                    <img v-if="quiz.provider_avatar || quiz.user_image" class="rounded-full ring-1 ring-slate-400 dark:ring-zinc-500 w-8 h-8 me-2 object-cover" :src="quiz.provider_avatar && quiz.user_image === null ?quiz.provider_avatar:`${api_url}/storage/`+quiz.user_image" referrerpolicy="no-referrer" alt="profile image">
                    <img v-else class="rounded-full  w-8 h-8 me-2 object-cover" :src="'/images/default_user.png'" alt="profile image">
                    
                    <span class="">{{quiz.user_name?quiz.user_name:"Unknown"}}</span>
                    <span class="mx-1">|</span>
                   <span class="">{{formatDate(quiz.created_at)}}</span>
                  </div>
                  <button @click="viewQuiz(quiz.quiz_id)" class="px-3 py-2 cursor-pointer bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 text-zinc-800 dark:text-slate-200 rounded-lg hover:rounded-xl group font-inter font-medium">
                    <svg class=" rotate-45 group-hover:rotate-90 inline-block duration-150 me-1 group-hover:text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M152 224a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm-24-112a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm95.62 43.83l-12.36 55.63a16 16 0 0 1-25.51 9.11L158.51 200h-61l-27.26 20.57a16 16 0 0 1-25.51-9.11l-12.36-55.63a16.09 16.09 0 0 1 3.32-13.71l28.56-34.26a123.07 123.07 0 0 1 8.57-36.67c12.9-32.34 36-52.63 45.37-59.85a16 16 0 0 1 19.6 0c9.34 7.22 32.47 27.51 45.37 59.85a123.07 123.07 0 0 1 8.57 36.67l28.56 34.26a16.09 16.09 0 0 1 3.32 13.71ZM99.43 184h57.14c21.12-37.54 25.07-73.48 11.74-106.88C156.55 47.64 134.49 29 128 24c-6.51 5-28.57 23.64-40.33 53.12c-13.31 33.4-9.36 69.34 11.76 106.88Zm-15 5.85q-16.15-29.35-19.6-57.69L48 152.36L60.36 208l.18-.13ZM208 152.36l-16.83-20.2q-3.42 28.28-19.56 57.69l23.85 18l.18.13Z"/></svg>
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
    import {Autoplay ,FreeMode , Navigation } from 'swiper/modules';

    export default {
      name : 'QuizzesSwiper',
      data() {
          return {
            api_url : import.meta.env.VITE_API_BASE_URL,
              
          }
      },
        props: {
            quizzes : Array,
            autoplayDelay : Number,
        },
        emits: ['saveQuiz','unsaveQuiz'],
        
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Autoplay ,FreeMode,Navigation],
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
          const index = this.quizzes.findIndex(q=>q.quiz_id==quiz_id);

          this.quizzes[index].saved = !this.quizzes[index].saved;

            if(this.quizzes[index].saved){
              this.$emit('saveQuiz',quiz_id);
            }else {
              this.$emit('unsaveQuiz',quiz_id);
            }
          axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/quiz/saveQuiz`,{
                    'quiz_id' : quiz_id,
                    },
                    {
                        headers : {
                            'Authorization' : `Bearer ${this.getToken}`,
                        }
                    }).then((response) => {

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