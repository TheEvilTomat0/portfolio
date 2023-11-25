<template>
    <div class="flex flex-col justify-center items-center">
        <div v-if="this.checkOddIndex(this.index)" class="flex gap-5 my-7">
            <img class="w-52 h-52 object-cover rounded-lg" :src="this.content.img">
            <div class="flex flex-col">
                <div class="text-2xl font-bold">{{ this.content.name }}</div>
                <div class="text-lg font-thin italic">{{ this.content.prompt }}</div>
                <div class="w-96 mt-2">{{ this.content.description }}</div>
                <button class="w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Lees meer</button>
            </div>
        </div>    
        <div v-else class="flex gap-5 my-7">
            <div class="flex flex-col">
                <div class="text-2xl font-bold">{{ this.content.name }}</div>
                <div class="text-lg font-thin italic">{{ this.content.prompt }}</div>
                <div class="w-96 mt-2">{{ this.content.description }}</div>
                <button class="w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Lees meer</button>
            </div>
            <img class="w-52 h-52 object-cover rounded-lg" :src="this.content.img">
        </div>
    </div>    
</template>

<script>
export default {
    methods: {
        checkOddIndex(index){
            if(index % 2 == 0){
                return true;
            }else{
                return false;
            }
        }
    },
    props: {
        content:{
            type: Object,
            required: true
        },
        index:{
            type: Number,
            required: true
        }
    },
}
</script>

<style>

</style>