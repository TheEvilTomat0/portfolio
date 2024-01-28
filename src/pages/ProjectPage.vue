<template>
    <div class="text-9xl font-bold m-5">Project {{ projectName }}</div>
        <div v-for="(item, index) in project" :key="index" class="flex flex-col justify-center mt-16 w-full max-w-7xl ml-5">
            <h1 class="text-5xl font-bold">De opdracht</h1>
            <div class="text-2xl my-2">
                {{ item.why }}
            </div>

            <h1 class="text-5xl font-bold">Onderzoek fase</h1>
            <div class="text-2xl my-2">
                {{ item.research }}
            </div>
            <div class="flex mb-6">
                <div v-for="(link, index) in item.researchlinks" :key="index">
                    <a :href="link" target="_blank" class="mr-4 w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Ontwerp fase</h1>
            <div class="text-2xl my-2">
                {{ item.design }}
            </div>
            <div class="flex mb-6">
                <div v-for="(link, index) in item.designlinks" :key="index">
                    <a :href="link" target="_blank" class="mr-4 w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Develop fase</h1>
            <div class="text-2xl my-2">
                {{ item.development }}
            </div>
            <div class="flex mb-6">
                <div v-for="(link, index) in item.developmentlinks" :key="index">
                    <a :href="link" target="_blank" class="mr-4 w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Test fase</h1>
            <div class="text-2xl my-2">
                {{ item.test }}
            </div>
            <div class="flex mb-6">
                <div v-for="(link, index) in item.testlinks" :key="index">
                    <a :href="link" target="_blank" class="mr-4 w-36 inline-block px-6 py-2 mt-2 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Reflectie</h1>
            <div class="text-2xl my-2">
                {{ item.reflection }}
            </div>
        </div>
</template>

<script>
import content from '../assets/content.json';
export default {
    name: 'ProjectPage',
    data () {
        return {
            project: null,
            projectName: this.$route.query.projectName
        }
    },

    methods: {
        getProject(){
            const filteredContent = content.projects.filter(item => item.title.includes(this.projectName));
            this.project = filteredContent;
        },
        checkLink(link){
            console.log(link);
            if(link.includes('dribbble')) {
                return 'Dribbble link';
            } else if(link.includes('figma')) {
                return 'Figma link';
            } else if(link.includes('hera')) {
                return 'Website link';
            } else if(link.includes('git')) {
                return 'Gitlab link';
            } else if(link.includes('forms')) {
                return 'Onderzoek link';
            } else if(link.includes('app')) {
                return 'App link';
            } else {
                return 'Link';
            }

        }
    },

    mounted(){
        this.getProject();
    }
}
</script>