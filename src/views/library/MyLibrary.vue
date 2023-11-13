<template>
    

<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
       
        <li @click="changeTab('saved')" class="me-2 cursor-pointer">
            <a :class="currentTab==='saved'?'border-b-2 text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500':'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:border-b-2'" class="inline-flex items-center justify-center p-4 rounded-t-lg  group">
                <svg :class="currentTab==='saved'?'text-blue-600':' text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'" class="w-5 h-5 me-2"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.923l-3.738 1.608q-.808.348-1.535-.134Q6 17.915 6 17.052V5.615q0-.67.472-1.143Q6.944 4 7.615 4h6.154q-.384.596-.577 1.197Q13 5.798 13 6.5q0 1.742 1.157 3.012Q15.313 10.78 17 10.958q.287.036.5.036q.213 0 .5-.036v6.094q0 .863-.727 1.345t-1.535.134L12 16.923Zm5.113-9.325l3.172-3.19q.146-.166.347-.166q.2 0 .366.166q.165.165.165.356t-.165.357l-3.32 3.314q-.241.242-.565.242q-.323 0-.565-.242L15.335 7.22q-.14-.14-.14-.341t.14-.347q.146-.166.356-.156q.21.01.357.156l1.065 1.065Z"/></svg>
                Saved Quizzes
            </a>
        </li>
        <li @click="changeTab('created')" class="me-2 cursor-pointer">
            <a :class="currentTab==='created'?'border-b-2 text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500':'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:border-b-2'" class="inline-flex items-center justify-center p-4  rounded-t-lg  group">
                
                <svg :class="currentTab==='created'?'text-blue-600':' text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'" class="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M20.505 7.286a.999.999 0 0 1-1.414 0A2.942 2.942 0 0 0 17 6.421c-.82 0-1.553.329-2.091.865a.999.999 0 1 1-1.414-1.414A4.946 4.946 0 0 1 17 4.421a4.946 4.946 0 0 1 3.505 1.451a1 1 0 0 1 0 1.414ZM8.894 6.331a10.032 10.032 0 0 0-2.369 1.923l-.001.001a10.016 10.016 0 0 0-1.683 2.558a9.905 9.905 0 0 0-.835 3.028a1 1 0 1 0 1.988.22a7.928 7.928 0 0 1 .667-2.418a8.006 8.006 0 0 1 3.242-3.585a1 1 0 1 0-1.009-1.727ZM24 17.5a1 1 0 0 1 2 0a3.494 3.494 0 0 1-3.358 3.486c.223.459.358.969.358 1.514a1 1 0 0 1-2 0a1.502 1.502 0 0 0-1.5-1.5h-6.182a1 1 0 0 1 0-2H15.5a1.503 1.503 0 0 0 1.5-1.5a1 1 0 0 1 2 0c0 .539-.132 1.044-.35 1.5h3.85a1.503 1.503 0 0 0 1.5-1.5Z"/><path d="M32 16.711c0-.628-.045-1.236-.114-1.826C30.979 7.067 24.348 1.002 16.289 1h-1.232C6.74 1.001.001 7.74 0 16.057A5.943 5.943 0 0 0 5.943 22h1.241a6.494 6.494 0 0 0 6.316 5h7.104l3.116 3.116a.75.75 0 0 0 1.28-.53v-2.669a7.988 7.988 0 0 0 6.664-5.631c.143-.478.225-.982.277-1.495l.003-.008c.028-.092.056-.183.056-.283c0-.061-.004-.122-.008-.182l-.007-.115c0-.032.004-.063.007-.093c.004-.037.008-.073.008-.11v-2.289Zm-2.252 4.004A6 6 0 0 1 24 25H13.5a4.498 4.498 0 0 1-4.479-4.09l-.006-.064A4.974 4.974 0 0 1 14 16a1 1 0 0 0 0-2a6.965 6.965 0 0 0-3.36.859a4.018 4.018 0 0 0-.812-1.188a.999.999 0 1 0-1.414 1.414c.284.285.477.65.55 1.059A6.982 6.982 0 0 0 7.08 20H5.943a3.931 3.931 0 0 1-2.789-1.155A3.928 3.928 0 0 1 2 16.057c0-3.609 1.46-6.867 3.824-9.233A13.011 13.011 0 0 1 15.057 3h1.232c6.69-.002 12.246 4.8 13.451 11.139a7.48 7.48 0 0 0-4.03-2.033c.503-.922.79-1.981.79-3.106a1 1 0 0 0-2 0a4.481 4.481 0 0 1-1.318 3.182A4.481 4.481 0 0 1 20 13.5a1 1 0 0 0 0 2a6.47 6.47 0 0 0 4.215-1.558l.016.005A.91.91 0 0 0 24.5 14c1.522 0 2.891.614 3.889 1.611a5.476 5.476 0 0 1 1.596 3.592a6.006 6.006 0 0 1-.237 1.512Z"/></g></svg>
                Created by me
            </a>
        </li>
    </ul>
</div>
    
        <div v-if="currentTab==='saved'" class="px-2 py-5 w-full">
            <saved-quizzes></saved-quizzes>
        </div>
        <div v-if="currentTab==='created'" class="px-2 py-5 w-full">
            <created-by-me></created-by-me>
        </div>
        

</template>

<script>
import SavedQuizzes from './SavedQuizzes.vue';
import CreatedByMe from './CreatedByMe.vue';

export default {
    name : 'MyLibrary',
    data() {
        return {
            currentTab: 'saved',
        }
    },
    components: {
        SavedQuizzes,
        CreatedByMe,
    },
    methods: {
        changeTab(value) {
            this.currentTab = value;
        }
    },
}
</script>