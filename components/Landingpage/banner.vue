<template>
  <div class="relative bg-primary-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="~/assets/images/illustrations/camping_banner.png" alt="">
      <div class="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Entdecke die Insektenkarte</h1>
      <p class="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
      <div class="bg-yellow-300 py-3 px-5 rounded-2xl w-max font-bold shadow mx-auto cursor-pointer hover:bg-yellow-400 mt-8">
        Erkunden
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner"
}
</script>
