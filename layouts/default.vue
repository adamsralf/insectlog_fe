<template>
  <div>
    <Navbar></Navbar>
    <Nuxt/>
  </div>
</template>

<script>
import Navbar from "~/components/Layout/navbar";
export default {
  name: "default",
  components: {Navbar}
}
</script>

<style scoped>

</style>
