<template>
  <div>
    <div class="w-full absolute z-20 flex flex-col justify-evenly h-screen bg-gray-800 bg-opacity-30 pt-64">
      <div data-aos="fade-right" class="pt-16 px-4 lg:px-8 xl:px-16 text-center lg:text-left w-10/12 xl:w-3/4 2xl:w-2/3">
        <div class="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-5">
          {{ content.title }}
        </div>
        <div class="text-white my-5">
          {{ content.description }}
        </div>
        <div class="flex justify-center lg:justify-start">
          <button class="bg-yellow-300 px-4 py-3 rounded-xl font-bold">
            {{ content.button }}
          </button>
        </div>
      </div>
      <div class="mt-48 w-full flex justify-center animate-bounce text-white">
        <outline-chevron-double-down-icon class="h-6 w-6 cursor-pointer select-none"></outline-chevron-double-down-icon>
      </div>
    </div>
    <img :src="require('~/assets/images/' + content.image)" class="h-screen w-full object-cover absolute z-0" alt="" v-if="content.image">
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

