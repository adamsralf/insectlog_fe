<template>
  <div class="relative bg-primary-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" :src="require('~/assets/images/' + content.image)" alt="">
      <div class="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
    </div>
    <div data-aos="fade-in" class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {{ content.title }}
      </h1>
      <p class="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
        {{ content.description }}
      </p>
      <div class="bg-yellow-300 py-3 px-5 rounded-2xl w-max font-bold shadow mx-auto cursor-pointer hover:bg-yellow-400 mt-8">
        {{ content.button }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    content: {
      type: Object
    }
  }
}
</script>
