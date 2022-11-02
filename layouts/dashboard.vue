<template>
  <div class="grid grid-cols-6 w-full h-screen">
    <!--<Navbar :content="navbar"></Navbar>-->
    <Sidenav class="col-span-1"/>
    <Nuxt class="col-span-5"></Nuxt>
  </div>
</template>

<script>
import Navbar from "@/components/Dashboard/Layout/navbar";
import Sidenav from "@/components/Dashboard/Layout/sidenav";

export default {
  name: "dashboard",
  components: {Sidenav, Navbar},
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
