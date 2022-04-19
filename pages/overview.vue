<template>
  <div class="w-full h-full overflow-hidden">
    <InsectMap></InsectMap>
    <div class="py-8 px-16 grid grid-cols-3 gap-8">
      <InsectFeed></InsectFeed>
      <Statistics></Statistics>
    </div>
  </div>
</template>

<script>
import TabInsects from "@/components/Homepage/Overview/tab_insects";
import TabCategories from "@/components/Homepage/Overview/tab_categories";
import TabSpecies from "@/components/Homepage/Overview/tab_species";
import InsectMap from "@/components/Homepage/Overview/insect_map";
import InsectFeedCard from "@/components/Homepage/Overview/insect_feed_card";
import InsectFeed from "@/components/Homepage/Overview/insect_feed";
import Statistics from "@/components/Homepage/Overview/statistics";
export default {
  name: "overview",
  components: {Statistics, InsectFeed, InsectFeedCard, InsectMap, TabSpecies, TabCategories, TabInsects}
}
</script>
