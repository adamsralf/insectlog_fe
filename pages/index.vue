<template>
  <div>
    <LandingpageHero class="relative h-screen"></LandingpageHero>
    <LandingpageFeatures></LandingpageFeatures>
    <LandingpageBanner></LandingpageBanner>
    <LandingpageGallery></LandingpageGallery>
  </div>
</template>

<script>
import LandingpageHero from "@/components/Landingpage/hero";
import LandingpageFeatures from "@/components/Landingpage/features";
import LandingpageBanner from "@/components/Landingpage/banner";
import LandingpageGallery from "@/components/Landingpage/gallery";
export default {
  name: 'IndexPage',
  components: {LandingpageHero, LandingpageFeatures, LandingpageBanner, LandingpageGallery}
}
</script>
