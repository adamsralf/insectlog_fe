<template>
  <div class="col-span-1 bg-white border-r p-6 h-screen">
    <div class="pb-5">
      <div class="font-bold text-primary text-2xl">
        Insectlogger
      </div>
      <div class="text-sm text-gray-800">
        by Erasmus
      </div>
    </div>
    <div class="h-full">
      <div v-for="link in navbar.links" :key="link.id">
        <div :class="[current_url === link.url ? 'text-primary' : '', 'flex gap-4 py-2 cursor-pointer']">
          <component :is="link.icon" class="w-6 h-6"></component>
          <div :class="[current_url === link.url ? 'font-semibold' : '']">
            {{ link.title }}
          </div>
        </div>
      </div>
      <div>
        <img class="transform translate-y-2" src="~/assets/images/illustrations/exploration.png" alt="">
        <div class="flex justify-between bg-green-700 p-3 rounded-lg relative z-10">
          <div class="text-white">
            <div class="text-md font-semibold">
              Starte ein Abenteuer
            </div>
            <div class="text-xs">
              Erstelle eine neue Expedition
            </div>
          </div>
          <div class="bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-white w-max p-2 flex-shrink-0 rounded-xl">
            <outline-arrow-right-icon class="w-6 h-6 text-gray-800"></outline-arrow-right-icon>
          </div>
        </div>
        <div class="flex gap-2 text-red-500 hover:text-red-700 cursor-pointer select-none absolute bottom-0 mb-8">
          <outline-logout-icon class="w-6 h-6"></outline-logout-icon>
          Abmelden
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidenav",
  data() {
    return {
      navbar: {},
      current_url: this.$nuxt.$router.currentRoute.path
    }
  },
  async fetch() {
    let content = await this.$content(this.$i18n.locale, 'dashboard_layout').fetch()
    this.navbar = content.navbar
    console.log(content)
  },
}
</script>
