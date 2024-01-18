<template>
    <div class="">
      <div class="tw-relative">
        <img src="../assets/img/15.jpg" class="xl:lg:tw-h-[90vh] tw-h-[60vh] tw-object-cover tw-w-full" alt="2 Geants Logo"/>
        <div class="tw-absolute tw-inset-0">
          <div class="tw-border-gray-200 tw-h-full tw-flex tw-flex-col tw-justify-between">
            <div class="tw-bg-gray-900 tw-bg-opacity-60">
              <NavBar></NavBar>
            </div>
            <div class="tw-container tw-px-4 tw-mx-auto tw-flex tw-flex-col tw-mb-20 tw-gap-2" data-aos="fade-left" data-aos-duration="2000">
              <h1 class="tw-text-3xl tw-uppercase tw-text-white tw-font-bold tw-animate-bounce tw-duration-700">Nos Services</h1>
              <span class="tw-h-2 tw-w-14 tw-bg-red-600"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- services -->
      <section id="info-service" class="tw-bg-white tw-mt-2">
        <div v-for="(data, index) in displayedData" :key="index" class="tw-container tw-px-4 tw-py-5 tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-8 tw-mt-8 xl:tw-mt-12 xl:tw-gap-16 md:tw-grid-cols-2 xl:tw-grid-cols-2" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">

          <img v-if="index%2 == 1" :src="require(`@/assets/img/${data.img}`)" alt="" class="tw-h-auto tw-w-[100%] tw-object-cover tw-scale-100">
          
          <div class="tw-flex tw-flex-col tw-gap-6">
            <div
              class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3">
              <div class="tw-mb-2">
                <span for="price" class="tw-block tw-text-xl tw-font-medium tw-leading-6 tw-text-gray-900">0{{ data.id }}</span>
                <div class="tw-h-2.5 tw-w-8 tw-bg-red-600"></div>
                <h3 class="tw-text-3xl tw-font-bold tw-mt-2 tw-whitespace-nowrap"> {{ data.title }} </h3>
              </div>
            </div>
            <p class="tw-text-justify">
              {{ data.description }}
            </p>
            <v-expand-transition>
              <div v-show="data.show">
                <p class="tw-text-justify">{{ data.description2 }}</p>
              </div>
            </v-expand-transition>
            <button
              @click="data.show = !data.show"
              class="tw-w-[fit-content] tw-text-gray-900 tw-bg-white  tw-underline tw-underline-offset-4  focus:tw-outline-none  tw-font-medium tw-text-md"
            >En savoir plus...</button>
            
            <!-- <button type="button" class="tw-w-[fit-content] tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-text-md">En savoiR plus...</button> -->
          </div>

          <img v-if="index%2 == 0" :src="require(`@/assets/img/${data.img}`)" alt="" class="tw-h-auto tw-w-[100%] tw-object-cover">
        </div>
        <v-pagination
          v-model="page"
          :length="pages"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </section>
      <!-- services -->
     
      <!-- services card-->
      <section class="tw-my-20" data-aos="flip-up" data-aos-duration="2000">
        <div class="tw-container lg:xl:tw-px-4 tw-py-10 tw-mx-auto">
          <div class="tw-flex tw-flex-col tw-w-full tw-justify-center">
            <h1
              class="tw-text-2xl tw-font-semibold tw-text-center tw-text-gray-800 tw-uppercase lg:tw-text-3xl">
              REDEFINISSEZ VOS BESOINS EN <br> MATIERE DE SECURITE
            </h1>
            <div class="tw-container tw-px-6 tw-py-5 tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-8 tw-mt-8 xl:tw-mt-12 xl:tw-gap-16 md:tw-grid-cols-2 xl:tw-grid-cols-3">

              <div
                class="hover:tw-cursor-pointer tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded tw-shadow hover:tw-bg-[#1A1943]"
                :class="{ 'tw-bg-dark-blue': cardIsHover }"
                @mouseenter="cardIsHover = true"
                @mouseleave="cardIsHover = false"
              >
                <span>
                  <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900"></h5>
                  <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49996 8.66659C8.49996 4.06242 12.2291 0.333252 16.8333 0.333252C21.4375 0.333252 25.1666 4.06242 25.1666 8.66659C25.1666 13.2708 21.4375 16.9999 16.8333 16.9999C12.2291 16.9999 8.49996 13.2708 8.49996 8.66659ZM21 29.9166C21 27.9166 22.0416 26.0416 23.5 24.7916V24.2916C23.5 23.4791 23.6458 22.7083 23.875 21.9583C21.7291 21.4583 19.3541 21.1666 16.8333 21.1666C7.62496 21.1666 0.166626 24.8958 0.166626 29.4999V33.6666H21V29.9166ZM41.8333 30.1249V37.4166C41.8333 38.6666 40.5833 39.9166 39.125 39.9166H27.6666C26.4166 39.9166 25.1666 38.6666 25.1666 37.2083V29.9166C25.1666 28.6666 26.4166 27.4166 27.6666 27.4166V24.2916C27.6666 21.3749 30.5833 19.0833 33.5 19.0833C36.4166 19.0833 39.3333 21.3749 39.3333 24.2916V27.4166C40.5833 27.4166 41.8333 28.6666 41.8333 30.1249ZM36.625 24.2916C36.625 22.6249 35.1666 21.5833 33.5 21.5833C31.8333 21.5833 30.375 22.6249 30.375 24.2916V27.4166H36.625V24.2916Z" fill="#FF1629"/>
                  </svg>
                </span>
                <p class="tw-font-bold tw-text-2xl tw-mb-0" :class="{ 'tw-text-white': cardIsHover }">SURVEILLANCE HUMAINE</p>
                <NuxtLink to="/contact" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300" :class="{ 'tw-text-white': cardIsHover }">
                  Nous contacter
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
              </div>

              <div class="hover:tw-cursor-pointer  tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6 tw-bg-[#1A1943] tw-text-white tw-border tw-border-gray-200 tw-rounded tw-shadow">
                <span>
                  <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-white"></h5>
                  <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333374 23.1667C0.333374 19.5208 1.20143 16.2743 2.93754 13.4271C4.67365 10.5799 6.58337 8.18403 8.66671 6.23958C10.75 4.29514 12.6598 2.81042 14.3959 1.78542L17 0.25V7.125C17 8.40972 17.4341 9.425 18.3021 10.1708C19.1702 10.9167 20.1424 11.2903 21.2188 11.2917C21.8091 11.2917 22.3737 11.1701 22.9125 10.9271C23.4514 10.684 23.9459 10.2847 24.3959 9.72917L25.3334 8.58333C27.8334 10.0417 29.8473 12.0639 31.375 14.65C32.9028 17.2361 33.6667 20.075 33.6667 23.1667C33.6667 26.2222 32.9202 29.009 31.4271 31.5271C29.9341 34.0451 27.9723 36.0319 25.5417 37.4875C26.132 36.6542 26.5924 35.7424 26.923 34.7521C27.2535 33.7618 27.4181 32.7125 27.4167 31.6042C27.4167 30.2153 27.1563 28.9042 26.6355 27.6708C26.1146 26.4375 25.3681 25.3354 24.3959 24.3646L17 17.125L9.65629 24.3646C8.64935 25.3715 7.88546 26.4826 7.36462 27.6979C6.84379 28.9132 6.58337 30.2153 6.58337 31.6042C6.58337 32.7153 6.74865 33.766 7.07921 34.7562C7.40976 35.7465 7.86949 36.6576 8.45837 37.4896C6.02782 36.0312 4.06601 34.0431 2.57296 31.525C1.0799 29.0069 0.333374 26.2208 0.333374 23.1667ZM17 22.9583L21.4271 27.2812C22.0174 27.8715 22.4688 28.5312 22.7813 29.2604C23.0938 29.9896 23.25 30.7708 23.25 31.6042C23.25 33.3056 22.6424 34.7549 21.4271 35.9521C20.2118 37.1493 18.7362 37.7486 17 37.75C15.2639 37.75 13.7882 37.1507 12.573 35.9521C11.3577 34.7535 10.75 33.3042 10.75 31.6042C10.75 30.8056 10.9063 30.0326 11.2188 29.2854C11.5313 28.5382 11.9827 27.8701 12.573 27.2812L17 22.9583Z" fill="white"/>
                  </svg>
                </span>
                <p class="tw-font-bold tw-text-2xl tw-mb-0">SECURITE INCENDIE</p>
                <NuxtLink to="/contact" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-text-white">
                  Nous contacter
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
              </div>

              <div
                class="hover:tw-cursor-pointer tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded tw-shadow hover:tw-bg-[#1A1943]"
                :class="{ 'tw-bg-dark-blue': cardIsHover1 }"
                @mouseenter="cardIsHover1 = true"
                @mouseleave="cardIsHover1 = false"
              >
                <span>
                  <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900"></h5>
                  <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3086 0.283203C24.8985 0.0976563 24.459 0 24 0C23.5411 0 23.1016 0.0976563 22.6915 0.283203L4.30278 8.08594C2.15434 8.99414 0.552779 11.1133 0.562544 13.6719C0.611373 23.3594 4.59575 41.084 21.4219 49.1406C23.0528 49.9219 24.9473 49.9219 26.5782 49.1406C43.4043 41.084 47.3887 23.3594 47.4375 13.6719C47.4473 11.1133 45.8458 8.99414 43.6973 8.08594L25.3086 0.283203ZM14.7129 27.9492C15.1817 28.0664 15.6797 28.125 16.1875 28.125C19.6348 28.125 22.4375 25.3223 22.4375 21.875V15.625H26.754C27.9356 15.625 29.0196 16.2891 29.5469 17.3535L30.25 18.75H36.5C37.3594 18.75 38.0625 19.4531 38.0625 20.3125V23.4375C38.0625 27.7539 34.5665 31.25 30.25 31.25H25.5625V36.2012C25.5625 36.9141 24.9864 37.5 24.2637 37.5C24.0879 37.5 23.9122 37.4609 23.7559 37.3926L14.1172 33.2617C13.4727 32.9883 13.0625 32.3535 13.0625 31.6602C13.0625 31.3867 13.1211 31.123 13.2481 30.8789L14.7129 27.9492ZM14.625 15.625H19.3125V21.875C19.3125 23.6035 17.9161 25 16.1875 25C14.459 25 13.0625 23.6035 13.0625 21.875V17.1875C13.0625 16.3281 13.7657 15.625 14.625 15.625ZM27.125 20.3125C27.125 19.8981 26.9604 19.5007 26.6674 19.2076C26.3744 18.9146 25.9769 18.75 25.5625 18.75C25.1481 18.75 24.7507 18.9146 24.4577 19.2076C24.1647 19.5007 24 19.8981 24 20.3125C24 20.7269 24.1647 21.1243 24.4577 21.4174C24.7507 21.7104 25.1481 21.875 25.5625 21.875C25.9769 21.875 26.3744 21.7104 26.6674 21.4174C26.9604 21.1243 27.125 20.7269 27.125 20.3125Z" fill="#FF1629"/>
                  </svg>
                </span>
                <p class="tw-font-bold tw-text-2xl tw-mb-0" :class="{ 'tw-text-white': cardIsHover1 }">SECURITE CYNOPHYLE </p>
                <NuxtLink to="/contact" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300" :class="{ 'tw-text-white': cardIsHover1 }">
                  Nous contacter
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
              </div>

              <div
                class="hover:tw-cursor-pointer tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded tw-shadow hover:tw-bg-[#1A1943]"
                :class="{ 'tw-bg-dark-blue': cardIsHover1 }"
                @mouseenter="cardIsHover2 = true"
                @mouseleave="cardIsHover2 = false"
              >
                <span>
                  <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900"></h5>
                  <svg width="38" height="46" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0.083252L0.25 8.41659V20.9166C0.25 32.4791 8.25 43.2916 19 45.9166C29.75 43.2916 37.75 32.4791 37.75 20.9166V8.41659L19 0.083252ZM19 8.41659C20.6576 8.41659 22.2473 9.07507 23.4194 10.2472C24.5915 11.4193 25.25 13.009 25.25 14.6666C25.25 16.3242 24.5915 17.9139 23.4194 19.086C22.2473 20.2581 20.6576 20.9166 19 20.9166C17.3424 20.9166 15.7527 20.2581 14.5806 19.086C13.4085 17.9139 12.75 16.3242 12.75 14.6666C12.75 13.009 13.4085 11.4193 14.5806 10.2472C15.7527 9.07507 17.3424 8.41659 19 8.41659ZM29.6875 33.4166C27.1633 37.2805 23.3913 40.1628 19 41.5833C14.6087 40.1628 10.8367 37.2805 8.3125 33.4166C7.60417 32.3749 7 31.3333 6.5 30.2291C6.5 26.7916 12.1458 23.9791 19 23.9791C25.8542 23.9791 31.5 26.7291 31.5 30.2291C31 31.3333 30.3958 32.3749 29.6875 33.4166Z" fill="#FF1629"/>
                  </svg>
                </span>
                <p class="tw-font-bold tw-text-2xl tw-mb-0" :class="{ 'tw-text-white': cardIsHover2 }">SECURITE MOBILE</p>
                <NuxtLink to="/contact" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300" :class="{ 'tw-text-white': cardIsHover2 }">
                  Nous contacter
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
              </div>

              <div class="hover:tw-cursor-pointer tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6  tw-border tw-border-gray-200 tw-rounded tw-shadow tw-bg-[#1A1943] tw-text-white">
                <span>
                  <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-white"></h5>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_113_827" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
                      <path d="M13.6667 27.2084H30.3333V42.8334H13.6667V27.2084ZM9.5 1.16675H34.5V7.41675H9.5V1.16675Z" fill="white" stroke="white" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.6666 7.41675V27.2084M30.3333 7.41675V27.2084" stroke="white" stroke-width="1.83333" stroke-linecap="round"/>
                      <path d="M1.16663 42.8335H42.8333" stroke="white" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
                    </mask>
                    <g mask="url(#mask0_113_827)">
                      <path d="M-3 -3H47V47H-3V-3Z" fill="white"/>
                    </g>
                  </svg>
                </span>
                <p class="tw-font-bold tw-text-2xl tw-mb-0">SECURITE EVENEMENTIELLE</p>
                <NuxtLink to="/contact" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center  tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-text-white">
                  Nous contacter
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
              </div>

              <div
                class="hover:tw-cursor-pointer tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded tw-shadow hover:tw-bg-[#1A1943]"
                :class="{ 'tw-bg-dark-blue': cardIsHover3 }"
                @mouseenter="cardIsHover3 = true"
                @mouseleave="cardIsHover3 = false"
              >
                <span>
                  <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900"></h5>
                  <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2197 31.25C21.9919 31.7383 21.821 32.2428 21.707 32.7637C21.5931 33.2845 21.4873 33.8216 21.3896 34.375H6.375V31.25H22.2197ZM6.375 40.625V37.5H21.3408C21.4222 38.0371 21.5361 38.5661 21.6826 39.0869C21.8291 39.6077 22.0163 40.1204 22.2441 40.625H6.375ZM3.25 46.875H36.1846L39.2852 50H0.125V0H27.3467L40.75 13.4033V27.2705C40.278 26.8473 39.7816 26.4648 39.2607 26.123C38.7399 25.7812 38.1947 25.4801 37.625 25.2197V15.625H25.125V3.125H3.25V46.875ZM28.25 5.34668V12.5H35.4033L28.25 5.34668ZM28.8359 25C27.0618 25.6673 25.54 26.709 24.2705 28.125H6.375V25H28.8359ZM6.375 12.5H22V15.625H6.375V12.5ZM34.5 18.75V21.875H6.375V18.75H34.5ZM47 48.4375C47 48.8607 46.8454 49.2269 46.5361 49.5361C46.2269 49.8454 45.8607 50 45.4375 50C45.0143 50 44.6481 49.8454 44.3389 49.5361L37.2344 42.4561C36.5996 42.8792 35.916 43.1966 35.1836 43.4082C34.4512 43.6198 33.7025 43.7337 32.9375 43.75C31.8633 43.75 30.8542 43.5465 29.9102 43.1396C28.9661 42.7327 28.1361 42.1794 27.4199 41.4795C26.7038 40.7796 26.1423 39.9495 25.7354 38.9893C25.3285 38.029 25.125 37.0117 25.125 35.9375C25.125 34.8633 25.3285 33.8542 25.7354 32.9102C26.1423 31.9661 26.6956 31.1442 27.3955 30.4443C28.0954 29.7445 28.9255 29.1829 29.8857 28.7598C30.846 28.3366 31.8633 28.125 32.9375 28.125C34.0117 28.125 35.0208 28.3285 35.9648 28.7354C36.9089 29.1423 37.7308 29.7038 38.4307 30.4199C39.1305 31.1361 39.6921 31.9661 40.1152 32.9102C40.5384 33.8542 40.75 34.8633 40.75 35.9375C40.75 36.7025 40.6442 37.4512 40.4326 38.1836C40.221 38.916 39.8955 39.5996 39.4561 40.2344L46.5361 47.3389C46.8454 47.6481 47 48.0143 47 48.4375ZM28.25 35.9375C28.25 36.5885 28.3721 37.1989 28.6162 37.7686C28.8604 38.3382 29.194 38.8346 29.6172 39.2578C30.0404 39.681 30.5368 40.0146 31.1064 40.2588C31.6761 40.5029 32.2865 40.625 32.9375 40.625C33.5885 40.625 34.1989 40.5029 34.7686 40.2588C35.3382 40.0146 35.8346 39.681 36.2578 39.2578C36.681 38.8346 37.0146 38.3382 37.2588 37.7686C37.5029 37.1989 37.625 36.5885 37.625 35.9375C37.625 35.2865 37.5029 34.6761 37.2588 34.1064C37.0146 33.5368 36.681 33.0404 36.2578 32.6172C35.8346 32.194 35.3382 31.8604 34.7686 31.6162C34.1989 31.3721 33.5885 31.25 32.9375 31.25C32.2865 31.25 31.6761 31.3721 31.1064 31.6162C30.5368 31.8604 30.0404 32.194 29.6172 32.6172C29.194 33.0404 28.8604 33.5368 28.6162 34.1064C28.3721 34.6761 28.25 35.2865 28.25 35.9375Z" fill="#FF1629"/>
                  </svg>
                </span>
                <p class="tw-font-bold tw-text-2xl tw-mb-0" :class="{ 'tw-text-white': cardIsHover3 }">AUDIT & CONSEIL</p>
                <NuxtLink to="/contact" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-text-gray-900 tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300" :class="{ 'tw-text-white': cardIsHover3 }">
                  Nous contacter
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
              </div>

            </div>
          </div>
        </div>
      </section>
      <!-- services card-->

      <div class="tw-antialiased tw-max-w-6xl tw-mx-auto tw-my-12 tw-px-8">
        <div class="tw-relative tw-block md:tw-flex tw-items-center">
          <div class="tw-w-full md:tw-w-1/2 tw-abolute z-1 tw-overflow-hidden">
            <div class="tw-block sm:tw-flex md:tw-block lg:tw-flex tw-items-center tw-justify-center">
              <div class="tw-mt-8 sm:tw-m-8 md:tw-m-0 md:tw-mt-8 lg:tw-m-8 tw-text-center">
                <!-- <img src="../assets/img/Rectangle 152.png" xl:tw-w-full tw-object-cover alt=""> -->
                <template>
                  <v-carousel :show-arrows=false hide-delimiters  cycle>
                    <v-carousel-item v-for="(item, i) in items" :key="i">
                      <img 
                      class="tw-h-[80vh] xl:tw-w-full tw-object-cover"
                      :src="require(`@/assets/img/${item.src}`)" alt="">
                    </v-carousel-item>
                  </v-carousel>
                </template>
              </div>
            </div>
          </div>
          <div class="tw-w-full md:tw-w-1/2 tw-relative tw-z-0 tw-px-8 md:tw-px-0 md:tw-py-16">
            <div class="tw-text-white tw-rounded-b md:tw-rounded-b-none md:tw-rounded-r  tw-overflow-hidden">
              <div class="hover:tw-cursor-pointer tw-flex tw-flex-col tw-gap-4 tw-max-w-sm tw-p-6 tw-bg-[#D7E1FF] tw-border tw-border-gray-200 tw-rounded tw-shadow">
                <span>
                   <h5 class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900"></h5>
                   <div class="tw-h-2.5 tw-w-8 tw-bg-red-600"></div>
                </span>
                <h4 class="tw-font-bold tw-text-2xl tw-text-gray-900 tw-mb-0">OPTER POUR UNE SECURITE EFFICACE ET PROFESSIONEL</h4>
                <p class="tw-text-gray-900">Avec notre équipe de professionnels qualifiés, vous pouvez être assuré(e) que vos biens et vos proches sont en de bonnes mains. Nous nous engageons à vous fournir un service de qualité supérieure et une solution sur mesure pour répondre à vos besoins spécifiques en matière de sécurité. N'attendez plus pour protéger ce qui vous tient à cœur, optez pour notre sécurité professionnelle.</p>
                <!-- <a href="#" class="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-center tw-text-gray-900  tw-rounded-lg focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300">
                  Découvrir
                  <svg aria-hidden="true" class="tw-w-4 tw-h-4 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="info" class="tw-my-20">
        <div class="tw-container tw-px-6 tw-py-10 tw-mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
          <div class="tw-flex tw-flex-col tw-w-full tw-justify-center">
            <h1
              class="tw-text-2xl tw-font-semibold tw-text-center tw-text-gray-800 lg:tw-text-3xl">
              Vous êtes intéressé(e) par un <br>
              ou plusieurs de nos services?
            </h1>
            <p class="tw-text-center tw-mt-1">Merci de compléter le formulaire ci-dessous. <br>
 Nous vous recontacterons dans les meilleurs délais.</p>
          </div>

          <v-form ref="messageServiceRef" class="">
            <div class="tw-max-w-[72rem] tw-bg-white tw-px-5 tw-m-auto tw-w-full tw-mt-10">
              <div class="tw-grid tw-grid-cols-2 tw-gap-4  tw-m-auto">
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.firstname" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-text-base tw-w-full" placeholder="Nom"/>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.lastname" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-text-base tw-w-full" placeholder="Prenom"/>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.societe" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-w-full tw-text-base" placeholder="Societe"/>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <select v-model="form.service" id="large" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-block tw-w-full tw-px-4 tw-py-3 tw-text-base tw-text-gray-900 tw-border  tw-bg-gray-50">
                    <option selected value="Choisir un service">Choisir un service</option>
                    <option value="SURVEILLANCE HUMAINE">SURVEILLANCE HUMAINE</option>
                    <option value="SECURITE INCENDIE">SECURITE INCENDIE</option>
                    <option value="SECURITE CYNOPHYLE">SECURITE CYNOPHYLE</option>
                    <option value="SECURITE MOBILE">SECURITE MOBILE</option>
                    <option value="AUDIT & CONSEIL">AUDIT & CONSEIL</option>
                    <option value="SECURITE EVENEMENTIEL">SECURITE EVENEMENTIEL</option>
                  </select>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.email" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-text-base tw-w-full" placeholder="Email"/>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.adresse" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-text-base tw-w-full" placeholder="Adresse"/>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.telephone" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-text-base tw-w-full" placeholder="Telephone"/>
                </div>
  
                <div class="tw-col-span-2 lg:tw-col-span-1">
                  <input v-model="form.ville" type="text" class="tw-border-solid tw-border-gray-400 tw-rounded-lg tw-p-3 tw-text-base tw-w-full" placeholder="Ville"/>
                </div>
                <div class="tw-col-span-2">
                  <textarea v-model="form.message" cols="30" rows="8" class="tw-border-solid tw-border-gray-400 tw-p-3 tw-text-base tw-w-full" placeholder="Envoyez votre demande"></textarea>
                </div>
  
                <!-- <div class="tw-flex tw-items-center tw-col-span-2">
                  <input id="link-checkbox" type="checkbox" value="" class="tw-w-4 tw-h-4 tw-text-blue-600 tw-border-solid tw-border-2 tw-border-black tw-rounded">
                  <label for="link-checkbox" class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">J'accepte que 2GEANTS SECURITE enregistre mes données afin de pouvoir me recontacter 
  en accord avec notre politique de confidentialité.</label>
                </div> -->
                <div class="tw-col-span-2 tw-text-left">
                  <v-btn :loading="sendMessageBtn" @click="storeServiceMessage()" class="tw-py-3 tw-px-8 tw-bg-[#1A1943] tw-text-white tw-font-bold tw-w-full sm:tw-w-[16rem] hover:tw-rounded-lg tw-animate-pulse">
                    Envoyez votre demande
                  </v-btn>
                </div>
              
              </div>
            </div>
          </v-form>
          </div>
      </section>
    </div>
  </template>

