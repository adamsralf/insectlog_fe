<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ content.header.title }}
        </h2>
        <p class="mt-4 text-gray-500">
          {{ content.header.description }}
        </p>
      </div>

      <div class="mt-16 space-y-16">
        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div class="mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 lg:col-start-1">
            <h3 class="text-lg font-medium text-gray-900">
              {{ content.top.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ content.top.description }}
            </p>
          </div>
          <div class="flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 lg:col-start-6 xl:col-start-5">
            <div class="aspect-w-5 aspect-h-2 max-h-72 rounded-lg bg-gray-100 overflow-hidden">
              <img class="object-center object-cover" :src="require('~/assets/images/' + content.top.image)" alt="" v-if="content.top.image">
            </div>
          </div>
        </div>

        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div class="mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 lg:col-start-8 xl:col-start-9">
            <h3 class="text-lg font-medium text-gray-900">
              {{ content.bottom.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ content.bottom.description }}
            </p>
          </div>
          <div class="flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 lg:col-start-1">
            <div class="aspect-w-5 aspect-h-2 max-h-72 rounded-lg bg-gray-100 overflow-hidden">
              <img class="object-center object-cover" :src="require('~/assets/images/' + content.bottom.image)" alt="" v-if="content.bottom.image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "features",
  props: {
    content: {
      type: Object
    }
  }
}
</script>
