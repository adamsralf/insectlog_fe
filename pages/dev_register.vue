<template>
  <div class="min-h-full flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-12 w-auto" src="~/assets/images/logo/erasmus_header_small.png" alt="Workflow">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            {{ $t('register.header.title') }}
          </h2>
          <div class="mt-2 text-sm text-gray-600">
            <div class="font-medium text-primary-600 hover:text-primary-500"> {{ $t('register.header.subtitle') }} </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"> {{ $t('register.form.email') }} </label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700"> {{ $t('register.form.password') }} </label>
                <div class="mt-1">
                  <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                </div>
              </div>

              <div class="text-sm">
                <nuxt-link to="/login" class="font-medium text-primary-600 hover:text-primary-500"> {{ $t('register.form.already_account') }} </nuxt-link>
              </div>

              <div>
                <nuxt-link to="/dashboard" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  {{ $t('register.register') }}
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="~/assets/images/illustrations/register_bg.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  layout: "empty"
}
</script>
