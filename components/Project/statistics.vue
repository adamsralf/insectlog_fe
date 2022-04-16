<template>
  <div class="bg-primary-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          {{ content.title }}
        </h2>
        <p class="mt-3 text-xl text-primary-300 sm:mt-4">
          {{ content.description }}
        </p>
      </div>
      <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div class="flex flex-col mt-10 sm:mt-0" v-for="statistic in content.statistics" :key="statistic.id + 'statistic'">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-primary-300">{{ statistic.title }}</dt>
          <dd class="order-1 text-5xl font-extrabold text-white">{{ statistic.number }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "statistics",
  props: {
    content: {
      type: Object
    }
  }
}
</script>

