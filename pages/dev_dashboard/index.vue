<template>
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $t('dashboard.title') }}
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <main class="pb-8">
            <div class="mx-auto">
              <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                  <section aria-labelledby="profile-overview-title">
                    <div class="rounded-lg bg-white overflow-hidden border">
                      <div class="bg-white p-6">
                        <div class="sm:flex sm:items-center sm:justify-between">
                          <div class="sm:flex sm:space-x-5">
                            <div class="flex-shrink-0">
                              <img class="mx-auto h-20 w-20 rounded-full" src="https://avatars.githubusercontent.com/u/66381853?v=4" alt="">
                            </div>
                            <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p class="text-sm font-medium text-gray-600">
                                {{ $t('dashboard.header.welcome_back') }}
                              </p>
                              <p class="text-xl font-bold text-primary sm:text-2xl">
                                Nino Gralla
                              </p>
                              <p class="text-sm font-medium text-gray-600">
                                Technische Berufliche Schule 1
                              </p>
                            </div>
                          </div>
                          <div class="mt-5 flex justify-center sm:mt-0">
                            <a href="#" class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                              {{ $t('dashboard.header.show_profile') }}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="border-t border-gray-200 bg-gray-100 bg-opacity-30 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                        <div class="px-6 py-5 text-sm font-medium text-center">
                          <span class="text-gray-900">12</span>
                          <span class="text-gray-600">{{ $t('dashboard.header.localized_insects') }}</span>
                        </div>
                        <div class="px-6 py-5 text-sm font-medium text-center">
                          <span class="text-gray-900">4</span>
                          <span class="text-gray-600">{{ $t('dashboard.header.scanned_insects') }}</span>
                        </div>
                        <div class="px-6 py-5 text-sm font-medium text-center">
                          <span class="text-gray-900">2</span>
                          <span class="text-gray-600">{{ $t('dashboard.header.registered_insects') }}</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <!-- Actions panel -->
                  <section aria-labelledby="quick-links-title">
                    <div class="rounded-lg bg-gray-200 overflow-hidden border divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                      <div v-for="panel in panels" :key="panel.id + 'dashboard_panel'" class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500">
                        <div>
                          <span class="rounded-lg inline-flex p-3 bg-primary-500 bg-opacity-25 text-primary-500 ring-4 ring-white">
                            <component :is="panel.icon" class="h-6 w-6"></component>
                          </span>
                        </div>
                        <div class="mt-8">
                          <h3 class="text-lg font-medium">
                            <a href="#" class="focus:outline-none">
                              <span class="absolute inset-0" aria-hidden="true"></span>
                              {{ panel.title }}
                            </a>
                          </h3>
                          <p class="mt-2 text-sm text-gray-500">
                            {{ panel.description }}
                          </p>
                        </div>
                        <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                          <component :is="panel.type_icon" class="h-6 w-6"></component>
                        </span>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="grid grid-cols-1 gap-4">
                  <!-- Announcements -->
                  <section aria-labelledby="announcements-title">
                    <div class="rounded-lg bg-white overflow-hidden border">
                      <div class="p-6">
                        <h2 class="text-base font-medium text-primary" id="announcements-title">
                          {{ $t('dashboard.announcements.title') }}
                        </h2>
                        <div class="flow-root mt-6">
                          <ul role="list" class="-my-5 divide-y divide-gray-200">
                            <li v-for="announcement in announcements" :key="announcement.id + 'announcement_bar'" class="py-5">
                              <div class="relative focus-within:ring-2 focus-within:ring-primary-500">
                                <h3 class="text-sm font-semibold text-gray-800">
                                  <a href="#" class="hover:underline focus:outline-none">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    {{ announcement.title }}
                                  </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                                  {{ announcement.description }}
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="mt-6">
                          <a href="#" class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            {{ $t('dashboard.announcements.view_all') }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <!-- Recent Insects -->
                  <section aria-labelledby="recent-hires-title">
                    <div class="rounded-lg bg-white overflow-hidden border">
                      <div class="p-6">
                        <h2 class="text-base font-medium text-primary" id="recent-hires-title">
                          {{ $t('dashboard.recent_insects.title') }}
                        </h2>
                        <div class="flow-root mt-6">
                          <ul role="list" class="-my-5 divide-y divide-gray-200">
                            <li v-for="insect in recent_insects" :key="insect.id + 'recent_insects'" class="py-4">
                              <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                  <img class="h-8 w-8 rounded-lg object-cover" :src="insect.image" alt="" v-if="insect.image">
                                </div>
                                <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate">
                                    {{ insect.name }}
                                  </p>
                                  <p class="text-sm text-gray-500 truncate">
                                    {{ insect.specific_name }}
                                  </p>
                                </div>
                                <div>
                                  <a href="#" class="inline-flex items-center px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"> View </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="mt-6">
                          <a href="#" class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            {{ $t('dashboard.recent_insects.view_all') }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: "dashboard",
  data() {
    return {
      announcements: [
        {
          id: 1,
          title: "Eröffnung des Systems",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
        },
        {
          id: 2,
          title: "Neues Datenblatt design",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
        },
        {
          id: 3,
          title: "Neue Kartengrößen verfügbar",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
        }
      ],
      recent_insects: [
        {
          id: 1,
          name: "Biene",
          specific_name: "Anthophila",
          image: "https://image.geo.de/30086288/t/jm/v3/w960/r0/-/biene-gross-jpg--41519-.jpg"
        },
        {
          id: 2,
          name: "Biene",
          specific_name: "Anthophila",
          image: "https://image.geo.de/30086288/t/jm/v3/w960/r0/-/biene-gross-jpg--41519-.jpg"
        },
        {
          id: 3,
          name: "Biene",
          specific_name: "Anthophila",
          image: "https://image.geo.de/30086288/t/jm/v3/w960/r0/-/biene-gross-jpg--41519-.jpg"
        },
        {
          id: 4,
          name: "Biene",
          specific_name: "Anthophila",
          image: "https://image.geo.de/30086288/t/jm/v3/w960/r0/-/biene-gross-jpg--41519-.jpg"
        }
      ],
      panels: [
        {
          id: 1,
          title: "Dashboard",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
          icon: "outline-home-icon",
          type_icon: "outline-link-icon",
          url: "/dashboard"
        },
        {
          id: 2,
          title: "Insekten Register",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
          icon: "outline-database-icon",
          type_icon: "outline-link-icon",
          url: "/dashboard"
        },
        {
          id: 3,
          title: "Statistiken",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
          icon: "outline-chart-bar-icon",
          type_icon: "outline-link-icon",
          url: "/dashboard"
        },
        {
          id: 4,
          title: "Datenblätter",
          description: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
          icon: "outline-collection-icon",
          type_icon: "outline-external-link-icon",
          url: "/dashboard"
        },
      ]
    }
  }
}
</script>
