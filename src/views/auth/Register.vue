<template>   
    <div class="max-w-5xl mx-auto mt-2 mb-4 md:mt-10 md:mb-6">
        <button @click="returnBack()" class="flex items-center group  text-zinc-700 hover:text-zinc-800 dark:text-slate-200 dark:hover:text-white py-1 rounded font-medium">
            <svg class="me-2 group-hover:-translate-x-1 duration-150 inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.535 3.464C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536ZM14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
            Back
        </button>
    </div>
    <div class=" font-poppins max-w-3xl mx-auto ">
        <div class=" border-b-2 dark:border-zinc-700 pb-5 px-3 md:px-0">
            <h4 class=" font-semibold text-2xl text-zinc-900 dark:text-slate-100">Create account</h4>
            <p class=" text-sm text-slate-600 dark:text-muted">create your own account to play quizzes</p>
        </div>
        <div class="md:grid md:grid-cols-4">
            <!-- mobile steps start  -->
            <div class="md:hidden flex md:pe-4 py-4  justify-center">
                <div class="relative flex md:h-20 items-center">
                    <div @click="changeTab(1)" class="flex justify-end items-center ">
                        <div :class="currentTab===1?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===1?'text-white':'text-zinc-800 '" class="w-8 h-8  dark:text-slate-200"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.75 7.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0ZM12 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5Zm-4 10A2.25 2.25 0 0 0 5.75 17v1.188c0 .018.013.034.031.037c4.119.672 8.32.672 12.438 0a.037.037 0 0 0 .031-.037V17A2.25 2.25 0 0 0 16 14.75h-.34a.253.253 0 0 0-.079.012l-.865.283a8.751 8.751 0 0 1-5.432 0l-.866-.283a.252.252 0 0 0-.077-.012H8ZM4.25 17A3.75 3.75 0 0 1 8 13.25h.34c.185 0 .369.03.544.086l.866.283a7.251 7.251 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0 1 19.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.095 40.095 0 0 1-12.92 0a1.537 1.537 0 0 1-1.29-1.517V17Z" clip-rule="evenodd"/></svg>
    
                        </div>
                    </div>
                    <div class="w-3 h-[1px] md:w-[2px] md:h-16 bg-zinc-700 md:absolute md:right-6"></div>
                </div>
                

                <div class="relative flex md:h-20 items-center">
                    <div @click="changeTab(2)" class="flex justify-end items-center ">
                        <div :class="currentTab===2?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===2?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        </div>
                    </div>
                    <div class="w-3 h-[1px] md:w-[2px] md:h-16 bg-zinc-700 md:absolute md:right-6"></div>
                </div>
                <div class="relative flex md:h-20 items-center">
                    <div @click="changeTab(3)" class="flex justify-end items-center ">
                        <div :class="currentTab===3?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===3?'text-white':'text-zinc-800 '" class="w-7 h-7  dark:text-slate-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.02Zm0 8.942q-3.013-.895-5.007-3.651Q5 14.554 5 11.1V5.692l7-2.615l7 2.615V11.1q0 .106-.003.212q-.003.105-.009.211q-.186-.03-.367-.046q-.18-.015-.371-.015q-.069 0-.13.005q-.063.006-.132.018l.01-.188Q18 11.206 18 11.1V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3q.326-.1.637-.243q.311-.144.613-.315v1.139q-.297.16-.61.28t-.64.2Zm4.37.038q-.35 0-.62-.27q-.27-.268-.27-.618v-2.8q0-.35.27-.6t.62-.25h.11v-1q0-.749.511-1.26q.51-.51 1.259-.51t1.259.51q.51.511.51 1.26v1h.112q.358 0 .613.25q.256.25.256.6v2.8q0 .35-.256.619q-.255.269-.613.269h-3.762Zm.88-4.538h2v-1q0-.425-.288-.713t-.712-.287q-.425 0-.713.287t-.287.713v1Z"/></svg>
                            
                        </div>
                    </div>
                    <div class="w-3 h-[1px] md:w-[2px] md:h-16 bg-zinc-700 md:absolute md:right-6"></div>
                </div>
                <div class="relative flex md:h-20 items-center">
                    <div @click="changeTab(4)" class="flex justify-end items-center ">
                        <div :class="currentTab===4?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg  :class="currentTab===4?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200"   xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-3 -1.5 24 24"><path fill="currentColor" d="M7 14A5 5 0 1 0 7 4a5 5 0 0 0 0 10zm6.013-8.586A7.002 7.002 0 0 1 7.998 15.93L8 16v1h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-1c0-.024 0-.047.002-.07A7.002 7.002 0 0 1 7 2a6.98 6.98 0 0 1 4.745 1.853l1.85-1.85H12.01a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.417l-1.996 1.997z"/></svg>
                        </div>
                    </div>
                    <div class="w-3 h-[1px] md:w-[2px] md:h-16 bg-zinc-700 md:absolute md:right-6"></div>
                </div>
                <div class="relative flex md:h-20 items-center">
                    <div @click="changeTab(5)" class="flex justify-end items-center ">
                        <div :class="currentTab===5?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===5?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200"   xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8Z"/><path d="M9 14a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"/></g></svg>
                        </div>
                    </div>
                    <div class="w-3 h-[1px] md:w-[2px] md:h-16 bg-zinc-700 md:absolute md:right-6"></div>
                </div>
                <div class="relative flex md:h-20 items-center">
                    <div @click="changeTab(6)" class="flex justify-end items-center ">
                        <div :class="currentTab===6?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===6?'text-white':'text-zinc-800 '" class="w-5 h-5  dark:text-slate-200"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7 1.25a.75.75 0 0 1 .75.75v1.75h.295c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47c.31.309.422.684.47 1.04c.043.323.043.72.043 1.152v1.427c.067.053.132.11.194.173c.456.456.642 1.023.726 1.65c.058.434.074.95.078 1.545h.502V7.71c0-1.258 0-2.287.116-3.072c.12-.814.387-1.54 1.068-2.012c.68-.472 1.455-.467 2.259-.294c.775.168 1.739.529 2.917.97l.096.037c.595.223 1.1.412 1.495.613c.42.214.785.472 1.06.868c.274.396.388.827.44 1.296c.049.441.049.98.049 1.616V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.302c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65a2.25 2.25 0 0 1 .195-.174V6.455c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04c.309-.31.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043h.295V2A.75.75 0 0 1 7 1.25ZM4.75 7.324c.588-.074 1.322-.074 2.198-.074h.104c.876 0 1.61 0 2.198.074V6.5c0-.493-.002-.787-.03-.997a.706.706 0 0 0-.042-.177l-.001-.003l-.003-.001a.706.706 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03H6c-.493 0-.787.002-.997.03a.706.706 0 0 0-.177.042l-.003.001l-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997v.824Zm-1 13.926h2.5v-5.302c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.434-.058.948-.074 1.543-.078c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789c-.13-.13-.328-.237-.79-.3C8.613 8.753 7.965 8.75 7 8.75s-1.612.002-2.095.067c-.461.062-.659.169-.789.3c-.13.13-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v9.25Zm4 0h8.5V16c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789c-.13-.13-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.066c-.461.063-.659.17-.789.3c-.13.13-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v5.25Zm10 0h2.5V7.772c0-.687-.001-1.141-.04-1.49c-.037-.33-.1-.49-.183-.608c-.081-.118-.21-.235-.505-.385c-.313-.158-.737-.319-1.38-.56c-1.251-.469-2.11-.79-2.765-.93c-.64-.138-.909-.065-1.089.06c-.18.124-.343.351-.438.998c-.098.662-.1 1.58-.1 2.915v3.48c.595.004 1.111.02 1.544.078c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v5.302ZM4.823 5.323ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <!-- mobile steps end  -->
            <!-- large screeen steps start  -->
            <div class="hidden md:block border-r-2 dark:border-zinc-700 pe-4 py-4">
                <div class="relative h-20">
                    <div @click="changeTab(1)" class="cursor-pointer group flex justify-end items-center ">
                        <p class=" group-hover:text-primary dark:group-hover:text-blue-500 font-medium  text-zinc-900 dark:text-slate-100">Name</p>
                        <button :class="currentTab===1?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 ms-3 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===1?'text-white':'text-zinc-800 '" class="w-8 h-8  dark:text-slate-200" g xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.75 7.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0ZM12 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5Zm-4 10A2.25 2.25 0 0 0 5.75 17v1.188c0 .018.013.034.031.037c4.119.672 8.32.672 12.438 0a.037.037 0 0 0 .031-.037V17A2.25 2.25 0 0 0 16 14.75h-.34a.253.253 0 0 0-.079.012l-.865.283a8.751 8.751 0 0 1-5.432 0l-.866-.283a.252.252 0 0 0-.077-.012H8ZM4.25 17A3.75 3.75 0 0 1 8 13.25h.34c.185 0 .369.03.544.086l.866.283a7.251 7.251 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0 1 19.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.095 40.095 0 0 1-12.92 0a1.537 1.537 0 0 1-1.29-1.517V17Z" clip-rule="evenodd"/></svg>
    
                        </button>
                    </div>
                    <div class="w-[2px] h-16 bg-zinc-700 absolute right-6"></div>
                </div>
                

                <div class="relative h-20">
                    <div @click="changeTab(2)" class="cursor-pointer group flex justify-end items-center ">
                        <p class=" group-hover:text-primary dark:group-hover:text-blue-500 font-medium  text-zinc-900 dark:text-slate-100">Email</p>
                        <button :class="currentTab===2?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 ms-3 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===2?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        </button>
                    </div>
                    <div class="w-[2px] h-16 bg-zinc-700 absolute right-6"></div>
                </div>
                <div class="relative h-20">
                    <div @click="changeTab(3)" class="cursor-pointer group flex justify-end items-center ">
                        <p class=" group-hover:text-primary dark:group-hover:text-blue-500 font-medium  text-zinc-900 dark:text-slate-100">Password</p>
                        <button :class="currentTab===3?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 ms-3 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===3?'text-white':'text-zinc-800 '" class="w-7 h-7  dark:text-slate-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.02Zm0 8.942q-3.013-.895-5.007-3.651Q5 14.554 5 11.1V5.692l7-2.615l7 2.615V11.1q0 .106-.003.212q-.003.105-.009.211q-.186-.03-.367-.046q-.18-.015-.371-.015q-.069 0-.13.005q-.063.006-.132.018l.01-.188Q18 11.206 18 11.1V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3q.326-.1.637-.243q.311-.144.613-.315v1.139q-.297.16-.61.28t-.64.2Zm4.37.038q-.35 0-.62-.27q-.27-.268-.27-.618v-2.8q0-.35.27-.6t.62-.25h.11v-1q0-.749.511-1.26q.51-.51 1.259-.51t1.259.51q.51.511.51 1.26v1h.112q.358 0 .613.25q.256.25.256.6v2.8q0 .35-.256.619q-.255.269-.613.269h-3.762Zm.88-4.538h2v-1q0-.425-.288-.713t-.712-.287q-.425 0-.713.287t-.287.713v1Z"/></svg>
                        </button>
                    </div>
                    <div class="w-[2px] h-16 bg-zinc-700 absolute right-6"></div>
                </div>
                <div class="relative h-20">
                    <div @click="changeTab(4)" class="cursor-pointer group flex justify-end items-center ">
                        <p class=" group-hover:text-primary dark:group-hover:text-blue-500 font-medium  text-zinc-900 dark:text-slate-100">Gender</p>
                        <button :class="currentTab===4?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 ms-3 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg  :class="currentTab===4?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-3 -1.5 24 24"><path fill="currentColor" d="M7 14A5 5 0 1 0 7 4a5 5 0 0 0 0 10zm6.013-8.586A7.002 7.002 0 0 1 7.998 15.93L8 16v1h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-1c0-.024 0-.047.002-.07A7.002 7.002 0 0 1 7 2a6.98 6.98 0 0 1 4.745 1.853l1.85-1.85H12.01a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.417l-1.996 1.997z"/></svg>
                        </button>
                    </div>
                    <div class="w-[2px] h-16 bg-zinc-700 absolute right-6"></div>
                </div>
                <div class="relative h-20">
                    <div @click="changeTab(5)" class="cursor-pointer group flex justify-end items-center ">
                        <p class=" group-hover:text-primary dark:group-hover:text-blue-500 font-medium  text-zinc-900 dark:text-slate-100">Birthday</p>
                        <button :class="currentTab===5?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 ms-3 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===5?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8Z"/><path d="M9 14a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"/></g></svg>
                        </button>
                    </div>
                    <div class="w-[2px] h-16 bg-zinc-700 absolute right-6"></div>
                </div>
                <div class="relative h-20">
                    <div @click="changeTab(6)" class="cursor-pointer group flex justify-end items-center ">
                        <p class=" group-hover:text-primary dark:group-hover:text-blue-500 font-medium  text-zinc-900 dark:text-slate-100">Address</p>
                        <button :class="currentTab===6?'bg-primary ':'bg-white dark:bg-zinc-800 group-hover:bg-slate-50 dark:group-hover:bg-zinc-700'" class="  duration-100 ms-3 w-12 h-12 rounded-full flex items-center justify-center shadow border dark:border-zinc-600">
                            <svg :class="currentTab===6?'text-white':'text-zinc-800 '" class="w-6 h-6  dark:text-slate-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7 1.25a.75.75 0 0 1 .75.75v1.75h.295c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47c.31.309.422.684.47 1.04c.043.323.043.72.043 1.152v1.427c.067.053.132.11.194.173c.456.456.642 1.023.726 1.65c.058.434.074.95.078 1.545h.502V7.71c0-1.258 0-2.287.116-3.072c.12-.814.387-1.54 1.068-2.012c.68-.472 1.455-.467 2.259-.294c.775.168 1.739.529 2.917.97l.096.037c.595.223 1.1.412 1.495.613c.42.214.785.472 1.06.868c.274.396.388.827.44 1.296c.049.441.049.98.049 1.616V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.302c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65a2.25 2.25 0 0 1 .195-.174V6.455c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04c.309-.31.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043h.295V2A.75.75 0 0 1 7 1.25ZM4.75 7.324c.588-.074 1.322-.074 2.198-.074h.104c.876 0 1.61 0 2.198.074V6.5c0-.493-.002-.787-.03-.997a.706.706 0 0 0-.042-.177l-.001-.003l-.003-.001a.706.706 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03H6c-.493 0-.787.002-.997.03a.706.706 0 0 0-.177.042l-.003.001l-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997v.824Zm-1 13.926h2.5v-5.302c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.434-.058.948-.074 1.543-.078c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789c-.13-.13-.328-.237-.79-.3C8.613 8.753 7.965 8.75 7 8.75s-1.612.002-2.095.067c-.461.062-.659.169-.789.3c-.13.13-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v9.25Zm4 0h8.5V16c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789c-.13-.13-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.066c-.461.063-.659.17-.789.3c-.13.13-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v5.25Zm10 0h2.5V7.772c0-.687-.001-1.141-.04-1.49c-.037-.33-.1-.49-.183-.608c-.081-.118-.21-.235-.505-.385c-.313-.158-.737-.319-1.38-.56c-1.251-.469-2.11-.79-2.765-.93c-.64-.138-.909-.065-1.089.06c-.18.124-.343.351-.438.998c-.098.662-.1 1.58-.1 2.915v3.48c.595.004 1.111.02 1.544.078c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v5.302ZM4.823 5.323ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- large screeen steps end  -->

            <div class=" md:col-span-3 px-3 py-4 md:p-8 ">
                <div v-if="validationFail" class="animate__animated animate__bounceIn bg-rose-500 text-white rounded-2xl rounded-bl-none px-4 py-2 mb-4 w-fit">
                    <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>
                    Validation fail check input steps
                </div>
                <div v-if="infoRequired === true" class="animate__animated animate__bounceIn bg-indigo-500 text-white rounded-2xl rounded-bl-none px-4 py-2 mb-4 w-fit">
                <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>
                Please fill info first
                </div>
                <div v-if="valiRequired === true" class="animate__animated animate__bounceIn bg-amber-500 text-white rounded-2xl rounded-bl-none px-4 py-2 mb-4 w-fit">
                    <svg class=" inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>
                    Please adhere validation rules
                    </div>
                <div v-if="currentTab === 1" class="animate__animated animate__bounceIn">
                    <div class=" border-b-2 pb-5 px-3 md:px-0 dark:border-zinc-700 mb-4 md:mb-8">
                        <p class="mb-1 text-sm font-medium text-slate-600 dark:text-muted">Step {{ currentTab }}/5</p>
                        <h4 class="mb-1 font-semibold text-xl text-zinc-800 dark:text-slate-200">Let's start with your name</h4>
                        <p class=" text-xs text-slate-600 dark:text-muted">
                            Please fill the detail below so that we can get in touch with you.
                        </p>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input @keyup.enter="nextStep" v-model="registerData[currentTab-1]" name="name" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-slate-100 dark:bg-zinc-900  peer-focus:bg-slate-100 dark:peer-focus:bg-zinc-900 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Your name</label>
                        <i v-if="validateName === true" class=" text-emerald-500 fa-solid fa-circle-check cursor-pointer  absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                        
                    </div>
                    <p v-if="errorMsg.name" class=" text-red-600 text-sm mt-2">{{ errorMsg.name[0] }}</p>
                    <p v-if="validateName !==true" class=" text-blue-600 dark:text-blue-500  text-sm mt-2">{{ validateName }}</p>

                </div>
                <div v-if="currentTab === 2" class="animate__animated animate__bounceIn">
                    <div class=" border-b-2 pb-5 px-3 md:px-0 dark:border-zinc-700 mb-4 md:mb-8">
                        <p class="mb-1 text-sm font-medium text-slate-600 dark:text-muted">Step {{ currentTab }}/5</p>
                        <h4 class="mb-1 font-semibold text-xl text-zinc-800 dark:text-slate-200">Let's us know your email address</h4>
                        <p class=" text-xs text-slate-600 dark:text-muted">
                            Please fill the detail below so that we can get in touch with you.
                        </p>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input @keyup.enter="nextStep" v-model="registerData[currentTab-1]" name="email" type="text" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-slate-100 dark:bg-zinc-900  peer-focus:bg-slate-100 dark:peer-focus:bg-zinc-900 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Your Email</label>
                        <i v-if="validateEmail === true" class=" text-emerald-500 fa-solid fa-circle-check cursor-pointer  absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                        
                    </div>
                    <p v-if="errorMsg.email" class=" text-red-600 text-sm mt-2">{{ errorMsg.email[0] }}</p>
                    <p v-if="validateEmail !==true" class=" text-blue-600 dark:text-blue-500  text-sm mt-2">{{ validateEmail }}</p>

                </div>
                <div v-if="currentTab === 3" class="animate__animated animate__bounceIn">
                    <div class=" border-b-2 pb-5 px-3 md:px-0 dark:border-zinc-700 mb-4 md:mb-8">
                        <p class="mb-1 text-sm font-medium text-slate-600 dark:text-muted">Step {{ currentTab }}/5</p>
                        <h4 class="mb-1 font-semibold text-xl text-zinc-800 dark:text-slate-200">Create account password</h4>
                        <p class=" text-xs text-slate-600 dark:text-muted">
                            Please pick a strong password for your account security.
                        </p>
                    </div>
                   
                    <div class="relative z-0 w-full mb-4 group">
                        <input @keyup.enter="nextStep" v-model="registerData[currentTab-1]"  name="password" :type="showPassword? 'text':'password'" class=" dark:text-white px-3 relative block py-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm  dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0] bg-slate-100 dark:bg-zinc-900  peer-focus:bg-slate-100 dark:peer-focus:bg-zinc-900 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Password</label>
                        <i v-if="validatePassword === true" class=" text-emerald-500 fa-solid fa-circle-check cursor-pointer  absolute transform -translate-y-6 -bottom-3 text-xl right-4"></i>
                        
                    </div>
                    <div class="flex items-center">
                        <input v-model="showPassword" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                    </div>
                    <p v-if="errorMsg.password" class=" text-red-600 text-sm mt-2">{{ errorMsg.password[0] }}</p>
                    <p v-if="validatePassword !==true" class=" text-blue-600 dark:text-blue-500  text-sm mt-2">{{ validatePassword }}</p>

                </div>
                <div v-if="currentTab === 4" class="animate__animated animate__bounceIn">
                    <div class=" border-b-2 pb-5 px-3 md:px-0 dark:border-zinc-700 mb-4 md:mb-8">
                        <p class="mb-1 text-sm font-medium text-slate-600 dark:text-muted">Step {{ currentTab }}/5</p>
                        <h4 class="mb-1 font-semibold text-xl text-zinc-800 dark:text-slate-200">What's your gender ?</h4>
                        <p class=" text-xs text-slate-600 dark:text-muted">
                            Please fill the detail below so that we can get in touch with you.
                        </p>
                    </div>
                    <label class="text-zinc-800 dark:text-slate-200 font-medium px-1">Select at least one gender :</label>
                    <div class="flex items-center space-x-5 justify-start mt-3 px-1">
                        <div class="flex items-center">
                            <input v-model="registerData[currentTab-1]" id="default-radio-1" type="radio" value="male" name="gender" class=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div class="flex items-center">
                            <input v-model="registerData[currentTab-1]"  id="default-radio-2" type="radio" value="female" name="gender" class=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                        <div class="flex items-center">
                            <input v-model="registerData[currentTab-1]"  id="default-radio-3" type="radio" value="other" name="gender" class=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-3" class=" cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                        </div>
                        <p v-if="errorMsg.gender" class=" text-red-600 text-sm mt-2">{{ errorMsg.gender[0] }}</p>

            </div>
                </div>
                <div v-if="currentTab === 5" class="animate__animated animate__bounceIn">
                    <div class=" border-b-2 pb-5 px-3 md:px-0 dark:border-zinc-700 mb-4 md:mb-8">
                        <p class="mb-1 text-sm font-medium text-slate-600 dark:text-muted">Step {{ currentTab }}/5</p>
                        <h4 class="mb-1 font-semibold text-xl text-zinc-800 dark:text-slate-200">How old are you ?</h4>
                        <p class=" text-xs text-slate-600 dark:text-muted">
                            Please fill your birth date to know your age.
                        </p>
                    </div>
                   
                    
                    <input @keyup.enter="nextStep" v-model="registerData[currentTab-1]" type="date" class=" md:w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                    <p v-if="errorMsg.birthday" class=" text-red-600 text-sm mt-2">{{ errorMsg.birthday[0] }}</p>
                    
                </div>
                <div v-if="currentTab === 6" class="animate__animated animate__bounceIn">
                    <div class=" border-b-2 pb-5 px-3 md:px-0 dark:border-zinc-700 mb-4 md:mb-8">
                        <p class="mb-1 text-sm font-medium text-slate-600 dark:text-muted">Step {{ currentTab }}/5</p>
                        <h4 class="mb-1 font-semibold text-xl text-zinc-800 dark:text-slate-200">Where you live in ?</h4>
                        <p class=" text-xs text-slate-600 dark:text-muted">
                            Please fill your current address so that we can get in touch with you
                        </p>
                    </div>
                    <div class="relative z-0 w-full mb-4 group mt-6">
                        <textarea @keyup.enter="register" v-model="registerData[currentTab-1]" name="address"  cols="30" rows="8" class=" border-slate-300 dark:border-zinc-700 dark:text-white relative block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] rounded-md dark:focus:border-blue-500 -z-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                        <label class="bg-slate-100 dark:bg-zinc-900 peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 text-zinc-900 peer-focus:z-10 origin-[0]  peer-focus:bg-slate-100 dark:peer-focus:bg-zinc-900 px-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Address</label>
                        <p v-if="errorMsg.address" class=" text-red-600 text-sm mt-2">{{ errorMsg.address[0] }}</p>
                        <i v-if="validateAddress === true" class=" text-emerald-500 fa-solid fa-circle-check cursor-pointer  absolute transform -translate-y-6 top-10 text-xl right-4"></i>
                        
                    </div>
                    <p v-if="validateAddress !==true" class=" text-blue-600 dark:text-blue-500  text-sm mt-2">{{ validateAddress }}</p>
                    

                </div>
                <button v-if="!(currentTab >= 6)" @click="nextStep" class=" disabled:bg-gray-200 disabled:text-slate-600 dark:disabled:text-white dark:disabled:bg-zinc-700 animate__animated animate__bounceIn group ms-auto  mb-2 flex justify-center items-center bg-primary hover:bg-primary_hover px-5 py-2 text-sm font-medium text-white rounded-3xl mt-4 w-fit">
                    Next Step
                    <svg class=" group-hover:translate-x-1 duration-150 inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.675 12L9.6 15.075L11 16.5l4.5-4.5L11 7.5L9.6 8.925L12.675 12ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                </button>
                <button v-else @click="register" class=" disabled:bg-gray-200 disabled:text-slate-600 dark:disabled:text-white dark:disabled:bg-zinc-700 animate__animated animate__bounceIn group ms-auto  mb-2 flex justify-center items-center bg-primary hover:bg-primary_hover px-5 py-2 text-sm font-medium text-white rounded-3xl mt-4 w-fit">
                    Finish Registration
                    <svg class=" group-hover:translate-x-1 duration-150 inline-block ms-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.675 12L9.6 15.075L11 16.5l4.5-4.5L11 7.5L9.6 8.925L12.675 12ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                </button>

            </div>
        </div>
    </div>
    

