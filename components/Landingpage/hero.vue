<template>
  <div>
    <div class="w-full absolute z-20 flex flex-col justify-evenly h-screen bg-gray-800 bg-opacity-30">
      <div>
        <div class=" text-5xl md:text-6xl xl:text-7xl font-bold text-white mt-16 mb-5 mx-16 xl:w-2/3 2xl:w-1/2">
          {{ content.title }}
        </div>
        <div class="flex mb-5">
          <div class="w-10/12 lg:w-2/3 2xl:w-1/3 text-white mx-16">
            {{ content.description }}
          </div>
        </div>
        <div class="flex mx-16">
          <button class="bg-yellow-300 px-4 py-3 rounded-xl font-bold">
            {{ content.button }}
          </button>
        </div>
      </div>
      <div class="mt-64 w-full flex justify-center animate-bounce text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
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

