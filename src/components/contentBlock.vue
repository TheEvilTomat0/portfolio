<template>
    <div class="flex flex-col justify-center items-center">
        <div v-if="this.checkOddIndex(this.index)" class="flex gap-5 my-7 items-center">
            <img class="w-52 h-52 object-cover rounded-lg" :src="requireAsset(this.content.img)">
            <div class="flex flex-col">
                <div class="text-2xl font-bold">{{ this.content.title }}</div>
                <div class="text-lg font-thin italic">{{ this.content.subtitle }}</div>
                <div class="w-96 mt-2">{{ this.content.description }}</div>
                <button v-on:click="openModal(this.content)" class="w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Lees meer</button>
            </div>
        </div>    
        <div v-else class="flex gap-5 my-7 items-center">
            <div class="flex flex-col">
                <div class="text-2xl font-bold">{{ this.content.title }}</div>
                <div class="text-lg font-thin italic">{{ this.content.subtitle }}</div>
                <div class="w-96 mt-2">{{ this.content.description }}</div>
                <button v-on:click="openModal(this.content)" class="w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Lees meer</button>
            </div>
            <img class="w-52 h-52 object-cover rounded-lg" :src="requireAsset(this.content.img)">
        </div>
    </div>
    <modal ref="modal"/>
</template>

<script>
import modal from './modal.vue';
import icon from '../assets/img/tict_icon.png';
import tictFinal from '../assets/img/tict_final.png';
import tictOnderzoek from '../assets/img/tict_onderzoek.png';
import dailyui1 from '../assets/img/dailyui/dailyui001.png';
import dailyui2 from '../assets/img/dailyui/dailyui002.png';
import feather from '../assets/img/feather_icon.png';

export default {
    data () {
        return {
            icon: icon,
            tictFinal: tictFinal,
            tictOnderzoek: tictOnderzoek,
            dailyui1: dailyui1,
            dailyui2: dailyui2,
            feather: feather
        }
    },
    components: { modal },
    methods: {
        checkOddIndex(index){
            if(index % 2 == 0){
                return true;
            }else{
                return false;
            }
        },
        openModal(content){
            this.$refs.modal.openModal(content);
        },
        requireAsset(path) {
            if(path.includes('tict_icon')) {
                return this.icon;
            } else if(path.includes('tict_final')) {
                return this.tictFinal;
            } else if(path.includes('tict_onderzoek')) {
                return this.tictOnderzoek;
            } else if(path.includes('dailyui001')) {
                return this.dailyui1;
            } else if(path.includes('dailyui002')) {
                return this.dailyui2;
            } else if(path.includes('feather_icon')) {
                return this.feather;
            }
        },
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