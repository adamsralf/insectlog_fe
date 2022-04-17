<template>
  <div>
    <div class="pb-4">
      <div class="text-primary text-3xl font-bold">
        Statistik
      </div>
      <div class="text-gray-800">
        Hier findest du ein paar Zahlen über das Projekt
      </div>
    </div>
    <div class="grid grid-cols-1 grid-rows-2 gap-y-3">
      <div class="relative bg-white p-3 shadow rounded-lg overflow-hidden border">
        <div>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">Erfasste Insekten</p>
        </div>
        <div class="ml-16 flex items-baseline">
          <p class="text-2xl font-semibold text-gray-900">71,897</p>
        </div>
      </div>
      <div class="relative bg-white p-3 shadow rounded-lg overflow-hidden border">
        <div>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">Insekten Sammler</p>
        </div>
        <div class="ml-16 flex items-baseline">
          <p class="text-2xl font-semibold text-gray-900">420</p>
        </div>
      </div>
      <div class="relative bg-white p-3 shadow rounded-lg overflow-hidden border">
        <div>
          <div class="absolute bg-primary-500 rounded-md p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">Hinterlegte Standorte</p>
        </div>
        <div class="ml-16 flex items-baseline">
          <p class="text-2xl font-semibold text-gray-900">124.566.787</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statistics"
}
</script>

