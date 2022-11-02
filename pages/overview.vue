<template>
  <div class="w-full h-full overflow-hidden">
    <InsectMap :map_data="insects"/>
    <!--
    <div class="py-8 px-16 grid grid-cols-3 gap-8">
      <InsectFeed></InsectFeed>
      <Statistics></Statistics>
    </div>
    -->
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
  components: {Statistics, InsectFeed, InsectFeedCard, InsectMap, TabSpecies, TabCategories, TabInsects},
  data() {
    return {
      insects: [
        {
          id: 2,
          insect: {
            id: 1,
            species_name: "Et adipisci enim vero et.",
            created_at: "2022-10-28T10:50:54.000000Z",
            updated_at: "2022-10-28T10:50:54.000000Z"
          },
          user: {
            id: 1,
            school_id: 1,
            created_at: "2022-10-28T11:18:04.000000Z",
            updated_at: "2022-10-28T11:18:04.000000Z"
          },
          device_id: 123123123123,
          latitude: 10,
          longitude: 10,
          altitude: 10
        }
      ]
    }
  },
  mounted() {
    this.loadMapData()
  },
  methods: {
    loadMapData() {
      this.$axios.$get('https://fffbe.jankrb.com/api/log')
        .then(response => {
          console.log(response)
          // this.insects = response.data
        })
        .catch(error => {

        })
    }
  }
}
</script>
