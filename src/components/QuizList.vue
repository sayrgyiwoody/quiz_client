<template>
    
    
    
    <div  v-for="(quiz,index) in quizzes" :key="index" class="pb-2 animate__animated animate__bounceIn group bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 shadow rounded border-[1.5px] border-slate-200 dark:border-zinc-500">
        <p class=" w-full flex justify-between mb-3">
            <span class="flex items-center bg-violet-600 px-3 py-1 text-white rounded-tl rounded-br text-sm">{{quiz.category_name}}</span>
            <span class=" text-sm text-slate-500 dark:text-muted flex items-center" v-if="quiz.latest_played ">
                <svg  class=" inline-block w-6 h-6 me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18 23q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm.5-5.2v-2.3q0-.2-.15-.35T18 15q-.2 0-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20q.15-.15.15-.35T20 19.3l-1.5-1.5ZM4 20h7.3q-.15-.475-.225-.975T11 18H4V6h9v3q0 .425.288.713T14 10h6v1.3q.55.175 1.05.413t.95.562V6q0-.825-.588-1.413T20 4H4q-.825 0-1.413.588T2 6v12q0 .825.588 1.413T4 20Zm0-2V6v12Z"/></svg>

                {{ getTimeDifference(quiz.latest_played) }}
            </span>
            <svg :class="isQuizSaved(quiz.quiz_id)? 'hidden':''" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.13Q6 17.926 6 17.052V5.616q0-.69.463-1.152Q6.925 4 7.615 4H13v1H7.615q-.23 0-.423.192Q7 5.385 7 5.615v11.393q0 .327.279.519t.586.058L12 15.8l4.135 1.785q.307.134.586-.058q.279-.192.279-.52V11h1v6.052q0 .873-.727 1.35q-.727.477-1.535.129L12 16.923ZM12 5H7h6h-1Zm5 2h-1.5q-.213 0-.356-.144T15 6.499q0-.212.144-.356Q15.288 6 15.5 6H17V4.5q0-.213.144-.356T17.5 4q.212 0 .356.144q.143.144.143.356V6h1.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q19.713 7 19.5 7H18v1.5q0 .213-.144.356Q17.712 9 17.5 9t-.356-.144Q17 8.713 17 8.5V7Z"/></svg>
            <svg :class="isQuizSaved(quiz.quiz_id)? '':'hidden'" @click="saveQuiz(quiz.quiz_id)" class=" cursor-pointer inline-block text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.915 6 17.052V5.615q0-.67.472-1.143Q6.944 4 7.615 4h6.154q-.384.596-.577 1.197Q13 5.798 13 6.5q0 1.742 1.157 3.012Q15.313 10.78 17 10.958q.287.036.5.036q.213 0 .5-.036v6.094q0 .863-.727 1.345t-1.535.134L12 16.923Zm5.113-9.325l3.172-3.19q.146-.166.347-.166q.2 0 .366.166q.165.165.165.356t-.165.357l-3.32 3.314q-.241.242-.565.242q-.323 0-.565-.242L15.335 7.22q-.14-.14-.14-.341t.14-.347q.146-.166.356-.156q.21.01.357.156l1.065 1.065Z"/></svg>
          </p>
        <div class="text-center flex flex-col">
            <div class="font-semibold text-zinc-900 dark:text-slate-100 border-b-2 border-slate-200 dark:border-zinc-500 pb-2 mb-1 w-fit mx-auto">
                <i class="fa-solid fa-user-astronaut me-2 "></i>
                <span class="">{{quiz.user_name}}</span>
        |       <span class="">{{formatDate(quiz.created_at)}}</span>
            </div>
            <h3 class="my-1 text-lg font-medium text-zinc-800 dark:text-slate-200">{{quiz.title}}</h3>
            <p class="px-5 mb-1 text-sm text-slate-500 dark:text-muted" >{{limitString(quiz.desc,100)}}</p>
            <a @click="viewQuiz(quiz.quiz_id)" class=" cursor-pointer w-fit mx-auto bg-slate-50 border-[1.5px] border-slate-200 dark:border-zinc-500 hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-zinc-600 hover:bg-slate-100 duration-150 dark:bg-zinc-700 px-5 text-zinc-800 dark:text-slate-200 py-3 my-2 rounded group"><i class=" group-hover:rotate-[128deg] duration-150 fa-solid fa-play me-3 group-hover:text-blue-500"></i>See more</a>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'


export default {
    name : 'QuizList',
    props: {
        quizzes : Array,
    },
    computed: {
        ...mapGetters(['getToken']),

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
        // view quiz 
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
        getTimeDifference(latestPlayed) {
            const latestPlayedDate = new Date(latestPlayed);
            const currentDate = new Date();
            const timeDiff = currentDate - latestPlayedDate;

            // Calculate days, hours, and minutes
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

            // Build the time difference string
            let timeDifference = "";
            if (daysDiff > 0) {
                timeDifference += `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'}`;
            }
            if (hoursDiff > 0) {
                timeDifference += `${timeDifference.length ? ' ' : ''}${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'}`;
            }
             if (minutesDiff > 0) {
                timeDifference += `${timeDifference.length ? ' ' : ''}${minutesDiff} ${minutesDiff === 1 ? 'minute' : 'minutes'}`;
            }

            // Add "ago" to the end
            timeDifference += `${timeDifference.length ? ' ago' : 'recently'}`;

            return timeDifference;
        }
        
    },
    
    
}
</script>

<style  scoped>

  
</style>    