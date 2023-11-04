<template>
    <div id="mouseLayer" v-on:mousemove="onMouseMove" class="w-screen h-screen bg-[url('/public/svg/background.jpg')] object-cover bg-no-repeat">
        <img id="secondLayer1" src="/public/svg/comets.svg" class="object-contain absolute top-24 left-1/4 w-auto h-24">
        <img id="secondLayer2" src="/public/svg/moon_rocks.svg" class="object-contain w-auto bottom-10 left-1/3 absolute h-64">
        <img id="secondLayer3" src="/public/svg/planet.svg" class="object-contain w-auto h-80 absolute left-24 top-1/4">
        <img id="secondLayer4" src="/public/svg/planet2.svg" class="object-contain w-auto h-64 right-56 top-1/4 absolute">
        <img id="secondLayer5" src="/public/svg/planet3.svg" class="object-contain w-auto h-56 bottom-10 right-7 absolute">
        <img id="secondLayer6" src="/public/svg/rocket.svg" class="object-contain w-auto h-24 left-1/3 top-1/3 absolute">
        <img id="secondLayer7" src="/public/svg/sat.svg" class="object-contain w-auto h-10 right-44 top-28 absolute">
        <img id="secondLayer8" src="/public/svg/sat2.svg" class="object-contain w-auto h-20 left-24 bottom-32 absolute">     
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({ 
    data() {
        return {
            constrain: 40,
            mouseOverContainer:{},
            secondLayer1:{},
            secondLayer2:{},
            secondLayer3:{},
            secondLayer4:{},
            secondLayer5:{},
            secondLayer6:{},
            secondLayer7:{},
            secondLayer8:{},
        }
    },
    methods: {
        transforms(x, y, el) {
            let box = el.getBoundingClientRect();
            let calcX = -(y - box.y - (box.height / 2)) / this.constrain;
            let calcY = (x - box.x - (box.width / 2)) / this.constrain;
            
            return "perspective(100rem) "
                + "   rotateX("+ calcX +"deg) "
                + "   rotateY("+ calcY +"deg) ";
        },

        transformElement(el, xyEl) {
            el.style.transform  = this.transforms.apply(null, xyEl);
        },

        onMouseMove(e) {
            console.log(e);
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([
                this.secondLayer1, 
                this.secondLayer2, 
                this.secondLayer3, 
                this.secondLayer4, 
                this.secondLayer5, 
                this.secondLayer6, 
                this.secondLayer7, 
                this.secondLayer8
            ]);

            window.requestAnimationFrame(() => {
                this.transformElement(this.secondLayer1, position);
                this.transformElement(this.secondLayer2, position);
                this.transformElement(this.secondLayer3, position);
                this.transformElement(this.secondLayer4, position);
                this.transformElement(this.secondLayer5, position);
                this.transformElement(this.secondLayer6, position);
                this.transformElement(this.secondLayer7, position);
                this.transformElement(this.secondLayer8, position);
            });
        }
    },
    mounted() {
        this.mouseOverContainer = document.getElementById('mouseLayer');
        this.secondLayer1 = document.getElementById('secondLayer1');
        this.secondLayer2 = document.getElementById('secondLayer2');
        this.secondLayer3 = document.getElementById('secondLayer3');
        this.secondLayer4 = document.getElementById('secondLayer4');
        this.secondLayer5 = document.getElementById('secondLayer5');
        this.secondLayer6 = document.getElementById('secondLayer6');
        this.secondLayer7 = document.getElementById('secondLayer7');
        this.secondLayer8 = document.getElementById('secondLayer8');
    },
});
</script>