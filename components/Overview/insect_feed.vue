<template>
  <div class="col-span-2">
    <div class="flex justify-between pb-4">
      <div>
        <div class="text-primary text-3xl font-bold">
          Insekten Feed
        </div>
        <div class="text-gray-800">
          Hier findest du die letzten eingetragenen Insekten
        </div>
      </div>
      <div class="flex items-end gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <InsectFeedCard :insect="insect" v-for="insect in insect_feed" :key="insect.id + insect.name"></InsectFeedCard>
    </div>
  </div>
</template>

<script>
import InsectFeedCard from "@/components/Overview/insect_feed_card";
export default {
  name: "insect_feed",
  components: { InsectFeedCard },
  data() {
    return {
      insect_feed: [
        {
          id: 1,
          name: "Neues Insekt 1",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          user: {
            name: "Ben Walter",
            profile_picture: "1.jpg",
            school: "Technische Berufliche Schule 1"
          },
          image: "1.jpg"
        },
        {
          id: 2,
          name: "Neues Insekt 2",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          user: {
            name: "Ben Walter",
            profile_picture: "1.jpg",
            school: "Technische Berufliche Schule 1"
          },
          image: "2.jpg"
        },
        {
          id: 3,
          name: "Neues Insekt 3",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          user: {
            name: "Ben Walter",
            profile_picture: "1.jpg",
            school: "Technische Berufliche Schule 1"
          },
          image: "3.jpg"
        },
        {
          id: 4,
          name: "Neues Insekt 4",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          user: {
            name: "Ben Walter",
            profile_picture: "1.jpg",
            school: "Technische Berufliche Schule 1"
          },
          image: "4.jpg"
        }
      ]
    }
  }
}
</script>