</template>

<style  scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
    cursor : pointer;
  } 
</style>


<script>
import axios from 'axios'
import {mapActions} from 'vuex'


export default {
name : 'Register',
components: { 

},
computed: {

    validateName() {
        if(this.registerData[0] !== undefined && this.registerData[0] !== ''){
            if(this.registerData[0].length < 3 || this.registerData[0].length > 20){
                return 'The length of name must be from 3 to 20' ;
            }else {
                return true;
            }
        }
    },
    validateEmail() {
        if(this.registerData[1] !== undefined && this.registerData[1] !== ''){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.registerData[1])) {
                return true;
            } else {
                return 'Not a valid email type';
            }
        }
        
    },
    validatePassword() {
        if(this.registerData[2] !== undefined && this.registerData[2] !== ''){
            if(this.registerData[2].length < 6){
                return 'Password length must be greater than 6' ;
            }else {
                return true;
            }
        }
    },
    validateAddress() {
        if(this.registerData[5] !== undefined && this.registerData[5] !== ''){
            if(this.registerData[5].length > 100){
                return 'Address length not greater than 100 characters.' ;
            }else {
                return true;
            }
        }
    },
},
data() {
    return {
        currentTab : 1,
        registerData : [],
        infoRequired : false,
        valiRequired : false,
        validationFail : false,
        showPassword: false,
        validateStatus : false,
        validateMessage : '',
        darkMode: localStorage.getItem('darkMode') === 'true',
        errorMsg : {
                name : '',
                email : '',
                password : '',
                birthday : '',
                address : '',
        },
    }
},
methods: {
    ...mapActions(["setLoadingStatus"]),
    nextStep(){
        
        this.infoRequired = false;
        if(this.registerData[this.currentTab-1]!==undefined && this.registerData[this.currentTab-1] !== null && this.registerData[this.currentTab-1] !== ''){
            if(this.currentTab === 1 && this.validateName !== true || this.currentTab === 2 && this.validateEmail !== true ){
                this.showValiRequired();
            }else {
                if(this.registerData[this.currentTab] === undefined){
                    this.registerData[this.currentTab] = "";
                }
                this.currentTab = this.currentTab + 1;
            }
            
        } else {
            this.showInfoRequired();
        }

    },
    showInfoRequired(){
        this.infoRequired = true;
        setTimeout(() => {
            this.infoRequired = false;
        }, 3000);
    },
    showValiRequired(){
        this.valiRequired = true;
        setTimeout(() => {
            this.valiRequired = false;
        }, 3000);
    },
    changeTab(tab){
        if(this.registerData[tab-1] !== undefined){
            this.currentTab = tab;

        }
    },
    togglePasswordType() {
        this.showPassword = !this.showPassword;
    },
    register(){
        if(this.registerData[this.currentTab-1]){
            if(this.currentTab === 6 && this.validateAddress !== true){
                this.showValiRequired();         
            }else {
                let formData = new FormData();
                
                // Append JSON data
                formData.append('name', this.registerData[0]);
                formData.append('email', this.registerData[1]);
                formData.append('password', this.registerData[2]);
                formData.append('gender', this.registerData[3]);
                formData.append('birthday', this.registerData[4]);
                formData.append('address', this.registerData[5]);

                this.setLoadingStatus(true);

                axios.post('http://127.0.0.1:8000/api/register',formData)
                .then((response) => {
                this.setLoadingStatus(false);

                    if(response.data.status === true){
                        this.directHome();
                        this.storeUserInfo(response);
                        this.storeLocalData(response.data);
                        }else {
                            this.currentTab = 1;
                            this.validationFail = true;
                            this.errorMsg = response.data.errors;
                        }
            
                })
                .catch(error => {
                    this.setLoadingStatus(false);
                    console.log(error);
                })
            }
                
        }else {
            this.showInfoRequired();
        }
        
    },
    clearForm(){
        this.userData.email = '';
        this.userData.password = '';
    },
   
    directHome() {
        this.$router.push({
            name : "home"
        })
    },
    returnBack() {
            this.$router.back();
    },
    storeUserInfo(response){
        this.$store.dispatch("setUserData",response.data.user);
        this.$store.dispatch("setToken",response.data.token);
    },
    // store token in local storage
    storeLocalData(data){
        localStorage.setItem("login_token",data.token);
        localStorage.setItem("userData",JSON.stringify(data.user));
    },
    
},

}
</script>