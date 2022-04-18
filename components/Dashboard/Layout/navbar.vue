<template>
  <div class="min-h-full">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="~/assets/images/logo/erasmus_header_small.png" alt="Workflow">
              <img class="hidden lg:block h-8 w-auto" src="~/assets/images/logo/erasmus_header_small.png" alt="Workflow">
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <div v-for="link in content.links" :key="link.title + 'dashboard_link_desktop'" :class="[ current_url === link.url ? 'border-primary-500 text-primary-500' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']">
                <a :href="link.url" v-if="link.external" aria-current="page">
                  {{ link.title }}
                </a>
                <nuxt-link :to="link.url" v-else>
                  {{ link.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <span class="sr-only">{{ content.view_notifications }}</span>
              <outline-bell-icon class="h-6 w-6"></outline-bell-icon>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button @click="profile_dropdown = !profile_dropdown" type="button" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">{{ content.open_user_menu }}</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>

              <div v-if="profile_dropdown" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <div v-for="link in content.profile_dropdown" :key="link.title + 'desktop_profile_dropdown'" class="block px-4 py-2 text-sm text-gray-700">
                  <a :href="link.url" v-if="link.external">
                    {{ link.title }}
                  </a>
                  <nuxt-link :to="link.url" v-else>
                    {{ link.title }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button @click="mobile_dropdown = !mobile_dropdown" type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">{{ content.open_user_menu }}</span>
              <outline-menu-icon class="block h-6 w-6"></outline-menu-icon>
              <outline-x-icon class="hidden h-6 w-6"></outline-x-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="sm:hidden" v-if="mobile_dropdown" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <div v-for="link in content.links" :key="link.title + 'dashboard_link_mobile'" :class="[ current_url === link.url ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']">
            <a :href="link.url" v-if="link.external" aria-current="page">
              {{ link.title }}
            </a>
            <nuxt-link :to="link.url" v-else>
              {{ link.title }}
            </nuxt-link>
          </div>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">Tom Cook</div>
              <div class="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button type="button" class="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <span class="sr-only">{{ content.view_notifications }}</span>
              <outline-bell-icon class="h-6 w-6"></outline-bell-icon>
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <div v-for="link in content.profile_dropdown" :key="link.title + 'mobile_profile_dropdown'" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
              <a :href="link.url" v-if="link.external">
                {{ link.title }}
              </a>
              <nuxt-link :to="link.url" v-else>
                {{ link.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      profile_dropdown: false,
      mobile_dropdown: false,
      current_url: this.$nuxt.$route.path
    }
  },
  props: {
    content: {
      type: Object
    }
  }
}
</script>
