<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import router from "@/router/index.js";

export default {
  name: "Home",
  // components: {
  //   // HelloWorld,
  // },
  mounted() {
    // 方法一
    // const result = router.resolve({
    //   name: "not-found",
    //   params: {
    //     pathMatch: ['not', 'found'],
    //   },
    // }).href
    // console.log('mounted -> result: ', result)
    // // vue2 this.$router.push()
    // router.push({
    //   name: "not-found",
    //   params: {
    //     pathMatch: ['not', 'found'],
    //   },
    // });
    // 方法二
    // router.push("/not/found/url");
  },
};
</script>
