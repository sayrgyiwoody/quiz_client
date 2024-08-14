import axios from 'axios';
import { mapActions , mapGetters } from 'vuex'
export default {
    data() {
        return {
            currentQuestion : 1,
            answers : [],
            answerHistory : [],
            answerStatus : null,
            questionList : [],
            quiz : {},
            loading :false,
            answerRequired : false,
        }
    },
    computed: {
        ...mapGetters(["getToken"]),
        paginatedQuestions() {
            return this.questionList.slice(this.currentQuestion-1,this.currentQuestion);
        },
    },
    methods: {
        ...mapActions(["setLoadingStatus"]),
        directBack(){
            history.back();
        },
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
        getQuestionList(){
            this.setLoadingStatus(true);
            let quiz_id = this.$route.params.quiz_id;
            axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/getQuestionList`,{
                'quiz_id' : quiz_id,
            },{
                headers : {
                    'Authorization' : `Bearer ${this.getToken}`,
                }
            })
            .then((response) => {
                
                this.questionList = response.data.question_list;
                this.quiz = response.data.quiz;
                this.setLoadingStatus(false);
            }).catch(error => console.log(error));
        },
        // change next question 
        changeQuestion(questionNum) {  
          this.currentQuestion = questionNum;
          this.answerStatus = null;
        },
        checkAnswer(quiz_id,question_id){
            this.answerRequired = false;
            this.answerStatus = null;
            if(this.answers[question_id]){
                
                this.loading = true;
                axios.post(`http://127.0.0.1:8000/api/answerCheck`,{
                    'quiz_id' : quiz_id,
                    'question_id' : question_id,
                    'user_answer' : this.answers[question_id],
                },{
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                })
                .then((response) => {
                    this.loading = false;
                    if (this.answerHistory[question_id] === undefined) {
                        this.answerHistory[question_id] = response.data.answerStatus;
                    }
                    this.answerStatus = response.data.answerStatus;
                }).catch(error => console.log(error));
            }else {
                this.answerRequired = true;
            }
        },
        showAnswer(quiz_id,question_id) {
            const trueCount = Object.values(this.answerHistory).filter(answer => answer === true).length;
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire({
                html: `
                <p class="text-center text-2xl font-bold mb-2">Need Answer ?</p"><p class="text-center">You won't get any score if request for the answer.</p>
                
                `,
                color: `${textColor}`,
                background: `${bgColor}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText : "No, I'll try myself"
              }).then((result) => {

                if (result.isConfirmed) {
                    this.setLoadingStatus(true);
                    if (this.answerHistory[question_id] === undefined) {
                        this.answerHistory[question_id] = false;
                    }
                    axios.post(`http://127.0.0.1:8000/api/answerRequest`,{
                        'quiz_id' : quiz_id,
                        'question_id' : question_id,
                    },{
                        headers : {
                            'Authorization' : `Bearer ${this.getToken}`,
                        }
                    })
                    .then((response) => {
                    this.setLoadingStatus(false);

                        Swal.fire({
                            html: `
                            <p class="text-center text-sm text-slate-500 dark:text-muted font-medium">Answer for question 1</p"><p class="text-center font-semibold text-xl">${response.data.requestedAnswer}</p>
                            `,
                            color: `${textColor}`,
                            background: `${bgColor}`,
                            icon: 'info',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'I got it.',
                          })
                    }).catch(error => console.log(error));

                }

              })

        },
        showScore(){
            const trueCount = Object.values(this.answerHistory).filter(answer => answer === true).length;
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire({
                imageUrl: "../../../public/images/trophy.gif",
                imageWidth: 300,
                color: `${textColor}`,
                background: `${bgColor}`,
                html: `
                <p class="text-center text-2xl font-bold mb-2">Congratulations</p"><p class="text-center">Congratulations on finishing all the questions. I really appreciate you and Remember to be proud of your effort🎉</p>
                <p class="text-center text-sm text-slate-500 dark:text-muted mt-2 font-medium">Your Score</p>
                <p class="text-center text-4xl font-semibold">${trueCount}/${this.questionList.length}</p>
                `,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: true,
                confirmButtonText: `
                  <svg class=" inline-block me-2 hover:rotate-45 duration-150" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#ff6242" d="m14.05 26.58l5.67-7a19.55 19.55 0 0 0-8.5-.24c-3.12.77-3.61 6.66-3.66 9.45a.87.87 0 0 0 1.31.77Z"/><path fill="#ff866e" d="M11.24 22a18.17 18.17 0 0 1 6.62-.13l1.86-2.28a19.55 19.55 0 0 0-8.5-.24c-3.12.76-3.61 6.65-3.66 9.44a.85.85 0 0 0 .14.48c.3-2.94 1.09-6.66 3.54-7.27Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m14.05 26.58l5.67-7a19.55 19.55 0 0 0-8.5-.24c-3.12.77-3.61 6.66-3.66 9.45a.87.87 0 0 0 1.31.77Z"/><path fill="#ff6242" d="m20.86 33.4l7-5.67a19.52 19.52 0 0 1 .24 8.49c-.73 3.12-6.58 3.61-9.41 3.66a.87.87 0 0 1-.77-1.31Z"/><path fill="#ff866e" d="M25.41 36.21a18 18 0 0 0 .13-6.63l2.28-1.85a19.52 19.52 0 0 1 .24 8.49c-.73 3.12-6.58 3.61-9.41 3.66a.87.87 0 0 1-.48-.14c2.94-.26 6.66-1.09 7.24-3.53Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m20.86 33.4l7-5.67a19.52 19.52 0 0 1 .24 8.49c-.73 3.12-6.58 3.61-9.41 3.66a.87.87 0 0 1-.77-1.31Z"/><path fill="#e8f4fa" d="M39.48 21.56c5.42-5.7 3.71-12.73 2.86-15.2a2 2 0 0 0-.48-.78a2.13 2.13 0 0 0-.77-.48c-2.47-.85-9.51-2.56-15.21 2.9C18.84 14.66 14 26.5 14 26.5l7 7s11.78-4.9 18.48-11.94Z"/><path fill="#fff" d="M28.05 11.87c5.53-5.27 12.31-3.8 15-2.94a17.29 17.29 0 0 0-.66-2.57a2 2 0 0 0-1.3-1.26c-2.47-.85-9.51-2.56-15.21 2.9C18.84 14.66 14 26.5 14 26.5l2.69 2.69c1.43-3.19 5.68-11.92 11.36-17.32Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M39.48 21.56c5.42-5.7 3.71-12.73 2.86-15.2a2 2 0 0 0-.48-.78a2.13 2.13 0 0 0-.77-.48c-2.47-.85-9.51-2.56-15.21 2.9C18.84 14.66 14 26.5 14 26.5l7 7s11.78-4.9 18.48-11.94Z"/><path fill="#45413c" d="M18.22 44.21a10 1.5 0 1 0 20 0a10 1.5 0 1 0-20 0Z" opacity=".15"/><path fill="#ff6242" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M22.7 25.65a.68.68 0 0 0-.92-.93a22.13 22.13 0 0 0-5.31 3.8a17.84 17.84 0 0 0-3.87 5.86a.34.34 0 0 0 .44.45A17.84 17.84 0 0 0 18.9 31a21.91 21.91 0 0 0 3.8-5.35Z"/><path fill="#c0dceb" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M28.24 13.72a5.49 5.49 0 1 0 10.98 0a5.49 5.49 0 1 0-10.98 0Z"/><path fill="#00b8f0" d="M29.96 13.69a3.8 3.8 0 1 0 7.6 0a3.8 3.8 0 1 0-7.6 0Z"/><path fill="#4acfff" d="M31.07 11a3.8 3.8 0 0 0 0 5.38a3.94 3.94 0 0 0 .85.62l3.55-6.69a3.77 3.77 0 0 0-4.4.69Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M29.96 13.69a3.8 3.8 0 1 0 7.6 0a3.8 3.8 0 1 0-7.6 0Z"/><path fill="#ff8a14" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M11.34 41.47c-.7.7-5.16 2.21-7.42 2.94c-.42.14-1-.47-.89-.89c.73-2.25 2.24-6.71 3-7.42c.95-1 3.43-1 4.91.46s1.35 3.96.4 4.91Z"/><path fill="#ffe500" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M10.13 39.79c-.5.49-2.57 1-3 .56s.07-2.54.57-3a1.57 1.57 0 0 1 2.13.34a1.56 1.56 0 0 1 .3 2.1Z"/><path fill="#ffe500" d="m43.32 23.69l.8 1.51a.42.42 0 0 0 .32.22l1.69.2a.42.42 0 0 1 .25.71l-1.19 1.22a.39.39 0 0 0-.11.37l.33 1.67a.42.42 0 0 1-.59.46l-1.53-.76a.44.44 0 0 0-.39 0l-1.49.84a.43.43 0 0 1-.62-.43L41 28a.41.41 0 0 0-.13-.36l-1.21-1.14a.42.42 0 0 1 .21-.72l1.68-.29a.41.41 0 0 0 .31-.23l.72-1.55a.41.41 0 0 1 .74-.02Z"/><path fill="#fff48c" d="m40.53 27.31l1.06-.19a.4.4 0 0 0 .31-.23l.72-1.55a.42.42 0 0 1 .75 0l.79 1.51a.42.42 0 0 0 .32.22l1.07.13l.83-.85a.42.42 0 0 0-.25-.71l-1.69-.2a.42.42 0 0 1-.32-.22l-.8-1.51a.41.41 0 0 0-.74 0l-.72 1.55a.41.41 0 0 1-.31.23l-1.68.29a.42.42 0 0 0-.21.72Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m43.32 23.69l.8 1.51a.42.42 0 0 0 .32.22l1.69.2a.42.42 0 0 1 .25.71l-1.19 1.22a.39.39 0 0 0-.11.37l.33 1.67a.42.42 0 0 1-.59.46l-1.53-.76a.44.44 0 0 0-.39 0l-1.49.84a.43.43 0 0 1-.62-.43L41 28a.41.41 0 0 0-.13-.36l-1.21-1.14a.42.42 0 0 1 .21-.72l1.68-.29a.41.41 0 0 0 .31-.23l.72-1.55a.41.41 0 0 1 .74-.02Z"/><path fill="#ffe500" d="m31.74 40.59l.26 1.35a.35.35 0 0 0 .2.24l1.27.54a.34.34 0 0 1 0 .6l-1.2.68a.32.32 0 0 0-.17.26l-.1 1.37a.34.34 0 0 1-.57.22l-1-.93a.3.3 0 0 0-.3-.08l-1.34.3a.34.34 0 0 1-.38-.47l.59-1.25a.31.31 0 0 0 0-.31l-.7-1.18a.34.34 0 0 1 .33-.51l1.36.16a.38.38 0 0 0 .3-.11l.9-1a.34.34 0 0 1 .55.12Z"/><path fill="#fff48c" d="m28.76 42.75l.86.1a.35.35 0 0 0 .3-.11l.9-1a.34.34 0 0 1 .59.15l.27 1.35a.31.31 0 0 0 .19.24l.8.34l.84-.47a.34.34 0 0 0 0-.6l-1.27-.54a.35.35 0 0 1-.2-.24l-.27-1.35a.34.34 0 0 0-.58-.16l-.9 1a.38.38 0 0 1-.3.11l-1.36-.16a.34.34 0 0 0-.33.51Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m31.74 40.59l.26 1.35a.35.35 0 0 0 .2.24l1.27.54a.34.34 0 0 1 0 .6l-1.2.68a.32.32 0 0 0-.17.26l-.1 1.37a.34.34 0 0 1-.57.22l-1-.93a.3.3 0 0 0-.3-.08l-1.34.3a.34.34 0 0 1-.38-.47l.59-1.25a.31.31 0 0 0 0-.31l-.7-1.18a.34.34 0 0 1 .33-.51l1.36.16a.38.38 0 0 0 .3-.11l.9-1a.34.34 0 0 1 .55.12Z"/><path fill="#9ceb60" d="M11.86 7a3.06 3.06 0 1 1-2.59-3.44A3.06 3.06 0 0 1 11.86 7Z"/><path fill="#c8ffa1" d="M9.27 5.74a3.06 3.06 0 0 1 2.41 2a2.87 2.87 0 0 0 .18-.74a3.06 3.06 0 0 0-6.06-.85A3.23 3.23 0 0 0 6 7.67a3.08 3.08 0 0 1 3.27-1.93Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M11.86 7a3.06 3.06 0 1 1-2.59-3.44A3.06 3.06 0 0 1 11.86 7Z"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M5.86 7.3C5.1 7.82 3.57 9 4 9.86s10.49-5.15 10.14-6s-2.5.12-3.26.48"/></svg>
                Explore more
                `,
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: `
                  <i class="fa fa-thumbs-down"></i>
                `,
                cancelButtonAriaLabel: "Thumbs down"
              }).then(result=>{
                if(result.isConfirmed){
                    this.directHome();
                }
              });
        },
        
    },
    mounted () {
        this.getQuestionList();
        
    },

}