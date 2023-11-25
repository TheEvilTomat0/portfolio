<template>    
    <navbar :page="this.$route.name"/>
    <router-view></router-view>
</template>

<script>
  import navbar from './components/navbar.vue'
  export default {
    name: "App",
    components: {
      navbar
    },
    mounted(){
      
    }
  };
</script>