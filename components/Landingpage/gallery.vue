<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
      <div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
        <div class="max-w-3xl">
          <h2 id="features-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projekt Events
          </h2>
          <p class="mt-4 text-gray-500">
            Hier findet Ihr kürzliche Events von unseren Nutzern, gerne kannst du bei uns auch deine Insektensuch Aktion einreichen!
          </p>
        </div>

        <div class="mt-4">
          <div class="-mx-4 flex overflow-x-auto sm:mx-0">
            <div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
              <div class="-mb-px flex space-x-10">
                <button @click="current_tab = tab.id" v-for="tab in tabs" :key="tab.title + tab.id + 'button'" :class="[ current_tab === tab.id ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">
                  {{ tab.name }}
                </button>
              </div>
            </div>
          </div>

          <div v-if="current_tab === tab.id" v-for="tab in tabs" :key="tab.title + tab.id + 'tab'" class="space-y-16 pt-10 lg:pt-16">
            <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div class="mt-6 lg:mt-0 lg:col-span-5">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ tab.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  {{ tab.description }}
                </p>
              </div>
              <div class="lg:col-span-7">
                <div class="rounded-lg bg-gray-100 h-96 w-full overflow-hidden">
                  <img :src="require('~/assets/images/gallery/' + tab.image)" alt="" class="object-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      current_tab: 1,
      tabs: [
        {
          id: 1,
          name: "Projekt 1",
          image: "1.jpg",
          title: "Article - Tab 1",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
          id: 2,
          name: "Projekt 2",
          image: "2.jpg",
          title: "Article - Tab 2",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
          id: 3,
          name: "Projekt 3",
          image: "3.jpg",
          title: "Article - Tab 3",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        {
          id: 4,
          name: "Projekt 4",
          image: "4.jpg",
          title: "Article - Tab 4",
          description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }
      ]
    }
  }
}
</script>

