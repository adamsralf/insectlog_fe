<template>
  <div>
    <Navbar></Navbar>
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";
export default {
  name: "default",
  components: {Footer, Navbar}
}
</script>

<style scoped>

</style>
