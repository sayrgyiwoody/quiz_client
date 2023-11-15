<template>
    <div>
        <div class="flex flex-col justify-center items-center mx-auto">
            <img :src="'/images/notFound.png'" width="400" alt="notFound">
            <p class="text-center dark:text-slate-100">
                The page you are trying to access doesn't exist or has been moved.<br class="d-none d-md-block">
                Try going back to our homepage.
            </p>
            <button @click="directHome" class="bg-primary text-white rounded mt-5 hover:bg-primary_hover duration-150 px-3 py-2">Go to homepage</button>

        </div>

    </div>
</template>

<script>
export default {
    name : 'NotFound',

    methods: {
        directHome() {
            this.$router.push({
                name : "home"
            })
        },
    },
    
}
</script>