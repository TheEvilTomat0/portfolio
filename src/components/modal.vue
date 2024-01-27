<template>
    <div v-if="open" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-2xl font-bold leading-6 text-gray-900" id="modal-title">{{ this.content.title }}</h3>
                <div class="mt-2">
                    <p class="text-base text-gray-500">{{ this.content.info }}</p>
                </div>
                <div class="mt-3">
                    <h2 class="italic font-bold text-lg">Reflectie</h2>
                    <p class="text-base text-gray-500">{{ this.content.reflectie }}</p>
                </div>
                </div>
            </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 flex justify-between">
                <div class="flex justify-evenly items-center">
                    <div v-for="(item, index) in content.tags" :key="index" class="text-sm italic text-sky-700 px-1">
                        {{ item }}
                    </div>
                </div>
                <button v-on:click="open = false" type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Klaar!</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            open: false,
            content: {}
        }
    },

    methods: {
        openModal(content){
            this.content = content;
            this.open = true;
        },
        closeModal(){
            this.open = false;
        }
    },
}
</script>