<template>
  <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden duration-150 transition hover:shadow-lg" v-if="insect">
    <div>
      <img :src="require('~/assets/images/feed/' + insect.image)" class="h-32 w-full object-cover" alt="" v-if="insect.image">
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
        <img :src="require('~/assets/images/profile_pictures/' + insect.user.profile_picture)" class="h-10 w-10 rounded-full object-cover" alt="" v-if="insect.user.profile_picture">
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
</template>

<script>
export default {
  name: "insect_feed_card",
  props: {
    insect: {
      type: Object
    }
  }
}
</script>

