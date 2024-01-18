<template>
  <div>
    <div class="tw-relative">
      <img src="../assets/img/img3.jpg" class="md:xl:lg:tw-h-[95vh] tw-object-cover tw-w-full" alt="2 Geants Logo"/>
      <div class="tw-absolute tw-inset-0 tw-bg-gray-800 tw-bg-opacity-20">
        <div class="tw-border-gray-200 tw-h-full tw-flex tw-flex-col tw-justify-between">
          <div class="tw-bg-gray-900 tw-bg-opacity-60">
            <NavBar></NavBar>
          </div>
        </div>
      </div>
    </div>

    <!--  Contact Form  -->
    <section class="tw-flex tw-justify-center tw-items-center">
      <div class="sm:md:xl:lg:tw--translate-y-56 tw-h-[fit-content] tw-px-4 ">
        <div class="tw-flex tw-px-4 tw-flex-col lg:xl:tw-mb-6  lg:xl:tw-gap-2 tw-top-[-7.25rem] lg:xl:md:tw-top-[-6.25] tw-relative">
          <h1 class="tw-text-3xl tw-uppercase tw-text-white tw-font-bold tw-animate-bounce">Contact</h1>
          <span class="tw-h-2 tw-w-14 tw-bg-red-600"></span>
        </div>

        <!-- COMPONENT CODE -->
        <div class="tw-container lg:xl:sm:tw-mx-auto lg:xl:sm:tw-mt-[-4.5rem] lg:xl:sm:tw-pt-6 lg:tw-px-12 tw-shadow-lg tw-bg-white ">
          <h1 class="tw-text-3xl tw-uppercase tw-text-[#1A1943] tw-mb-4 tw-font-bold tw-text-center">Nous contacter</h1>

          <contact></contact>
        </div>
        <!-- COMPONENT CODE -->
      </div>
    </section>


    <div
      class="md:tw-h-[500px] tw-h-[60vh] tw-relative tw-shadow-lg tw-rounded-lg tw-border tw-border-gray-300 tw-p-2">
    
      <iframe class=" tw-w-full tw-h-full tw-rounded-lg" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2611.280253308413!2d6.173140675814011!3d49.119312382309985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDA3JzA5LjUiTiA2wrAxMCczMi42IkU!5e0!3m2!1sfr!2stg!4v1683283960799!5m2!1sfr!2stg" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'master',
  data() {
    return {}
  },


}
</script>

<style scoped>

</style>
