<template>
    <div class="grid grid-cols-1 md:grid-cols-7 pb-2 md:space-x-3">
        <div class="md:col-span-3 md:px-6 md:py-3">
            <div class=" bg-white dark:bg-zinc-800 px-4 py-3 rounded shadow animate__animated animate__bounceIn">
                <div class="flex justify-between">
                    <h4 class="flex items-center text-zinc-900 dark:text-slate-100">
                        <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74c0-3.87-3.13-7-7-7m2 11.58V16h-1v-4.59l1.71-1.7c.39-.39.39-1.03 0-1.42c-.39-.39-1.03-.39-1.42 0L12 9.59l-1.29-1.3c-.39-.39-1.03-.39-1.42 0c-.39.39-.39 1.03 0 1.42l1.71 1.7V16h-1v-2.42C8.23 12.81 7 11.05 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.05-1.23 3.81-3 4.58M9 20h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-1Z"/>
                        </svg>
                        <span class="ms-2 text-2xl font-semibold">Quiz Information</span>
                    </h4>
                    <div v-if="quiz_title || quiz_desc || selectedCategory " @click="clearInfo()" class="flex items-center p-1 md:p-2 border-2 hover:bg-slate-50 dark:hover:bg-zinc-600 duration-150 border-blue-600 text-zinc-900 dark:text-slate-100 bg-white shadow dark:bg-zinc-700 rounded">
                        <svg class=" inline-block w-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M235.5 216.81c-22.56-11-35.5-34.58-35.5-64.8v-17.28a15.94 15.94 0 0 0-10.09-14.87L165 110a8 8 0 0 1-4.48-10.34l21.32-53a28 28 0 0 0-16.1-37a28.14 28.14 0 0 0-35.82 16a.61.61 0 0 0 0 .12L108.9 79a8 8 0 0 1-10.37 4.49L73.11 73.14a15.89 15.89 0 0 0-17.37 3.66C34.68 98.45 24 123.75 24 152a111.45 111.45 0 0 0 31.18 77.53A8 8 0 0 0 61 232h171a8 8 0 0 0 3.5-15.19ZM67.14 88l25.41 10.3a24 24 0 0 0 31.23-13.45l21-53c2.56-6.11 9.47-9.27 15.43-7a12 12 0 0 1 6.88 15.92l-21.4 52.99a24 24 0 0 0 13.43 31.14l24.88 9.83V153L55.77 101.71A108.84 108.84 0 0 1 67.14 88Zm48 128a87.53 87.53 0 0 1-24.34-42a8 8 0 0 0-15.49 4a105.16 105.16 0 0 0 18.36 38H64.44A95.54 95.54 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.29l137.8 55.12c3 18 10.56 33.48 21.89 45.16Z"/></svg>
                        <span class="ms-2">Clear</span>
                    </div>
                    
                </div>
                    <hr class="mt-2 mb-4">   
                    <div v-if="infoSaved" class="flex items-center border-[1.5px] dark:border-zinc-700 text-green-500 font-semibold rounded px-4 py-3 mb-4">
                        Changes saved
                        <svg class=" inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z"/></svg>
                    </div>
                    <div v-if="infoValidateMessage" class="flex items-center border-[1.5px] dark:border-zinc-700 text-red-600 font-semibold rounded px-4 py-3 mb-4">
                        {{infoValidateMessage}}
                        <svg class=" inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                    </div>
                    <form @submit.prevent="saveQuizInfo">
                        <div action="" class="">
                            <div class="relative z-0 w-full mb-4 group">
                                <input v-model="quiz_title"  name="" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10  text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Enter Quiz Title</label>
                            </div>
                            <div class="relative z-0 w-full mb-4 group">
                                <textarea v-model="quiz_desc" name="" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required rows="2"></textarea>
                                <label class="peer-focus:font-medium absolute text-sm   dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Enter Quiz Description</label>
                            </div>
                            
                        </div>
                        <select v-if="categories" v-model="selectedCategory" class=" mb-4 bg-slate-50 border-[1.5px] border-slate-300  text-zinc-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">Choose category</option>
                            <option :selected="c.id == selectedCategory" v-for="(c,index) in categories" :key="index" :value="c.id">{{c.name}}</option>
                        </select>
                        <button class=" flex items-center justify-center text-white dark:text-slate-50 px-4 py-2 bg-primary hover:bg-primary_hover rounded dark:bg-zinc-700 dark:hover:bg-zinc-600 duration-150">
                            <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21 7v12q0 .825-.588 1.413T19 21H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h12l4 4Zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6v4Z"/>
                            </svg>
                            <span class="ms-2 font-medium">Save Changes</span>
                        </button>
                    </form>
            </div>
            <div class="mt-3 bg-white dark:bg-zinc-800 px-4 py-3 rounded shadow animate__animated animate__bounceIn">
                <div class="flex justify-between">
                    <h4 class="flex items-center text-zinc-900 dark:text-slate-100">
                        <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M93.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L56 132.69l26.34-26.35a8 8 0 0 1 11.32 0Zm-11.32-64L56 68.69L45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32Zm0 128L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32ZM216 48h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm0 128h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0-64h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Z"/>
                        </svg>
                        <span class="ms-2 text-2xl font-semibold">Quiz Builder</span>
                    </h4>
                    <div v-if="option === 'choice' && choices.length > 1" @click="removeChoice" class="p-2 border-2 hover:bg-slate-50 dark:hover:bg-zinc-600 duration-150 border-blue-600 text-zinc-900 dark:text-slate-100 bg-white shadow dark:bg-zinc-700 rounded">
                        <svg class=" inline-block w-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.25h-3m0 3.5c0 2.5 2.798 5.5 6.25 5.5a6.25 6.25 0 1 0 0-12.5c-3.75 0-6.25 3.5-6.25 3.5v-3.5"/></svg>
                        <span class="ms-2">undo</span>
                    </div>
                </div>
                    <hr class="mt-2 mb-4">
                    <div v-if="quizSaved" class="flex items-center border-[1.5px] dark:border-zinc-700 text-green-500 font-semibold rounded px-4 py-3 mb-4">
                        Changes saved
                        <svg class=" inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm45.66 85.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z"/></svg>
                    </div>
                    <div class="border-[1.5px] dark:border-zinc-700 rounded px-4 py-3 mb-4">
                        
                        <div class="flex items-center mb-4">
                            <input v-model="option" id="default-radio-1" type="radio" value="question" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question</label>
                        </div>
                        <div class="flex items-center">
                            <input v-model="option" id="default-radio-2" type="radio" value="choice" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Multiple Choice</label>
                        </div>
    
                    </div>
    
                    <form v-if="option" @submit.prevent="addQuestion">
                        <div v-if="option === 'question'" action="" class="">
                            <div class="relative z-0 w-full mb-4 group">
                                <textarea v-model="question" name="" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required rows="1"></textarea>
                                <label class="peer-focus:font-medium absolute text-sm   dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Enter Question</label>
                            </div>
                            <div class="relative z-0 w-full mb-4 group">
                                <input v-model="answer" name="" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Enter Answer</label>
                            </div>
                            
                        </div>
                        <div v-if="option === 'choice'" action="" class="">
                            <div class="relative z-0 w-full mb-4 group">
                                <textarea v-model="question" name="" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required rows="1"></textarea>
                                <label class="peer-focus:font-medium absolute text-sm   dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Enter Multiple Choice Question</label>
                            </div>
                            <div v-for="(c,index) in choices" :key="index" class="relative z-0 w-full mb-4 group">
                                <input  v-model="c.choice" name="" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-white dark:bg-zinc-800  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Enter Choice {{index+1}}</label>
                                <i v-show="index === choices.length - 1" @click="addChoice" class="fa-solid fa-circle-plus cursor-pointer text-slate-600 dark:text-slate-300 absolute transform -translate-y-6 -bottom-4 text-2xl right-5"></i>
                                
                            </div>
                            <select v-if="choices[0].choice" v-model="answer" class=" mb-4 bg-slate-50 border-[1.5px] border-slate-300  text-zinc-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="">Choose answer</option>
                                <option :selected="c.choice == answer" v-for="(c,index) in choices" :key="index" :value="c.choice">{{c.choice}}</option>
                              </select>
                        </div>
                        <button @click="cancelEdit()" v-if="editStatus" class="me-4 inline-block items-center justify-center text-white dark:text-slate-50 px-4 py-2 bg-primary hover:bg-primary_hover rounded dark:bg-zinc-700 dark:hover:bg-zinc-600 duration-150">
                            <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 20V10H7.825l3.6 3.6l-1.4 1.425L4 9l6-6l1.425 1.425L7.825 8H19v12h-2Z"/></svg>
                            <span class="ms-2 font-medium">Cancel</span>
                        </button>
                        <button v-if="editStatus" class=" inline-block items-center justify-center text-white dark:text-slate-50 px-4 py-2 bg-primary hover:bg-primary_hover rounded dark:bg-zinc-700 dark:hover:bg-zinc-600 duration-150">
                            <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152ZM87.51 128.49a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 117v51a12 12 0 0 1-24 0v-51l-11.51 11.52a12 12 0 0 1-16.98-.03Z"/></svg>
                            <span class="ms-2 font-medium">Update</span>
                        </button>
                        <button v-else class=" flex items-center justify-center text-white dark:text-slate-50 px-4 py-2 bg-primary hover:bg-primary_hover rounded dark:bg-zinc-700 dark:hover:bg-zinc-600 duration-150">
                            <svg  class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                            <span class="ms-2 font-medium">Add to form</span>
                        </button>
                        
                    </form>
            </div>
        </div>
       
        <div class=" col-span-4">
            <div class=" md:px-6 md:py-3 mt-4 ">
                <div v-for="(question,index) in paginatedQuestions" :key="index" class="mb-6 animate__animated animate__bounceIn">
                    <div class="flex items-center">
                        <div class="bg-primary text-white px-3 py-2 rounded-t">Question {{question.id + 1}}</div>
                        <div @click="editForm(question.id)" class="flex items-center mx-2 text-primary hover:text-blue-500 duration-150 cursor-pointer font-medium">
                            <svg class="me-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32ZM124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 120v88a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h88a8 8 0 0 1 0 16H48v160h160v-88a8 8 0 0 1 16 0Z"/></svg>
    
                            Edit
                        </div>
                        <span class=" font-bold text-zinc-900 dark:text-white mb-1">|</span>
                        <div @click="removeQuestion(question.id)" class="flex items-center ms-2 text-primary hover:text-blue-500 duration-150 cursor-pointer font-medium">
                            <svg class="me-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M176 128a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm56 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"/></svg>
                            Remove
                        </div>
                    </div>
                    <div class="bg-white border-[1.5px] dark:border-zinc-700  dark:bg-zinc-800 shadow rounded px-5 py-3">
                        <p class="text-sm mb-2 text-zinc-900 dark:text-slate-100">{{question.question_text}}</p>
                        <div v-if="question.type === 'choice'" class="">
                            <div v-for="(c,cIndex) in question.choices" :key="cIndex" class="flex items-center mb-2">
                                <input :id="'choice-radio-'+cIndex" type="radio" value="question" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label :for="'choice-radio-'+cIndex" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{c.choice}}</label>
                            </div>
                            
                        </div>
                        <p class="font-medium text-zinc-900 dark:text-slate-100">(Answer : <span class=" font-semibold text-primary">{{paginatedAnswers[index].answer}}</span> )</p>
                    </div>
                </div>
                <div v-if="questionList.length > 0" class="flex justify-between px-2">
                    <div class="text-zinc-800 dark:text-slate-200">Total Questions : <span class=" text-primary text-lg font-semibold">{{questionList.length}}</span></div>
                    <div class="flex items-center">
                        <svg v-if="currentPage > 1" @click="changePage(currentPage - 1)" class=" cursor-pointer inline-block text-primary hover:text-primary_hover duration-200 hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm21.66 138.34a8 8 0 0 1-11.32 11.32l-40-40a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 11.32L115.31 128Z"/></svg>
                        <span class="mx-3 text-zinc-800 dark:text-slate-200">Page {{currentPage}} / {{totalPages}}</span>
                        <svg v-if="currentPage !== totalPages " @click="changePage(currentPage + 1)" class=" cursor-pointer inline-block text-primary hover:text-primary_hover duration-200 hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm29.66 109.66l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32Z"/></svg>
                    </div>
                </div>
                <div v-else class="text-zinc-800 dark:text-slate-200 flex items-center font-medium">
                    <svg class=" inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.5q.625 0 1.063-.438T13.5 17h-3q0 .625.438 1.063T12 18.5ZM7 16h10v-2h-1v-2.6q0-1.525-.788-2.788T13 7v-.5q0-.425-.288-.713T12 5.5q-.425 0-.713.288T11 6.5V7q-1.425.35-2.212 1.613T8 11.4V14H7v2Zm5 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                    No question created yet.
                </div>
                <div v-if="questionList.length > 0" class="flex items-center mt-6 ">
                    <button @click="publish" type="button" class="animate__animated animate__bounceIn me-4 group flex items-center py-3 px-5 mr-2 mb-2 text-sm font-medium text-zinc-900 focus:outline-none bg-white rounded-lg border border-zinc-200 hover:bg-slate-50 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:text-slate-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700">
                        <svg class=" group-hover:rotate-45 duration-200 inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M152 224a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm-24-112a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm95.62 43.83l-12.36 55.63a16 16 0 0 1-25.51 9.11L158.51 200h-61l-27.26 20.57a16 16 0 0 1-25.51-9.11l-12.36-55.63a16.09 16.09 0 0 1 3.32-13.71l28.56-34.26a123.07 123.07 0 0 1 8.57-36.67c12.9-32.34 36-52.63 45.37-59.85a16 16 0 0 1 19.6 0c9.34 7.22 32.47 27.51 45.37 59.85a123.07 123.07 0 0 1 8.57 36.67l28.56 34.26a16.09 16.09 0 0 1 3.32 13.71ZM99.43 184h57.14c21.12-37.54 25.07-73.48 11.74-106.88C156.55 47.64 134.49 29 128 24c-6.51 5-28.57 23.64-40.33 53.12c-13.31 33.4-9.36 69.34 11.76 106.88Zm-15 5.85q-16.15-29.35-19.6-57.69L48 152.36L60.36 208l.18-.13ZM208 152.36l-16.83-20.2q-3.42 28.28-19.56 57.69l23.85 18l.18.13Z"/></svg>
                        <span class="font-medium">Publish</span>
                    </button>
                    <button @click="clearAll()" type="button" class="animate__animated animate__bounceIn   group flex items-center py-3 px-5 mr-2 mb-2 text-sm font-medium text-zinc-900 focus:outline-none bg-white rounded-lg border border-zinc-200 hover:bg-slate-50 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:text-slate-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700">
                        <svg class=" group-hover:scale-110 duration-200 inline-block me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/></svg>
                        <span class="font-medium">Clear All</span>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'

