<template>
    <nav>
      <div v-if="page !== 'home'">
        <input type="checkbox" class="hidden" id="nav_burger" v-model="menuOpen">
        <label class="m-5 inline-block bg-transparent cursor-pointer z-30 relative" for="nav_burger">
          <span :class="{ 'translate-y-0 rotate-45 bg-white': menuOpen }" class="transition-transform duration-500 block bg-gray-800 w-8 h-1 rounded-md my-1"></span>
          <span :class="{ 'bg-transparent invisible': menuOpen }" class="transition-transform duration-500 block bg-gray-800 w-8 h-1 rounded-md my-1"></span>
          <span :class="{ '-translate-y-4 -rotate-45 bg-white': menuOpen }" class="transition-transform duration-500 block bg-gray-800 w-8 h-1 rounded-md my-1"></span>
        </label>
      </div>
      <div v-else>
        <input type="checkbox" class="hidden" id="nav_burger" v-model="menuOpen">
        <label class="m-5 inline-block bg-transparent cursor-pointer z-30 fixed" for="nav_burger">
          <span :class="{ 'translate-y-0 rotate-45 bg-white': menuOpen }" class="transition-transform duration-500 block bg-white w-8 h-1 rounded-md my-1"></span>
          <span :class="{ 'bg-transparent invisible': menuOpen }" class="transition-transform duration-500 block bg-white w-8 h-1 rounded-md my-1"></span>
          <span :class="{ '-translate-y-4 -rotate-45 bg-white': menuOpen }" class="transition-transform duration-500 block bg-white w-8 h-1 rounded-md my-1"></span>
        </label>
      </div>

      <aside> 
        <div class="z-10 top-0 bottom-0 left-0 absolute w-[40%] bg-slate-700 transition-transform duration-500 flex flex-col justify-center items-center p-5 text-white" :class="{ '-translate-y-full': !menuOpen }">
          <h3 class="text-6xl font-bold">Portfolio</h3>
          <h3 class="text-6xl break-normal mb-7">Leon Schoonhoven</h3>
          <img src="/public/img/leon.jpg" class="object-contain w-auto h-80 rounded-lg">
        </div>
        <div class="z-10 top-0 bottom-0 left-[40%] absolute w-[60%] bg-slate-500 transition-transform duration-500 flex flex-col justify-center" :class="{ 'translate-x-full': !menuOpen }">
          <ul class="list-none text-left ml-20 space-y-5">
            <li v-for="(item, index) in menuItems" :key="index">
              <a :href="item.link" class="nav-link">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
</template>

<script>
import { defineComponent } from 'vue';
import json from '../../public/content.json';

export default defineComponent({
    props: {
      page: {
        type: String,
        required: true
      }
    },
    data() {
        return {
            menuOpen: false,
            menuItems: json.navigation
        }
    },
});
</script>