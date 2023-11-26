<template>
    <div class="text-9xl font-bold m-5">Design</div>
    <div v-for="(item, index) in this.content" :key="index">
        <content-block :content="item" :index="index"/>
    </div>
</template>

<script>
import contentBlock from '../components/contentBlock.vue';
import content from '../../public/content.json'
import Modal from '../components/modal.vue';

export default {
  data () {
    return {
        content: content.design.dailyui
    }
  },

  components: { contentBlock, Modal },

}
</script>