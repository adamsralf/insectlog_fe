<template>
  <div class="bg-white pb-8 sm:pb-12 lg:pb-12 pt-24 min-h-screen">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div data-aos="fade-down-right">
            <img class="h-11 w-auto" :src="require('~/assets/images/' + content.logo)" alt="" v-if="content.logo">
          </div>
          <div class="mt-20" data-aos="fade-right">
            <div>
              <div class="inline-flex space-x-4">
                  <span class="inline-flex items-center text-sm font-medium text-primary space-x-1 uppercase">
                    {{ content.subtitle }}
                  </span>
              </div>
            </div>
            <div class="mt-6 sm:max-w-xl">
              <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {{ content.title }}
              </h1>
              <p class="mt-6 text-xl text-gray-500">
                {{ content.description }}
              </p>
            </div>
            <div class="mt-6">
              <div class="inline-flex items-center divide-x divide-gray-300">
                <div class="flex-shrink-0 flex pr-5">
                  <solid-star-icon class="h-5 w-5 text-yellow-400" v-for="star in content.voting.stars" :key="star + 'star_rating'"></solid-star-icon>
                </div>
                <div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                  <span class="font-medium text-gray-900">
                    {{ content.voting.rated_by }}
                  </span>
                  {{ content.voting.over }}
                  <span class="font-medium text-primary">
                    {{ content.voting.users }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div class="hidden sm:block">
            <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
            <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
            </svg>
          </div>
          <div class="relative pl-4  sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img data-aos="zoom-in" class="w-full lg:h-full lg:w-auto lg:max-w-none" :src="require('~/assets/images/' + content.image)" alt="" v-if="content.image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
  props: {
    content: {
      type: Object
    }
  }
}
</script>
