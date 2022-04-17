<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {{ content.title }}
          </h2>
          <p class="text-xl text-gray-500">
            {{ content.description }}
          </p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
          <li v-for="member in content.members" :key="member.id + 'team_members'">
            <div class="space-y-4">
              <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="member.image" alt="">
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ member.firstname }} {{ member.lastname }}</h3>
                  <p class="text-primary">{{ member.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "team",
  props: {
    content: {
      type: Object
    }
  }
}
</script>
