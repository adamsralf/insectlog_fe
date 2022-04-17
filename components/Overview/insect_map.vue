<template>
  <div class="h-screen w-full pt-32 px-16 pb-16">
    <div class="relative h-full w-full overflow-hidden rounded-3xl">
      <div class="absolute w-full p-4 flex justify-between z-40">
        <div class="bg-white p-2 border rounded-xl flex gap-2">
          <solid-search-icon class="h-6 w-6 text-primary"></solid-search-icon>
          <input type="text" placeholder="Suchen" class="outline-none">
        </div>
        <div class="flex gap-3">
          <div @click="current_popup = 1" class="bg-white p-2 w-max h-max rounded-xl border cursor-pointer">
            <solid-filter-icon class="h-6 w-6 text-primary"></solid-filter-icon>
          </div>
          <div @click="current_popup = 2" class="bg-white p-2 w-max h-max rounded-xl border cursor-pointer">
            <solid-cog-icon class="h-6 w-6 text-primary"></solid-cog-icon>
          </div>
        </div>
      </div>
      <div class="absolute w-full z-30 flex justify-end" v-if="current_popup === 1">
        <div class="mt-16 mr-4 bg-white w-1/3 rounded-xl p-4 border">
          <div class="relative pb-5 border-b border-gray-200 sm:pb-0">
            <div class="mt-4">
              <!-- Dropdown menu on small screens -->
              <div class="sm:hidden">
                <label for="current-tab" class="sr-only">Wähle einen Tab</label>
                <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                  <option v-for="tab in tabs" :key="tab.title + 'select'" :selected="tab.id === current_tab">{{ tab.title }}</option>
                </select>
              </div>
              <!-- Tabs at small breakpoint and up -->
              <div class="hidden sm:flex justify-between">
                <nav class="-mb-px flex space-x-8">
                  <a v-for="tab in tabs" :key="tab.title + 'tab'" href="#" @click="current_tab = tab.id" :class="[ tab.id === current_tab ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']">
                    {{ tab.title }}
                  </a>
                </nav>
                <div @click="current_popup = 0" class="select-none">
                  <solid-x-icon class="h-6 w-6 cursor-pointer text-gray-800 hover:text-primary"></solid-x-icon>
                </div>
              </div>
            </div>
          </div>
          <TabInsects :content="insects" v-if="current_tab === 1"></TabInsects>
          <TabCategories :content="categories" v-if="current_tab === 2"></TabCategories>
          <TabSpecies v-if="current_tab === 3"></TabSpecies>
        </div>
      </div>
      <iframe class="w-full h-full" id="gmap_canvas" src="https://maps.google.com/maps?q=Bochum&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  </div>
</template>

<script>
import TabInsects from "@/components/Overview/tab_insects";
import TabCategories from "@/components/Overview/tab_categories";
import TabSpecies from "@/components/Overview/tab_species";
export default {
  name: "insect_map",
  components: {TabSpecies, TabCategories, TabInsects},
  data() {
    return {
      current_tab: 1,
      current_popup: 0,
      tabs: [
        {
          id: 1,
          title: "Alle",
        },
        {
          id: 2,
          title: "Kategorien",
        },
        {
          id: 3,
          title: "Arten",
        }
      ],
      insects: [
        {
          id: 1,
          name: "Viech 1",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          image: "1.jpg",
          selected: false
        },
        {
          id: 2,
          name: "Viech 2",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          image: "2.jpg",
          selected: false
        },
        {
          id: 3,
          name: "Viech 3",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          image: "3.jpg",
          selected: false
        },
        {
          id: 4,
          name: "Viech 4",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          image: "4.jpg",
          selected: false
        },
        {
          id: 5,
          name: "Viech 5",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          image: "5.jpg",
          selected: false
        }
      ],
      categories: [
        {
          id: 1,
          title: "Kategorie 1",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          image: "1.jpg",
          selected: false
        },
        {
          id: 2,
          title: "Kategorie 2",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          image: "2.jpg",
          selected: false
        },
        {
          id: 3,
          title: "Kategorie 3",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          image: "3.jpg",
          selected: false
        },
        {
          id: 4,
          title: "Kategorie 4",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          image: "4.jpg",
          selected: false
        }
      ],
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
