<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <div class="relative bg-white">
      <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
      <div class="relative z-20">
        <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <nuxt-link to="/" class="flex">
            <span class="sr-only">
              {{ content.project_name }}
            </span>
              <img class="h-8 w-auto sm:h-10" :src="require('~/assets/images/logo/' + content.logo)" alt="" v-if="content.logo">
            </nuxt-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" aria-expanded="false">
            <span class="sr-only">
              {{ content.open_menu }}
            </span>
              <svg @click="phone_navbar = true" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <nav class="flex space-x-10">
              <div v-for="link in content.links" :key="link.url + 'desktop'">
                <div>
                  <div class="text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <a v-if="link.external" :href="link.url" target="_blank">
                      <span>{{ link.title }}</span>
                    </a>
                    <nuxt-link v-else :to="link.url">
                      <span>{{ link.title }}</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </nav>
            <div class="flex items-center md:ml-12 gap-8">
              <a href="#">
                <button class="text-base font-medium text-gray-500 hover:text-gray-900">
                  {{ content.login }}
                </button>
              </a>
              <a href="#">
                <button class="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
                  {{ content.register }}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-if="phone_navbar">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" :src="require('~/assets/images/logo/' + content.logo)" alt="" v-if="content.logo">
              </div>
              <div class="-mr-2">
                <button @click="phone_navbar = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span class="sr-only">
                  {{ $t('navbar.close_menu') }}
                </span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <div v-for="link in content.links" :key="link.url + 'desktop'">
                    <a v-if="link.external" :href="link.url" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                        <component :is="link.icon" class="w-6 h-6"></component>
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">{{ $i18n.t(link.title) }}</div>
                    </a>
                    <nuxt-link v-else :to="link.url" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                        <component :is="link.icon" class="w-6 h-6"></component>
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">{{ $i18n.t(link.title) }}</div>
                    </nuxt-link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="mt-6">
              <nuxt-link to="/register" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
                {{ content.register }}
              </nuxt-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                {{ content.already_account }}
                <nuxt-link to="/login" class="text-primary-600 hover:text-primary-500">
                  {{ content.login }}
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutNavbar",
  data() {
    return {
      phone_navbar: false
    }
  },
  props: {
    content: {
      type: Object
    }
  }
}
</script>
