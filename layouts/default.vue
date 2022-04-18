<template>
  <div class="relative">
    <Navbar :content="navbar"></Navbar>
    <Nuxt/>
    <Footer :content="footer"></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Homepage/Layout/navbar";
import Footer from "@/components/Homepage/Layout/footer";
export default {
  name: "default",
  components: {Footer, Navbar},
  data() {
    return {
      navbar: {},
      footer: {}
    }
  },
  async fetch() {
    let content = await this.$content(this.$i18n.locale, 'landingpage_layout').fetch()
    this.navbar = content.navbar
    this.footer = content.footer
    console.log(content)
  },
}
</script>

