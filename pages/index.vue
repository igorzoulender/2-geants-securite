<template>
  <div class="">
    <div class="tw-relative">
      <img src="../assets/img/img2.jpg" class="lg:xl:md:tw-h-[95vh] tw-h-[60vh] tw-object-fill tw-w-full" alt="2 Geants Logo"/>
      <div class="tw-absolute tw-inset-0 tw-bg-gray-800 tw-bg-opacity-60">
        <div class="tw-border-gray-200 tw-h-full tw-flex tw-flex-col tw-justify-between">
          <div class="tw-bg-gray-900 tw-bg-opacity-60">
            <NavBar></NavBar>
          </div>

          <div data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            class="tw-flex tw-justify-center tw-items-end tw-w-full tw-pb-20 tw-top-20">
            <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-2/2 lg:xl:md:tw-w-1/2 lg:xl:md:tw-px-6  tw-gap-6 tw-text-white">
              <div class="tw-flex tw-flex-col tw-items-center tw-gap-2">
                <span class="tw-h-2 tw-w-14 tw-bg-red-600 hover:tw-animate-bounce"></span>
                <h1 class="tw-text-3xl  tw-font-bold tw-animate-bounce">POURQUOI NOUS ?</h1>
                <p class="tw-text-sm tw-text-gray-200 tw-px-4">
                  Notre engagement est avant tout assurer votre satisfaction et le bon déroulement de chaque mission
                  tout au long de notre collaboration. Pour ce faire, nos agents de sécurité qualifiés et rigoureux
                  mettent tout en œuvre pour répondre à vos attentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-bg-[#D9D9D9] tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-mb-20">
      <div class="tw-bg-transparent tw-py-10 xl:tw-py-16 lg:xl:tw-px-14 tw-w-full lg:tw-w-1/3 tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-gap-4"  data-te-animation-init
              data-te-animation-start="onScroll"
              data-te-animation="[slide-right_1s_ease-in-out]"
              data-te-animation-on-scroll="repeat">
        <div class="tw-h-2 tw-bg-red-600 tw-w-12"></div>
        <p class="tw-text-[#1A1943] tw-text-sm tw-text-center lg:tw-text-left tw-px-4">Protégez votre entreprise avec des équipes spécialisées qui connaissent
          les risques et les menaces de votre secteur
          d'activité. Nos agents, chefs de poste, encadrants intermédiaires et experts sont tous spécialisés dans les
          domaines de l'industrie,
          du tertiaire et des sites prestigieux pour offrir une sécurité sur mesure et de haute qualité.</p>
      </div>
      <div
        class="tw-bg-[#1A1943] tw-py-10 xl:tw-py-16 tw-px-14 tw-w-full lg:tw-w-1/3 tw-flex tw-flex-col tw-gap-6 tw-justify-center tw-items-center">
        <h1 class="tw-font-medium tw-text-white tw-text-lg">Rejoignez-nous !</h1>
        <NuxtLink to="/service/#info" class="tw-border-2 tw-border-white tw-px-6 tw-py-2 tw-font-medium tw-text-lg tw-text-white hover:tw-cursor-pointer hover:tw-bg-red-600 tw-transition-all tw-duration-200 tw-delay-200">Postulez</NuxtLink>
      </div>
      <div
        class="tw-bg-[#D7E1FF] tw-py-10 xl:tw-py-16 tw-px-14 tw-w-full lg:tw-w-1/3 tw-flex tw-flex-col tw-gap-6 tw-justify-center tw-items-center">
        <h1 class="tw-font-medium tw-text-[#1A1943] tw-text-lg">Besoin d’informations ?</h1>
        <a href="#contact" class="tw-border-2 tw-border-[#1A1943] tw-px-6 tw-py-2 tw-font-medium tw-text-lg tw-text-[#1A1943] hover:tw-bg-red-600 hover:tw-text-white hover:tw-cursor-pointer tw-transition-all tw-duration-200 tw-delay-200">
          Contactez-nous 
        </a>
      </div>
    </div>

    <section class="tw-bg-white tw-mt-32">
      <div class="tw-container tw-px-3 tw-mx-auto tw-w-full tw-gap-4 sm:tw-flex lg:tw-flex">
        <div class="tw-relative sm:lg:tw-w-1/2 tw-flex tw-duration-500 hover:tw-scale-95 tw-transform hover:tw-cursor-pointer" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
          <div class="tw-w-5/5 tw-flex tw-items-end tw-relative ">
            <img class="tw-w-full tw-flex tw-h-[80vh] tw-object-cover" src="../assets/img/img6.jpg" alt="image">
            <div class="sm:lg:tw-bg-red-600 tw-h-[75vh] tw-w-60"></div>
          </div>

          <div class="tw-absolute tw-inset-0 tw-right-14 tw-flex tw-justify-end tw-duration-500 hover:tw-scale-95 tw-transform hover:tw-cursor-pointer">
            <div class="tw-flex sm:lg:tw-flex-col tw-h-full tw-justify-center">
              <img class="tw-w-72 tw-h-[70%] tw-hidden lg:tw-flex" src="../assets/img/came.png" alt="image">
            </div>
          </div>
        </div>

        <div class="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-gap-6 tw-mt-4" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
          <div class="tw-flex tw-flex-col tw-gap-4">
            <div class="tw-h-2 tw-bg-red-600 tw-w-12"></div>
            <p class="tw-text-[#1A1943] tw-text-3xl tw-font-bold">
              Protégez-vous efficacement contre <br> les risques et menaces potentiels <br> grâce à l'expertise de 2GEANTS <br> Sécurité
            </p>
          </div>
          <p class="tw-text-lg">Nous offrons une expertise en matière de sécurité pour aider à identifier les
            vulnérabilités et mettre en place des mesures de sécurité adaptées afin de prévenir les risques et protéger
            les actifs de votre entreprise.</p>
          <div class="tw-my-2 tw-w-[fit-content]">
            <a href="#contact" class="tw-uppercase tw-text-sm tw-font-bold tw-tracking-wide tw-bg-[#1A1943] tw-text-white hover:tw-bg-red-600 tw-transition-all tw-duration-200 tw-p-3 tw-w-full
                      focus:tw-outline-none focus:tw-shadow-outline">
              Voir tous les services
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="tw-bg-white tw-mt-20" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <div class="tw-container tw-py-10 tw-mx-auto">
        <div class="tw-flex tw-flex-col tw-w-full tw-justify-center">
          <h1 
            class="tw-mb-4 tw-text-2xl tw-font-semibold tw-text-center tw-text-gray-800 tw-uppercase lg:tw-text-3xl dark:tw-text-white tw-px-4 lg:tw-px-0">
            Des solutions de sécurité <br>
            personnalisées pour chaque secteur
          </h1>
          <div class="tw-flex tw-justify-center tw-w-full tw-text-center">
            <div class="lg:xl:tw-w-1/2 tw-w-2/2">
              <p class="tw-text-md tw-text-gray-600 tw-text-center tw-px-4">
                Nous mettons à disposition notre expertise en sécurité pour détecter les faiblesses potentielles et déployer des mesures de sécurité ciblées, dans le but de prévenir les risques et de sauvegarder les actifs de votre entreprise.
              </p>
            </div>
          </div>
        </div>

        <div
          class="tw-grid tw-grid-cols-1 tw-gap-2 tw-mt-8 xl:tw-mt-12 xl:tw-gap-16 md:tw-grid-cols-2 lg:tw-grid-cols-3">
          <div class="tw-relative tw-h-[75vh] tw-p-2">
            <img class="tw-w-full tw-h-full tw-object-cover" src="../assets/img/home2.png" alt="image">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-90 w-bg-opacity-90">
              <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end tw-pb-8 tw-px-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-6">
                  <h1 class="tw-text-white tw-uppercase tw-font-semibold tw-text-lg lg:tw-text-2xl">SURVEILLANCE
                    HUMAINE</h1>
                  <h2 class="tw-text-white tw-text-sm tw-font-light">Assurez-vous de garder vos bâtiments industriels,
                    commerciaux et industriels et vos sites en sécurité</h2>

                  <button
                    class="tw-w-[fit-content] tw-flex tw-items-center tw-gap-2 tw-bg-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-animate-bounce">
                    <NuxtLink to="/service/#info-service" class="tw-text-md tw-text-[#0F0E53] tw-font-semibold">En savoir</NuxtLink>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0.666656L6.7075 1.95916L11.8225 7.08332H0.666666V8.91666H11.8225L6.7075 14.0408L8 15.3333L15.3333 7.99999L8 0.666656Z"
                        fill="#0F0E53"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-relative tw-h-[75vh] tw-p-2">
            <img class="tw-w-full tw-h-full tw-object-cover" src="../assets/img/img5.jpg" alt="image">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-90 w-bg-opacity-90">
              <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end tw-pb-8 tw-px-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-6">
                  <h1 class="tw-text-white tw-uppercase tw-font-semibold tw-text-lg lg:tw-text-2xl">Sécurité
                    INCENDIE</h1>
                  <h2 class="tw-text-white tw-text-sm tw-font-light">Un agent de sécurité incendie qualifié pour
                    répondre aux exigences SSIAP avec efficacité et fiabilité.</h2>

                  <button
                    class="tw-w-[fit-content] tw-flex tw-items-center tw-gap-2 tw-bg-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-animate-bounce">
                    <NuxtLink to="/service/#info-service" class="tw-text-md tw-text-[#0F0E53] tw-font-semibold">En savoir</NuxtLink>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0.666656L6.7075 1.95916L11.8225 7.08332H0.666666V8.91666H11.8225L6.7075 14.0408L8 15.3333L15.3333 7.99999L8 0.666656Z"
                        fill="#0F0E53"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-relative tw-h-[75vh] tw-p-2">
            <img class="tw-w-full tw-h-full tw-object-cover" src="../assets/img/home4.png" alt="image">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-90 w-bg-opacity-90">
              <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end tw-pb-8 tw-px-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-6">
                  <h1 class="tw-text-white tw-uppercase tw-font-semibold tw-text-lg lg:tw-text-2xl">Sécurité
                    Cynophile</h1>
                  <h2 class="tw-text-white tw-text-sm tw-font-light">Assurez la sécurité de vos événements avec nos
                    agents cynophiles expérimentés et qualifiés</h2>

                  <button
                    class="tw-w-[fit-content] tw-flex tw-items-center tw-gap-2 tw-bg-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-animate-bounce">
                    <NuxtLink to="/service/#info-service" class="tw-text-md tw-text-[#0F0E53] tw-font-semibold">En savoir</NuxtLink>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0.666656L6.7075 1.95916L11.8225 7.08332H0.666666V8.91666H11.8225L6.7075 14.0408L8 15.3333L15.3333 7.99999L8 0.666656Z"
                        fill="#0F0E53"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-relative tw-h-[75vh] tw-p-2">
            <img class="tw-w-full tw-h-full tw-object-cover" src="../assets/img/0V5A4348.JPG" alt="image">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-90 w-bg-opacity-90">
              <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end tw-pb-8 tw-px-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-6">
                  <h1 class="tw-text-white tw-uppercase tw-font-semibold tw-text-lg lg:tw-text-2xl">Sécurité mobile</h1>
                  <h2 class="tw-text-white tw-text-sm tw-font-light">Protégez votre entreprise en toute mobilité avec
                    notre service de sécurité mobile professionnel et efficace.</h2>

                  <button
                    class="tw-w-[fit-content] tw-flex tw-items-center tw-gap-2 tw-bg-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-animate-bounce">
                    <NuxtLink to="/service/#info-service" class="tw-text-md tw-text-[#0F0E53] tw-font-semibold">En savoir</NuxtLink>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0.666656L6.7075 1.95916L11.8225 7.08332H0.666666V8.91666H11.8225L6.7075 14.0408L8 15.3333L15.3333 7.99999L8 0.666656Z"
                        fill="#0F0E53"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-relative tw-h-[75vh] tw-p-2">
            <img class="tw-w-full tw-h-full tw-object-cover" src="../assets/img/home6.png" alt="image">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-90 w-bg-opacity-90">
              <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end tw-pb-8 tw-px-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-6">
                  <h1 class="tw-text-white tw-uppercase tw-font-semibold tw-text-lg lg:tw-text-2xl">Sécurité
                    EVENEMENTIEL</h1>
                  <h2 class="tw-text-white tw-text-sm tw-font-light">Assurez-vous que votre événement se déroule avec
                    succès en protégeant les personnes ou les biens.</h2>

                  <button
                    class="tw-w-[fit-content] tw-flex tw-items-center tw-gap-2 tw-bg-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-animate-bounce">
                    <NuxtLink to="/service/#info-service" class="tw-text-md tw-text-[#0F0E53] tw-font-semibold">En savoir</NuxtLink>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0.666656L6.7075 1.95916L11.8225 7.08332H0.666666V8.91666H11.8225L6.7075 14.0408L8 15.3333L15.3333 7.99999L8 0.666656Z"
                        fill="#0F0E53"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="tw-relative tw-h-[75vh] tw-p-2">
            <img class="tw-w-full tw-h-full tw-object-cover" src="../assets/img/home7.png" alt="image">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-90 w-bg-opacity-90">
              <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-end tw-pb-8 tw-px-4">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-6">
                  <h1 class="tw-text-white tw-uppercase tw-font-semibold tw-text-lg lg:tw-text-2xl">Audit & Conseil</h1>
                  <h2 class="tw-text-white tw-text-sm tw-font-light">Optimisez la sécurité de votre entreprise grâce à
                    notre service d'audit et de conseil personnalisé.</h2>

                  <button
                    class="tw-w-[fit-content] tw-flex tw-items-center tw-gap-2 tw-bg-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-animate-bounce">
                    <NuxtLink to="/service/#info-service" class="tw-text-md tw-text-[#0F0E53] tw-font-semibold">En savoir</NuxtLink>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0.666656L6.7075 1.95916L11.8225 7.08332H0.666666V8.91666H11.8225L6.7075 14.0408L8 15.3333L15.3333 7.99999L8 0.666656Z"
                        fill="#0F0E53"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tw-bg-gray-200 tw-my-16" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div class="tw-container tw-py-16 tw-mx-auto">
        <div class="tw-flex tw-flex-col tw-w-full tw-justify-center">
          <h1
            class="tw-mb-4 tw-text-2xl tw-font-semibold tw-text-center tw-text-gray-800 tw-capitalize lg:tw-text-3xl dark:tw-text-white">
            NOTRE PROCESSUS
          </h1>
          <div class="tw-flex tw-justify-center tw-w-full tw-text-center">
            <div class="tw-w-1/2">
              <p class="tw-text-md tw-text-gray-600 tw-text-center">Notre engagement envers la sécurité signifie que nous vous offrons des services de qualité supérieure pour protéger votre entreprise ou votre domicile.</p>
            </div>
          </div>
        </div>

        <div
          class="tw-grid tw-grid-cols-1 tw-gap-8 tw-mt-8 xl:tw-mt-12 xl:tw-gap-16 md:tw-grid-cols-2 xl:tw-grid-cols-3">
          <div
            class="tw-flex tw-flex-col tw-items-center tw-p-6 tw-space-y-3 tw-text-center tw-bg-gray-100 tw-rounded">
                <span
                  class="tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                    01
                </span>

            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-700 tw-uppercase">Discussion</h1>

            <p class="tw-text-gray-500 tw-text-center">
              En établissant un contact professionnel, vous avez l'opportunité d'exprimer clairement et simplement vos exigences en matière de sécurité. Cette étape permettra ensuite de procéder à une évaluation approfondie de vos besoins, afin de déterminer les solutions les plus adaptées pour garantir la sécurité de votre entreprise ou de votre domicile.
            </p>
          </div>

          <div
            class="tw-flex tw-flex-col tw-items-center tw-p-6 tw-space-y-3 tw-text-center tw-bg-gray-100 tw-rounded">
                <span
                  class="tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                    02
                </span>

            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-700 tw-uppercase">évaluation</h1>

            <p class="tw-text-gray-500 tw-text-center">
              Une évaluation minutieuse de vos exigences nous permettra de mieux comprendre vos attentes et de vous proposer des solutions de sécurité personnalisées. Nous sommes déterminés à répondre à vos besoins et à mettre en place des stratégies de sécurité sur mesure pour garantir votre satisfaction.
            </p>
          </div>

          <div
            class="tw-flex tw-flex-col tw-items-center tw-p-6 tw-space-y-3 tw-text-center tw-bg-gray-100 tw-rounded">
                <span
                  class="tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                   03
                </span>

            <h1 class="tw-text-xl tw-font-semibold tw-text-gray-700 tw-uppercase">Sécurisation</h1>

            <p class="tw-text-gray-500 tw-text-center">
              En tant qu'entreprise, notre engagement envers vous est de garantir votre satisfaction totale en mettant en œuvre des mesures de sécurité optimales. Nous prenons cette responsabilité au sérieux en adoptant une approche professionnelle et rigoureuse dans toutes les étapes du processus.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="tw-bg-white tw-my-16 tw-p-2"
    data-te-animation-init
  data-te-animation-start="onScroll"
  data-te-animation-on-scroll="repeat"
  data-te-animation-show-on-load="false"
  data-te-animation="[slide-right_1s_ease-in-out]">
      <div class="tw-container tw-py-10 tw-mx-auto">
        <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 tw-w-full">
          <div class="tw-relative tw-w-full lg:tw-w-1/2">
            <div class="tw-flex tw-gap-4">
              <!-- <img class="tw-w-1/2 tw-h-[75vh] tw-object-cover" src="../assets/img/pietons.png" alt="image">
              <img class="tw-w-1/2 tw-mt-6 tw-h-[75vh] tw-object-cover" src="../assets/img/lac.png" alt="image"> -->
              <img class="tw-h-[60vh] tw-mt-4 tw-object-cover" src="../assets/img/img12.jpg" alt="">
            </div>
            <!-- <div class="tw-absolute tw-inset-0 tw-flex tw-w-full tw-items-center tw-justify-center">
              <div class="tw-duration-300 hover:tw-scale-75 tw-transform tw-bg-white tw-rounded-full tw-p-1 hover:tw-cursor-pointer">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.75 18.3125V31.6875C18.75 32.6458 19.1875 33.375 20.0625 33.875C20.9375 34.375 21.7917 34.3333 22.625 33.75L33 27.125C33.7916 26.625 34.1875 25.9167 34.1875 25C34.1875 24.0833 33.7916 23.375 33 22.875L22.625 16.25C21.7917 15.6667 20.9375 15.625 20.0625 16.125C19.1875 16.625 18.75 17.3542 18.75 18.3125ZM25 50C21.5417 50 18.2917 49.3433 15.25 48.03C12.2083 46.7166 9.5625 44.9358 7.3125 42.6875C5.0625 40.4375 3.28167 37.7916 1.97 34.75C0.658333 31.7083 0.00166667 28.4583 0 25C0 21.5417 0.656667 18.2917 1.97 15.25C3.28333 12.2083 5.06416 9.5625 7.3125 7.3125C9.5625 5.0625 12.2083 3.28167 15.25 1.97C18.2917 0.658333 21.5417 0.00166667 25 0C28.4583 0 31.7083 0.656667 34.75 1.97C37.7916 3.28333 40.4375 5.06416 42.6875 7.3125C44.9375 9.5625 46.7191 12.2083 48.0325 15.25C49.3458 18.2917 50.0016 21.5417 50 25C50 28.4583 49.3433 31.7083 48.03 34.75C46.7166 37.7916 44.9358 40.4375 42.6875 42.6875C40.4375 44.9375 37.7916 46.7191 34.75 48.0325C31.7083 49.3458 28.4583 50.0016 25 50Z"
                    fill="#1611EE"/>
                </svg>
              </div>
            </div> -->
          </div>

          <div class="tw-w-full lg:tw-w-1/2">
            <div class="tw-mt-8 tw-flex tw-flex-col tw-gap-4">
              <h1 class="tw-text-3xl tw-uppercase tw-font-bold tw-text-blue-900 tw-text-center">notre engagement</h1>
              <p class="tw-text-md tw-text-gray-500 tw-text-center">
                Nous sommes là pour vous offrir la tranquillité d'esprit dont vous avez besoin en matière de sécurité, grâce à des solutions de sécurité personnalisées et adaptées à vos besoins.
              </p>

              <div class="tw-w-full sm:tw-grid lg:tw-grid tw-grid-cols-2 tw-gap-4">
                <div class="tw-flex tw-gap-4">
                  <span
                  class="tw-p-6 tw-space-y-3 tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                    01
                  </span>
                  <div>
                    <h2 class="tw-text-blue-900 tw-font-semibold tw-mb-2">Protection</h2>
                    <p class="tw-text-gray-500 tw-text-sm">2GEANTS SECURITE s'engage à fournir une protection efficace et de qualité à ses clients.</p>
                  </div>
                </div>
                <div class="tw-flex tw-gap-4">
                  <div
                  class="tw-p-6 tw-space-y-3 tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                    02
                  </div>
                  <div>
                    <h2 class="tw-text-blue-900 tw-font-semibold tw-mb-2">Confidentialité</h2>
                    <p class="tw-text-gray-500 tw-text-sm">2GEANTS SECURITE s'engage à protéger les informations confidentielles de ses clients.</p>
                  </div>
                </div>
                <div class="tw-flex tw-gap-4">
                  <div
                  class="tw-p-6 tw-space-y-3 tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                    03
                  </div>
                  <div>
                    <h2 class="tw-text-blue-900 tw-font-semibold tw-mb-2">Qualité de Service</h2>
                    <p class="tw-text-gray-500 tw-text-sm">2GEANTS SECURITE s'engage à fournir des services de haute qualité à ses clients.</p>
                  </div>
                </div>
                <div class="tw-flex tw-gap-4">
                  <div
                  class="tw-p-6 tw-space-y-3 tw-inline-flex tw-justify-center tw-items-center tw-h-12 tw-w-12 tw-font-medium tw-text-white tw-bg-[#1A1943] tw-rounded-full tw-text-lg">
                    04
                  </div>
                  <div>
                    <h2 class="tw-text-blue-900 tw-font-semibold tw-mb-2">Flexibilité</h2>
                    <p class="tw-text-gray-500 tw-text-sm">2GEANTS SECURITE s'engage à être au plus proche de ses client  et à s'adapter aux besoins changeants de ses clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  Blog  -->
    <section v-if="blog_publications.length !=0" class="tw-py-6 sm:tw-py-12" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div class="tw-container tw-mx-auto tw-space-y-8">
        <div class="tw-space-y-2 tw-text-center">
          <h2 class="tw-text-3xl tw-uppercase tw-font-bold">Notre blog</h2>
        </div>
        <div class="tw-grid tw-grid-cols-1 tw-gap-6 tw-gap-y-8 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-p-2">
          <div v-for="(publication, pub_index) in blog_publications" :key="pub_index" v-if="pub_index < 3" class="tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-bg-cover tw-bg-no-repeat">
              <img alt="" class="tw-object-cover tw-w-full tw-h-52 tw-transition tw-duration-300 tw-ease-in-out hover:tw-scale-110  hover:tw-cursor-pointer"
              :src="backendImage(publication.photo)">
            <div class="tw-flex tw-flex-col tw-bg-[#D9D9D9] tw-flex-1 tw-p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <span class="tw-text-xs">Publier le {{ publication.created_at | moment('LL')}}</span>
              <h3 v-html="publication.title" class="tw-flex-1 tw-py-2 tw-text-md tw-font-bold tw-leading-snug tw-line-clamp-4">
                
              </h3>
              <div
                class="tw-flex tw-flex-wrap tw-justify-between tw-pt-3 tw-space-x-2 tw-text-xs">
                <!-- <NuxtLink to="/blog/#blog" class="tw-bg-[#1A1943] tw-text-white tw-py-2 tw-px-6  hover:tw-cursor-pointer">Lire plus</NuxtLink> -->
                <NuxtLink :to="`/blog/${publication.id}/#blog-Info`" class="tw-bg-[#1A1943] tw-text-white tw-py-2 tw-px-6  hover:tw-cursor-pointer"> Lire plus</NuxtLink>
              </div>
            </div>
          </div>
           
           
        </div>
      </div>
    </section>

    <!--  Contact Form  -->
    <section id="contact" class="tw-flex tw-justify-center tw-items-center tw-mb-16 tw-mt-12">
      <!-- COMPONENT CODE -->
      <div class="tw-container tw-mx-auto tw-my-4 lg:tw-px-18" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"  >
      <contact></contact>
      </div>
      <!-- COMPONENT CODE -->
    </section>
    
  </div>
</template>

<script>
export default {
  layout: 'master',
  data() {
    return {
      blog_publications:[],
    }
  },

  mounted(){
    this.getBlogPublication();
  },
  methods:{
    initialize() {
        this.getBlogPublication();
      },
    async getBlogPublication() {
        await axios.get("/blog-publication-enable").then((response) => {
          this.blog_publications = response.data.blogs;
          this.blog_publications.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
        });
    },
  }
}
</script>

<style scoped>
.tw-line-clamp-4 {
    overflow: hidden;
     text-overflow: ellipsis;
      display: -webkit-box;
       -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
}
</style>
