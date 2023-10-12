<template id="mouseLayer">
    <div id="secondLayer" class="w-screen h-screen bg-[url('/public/svg/background.jpg')] object-cover bg-no-repeat">
        <img src="/public/svg/comets.svg" class="object-contain absolute top-24 left-1/4 w-auto h-24">
        <img src="/public/svg/moon_rocks.svg" class="object-contain w-auto bottom-10 left-1/3 absolute h-64">
        <img src="/public/svg/planet.svg" class="object-contain w-auto h-80 absolute left-24 top-1/4">
        <img src="/public/svg/planet2.svg" class="object-contain w-auto h-64 right-56 top-1/4 absolute">
        <img src="/public/svg/planet3.svg" class="object-contain w-auto h-56 bottom-10 right-7 absolute">
        <img src="/public/svg/rocket.svg" class="object-contain w-auto h-24 left-1/3 top-1/3 absolute">
        <img src="/public/svg/sat.svg" class="object-contain w-auto h-10 right-44 top-28 absolute">
        <img src="/public/svg/sat2.svg" class="object-contain w-auto h-20 left-24 bottom-32 absolute">
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            constrain: 20,
            mouseOverContainer:{},
            secondLayer:{},
            
        }
    },
    mounted() {
        this.mouseOverContainer = document.getElementById('mouseLayer');
        this.secondLayer = document.getElementById('secondLayer');
        console.log(this.mouseOverContainer);
    },
});
</script>