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
        

        <swiper-slide class="swiper-quiz bg-white pb-2 dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 shadow rounded border-[1.5px] border-slate-200 dark:border-zinc-500 animate__animated animate__bounceIn" v-for="(quiz,index) in quizzes" :key="index">
          <div class="swiper-slide flex flex-col">
          <p class="  w-full flex justify-between mb-3"><span class="flex items-center bg-violet-600 px-3 py-1 text-white rounded-tl rounded-br text-sm">{{quiz.category_name}}</span>
            <svg :class="{'hidden':isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.13Q6 17.926 6 17.052V5.616q0-.69.463-1.152Q6.925 4 7.615 4H13v1H7.615q-.23 0-.423.192Q7 5.385 7 5.615v11.393q0 .327.279.519t.586.058L12 15.8l4.135 1.785q.307.134.586-.058q.279-.192.279-.52V11h1v6.052q0 .873-.727 1.35q-.727.477-1.535.129L12 16.923ZM12 5H7h6h-1Zm5 2h-1.5q-.213 0-.356-.144T15 6.499q0-.212.144-.356Q15.288 6 15.5 6H17V4.5q0-.213.144-.356T17.5 4q.212 0 .356.144q.143.144.143.356V6h1.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q19.713 7 19.5 7H18v1.5q0 .213-.144.356Q17.712 9 17.5 9t-.356-.144Q17 8.713 17 8.5V7Z"/></svg>
            <svg :class="{'hidden':!isQuizSaved(quiz.quiz_id)}" @click="saveQuiz(quiz.quiz_id)" class=" inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.915 6 17.052V5.615q0-.67.472-1.143Q6.944 4 7.615 4h6.154q-.384.596-.577 1.197Q13 5.798 13 6.5q0 1.742 1.157 3.012Q15.313 10.78 17 10.958q.287.036.5.036q.213 0 .5-.036v6.094q0 .863-.727 1.345t-1.535.134L12 16.923Zm5.113-9.325l3.172-3.19q.146-.166.347-.166q.2 0 .366.166q.165.165.165.356t-.165.357l-3.32 3.314q-.241.242-.565.242q-.323 0-.565-.242L15.335 7.22q-.14-.14-.14-.341t.14-.347q.146-.166.356-.156q.21.01.357.156l1.065 1.065Z"/></svg>
          </p>

                <div class="font-semibold text-zinc-900 dark:text-slate-100 border-b-2 border-slate-200 dark:border-zinc-500 pb-1 mb-1 w-fit mx-auto">
                    <i class="fa-solid fa-user-astronaut me-2 "></i>
                    <span class="">{{quiz.user_name}}</span>
            |       <span class="">{{formatDate(quiz.created_at)}}</span>
            {{isQuizSaved(quiz.quiz_id)}}
                </div>
                <h3 class="mb-1 text-lg font-medium text-zinc-800 dark:text-slate-200">{{quiz.title}}</h3>
                <p class="px-3 mb-1 text-sm text-slate-500 dark:text-muted" >{{limitString(quiz.desc,100)}}</p>
                <a @click="viewQuiz(quiz.quiz_id)" class="btn-play bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 px-5 text-zinc-800 dark:text-slate-200 py-3 my-2 rounded group"><i class="duration-150 fa-solid fa-play me-3 group-hover:text-blue-500"></i>See more</a>
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
                        this.quizzes[index].saved = true;
                      }else if(response.data.status === 'unsaved'){
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
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    transition: .5s;
  }

  

  

  .swiper-quiz:hover .fa-play{
    transform: rotate(125deg);
  }



  </style>