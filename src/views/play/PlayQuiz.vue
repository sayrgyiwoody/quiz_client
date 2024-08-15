<template>
    <div class=" max-w-lg mx-auto px-2 py-3">
        <div class="flex  justify-between items-center text-zinc-800 dark:text-slate-200 mb-3 text-xl">
            <a @click="directBack()" class=" cursor-pointer hover:text-primary duration-100 font-semibold"><i class="fa-solid fa-arrow-left me-2 cursor-pointer"></i>Back</a>
        </div>
        <div class="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-slate-100 px-3 py-2 rounded mb-4 shadow font-semibold text-lg ">{{ quiz.title }}</div>
        <div class="flex space-x-2">
            <div v-for="(question,index) in questionList" :key="index" :class="{'bg-emerald-600 dark:bg-emerald-600':answerHistory[index]===true,'bg-rose-600 dark:bg-rose-600':answerHistory[index]===false,'bg-white dark:bg-zinc-700':answerHistory[index]===undefined}" class=" duration-150  w-full h-3  border dark:border-none border-slate-300 shadow rounded-[3px] cursor-pointer"></div>
            
        </div>
        <p class=" text-end font-semibold text-zinc-800 dark:text-slate-50 mt-2">Question {{ currentQuestion }}/{{ questionList.length }}</p>
        <div v-if="loading" class="spinner-container"><div class="spinner"></div><span class="font-semibold ms-2 text-zinc-700 dark:text-slate-200 " >Checking Answer..</span></div>
        <p v-if="answerRequired" class="animate__animated animate__bounceIn text-white bg-indigo-500 px-4 py-3 rounded mt-4 font-medium">
            <svg class="me-2 mb-1 inline-block w-6  h-6 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
            Please select or enter answer first !
        </p>
        <p v-if="answerStatus === true && currentQuestion < questionList.length" class="animate__animated animate__bounceIn text-white bg-emerald-500 px-4 py-3 rounded mt-4 font-medium">
            <svg class="me-2 mb-1 inline-block w-6  h-6 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
            Your answer is correct, You can move to the next question.
        </p>
        <p v-if="answerStatus === false" class="animate__animated animate__bounceIn text-white bg-rose-500 px-4 py-3 rounded mt-4 font-medium">
            <svg class="me-2 mb-1 inline-block w-6  h-6 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57l-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
            Your answer is incorrect, Try again for the correct answer.
        </p>
        <p v-if="answerStatus === true && currentQuestion === questionList.length" class="animate__animated animate__bounceIn text-white bg-emerald-500 px-4 py-3 rounded mt-4 font-medium">
            <svg class=" mb-1 inline-block w-6  h-6 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128"><path fill="#FEC417" d="M97.12 59.35c2.22-1.83 15.04-9.76 22.06-16.44c5.48-5.22 7.6-18.85-.83-25.48c-10.96-8.61-21.48.43-21.48.43s-.92-5.11-7.32-8.11c-8.06-3.78-18.27-5.19-27.66-5.07c-9.1.11-17.48 1.21-24.92 4.86c-6.66 3.27-7.06 7.93-7.06 7.93s-8.74-8.35-19.45-1.57C-.24 22.69 2.83 36.29 7.98 42c6.71 7.44 14.77 11.23 18.43 13.97c3.65 2.74 7.15 5.35 7.15 7.7c0 2.35-1.04 2.87-1.44 2.74c-.39-.13-1.08-2.42-2.87-1.44c-2.44 1.35-1.7 6.79 3.39 7.31c4.93.51 5.87-4.7 5.87-4.7l.78-5.09l8.09 5.61l8.87 7.31l-.26 6.26s-.39 4.83-2.74 9.01s-6.13 8.35-6.13 8.35l-.12 3.78l32.89-.78l-1.04-3.65s-4.24-4.66-6.79-9.66c-1.82-3.58-2.11-7.19-2.11-7.19l-.08-8.98l17.07-10.46s1.83 1.44 1.57 1.96s-.32 5.85 3.78 7.83c4.05 1.96 7.31-.52 6.92-3.92c-.39-3.39-2.48-2.22-3.13-1.7c-.65.52-2.09.65-2.48-1.31c-.4-1.94 1.3-3.77 3.52-5.6zM13.09 40.89l-3.91-11.9l4.73-6.19l5.3-1.55s6.77 5.05 7.01 5.46c.24.41 4.32 8.8 4.32 8.8l5.38 19.48l-22.83-14.1zm76.86 15.65c.08-.41 5.05-20.87 5.05-20.87c0-.24 3.5-1.87 3.5-2.2c0-.33 6.36-10.68 6.36-10.68l10.6.41l2.2 10.51l-5.3 8.72c.01.01-22.49 14.51-22.41 14.11z"/><path fill="#FFA828" d="M119.92 30.64c-.78-9.32-10-11.55-13.79-10.2s-6.25 3.88-7.09 7.48c-.68 2.91-1.36 4.85-2.14 5.15c-.86.32-1.65.19-1.65.19s-.14-6.3-.1-8.84c.1-5.24 1.7-6.58 1.7-6.58s-.34-1.77-1.02-2.75c-.68-.97-1.94-2.23-1.94-2.23s.29 2.52-.97 3.11s-2.62-.29-2.62-.29l1.26 5.24s-2.04 26.12-2.23 26.7c-.19.58-7.86 13.88-7.86 13.88s-4.47 4.18-6.6 5.15c-2.14.97-3.98 3.5-12.23 3.59c-8.25.1-15.34-6.41-15.34-6.41l-7.09-6.8l-5.24-15.44l-.78-15.73l.33-5.72l.23-2.39l-.37-1.21s-.68.68-1.94.39c-1.26-.29-1.75-1.94-1.75-1.94s-.49.78-.58 1.17c-.1.39-.2 1.29-.2 1.29s1.36 1.43 1.65 3.47c.29 2.04-.1 10.49-1.55 10.29c-1.46-.19-.98-7.28-6.51-10c-4.79-2.36-11.94-1.65-14.86 4.27c-2.91 5.92-.78 12.91 8.35 19.42s18.85 11.98 20.39 17.2c1.84 6.21-2.33 9.9-2.33 9.9s3.03-.42 4.52-3.67c.48-1.05.66-2.58.73-3.49c3.45 4.5 8.04 8.31 14.12 10.15c2.3.79 4.89 1.19 8.49 1.19c.52 0 1.03-.02 1.54-.04c4.21-.15 7.81-.94 11.3-2.67c4.71-2.18 8.36-5.51 11.18-9.29c-.08.9.47 3.14 1.52 4.91c1.84 3.11 4.95 3.3 4.95 3.3s-4.27-2.52-3.4-8.54c.87-6.02 4.85-8.16 10.87-12.04c6.04-3.89 19.82-11.85 19.05-21.17zM21.27 43.85c-2.71-1.91-7.46-4.46-9.42-8.35c-2.61-5.19-.49-11.46 4.47-12.23c10.3-1.62 10.49 11.17 11.17 12.72c.68 1.55 2.62 1.65 2.62 1.65s.07.86.35 2.52c.01.05.02.09.02.14l.03.15c.19 1.13.46 2.54.84 4.15l.03.12c.21.91.43 1.77.66 2.56c.46 1.66 1.02 3.45 1.71 5.29c-1-.68-6.73-4.65-12.48-8.72zm93.31-7.19c-2.15 3.48-6.5 6.07-9.71 8.25c-4.14 2.81-10.3 7.03-12.04 8.21c.4-1.06.75-2.11 1.07-3.14c.52-1.36 1.07-3.02 1.45-4.81c1-4.7 1.17-8.81 1.17-8.81s2.04.58 3.3-.78c1.26-1.36 1.73-5.58 2.91-7.57c1.84-3.11 5.53-6.31 11.07-2.43c3.2 2.25 3.32 6.96.78 11.08zM60.52 79.31l5.65-.07s.15 6.17 1.04 10.77c.89 4.61 2.08 9.73 2.08 9.73s-11.51 3.86-11.44-.3s1.78-12.26 1.78-12.26s1.04-9.65.89-7.87z"/><path fill="#FFA828" d="M51.04 15.19s6.29-.71 12.14-.62s11.87 1.24 11.87 1.24s-.35 19.58-1.42 30.57c-1.06 10.99-5.22 19.22-6.33 21.55c-1.07 2.26-1.85 3.47-1.85 3.47l-5.64-.66l-9.75-19.58l.98-35.97z"/><path fill="#FFEFAB" d="M43.51 18.12s1.77-.89 4.34-1.86c2.33-.88 4.43-1.15 4.43-1.15s.06 12.98.27 22.24c.18 7.89 3.1 20.82 4.52 24.28c1.42 3.46 3.98 8.74 3.98 8.74s-5.15-.74-8.32-4.76c-1.67-2.12-9.48-18.52-9.75-29.33s.79-18.43.53-18.16z"/><path fill="#FFFCFD" d="M40.58 19.62c-.18.53-1.59 11.7.62 22.06s5.48 17.45 7.64 20.26c1.92 2.49 3.17 3.67 3.88 3.67s-2.92-8.59-4.61-15.33c-1.68-6.73-2.57-14.8-2.75-18.78c-.18-3.99-.35-14.27-.35-14.27s-1.95.89-2.39 1.15c-.44.27-2.04 1.24-2.04 1.24z"/><path fill="#FFEFAB" d="M53.34 99.01s3.81-6.2 4.61-10.9c.8-4.7 1.24-8.86 1.24-8.86l2.36.1s-.23 6.81-.5 11.42s-1.06 9.13-1.06 9.13l-6.65-.89z"/><path fill="#D1701C" d="M56.27 75.41s1.77-1.73 6.64-1.73s6.96 1.87 6.96 1.87l.13 6.01s-3.24-1.01-7.18-1.06c-3.28-.04-6.81 1.18-6.81 1.18l.26-6.27zM35 15.72c.82-.76 8.68-6.66 27.29-6.82c20.02-.18 27.53 5.62 28 5.94c.53.35 1.15 1.95.89 2.66c-.27.71-.8.97-2.3.35c-1.51-.62-8.95-6.05-26.85-5.49c-17.19.53-24.48 5.76-25.25 6.2c-.62.35-1.77.44-2.3-.27c-.54-.7-.01-2.07.52-2.57zm56.18 4.17c-2.3.18-.71 18.7-5.58 30.3c-5.22 12.41-11.88 15.95-11.61 16.66c.27.71 6.79-1.26 10.9-7.09c3.81-5.4 6.11-10.19 7.18-16.57c1.05-6.38 1.67-23.5-.89-23.3zm-56.67 2.12c-.58-.03.01 9.21-.93 13.27c-.36 1.56-1.24 1.88-1.33 2.23c-.09.35 1.93 12.24 5.32 17.46c3.28 5.05 9.75 11.34 10.81 10.28c1.06-1.06-4.7-4.61-8.59-12.32c-2.24-4.42-4.52-11.08-4.61-18.7c-.06-5.04.57-12.15-.67-12.22z"/><path fill="#865C50" d="m86.77 112.71l-.01-14.29H40.89c.14 0 .03 11.62.01 14.34h-6.52v10.35h58.25v-10.35l-5.86-.05z"/><path fill="#FCC219" d="M55.59 105.93c-1.13-.05-2.43.18-2.48 1.58s-.05 5.45-.05 6.22c0 .77.63 1.44 2.21 1.49c1.58.05 16.41 0 17.45 0c1.04 0 1.58-.9 1.62-1.8c.05-.9-.05-4.69-.05-5.72c0-1.71-1.53-1.71-2.57-1.71c-1.12-.02-16.13-.06-16.13-.06z"/></svg>
            Congratulations on finishing all the questions! Now it's time to check your scores. Good luck, and remember to be proud of your hard work.
        </p>
        
        <div v-for="(question,index) in paginatedQuestions" :key="index" class=" mt-6 animate__animated animate__bounceIn">
            <div class="flex items-center justify-between">
                <div class="bg-primary text-white px-3 py-2 rounded-t">Question {{question.id + 1}}</div>
                <p @click="showAnswer(quiz.quiz_id,question.id)" class=" cursor-pointer hover:text-primary dark:hover:text-blue-500 font-medium  text-zinc-800 dark:text-slate-200">Need Answer<i class="fa-solid fa-question ms-2 text-rose-600"></i></p>
            </div>

            <div class="bg-white border-[1.5px] rounded-tl-none border-primary dark:border-blue-500  dark:bg-zinc-800 shadow rounded px-5 py-3">
                <p class="mb-2 text-zinc-900 dark:text-slate-100 font-semibold ">{{question.question_text}}</p>
                <div v-if="question.type === 'choice'" class="">
                    <div v-for="(c,cIndex) in question.choices" :key="cIndex" class="flex items-center mb-2">
                        <input v-model="answers[question.id]" :id="'choice-radio-'+cIndex" type="radio" :value="c.choice" :disabled="answerStatus" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label :for="'choice-radio-'+cIndex" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{c.choice}}</label>
                    </div>
                    
                </div>
                <div v-if="question.type === 'question'" class="mt-3">
                    <input @keyup.enter="checkAnswer(quiz.quiz_id,question.id)" v-model="answers[question.id]" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your answer here ...">
                </div>
            </div>
            <button :disabled="answerStatus" @click="checkAnswer(quiz.quiz_id,question.id)" type="button" class=" disabled:bg-blue-800 dark:disabled:bg-zinc-700 cursor-pointer mt-4 animate__animated animate__bounceIn flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md  px-5 py-2.5 text-center w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class=" inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385V5.615q0-.69.463-1.152Q3.925 4 4.615 4h14.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615Zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423V5.615q0-.23-.192-.423Q19.615 5 19.385 5H4.615q-.23 0-.423.192Q4 5.385 4 5.615v12.77q0 .23.192.423q.193.192.423.192Zm.885-2.5h4v-1h-4v1Zm9.05-2.212l4.238-4.238l-.713-.713l-3.525 3.55l-1.425-1.425l-.688.713l2.113 2.113ZM5.5 12.5h4v-1h-4v1Zm0-4h4v-1h-4v1ZM4 19V5v14Z"/>
                </svg>
                Submit Answer
            </button>
        </div>
        
        <button v-if="answerStatus === true && currentQuestion < questionList.length" @click="changeQuestion(currentQuestion+1)" class=" cursor-pointer  animate__animated animate__bounceIn font-semibold flex items-center ms-auto text-zinc-800 dark:text-slate-100 mt-3 hover:text-primary dark:hover:text-blue-500 duration-150">
            Next Quiz 
            <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17V7l5 5l-5 5Z"/></svg>
        </button>
        <button v-if="answerStatus === true && currentQuestion === questionList.length" @click="showScore()" class=" cursor-pointer  animate__animated animate__bounceIn font-semibold flex items-center ms-auto text-zinc-800 dark:text-slate-100 mt-3 hover:text-primary dark:hover:text-blue-500 duration-150">
            Show Score
            <svg  class="ms-1 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M98.398 21.146a17.092 17.092 0 0 0-4.636.521c-20.49 5.262-33.163 20.63-36.116 38.649c-2.952 18.019 2.168 38.346 12.676 58.193c20.695 39.086 63.262 77.08 117.852 85.85c-5.61-6.72-11.05-14.246-16.274-22.375c-39.008-12.57-70.021-42.344-85.67-71.899c-9.206-17.387-12.846-34.491-10.82-46.857C77.437 50.862 83.482 42.89 98.238 39.1c.065-.017.068-.034.092-.053c-.065-.143.105-.08 0 0a.68.68 0 0 0 .176.217c.527.493 1.689 2.24 2.207 5.14c1.036 5.804-.413 15.593-8.135 25.68l14.293 10.942c10.418-13.61 13.65-28.086 11.56-39.785c-1.044-5.85-3.396-11.165-7.628-15.124c-3.174-2.969-7.747-4.868-12.405-4.972zm315.204 0c-4.658.104-9.23 2.003-12.405 4.972c-4.232 3.96-6.584 9.274-7.629 15.124c-2.089 11.699 1.143 26.174 11.56 39.785l14.294-10.942c-7.722-10.087-9.171-19.876-8.135-25.68c.518-2.9 1.68-4.647 2.207-5.14a.695.695 0 0 0 .176-.217c-.105-.08.065-.143 0 0c.024.019.027.036.092.053c14.756 3.79 20.801 11.76 22.828 24.127c2.026 12.366-1.614 29.47-10.82 46.857c-15.649 29.555-46.662 59.33-85.67 71.899c-5.223 8.129-10.665 15.655-16.274 22.375c54.59-8.77 97.157-46.764 117.852-85.85c10.508-19.847 15.628-40.174 12.676-58.193c-2.953-18.02-15.626-33.387-36.116-38.649a17.092 17.092 0 0 0-4.636-.521zm-276.166 7.713c2.146 36.533 16.76 83.07 36.537 120.824c10.707 20.442 22.876 38.334 34.761 50.685C220.62 212.72 232 218.858 240 218.858h32c8 0 19.38-6.138 31.266-18.49c11.885-12.351 24.054-30.243 34.761-50.685c19.777-37.755 34.39-84.29 36.537-120.824H137.436zm95.564 208v16h46v-16h-46zm6.445 34c-2.458 25.967-12.796 57.873-24.437 76h81.984c-11.64-18.127-21.979-50.033-24.437-76h-33.11zm-38.445 94v14h110v-14H201zm-32 32v94h174v-94H169zm23 23h128v48H192v-48z"/></svg>
            
        </button>
    </div>

</template>

<script src="../../assets/js/PlayQuiz.js"></script>
<style scoped>
.spinner-container {
    position: relative;
    top: 0;
    backdrop-filter: blur(5px); /* Adds a blur effect to the background */
    display: flex;
    justify-content: center;
    align-items: center;
  }

.spinner {
    width: 56px;
    height: 56px;
    display: grid;
    border: 4.5px solid #0000;
    border-radius: 50%;
    border-color: #dbdcef #0000;
    animation: spinner-e04l1k 1s infinite linear;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  .spinner::before {
    border-color: #474bff #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  .spinner::after {
    margin: 8.9px;
  }

  @keyframes spinner-e04l1k {
    100% {
      transform: rotate(1turn);
    }
  }
</style>