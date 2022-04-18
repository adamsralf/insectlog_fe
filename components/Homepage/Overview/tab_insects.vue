<template>
  <div class="py-5">
    <div class="grid grid-cols-3 gap-5">
      <div @click="insect.selected = !insect.selected" v-for="insect in content" :key="insect.id + insect.name" class="select-none relative bg-white border border-gray-200 rounded-2xl overflow-hidden duration-150 transition hover:shadow-lg cursor-pointer">
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
</template>

<script>
export default {
  name: "tab_insects",
  props: {
    content: {
      type: Array
    }
  }
}
</script>