export default {
    name : 'CreatePage',
    data() {
        return {
            option: null,
            quiz_title : '',
            quiz_desc : '',
            infoSaved : false,
            quizSaved : false,
            question : '',
            answer : '',
            choices : [
                {
                    'choice' : '',
                }
            ],
            questionList : [],
            answerList: [],
            currentPage : 1,
            itemsPerPage : 4,
            editStatus : false,
            currentEditId : null,
            categories : [],
            selectedCategory : '',
            infoValidateMessage : null,
        }
    },
    computed: {
        paginatedQuestions() {
            const descList = this.questionList.slice().reverse();
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return descList.slice(startIndex,endIndex);
        },
        paginatedAnswers() {
            const descList = this.answerList.slice().reverse();
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return descList.slice(startIndex,endIndex);
        },

        totalPages() {
            return Math.ceil(this.questionList.length/this.itemsPerPage);
        },
        ...mapGetters(["getToken"]),
    },
    methods: {
        ...mapActions(['setLoadingStatus']),
        addChoice() {
            this.choices.push({'choice':''});
        },
        removeChoice(){
            this.choices.pop();
        },
        clearForm(){
            this.question = '';
            this.answer = '';
            this.choices = [
                {
                    'choice' : '',
                }
            ];
            this.option = null;
        },
        // save quiz information to local storage
        saveQuizInfo(){
            localStorage.setItem("selected_category",this.selectedCategory);
            localStorage.setItem("quiz_title",this.quiz_title);
            localStorage.setItem("quiz_desc",this.quiz_desc);
            this.showInfoSaved();
        },
        saveQuizLocal(){
            localStorage.setItem("questionList",JSON.stringify(this.questionList));
            localStorage.setItem("answerList",JSON.stringify(this.answerList));

        },
        // show info saved alert 
        showInfoSaved(){
            this.infoSaved = true;
            setTimeout(() => {
            this.infoSaved = false;
            }, 2000); 
        },
         // show quiz saved alert 
         showQuizSaved(){
            this.quizSaved = true;
            setTimeout(() => {
            this.quizSaved = false;
            }, 2000); 
        },
        // get quiz information from localStorage
        getLocalQuizInfo(){
            this.quiz_title = localStorage.getItem("quiz_title");
            this.quiz_desc = localStorage.getItem("quiz_desc");
            this.selectedCategory = localStorage.getItem("selected_category");
        },
        // get questionList and answerList from localStorage
        getLocalQuestions(){
            const localQuestions = localStorage.getItem("questionList");
            if(localQuestions){
                this.questionList = JSON.parse(localQuestions);
            }
            const localAnswers = localStorage.getItem("answerList");
            if(localAnswers){
                this.answerList = JSON.parse(localAnswers);
            }
        },
        // add question to quiz form 
        addQuestion(){
            if(this.editStatus){
                // update form 
                this.updateQuestionList();
                this.updateAnswerList();

                this.clearForm();
                this.saveQuizLocal();
                this.editStatus = false;

            }else {
                // add to form 
                this.questionList.push(
                {
                    'id':this.questionList.length ,
                    'type' : this.option ,
                    'question_text' : this.question ,
                    'choices' : this.choices
                });
                this.answerList.push(
                    {
                        'id' : this.questionList.length ,
                        'answer' : this.answer,
                    }
                )
                this.clearForm();
                this.showQuizSaved();
                this.saveQuizLocal();
                this.updateId();
            }

        },
        // change page 
        changePage(pageNumber) {
            if(pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
            }
        },
        //remove one question
        removeQuestion(question_id) {
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            console.log(textColor,bgColor);
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
                    const index = this.questionList.findIndex(q=>q.id==question_id);
                    this.questionList.splice(index,1);//delete question which user clicked index for 1 position in array with splice method
                    this.answerList.splice(index,1);

                    this.updateId();
                    
                    this.saveQuizLocal();
                    if(this.totalPages===1) {
                        this.currentPage = 1;
                    }
                    
                    Swal.fire(
                        {
                            html: `<p class="text-center text-xl font-semibold">Deleted</p">`,
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            color: `${textColor}`,
                            background: `${bgColor}`,
                        }
                      )
                }
              })
            
        },
         // edit form 
         editForm(question_id) {
            this.updateId();
            this.editStatus = true;
            const editQuestion = this.questionList.find(q => q.id === question_id);
            const editAnswer = this.answerList.find(q => q.id === question_id);
            this.question = editQuestion.question_text;
            this.answer = editAnswer.answer;
            if(editQuestion.type === 'question'){
                this.option = 'question';
            }else if(editQuestion.type === 'choice'){
                this.option = 'choice';
                this.choices = editQuestion.choices;
            }
            this.currentEditId = question_id;
        },
        updateId(){
            for(let i = 0; i < this.questionList.length ;i++) {
                this.questionList[i].id = i;
                this.answerList[i].id = i;
            }
        },
        updateQuestionList(){
            this.questionList = this.questionList.map(q => {
                    if(q.id === this.currentEditId){
                        return {
                            'id':this.currentEditId ,
                            'type' : this.option,
                            'question_text': this.question ,
                            'choices' : this.choices 
                        }
                    }else {
                        return q;
                    }
            }) 
        },
        updateAnswerList(){
            this.answerList = this.answerList.map(q => {
                    if(q.id === this.currentEditId){
                        return {
                            'id':this.currentEditId ,
                            'answer' : this.answer 
                        }
                    }else {
                        return q;
                    }
            }) 
        },
        // clear all data from form 
        clearAll(){
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            console.log(textColor,bgColor);
            Swal.fire({
                html: `<p class="text-center text-xl font-semibold">Are you Sure?</p"><p class="text-center">All question will be deleted.</p>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                color: `${textColor}`,
                background: `${bgColor}`,
              }).then((result) => {
                if (result.isConfirmed) {
                    this.questionList = [];
                    this.answerList = [];
                    this.saveQuizLocal();
                    Swal.fire(
                        {
                            html: `<p class="text-center text-xl font-semibold">Deleted</p">`,
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            color: `${textColor}`,
                            background: `${bgColor}`,
                        }
                      )
                }
              })
            
        },
        // clear quiz info 
        clearInfo(){
            this.quiz_title = "";
            this.quiz_desc = "";
            this.selectedCategory = "";
            this.saveQuizInfo();
        },
        // clear edit form 
        cancelEdit(){
            this.editStatus = false;
            this.clearForm();
        },
        // publish to database 
        publish(){
            if(this.validateInfo()){
                this.infoValidateMessage = null;
                axios.post("http://127.0.0.1:8000/api/quiz/create",
                {   
                    'quiz_title' : this.quiz_title,
                    'category_id' : this.selectedCategory,
                    'quiz_desc' : this.quiz_desc,
                    'question_list' : this.questionList,
                    'answer_list' : this.answerList,
                },{
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                })
                .then((response)=>{
                    if(response.data.status){
                        this.questionList = [];
                        this.answerList = [];
                        this.saveQuizLocal();
                        this.clearInfo();
                        this.showAlert(`<p class="text-center text-xl font-semibold">Published</p"><p class="text-center">Quiz uploaded to server successfully</p>`,'success');
                    }
                })
                .catch((error)=>{
                    return false;
                })
            }else {
                this.infoValidateMessage = "Please fill all information";
                setTimeout(() => {
                this.infoValidateMessage = null;
                }, 2000); 
                this.showAlert(`<p class="text-center text-xl font-semibold">Quiz Info Required</p"><p class="text-center">Please fill all quiz information</p>`,'info')
            }
        },
        getCategoryList(){
            this.setLoadingStatus(true);
            axios.get("http://127.0.0.1:8000/api/category/list",
                {
                    headers : {
                        'Authorization' : `Bearer ${this.getToken}`,
                    }
                })
                .then((response)=>{
                    this.categories = response.data.categories;
                    this.setLoadingStatus(false);
                })
                .catch((error)=>{
                    return false;
                })
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
        validateInfo(){
            if(this.quiz_title && this.quiz_desc  && this.selectedCategory){
                return true;
            }else {
                
                return false
            }
        }
    },
    mounted () {
        this.getLocalQuestions();
        this.getLocalQuizInfo();
        this.getCategoryList();
    },
}
</script>