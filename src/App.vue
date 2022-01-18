<template>
  <v-app  app>    
      <v-fade-transition mode="out-in">
          <router-view></router-view>
      </v-fade-transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created() {
    document.title = this.$appName;  
    this.$router.push("/login");      
  },
};
</script>
