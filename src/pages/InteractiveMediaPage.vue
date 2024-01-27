<template>
    <div class="text-9xl font-bold m-5">Interactive <br>Media</div>
    <div v-for="(item, index) in this.content" :key="index">
        <content-block :content="item" :index="index"/>
    </div>
</template>

<script>
import contentBlock from '../components/contentBlock.vue';
import content from '../assets/content.json';
import Modal from '../components/modal.vue';

export default {
  data () {
    return {
      content: {}
    }
  },

  components: { contentBlock, Modal },

  methods: {
    getContent(){
      const filteredContent = content.content.filter(item => item.tags.includes('interactive media'));
      
      this.content = filteredContent;
    }
  },

  mounted(){
    this.getContent();
  }
}
</script>