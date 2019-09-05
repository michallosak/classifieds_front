<template>
  <div id="app">
    <navbar-component/>
    <router-view />
  </div>
</template>
<script>
  import NavbarComponent from "./components/NavbarComponent";
  export default {
    components: {NavbarComponent}
  }
</script>