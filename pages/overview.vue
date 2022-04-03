<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="p-5 col-span-2">
        <img src="~/assets/images/map.png" class="rounded-3xl overflow-hidden border border-gray-200 w-full h-175 object-cover" alt="">
      </div>
      <div class="p-5 col-span-1">
        <div class="relative pb-5 border-b border-gray-200 sm:pb-0">
          <div class="md:flex md:items-center md:justify-between">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Insekten</h3>
            <div class="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Teilen
              </button>
              <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Insekt einreichen
              </button>
            </div>
          </div>
          <div class="mt-4">
            <!-- Dropdown menu on small screens -->
            <div class="sm:hidden">
              <label for="current-tab" class="sr-only">Wähle einen Tab</label>
              <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option v-for="tab in tabs" :key="tab.title + 'select'" :selected="tab.id === current_tab">{{ tab.title }}</option>
              </select>
            </div>
            <!-- Tabs at small breakpoint and up -->
            <div class="hidden sm:block">
              <nav class="-mb-px flex space-x-8">
                <a v-for="tab in tabs" :key="tab.title + 'tab'" href="#" @click="current_tab = tab.id" :class="[ tab.id === current_tab ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']">
                  {{ tab.title }}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div class="py-5" v-if="current_tab === 1">
          <div class="pb-4">
            <div class="w-full border rounded-2xl p-2 flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 mr-2 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" class="outline-none" placeholder="Suchen">
            </div>
          </div>
          <div class="grid grid-cols-3 gap-5">
            <div @click="insect.selected = !insect.selected" v-for="insect in insects" :key="insect.id + insect.name" class="select-none relative bg-white border border-gray-200 rounded-2xl overflow-hidden duration-150 transition hover:shadow-lg cursor-pointer">
              <div :class="[insect.selected ? 'opacity-100' : 'opacity-0', 'transition duration-300 h-full w-full absolute flex justify-center place-items-center bg-black bg-opacity-30']">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <img :src="require('~/assets/images/insects/' + insect.image)" class="h-32 w-full object-cover" alt="">
              </div>
              <div class="p-3">
                <div class="text-gray-800 text-xl font-bold">
                  {{ insect.name }}
                </div>
                <div class="truncate text-sm text-gray-400">
                  {{ insect.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5" v-if="current_tab === 2">
          <div class="pb-4">
            <div class="w-full border rounded-2xl p-2 flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 mr-2 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" class="outline-none" placeholder="Suchen">
            </div>
          </div>
          <div class="grid grid-cols-3 gap-5">
            <div @click="category.selected = !category.selected" v-for="category in categories" :key="category.id + category.name" class="select-none relative bg-white border border-gray-200 rounded-2xl overflow-hidden duration-150 transition hover:shadow-lg cursor-pointer">
              <div :class="[category.selected ? 'opacity-100' : 'opacity-0', 'transition duration-300 h-full w-full absolute flex justify-center place-items-center bg-black bg-opacity-30']">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <img :src="require('~/assets/images/categories/' + category.image)" class="h-32 w-full object-cover" alt="">
              </div>
              <div class="p-3">
                <div class="text-gray-800 text-xl font-bold">
                  {{ category.title }}
                </div>
                <div class="truncate text-sm text-gray-400">
                  {{ category.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5 text-center" v-if="current_tab === 3">
          <img src="~/assets/images/illustrations/304.svg" class="mx-auto" alt="">
          <div class="text-primary font-bold text-3xl">
            Alles Leer!
          </div>
          <div class="text-gray-800">
            Leider konnten wir keine Ergebnisse finden.
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 px-5 grid grid-cols-3 gap-8">
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
          <div v-for="insect in insect_feed" :key="insect.id + insect.name" class="bg-white border border-gray-200 rounded-2xl overflow-hidden duration-150 transition hover:shadow-lg">
            <div>
              <img :src="require('~/assets/images/feed/' + insect.image)" class="h-32 w-full object-cover" alt="">
            </div>
            <div class="p-3">
              <div class="border-gray-200 border-b pb-2">
                <div class="text-gray-800 text-xl font-bold">
                  {{ insect.name }}
                </div>
                <div class="truncate text-sm text-gray-500">
                  {{ insect.description }}
                </div>
              </div>
              <div class="flex gap-3 place-items-center mt-3">
                <img :src="require('~/assets/images/profile_pictures/' + insect.user.profile_picture)" class="h-10 w-10 rounded-full object-cover" alt="">
                <div class="flex flex-col">
                  <div class="text-primary font-semibold">
                    {{ insect.user.name }}
                  </div>
                  <div class="text-xs">
                    {{ insect.user.school }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="pb-4">
          <div class="text-primary text-3xl font-bold">
            Statistik
          </div>
          <div class="text-gray-800">
            Hier findest du ein paar Zahlen über das Projekt
          </div>
        </div>
        <div class="grid grid-cols-1 grid-rows-2 gap-y-3">
          <div class="relative bg-white p-3 shadow rounded-lg overflow-hidden border">
            <div>
              <div class="absolute bg-primary-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500 truncate">Erfasste Insekten</p>
            </div>
            <div class="ml-16 flex items-baseline">
              <p class="text-2xl font-semibold text-gray-900">71,897</p>
            </div>
          </div>
          <div class="relative bg-white p-3 shadow rounded-lg overflow-hidden border">
            <div>
              <div class="absolute bg-primary-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500 truncate">Insekten Sammler</p>
            </div>
            <div class="ml-16 flex items-baseline">
              <p class="text-2xl font-semibold text-gray-900">420</p>
            </div>
          </div>
          <div class="relative bg-white p-3 shadow rounded-lg overflow-hidden border">
            <div>
              <div class="absolute bg-primary-500 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500 truncate">Hinterlegte Standorte</p>
            </div>
            <div class="ml-16 flex items-baseline">
              <p class="text-2xl font-semibold text-gray-900">124.566.787</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overview",
  data() {
    return {
      current_tab: 1,
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