<script>
  export default {
    layout: 'master',
    data() {
      return {
        cardIsHover: false,
        cardIsHover1: false,
        cardIsHover2: false,
        cardIsHover3: false,
        items: [
          {
            src: 'serviceSlider1.png',
          },
          {
            src: 'serviceSlider1.png',
          },
          {
            src: 'serviceSlider1.png',
          },
          
        ],
        datas:[
          {
            id:1,
            title:"SURVEILLANCE HUMAINE",
            description:"La mise en place d'un Service de Sécurité Incendie et d'Assistance à Personnes (SSIAP) est impérative dans certains endroits tels que les établissements recevant du public (ERP) ou les immeubles de grande hauteur (IGH). En effet, bien que les équipements de sécurité incendie tels que les alarmes, les systèmes de désenfumage, les éclairages de secours et les portes coupe-feu soient indispensables pour prévenir les risques d'incendie, ils ne suffisent pas à eux seuls",
            description2:"C'est pourquoi, il est crucial de compléter ces équipements de sécurité avec une surveillance humaine professionnelle et efficace. Un SSIAP qualifié garantit une présence humaine capable d'intervenir rapidement et de manière adaptée en cas d'incident. Cette surveillance permet également de prévenir les risques d'incendie en détectant les situations potentiellement dangereuses.Les professionnels en charge du SSIAP sont formés à la prévention, la protection, l'évacuation et l'assistance à personne. Ils disposent également des compétences nécessaires pour mener des opérations de secours en coordination avec les services de secours extérieurs, tels que les pompiers.En somme, la mise en place d'un SSIAP est un impératif dans les lieux où la sécurité incendie est primordiale. Les équipements de sécurité incendie sont importants, mais ils ne peuvent se substituer à une surveillance humaine qualifiée et professionnelle. Ainsi, il est crucial de confier la sécurité des personnes et des biens à un SSIAP compétent pour garantir une sécurité optimale.",
            img:"service2.png",
            show: false,
          },
          {
            id:2,
            title:"SECURITE INCCENDIE",
            description:"La mise en place d'un Service de Sécurité Incendie et d'Assistance à Personnes (SSIAP) est impérative dans certains endroits tels que les établissements recevant du public (ERP) ou les immeubles de grande hauteur (IGH). En effet, bien que les équipements de sécurité incendie tels que les alarmes, les systèmes de désenfumage, les éclairages de secours et les portes coupe-feu soient indispensables pour prévenir les risques d'incendie, ils ne suffisent pas à eux seuls",
            description2:"C'est pourquoi, il est crucial de compléter ces équipements de sécurité avec une surveillance humaine professionnelle et efficace. Un SSIAP qualifié garantit une présence humaine capable d'intervenir rapidement et de manière adaptée en cas d'incident. Cette surveillance permet également de prévenir les risques d'incendie en détectant les situations potentiellement dangereuses.Les professionnels en charge du SSIAP sont formés à la prévention, la protection, l'évacuation et l'assistance à personne. Ils disposent également des compétences nécessaires pour mener des opérations de secours en coordination avec les services de secours extérieurs, tels que les pompiers.En somme, la mise en place d'un SSIAP est un impératif dans les lieux où la sécurité incendie est primordiale. Les équipements de sécurité incendie sont importants, mais ils ne peuvent se substituer à une surveillance humaine qualifiée et professionnelle. Ainsi, il est crucial de confier la sécurité des personnes et des biens à un SSIAP compétent pour garantir une sécurité optimale.",
            img:"service3.png",
            show: false,
          },
          {
            id:3,
            title:"SECURITE CYNOPHYLE",
            description:"Si vous cherchez à garantir la sécurité de votre événement, de votre chantier ou de l'accès à votre entreprise, notre entreprise spécialisée dans la sécurité propose une solution efficace : nos agents cynophiles sont prêts à intervenir partout en France. Dans certains cas, la présence d'un simple agent de sécurité n'est pas suffisante pour garantir la sécurité de votre événement ou de votre entreprise. C'est pourquoi nous avons mis en place une équipe cynophile professionnelle capable d'assurer une présence dissuasive efficace",
            description2:"Nos agents cynophiles sont formés à travailler en tandem avec leur chien pour détecter rapidement toute modification de l'environnement, y compris en présence de personnes hostiles. Les chiens peuvent également être utilisés pour intervenir rapidement sous le contrôle de leur maître afin de protéger les biens et les personnes. Nous sélectionnons avec soin nos agents cynophiles en fonction de leur expérience et de leur formation. Chacun de nos agents est habilité à travailler dans des environnements sensibles, tels que les événements publics, les parkings, les chantiers, ou les sites industriels. De plus, nous disposons d'une assurance responsabilité civile professionnelle pour couvrir tous les risques liés à nos interventions. Si vous cherchez à renforcer la sécurité de votre entreprise ou de votre événement, notre équipe d'agents cynophiles est prête à vous fournir un service de qualité, adapté à vos besoins spécifiques. N'hésitez pas à nous contacter pour plus d'informations",
            img:"service4.png",
            show: false,
          },
          {
            id:4,
            title:"SECURITE MOBILE",
            description:"Notre entreprise adapte son approche de sécurité en fonction du niveau de risque spécifique à chaque entreprise. Nous proposons une gamme de services de surveillance, tels que la surveillance intérieure et extérieure, planifiée ou aléatoire, effectuée par nos agents de sécurité mobiles. Ces derniers réalisent des vérifications régulières sur les zones sensibles de votre entreprise en suivant des itinéraires prédéterminés.",
            description2:"Nos agents de sécurité sont chargés d'effectuer des rondes de surveillance afin de prévenir les actes de malveillance et les risques tels que les incendies ou les intrusions. Ils ont également été formés pour intervenir en cas d'alerte, détecter l'origine de l'alarme, et prévenir les personnes ou les services compétents pour résoudre le problème. Ils ont l'autorisation de prendre des mesures de sauvegarde adaptées pour assurer la continuité de la protection du site conformément aux consignes prédéterminées et/ou aux instructions du centre de télésurveillance. Les agents rendent compte de leur mission à leur hiérarchie ainsi qu'au client par le biais d'une fiche de visite et, le cas échéant, aux services publics concernés. En outre, nous proposons également des services de ronde d’ouverture et de fermeture. Nos agents de sécurité effectuent des rondes de fermeture pour s'assurer que le bâtiment est bien sécurisé et qu'aucune personne n'est présente sur le site. Ils vérifient également l'extinction des lumières et l'arrêt des machines conformément aux exigences du client. Une fois que toutes ces vérifications sont effectuées, l'agent est autorisé à activer le système d'alarme. Pour l'ouverture des bâtiments, nos agents interviennent sur le site avant l'arrivée du personnel. Ils s'assurent que le site est sécurisé en désactivant le système d'alarme et en déverrouillant les accès pour permettre l'entrée des employés et des visiteurs. Nos agents de sécurité sont formés pour gérer tout incident de sécurité, qu'il s'agisse d'une intrusion, d'un incendie ou d'une défaillance technique. En cas d'urgence, ils disposent de systèmes de communication tels que des radios pour alerter les personnes compétentes. En somme, nos agents de sécurité professionnels sont dévoués à garantir la sécurité de nos clients et de leurs biens en effectuant des rondes régulières, en surveillant les accès et en gérant efficacement tout incident de sécurité qui pourrait se produire. Ils accomplissent différentes tâches de sécurité, notamment l'extinction des lumières, l'arrêt des machines, la vérification de la présence de toute personne sur le site, la surveillance des processus en cours, et la rédaction de rapports de visite détaillés",
            img:"s3.jpg",
            show: false,
          },
          {
            id:5,
            title:"SECURITE EVENEMENTIEL",
            description:"2GEANTS Sécurité est une société de sécurité qui propose une large gamme de services de sécurité événementielle pour assurer la protection des personnes et des biens lors de divers événements publics tels que des concerts, des festivals, des expositions, des conférences ou encore des événements sportifs.",
            description2:`Les Missions: La sécurité des biens et des personnes : les agents de sécurité événementielle sont chargés de protéger les personnes et les biens pendant l'événement en mettant en place un dispositif de sécurité adéquat pour limiter les risques.La prévention des accidents et des mouvements de foule : les agents de sécurité événementielle de 2GEANTS Sécurité sont formés pour prévenir les accidents et les mouvements de foule qui peuvent se produire lors d'un événement. L'orientation et l'accueil du public : les agents de sécurité événementielle sont chargés d'accueillir et d'orienter les visiteurs selon les procédures de sécurité en vigueur. Ils sont également formés pour gérer les clients difficiles et les situations de conflit. Le contrôle des accès : les agents de sécurité événementielle de 2GEANTS Sécurité sont responsables de la vérification des tickets d'entrée, des invitations et de la palpation de sécurité pour s'assurer que les participants sont bien autorisés à assister à l'événement. Ils sont également chargés de maintenir l'ordre dans les files d'attente et de prévenir les bousculades
            La gestion du parking : les agents de sécurité événementielle de 2GEANTS Sécurité s'occupent de la surveillance du mouvement des véhicules et des flux entrants et sortants. Certains agents cynophiles sont également formés pour détecter la présence d'armes à feu ou d'explosifs sur les véhicules.
            La vérification des points sensibles de la zone à surveiller : les agents de sécurité événementielle effectuent des rondes de sécurité pour vérifier les installations techniques et les alarmes, ainsi que pour prévenir l'intrusion de personnes non autorisées.
            Les services de sécurité événementielle de 2GEANTS Sécurité sont conçus pour garantir la sécurité des événements et limiter les risques. Les agents de sécurité événementielle sont des professionnels qualifiés et formés pour répondre aux exigences de chaque événement et pour assurer la sécurité des visiteurs.`,
            img:"s2.jpg",
            show: false,
          },
          {
            id:6,
            title:"AUDIT & CONSEIL",
            description:"2GEANTS Sécurité offre des prestations sur mesure qui sont adaptées aux besoins spécifiques de votre entreprise. Nous disposons d'une équipe d'experts qui évalue le niveau de sécurité de votre société et la qualité de vos prestations, indépendamment de votre secteur d'activité et de vos besoins.",
            description2:`Nous proposons un diagnostic complet de sécurité et de sûreté afin d'évaluer de manière optimale les besoins de votre activité. Ce diagnostic inclut l'évaluation de la sécurité incendie, de la sécurité au travail, de la vulnérabilité de votre entreprise et de la sûreté. Pour bénéficier de cette évaluation, nous vous invitons à répondre à quelques questions sur notre site. Notre équipe d'experts évalue les résultats du diagnostic de vulnérabilité et de sûreté et peut vous conseiller sur la meilleure prestation de surveillance pour vos locaux, vos biens et votre personnel, partout en France. Nous sommes engagés à fournir des prestations de qualité qui répondent à vos exigences.En choisissant 2GEANTS Sécurité, vous pouvez être assuré que votre entreprise sera sécurisée et que vous bénéficierez d'une prestation de qualité adaptée à vos besoins `,
            img:"s1.jpg",
            show: false,
          },
        ],
        itemsPerPage:3,
        page: 1,
        sendMessageBtn: false,
        form: {
          firstname: "",
          lastname: "",
          email: "",
          message: "",
          adresse:"",
          ville:"",
          telephone:"",
          societe:"",
          service:"Choisir un service"
        }
      }
    },

    methods: {
      async storeServiceMessage(){
        this.sendMessageBtn = true
          if (!this.form.email || !this.form.message || !this.form.service || !this.form.telephone) {
            this.showToast('warning', 'Veuillez remplir tous les champs obligatoires.')
            this.sendMessageBtn = false
            return;
          }
          if (this.form.service == "Choisir un service") {
            this.showToast('warning', 'Veuillez choisir un service')
            this.sendMessageBtn = false
            return;
          }
          if (!this.validateEmail(this.form.email)) {
            this.showToast('warning', 'Veuillez saisir une adresse email valide.');
            this.sendMessageBtn = false
            return;
          }
          console.log('storeServiceMessage');
          await axios.post('/messages', this.form).then((response) => {
            if (response.data.error) {
              Swal.fire({
                title: 'Echec',
                text: 'Une Erreur s\'est produite',
                icon: 'error'
              })
              console.log(response.data);
              this.sendMessageBtn = false
              return
            }
            this.form = {
              firstname: "",
              lastname: "",
              email: "",
              message: "",
              adresse:"",
              ville:"",
              telephone:"",
              societe:"",
              service:"Choisir un service"
            }
            this.sendMessageBtn = false
            this.showToast('success', 'Message envoyée avec succès')
          }).catch(error => {
            this.sendMessageBtn = false
            this.showToast('error', "Une erreur s'est produite")
          });
      },
      validateEmail(email) {
          // Vérification de l'adresse email
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          return emailRegex.test(email);
      },
    },

    computed:{
      pages() {
        return Math.ceil(this.datas.length / this.itemsPerPage)
    },
      displayedData() {
      const start = (this.page - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.datas.slice(start, end)
    },
    }

  }
</script>

<style scoped>

</style>
