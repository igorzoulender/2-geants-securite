<template>
  <div>
    <div class="tw-relative">
      <img src="../assets/img/img1.jpg" class="lg:xl:tw-h-[90vh] tw-h-[63vh] tw-object-fill tw-w-full" alt="2 Geants Logo"/>
      <div class="tw-absolute tw-inset-0 tw-bg-gray-800 tw-bg-opacity-20">
        <div class="tw-border-gray-200 tw-h-full tw-flex tw-flex-col tw-justify-between">
          <div class="tw-bg-gray-900 tw-bg-opacity-60">
            <NavBar></NavBar>
          </div>
          <div class="tw-container tw-px-4 tw-mx-auto tw-flex tw-flex-col tw-mb-20 tw-gap-2" data-aos="zoom-out-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <h1 class="tw-text-3xl tw-uppercase tw-text-white tw-font-bold tw-animate-bounce">à propos de nous</h1>
            <span class="tw-h-2 tw-w-14 tw-bg-red-600"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-container tw-mx-auto tw-bg-white tw-mt-12" data-aos="zoom-out-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div class="">
        <div class="sm:lg:tw-flex sm:lg:tw-gap-12">
          <div class="tw-flex tw-items-center tw-gap-6 sm:tw-w-1/2 tw-p-2">
            <div class="">
              <img src="../assets/img/apropo2.png"
                   class="tw-h-[65vh] xl:tw-w-full tw-object-cover tw-mt-10" alt="Flowbite Logo"/>
              <div class="tw-flex tw-items-end tw-mt-5 justify-start tw-float-left">
                <div class="tw-w-auto tw-text-2xl tw-h-25 tw-bg-indigo-950 tw-text-white tw-px-6 tw-py-2">
                  Avec vous <span class="tw-text-3xl tw-m-2"> <br> 24h/24 et 7j/7</span>pour votre
                  sécurité
                </div>
              </div>
            </div>

            <div class="tw-flex tw-mt-">
              <img src="../assets/img/apropo3.png" class="tw-h-[70vh] xl:tw-w-[50vh] tw-mt-20 tw-object-cover"
                   alt="Flowbite Logo"/>
            </div>
          </div>
          <div class="sm:tw-w-1/2 tw-justify-end tw-mt-2 tw-p-2">
            <div class="tw-mb-2 tw-text-indigo-900">
              <span class="tw-h-2 tw-w-14 tw-bg-red-600 tw-absolute"></span>
              <h3 class="tw-text-xl tw-font-bold tw-mt-4 tw-pt-2">A PROPOS DE NOUS</h3>
              <h1 class="tw-text-4xl tw-font-bold  tw-mt-2" style="display: inline-block;">2 GEANTS SECURITE
              </h1>
            </div>
            <div class="tw-mt-12 tw-text-justify">
              <p class="">
                2GEANTS Sécurité est une entreprise de sécurité privée basée à Metz dans la région du Grand Est. Nous sommes spécialisés dans les services de gardiennage et de surveillance, notre mission est de fournir à nos clients une gamme complète de solutions de sécurité et technologiques sur mesure. Nous sommes fiers de notre expertise en matière de sécurité privée et de notre capacité à offrir des services personnalisés et fiables pour répondre à tous vos besoins
              </p>
              <br>
              <p>
                Nos agents de sécurité qualifiés et expérimentés fournissent une présence physique dissuasive, une surveillance en temps réel et une réponse rapide aux incidents de sécurité pour garantir la sécurité de nos clients. Nous offrons également des services de protection VIP pour les événements spéciaux.  Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins en matière de sécurité et vous proposer des solutions adaptées.
              </p>
              <br>
              <p>
                Nous sommes résolus à garantir la sécurité de nos clients en toutes circonstances. Nous nous engageons à fournir des solutions de sécurité efficaces, personnalisées et fiables. Nos agents de sécurité sont régulièrement formés sous la supervision de nos experts pour assurer une prestation de qualité. Nous sommes confiants dans notre expertise, notre performance opérationnelle et notre capacité à personnaliser nos services pour répondre aux besoins individuels de chaque client. Ces qualités sont la pierre angulaire de notre engagement à fournir des solutions de sécurité sur mesure et à haute efficacité.
              </p>
              <p>
                Notre expérience et notre expertise en matière de sécurité privée nous ont permis de comprendre en profondeur les besoins uniques de chaque client. Notre engagement est de fournir des solutions de sécurité adaptées pour répondre à ces besoins. Nous avons également développé des partenariats solides avec des entreprises locales afin de vous proposer un service de sécurité sans faille, efficace et efficiente. Chez 2GEANTS Sécurité, nous sommes convaincus que la sécurité est un élément essentiel de la vie quotidienne de nos clients, et nous sommes prêts à collaborer ensemble pour vous garantir une protection optimale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-mt-32 tw-mb-4 tw-p-2" data-aos="fade-up"
     data-aos-duration="3000">
      <h1 class="tw-text-indigo-900 tw-flex tw-justify-center tw-items-center tw-font-bold tw-text-4xl tw-text-center">
        Profitez de notre service
      </h1>
      <span class="tw-flex tw-justify-center tw-items-center tw-px-6  " style="text-align:center">
          En raison de nos services de sécurité, nous sommes en mesure de garantir une protection accrue <br>
          de vos biens, tout en répondant efficacement à vos exigences et en veillant à votre satisfaction <br>
          en matière de sécurité.
        </span>
    </div>

    <div class="tw-flex tw-w-full tw-p-2 tw-mb-[-28rem] sm:tw-mb-[-8rem] md:tw-mb-[-8rem]" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <v-carousel :show-arrows=false hide-delimiters  cycle>
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <img 
            class="lg:xl:tw-h-[50vh] lg:sm:xl:tw-w-full tw-object-cover"
            :src="require(`@/assets/img/${item.src}`)" alt="">
          </v-carousel-item>
        </v-carousel>
     
    </div>
    
    <div class="tw-flex tw-justify-center tw-items-center tw-mt-[5rem] tw-mb-[3rem] md:lg:xl:sm:tw-mt-[-2rem] md:lg:xl:sm:tw-mb-[3rem] tw-p-2" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <div class="tw-flex tw-flex-col tw-gap-6 sm:tw-w-5/12 tw-px-12 tw-py-6 tw-bg-[#19182D] tw-text-white">
        <h1 class="tw-text-2xl tw-font-bold tw-uppercase">Rejoignez-nous</h1>
        <p>Si vous cherchez un travail passionnant et stimulant dans le domaine de la sécurité, ne cherchez pas plus loin. Postulez dès maintenant pour rejoindre notre équipe de professionnels qualifiés.</p>

        <NuxtLink to="/service/#info" class="tw-uppercase tw-text-sm tw-font-bold tw-tracking-wide tw-bg-[#1A1943] tw-text-white tw-p-3 tw-w-[fit-content]
                      focus:tw-outline-none focus:tw-shadow-outline">
          Postulez maintenant
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'master',
  data() {
    return {
      items: [
          {
            src: 'aboutSlide1.png',
          },
          {
            src: 'aboutSlide1.png',
          },
          
        ],
    }
  },
  

}
</script>

<style scoped></style>
