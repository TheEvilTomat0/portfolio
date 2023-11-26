<template>
    <div class="text-9xl font-bold m-5">Development</div>
    <modal ref="modal"/>
</template>

<script>
import modal from '../components/modal.vue'
export default {
    methods: {
        openModal(){
            this.$refs.modal.openModal();
        }
    },
    components: { modal },
}
</script>