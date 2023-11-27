<template>
        <div class="mx-auto max-w-5xl mt-4 md:mt-6">
                <h4 class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                                <svg class="text-indigo-600 dark:text-indigo-500 inline-block" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM3 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm10-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5ZM3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4Z" clip-rule="evenodd"/></svg>
                        <span class="ms-2 font-medium text-indigo-600 dark:text-indigo-500">
                                Categories : {{categories.length}}
                        </span>
                        </div>
                        <p v-if="showAllCategories" @click="showAllCategories = false" class=" cursor-pointer text-indigo-600 dark:text-indigo-500 flex items-center ">Hide
                                <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z"/></svg>
                        </p>
                        <p v-else @click="showAllCategories = true" class=" cursor-pointer text-indigo-600 dark:text-indigo-500 flex items-center ">Show All
                                <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4l-6 6Z"/></svg>
                        </p>
                </h4>
                <div class="grid grid-cols-3 md:grid-cols-6 gap-3">
                        <div @click="categoryFilter(c.id)" v-for="(c, index) in displayedCategories" :key="index" class=" group animate__animated animate__bounceIn cursor-pointer bg-white dark:bg-zinc-800 h-fit hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 shadow-sm hover:shadow px-3 py-2 group rounded">
                            <img :src="c.image" alt="category img" class="h-20 object-contain mx-auto bg-slate-100 group-hover:bg-slate-200 duration-150 dark:group-hover:bg-zinc-600 dark:bg-zinc-700 rounded">
                            
                            <p class="mt-2 text-sm md:text-base group-hover:text-blue-500 text-center text-zinc-800 dark:text-slate-200 font-medium">{{c.name}}</p>
                            <p class="text-center text-sm text-gray-500 dark:text-muted font-semibold">quizzes : {{c.quizzes_count}}</p>
                                
                        </div>
                   </div>
        </div>
       
    
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import axios from 'axios'

export default {
        name : 'CategoryList',
        data() {
                return {
                        categories : [],
                        showAllCategories : false,
                }
        },
        computed: {
                ...mapGetters(["getToken"]),
                displayedCategories() {
                        if (window.innerWidth <= 768) {
                        return this.showAllCategories ? this.categories : this.categories.slice(0, 3); // if mobile
                        }else {
                        return this.showAllCategories ? this.categories : this.categories.slice(0, 6); // larger than mobile
                        }
                },
        },
        methods: {
            ...mapActions(['setLoadingStatus']),

            getCategoryList(){
                this.setLoadingStatus(true);
                axios.get("http://127.0.0.1:8000/api/category/listWithCount",
                        {
                        headers : {
                                'Authorization' : `Bearer ${this.getToken}`,
                        }
                        })
                        .then((response)=>{
                                for(let i = 0 ; i< response.data.categories.length ; i++){
                                        if(response.data.categories[i].image){
                                        response.data.categories[i].image = "http://127.0.0.1:8000/storage/categoryImages/" + response.data.categories[i].image;
                                        }else {
                                        response.data.categories[i].image = "http://127.0.0.1:8000/images/default.png";
                                        }
                                }
                        this.categories = response.data.categories;
                        this.setLoadingStatus(false);
                        })
                        .catch((error)=>{
                                console.log(error.response.status);
                        })
                },
                categoryFilter(category_id) {
                this.$router.push({
                        name : "categoryFilter",
                        params : {
                                category_id : category_id
                        }
                })
                },
        },
        mounted () {
                this.getCategoryList();
        },

}
</script>