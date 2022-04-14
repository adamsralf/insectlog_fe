<template>
  <div>
    <LandingpageHero :content="landingpage.hero" class="relative h-screen" v-if="landingpage.hero"></LandingpageHero>
    <LandingpageFeatures :features="landingpage.features" v-if="landingpage.features"></LandingpageFeatures>
    <LandingpageBanner :content="landingpage.banner" v-if="landingpage.banner"></LandingpageBanner>
    <LandingpageGallery :content="landingpage.events" v-if="landingpage.events"></LandingpageGallery>
  </div>
</template>

<script>
import LandingpageHero from "@/components/Landingpage/hero";
import LandingpageFeatures from "@/components/Landingpage/features";
import LandingpageBanner from "@/components/Landingpage/banner";
import LandingpageGallery from "@/components/Landingpage/gallery";
export default {
  name: 'IndexPage',
  components: {LandingpageHero, LandingpageFeatures, LandingpageBanner, LandingpageGallery},
  data() {
    return {
      landingpage: {
        hero: null,
        events: null,
        banner: null,
        features: null
      }
    }
  },
  async fetch() {
    let content = await this.$content(this.$i18n.locale, 'landingpage').fetch()
    this.landingpage.hero = content.hero
    this.landingpage.events = content.events
    this.landingpage.banner = content.banner
    this.landingpage.features = content.features
  },
}
</script>
