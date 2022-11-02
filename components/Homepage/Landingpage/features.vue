<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div data-aos="zoom-in-down" class="relative">
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ features.header.title }}
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          {{ features.header.description }}
        </p>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div data-aos="zoom-in-right" class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            {{ features.top.title }}
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            {{ features.top.description }}
          </p>

          <dl class="mt-10 space-y-10">
            <div class="relative" v-for="feature in features.top.features" :key="feature.title + 'top_feature'">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <component :is="feature.icon" class="w-6 h-6"></component>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ feature.title }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <img data-aos="zoom-in" class="relative mx-auto" width="490" :src="require('~/assets/images/' + features.top.image)" alt="" v-if="features.top.image">
        </div>
      </div>

      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2" data-aos="zoom-in-left">
            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              {{ features.bottom.title }}
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              {{ features.bottom.description }}
            </p>

            <dl class="mt-10 space-y-10">
              <div class="relative" v-for="feature in features.bottom.features" :key="feature.title + 'top_feature'">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <component :is="feature.icon" class="w-6 h-6"></component>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ feature.title }}
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ feature.description }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
              <defs>
                <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
            </svg>
            <img data-aos="zoom-in" class="relative mx-auto" width="490" :src="require('~/assets/images/' + features.bottom.image)" alt="" v-if="features.bottom.image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "features",
  props: {
    features: {
      type: Object
    }
  }
}
</script>

