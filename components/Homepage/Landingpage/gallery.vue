<template>
  <div class="bg-white" data-aos="fade-up">
    <section aria-labelledby="features-heading" class="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
      <div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
        <div class="max-w-3xl">
          <h2 id="features-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ content.header.title }}
          </h2>
          <p class="mt-4 text-gray-500">
            {{ content.header.description }}
          </p>
        </div>

        <div class="mt-4">
          <div class="-mx-4 flex overflow-x-auto sm:mx-0">
            <div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
              <div class="-mb-px flex space-x-10">
                <button @click="current_event = event.id" v-for="event in content.events" :key="event.title + event.id + 'button'" :class="[ current_event === event.id ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">
                  {{ event.name }}
                </button>
              </div>
            </div>
          </div>

          <div v-if="current_event === event.id" v-for="event in content.events" :key="event.title + event.id + 'event'" class="space-y-16 pt-10 lg:pt-16">
            <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div class="mt-6 lg:mt-0 lg:col-span-5">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ event.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  {{ event.description }}
                </p>
              </div>
              <div class="lg:col-span-7">
                <div class="rounded-lg bg-gray-100 h-96 w-full overflow-hidden">
                  <img :src="require('~/assets/images/' + event.image)" alt="" class="object-cover">
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
      current_event: 1,
    }
  },
  props: {
    content: {
      type: Object
    }
  }
}
</script>

