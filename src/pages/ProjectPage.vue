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
            <div class="flex mt-2 mb-6">
                <div v-for="(link, index) in item.researchlinks" :key="index">
                    <a :href="link" target="_blank" class="bg-blue-600 text-white px-3 py-2 text-base rounded-lg mr-2">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Ontwerp fase</h1>
            <div class="text-2xl my-2">
                {{ item.design }}
            </div>
            <div class="flex mt-2 mb-6">
                <div v-for="(link, index) in item.designlinks" :key="index">
                    <a :href="link" target="_blank" class="bg-blue-600 text-white px-3 py-2 text-base rounded-lg mr-2">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Develop fase</h1>
            <div class="text-2xl my-2">
                {{ item.development }}
            </div>
            <div class="flex mt-2 mb-6">
                <div v-for="(link, index) in item.developmentlinks" :key="index">
                    <a :href="link" target="_blank" class="bg-blue-600 text-white px-3 py-2 text-base rounded-lg mr-2">{{ this.checkLink(link) }}</a>
                </div>
            </div>

            <h1 class="text-5xl font-bold">Test fase</h1>
            <div class="text-2xl my-2">
                {{ item.test }}
            </div>
            <div class="flex mt-2 mb-6">
                <div v-for="(link, index) in item.testlinks" :key="index">
                    <a :href="link" target="_blank" class="bg-blue-600 text-white px-3 py-2 text-base rounded-lg mr-2">{{ this.checkLink(link) }}</a>
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
            }

        }
    },

    mounted(){
        this.getProject();
    }
}
</script>