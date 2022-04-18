<template>
  <div>
    <Navbar :content="navbar"></Navbar>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import Navbar from "@/components/Dashboard/Layout/navbar";

export default {
  name: "dashboard",
  components: {Navbar},
  data() {
    return {
      navbar: {},
    }
  },
  async fetch() {
    let content = await this.$content(this.$i18n.locale, 'dashboard_layout').fetch()
    this.navbar = content.navbar
    console.log(content)
  },
}
</script>
