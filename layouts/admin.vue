<template>
  <v-app>
    <div class="tw-relative tw-flex tw-w-full">
      <div
        class="tw-fixed tw-top-0 tw-bottom-0 lg:tw-left-0 tw-p-2 tw-w-[250px] tw-overflow-y-auto tw-text-center tw-flex tw-flex-col tw-justify-between tw-bg-[#1A1943]">
        <div>
          <div class="tw-bg-white tw-flex tw-justify-center tw-rounded tw-w-full tw-py-2">
            <img @click="$router.push('/')" class="hover:tw-cursor-pointer tw-h-12 lg:tw-h-16 tw-w-auto"
              src="../assets/img/logo.png" alt="Logo">
          </div>
          <div>
            <div :class="$route.path === '/admin/dashboard' ? 'tw-bg-red-600' : 'tw-bg-transparent hover:tw-bg-red-700'"
              class="tw-p-2.5 tw-mt-3 tw-flex tw-items-center tw-rounded-md tw-px-4 tw-duration-300 tw-cursor-pointer tw-text-white">
              <NuxtLink to="/admin/dashboard">
                <v-icon class="tw-text-white">mdi-view-dashboard</v-icon>
                <span class="tw-text-sm tw-ml-4 tw-text-white tw-font-medium">Dashboard</span>
              </NuxtLink>
            </div>

            <div
              :class="$route.path === '/admin/publications' ? 'tw-bg-red-600' : 'tw-bg-transparent hover:tw-bg-red-700'"
              class="tw-p-2.5 tw-mt-3 tw-flex tw-items-center tw-rounded-md tw-px-4 tw-duration-300 tw-cursor-pointer tw-text-white">
              <NuxtLink to="/admin/publications">
                <v-icon class="tw-text-white">mdi-human-greeting-variant</v-icon>
                <span class="tw-text-sm tw-ml-4 tw-text-white tw-font-medium">Publications</span>
              </NuxtLink>
            </div>


            <div :class="$route.path === '/admin/message' ? 'tw-bg-red-600' : 'tw-bg-transparent hover:tw-bg-red-700'"
              class="tw-p-2.5 tw-mt-3 tw-flex tw-items-center tw-rounded-md tw-px-4 tw-duration-300 tw-cursor-pointer tw-text-white">
              <NuxtLink to="/admin/message">
                <v-icon class="tw-text-white">mdi-message-text-fast</v-icon>
                <span class="tw-text-sm tw-ml-4 tw-text-white tw-font-medium">Messages</span>
              </NuxtLink>
            </div>

            <div :class="$route.path === '/admin/service' ? 'tw-bg-red-600' : 'tw-bg-transparent hover:tw-bg-red-700'"
              class="tw-p-2.5 tw-mt-3 tw-flex tw-items-center tw-rounded-md tw-px-4 tw-duration-300 tw-cursor-pointer tw-text-white">
              <NuxtLink to="/admin/service">
                <v-icon class="tw-text-white">mdi-message-text-fast</v-icon>
                <span class="tw-text-sm tw-ml-4 tw-text-white tw-font-medium">Demandes</span>
              </NuxtLink>
            </div>

            <div :class="$route.path === '/admin/setting' ? 'tw-bg-red-600' : 'tw-bg-transparent hover:tw-bg-red-700'"
              class="tw-p-2.5 tw-mt-3 tw-flex tw-items-center tw-rounded-md tw-px-4 tw-duration-300 tw-cursor-pointer tw-text-white">
              <NuxtLink to="/admin/setting">
                <v-icon class="tw-text-white">mdi-shape-circle-plus</v-icon>
                <span class="tw-text-sm tw-ml-4 tw-text-white tw-font-medium">Paramètre</span>
              </NuxtLink>
            </div>


            <div
              class="tw-p-2.5 tw-mt-3 tw-flex tw-items-center tw-rounded-md tw-px-4 tw-duration-300 tw-cursor-pointer tw-text-white">
              <div @click="logoutUser">
                <v-icon class="tw-text-white" size="20">mdi-logout</v-icon>
                <span class="tw-text-sm tw-ml-4 tw-text-white tw-font-medium">Se Déconnecter</span>
              </div>
            </div>

          </div>
        </div>

        <div class="tw-px-2.5 tw-flex tw-justify-between tw-items-center tw-w-full tw-mb-2">
          <div class="tw-flex tw-justify-center w-items-center  tw-space-x-2">
            <div>
              <img class="tw-rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
            </div>
            <div class="tw-flex tw-flex-col">
              <div class="tw-cursor-pointer tw-text-sm tw-text-white tw-text-left tw-font-semibold">
                {{ user.lastname }} {{ user.firstname }}
              </div>
              <div class="tw-cursor-pointer tw-text-xs tw-text-white tw-text-left tw-font-medium">
                {{ user.email }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-ml-[250px] tw-container tw-px-6 tw-flex tw-flex-col tw-h-screen tw-w-full tw-bg-white">
        <div class="tw-flex tw-items-center tw-justify-between tw-w-full tw-py-2 tw-mx-auto flex-wrap-inherit">
          <nav class="tw-flex tw-items-center tw-gap-2">
            <!-- breadcrumb -->
            <span class="tw-text-sm tw-leading-normal">
              <a class="tw-text-black" href="#">PAGES / </a>
            </span>
            <h6 class="tw-mb-0 tw-text-sm tw-font-bold tw-text-[#1A1943] tw-capitalize"
              v-if="this.$route.path === '/admin/dashboard'">DASHBAORD</h6>
            <h6 class="tw-mb-0 tw-text-sm tw-font-bold tw-text-[#1A1943] tw-capitalize"
              v-if="this.$route.path === '/admin/service'">SERVICES</h6>
            <h6 class="tw-mb-0 tw-text-sm tw-font-bold tw-text-[#1A1943] tw-capitalize"
              v-if="this.$route.path === '/admin/publication'">BLOGS</h6>
            <h6 class="tw-mb-0 tw-text-sm tw-font-bold tw-text-[#1A1943] tw-capitalize"
              v-if="this.$route.path === '/admin/message'">MESSAGES</h6>
          </nav>

          <div class="tw-flex tw-items-center tw-mt-2 grow sm:tw-mt-0 sm:tw-mr-6 md:tw-mr-0 lg:tw-flex lg:basis-auto">
            <div class="tw-flex tw-items-center md:tw-ml-auto md:tw-pr-4">
              <div
                class="tw-relative tw-flex tw-flex-wrap tw-items-stretch tw-w-full tw-transition-all tw-rounded-lg ease">
                <span
                  class="tw-text-sm ease tw-leading-5.6 tw-absolute tw-z-50 tw--ml-px tw-flex tw-h-full tw-items-center tw-whitespace-nowrap tw-rounded-lg tw-rounded-tr-none tw-rounded-br-none tw-border tw-border-r-0 tw-border-transparent tw-bg-transparent tw-py-2 tw-px-2.5 tw-text-center tw-font-normal text-slate-500 tw-transition-all">
                  <v-icon size="20" class="">mdi-magnify</v-icon>
                </span>
                <input type="text"
                  class="tw-pl-9 tw-text-sm focus:shadow-primary-outline ease w-1/100 tw-leading-5.6 tw-relative tw--ml-px tw-block tw-min-w-0 tw-flex-auto tw-rounded-lg tw-border tw-border-solid tw-border-gray-300   tw-bg-white tw-bg-clip-padding tw-py-2 tw-pr-3 tw-text-gray-700 tw-transition-all placeholder:tw-text-gray-500 focus:tw-border-blue-500 focus:tw-outline-none focus:tw-transition-shadow"
                  placeholder="Tapez ici..." />
              </div>
            </div>
            <!-- notifications -->

            <div class="tw-relative tw-flex tw-items-center tw-pr-2">
              <p class="tw-hidden transform-dropdown-show"></p>
              <a href="#" class="tw-block tw-p-0 tw-text-sm tw-text-white tw-transition-all ease-nav-brand"
                aria-expanded="false">
                <i class="tw-cursor-pointer tw-text-black fa fa-bell"></i>
              </a>
            </div>
          </div>
        </div>

        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  // middleware: 'isauthenticated',

}
</script>

<style scoped></style>
