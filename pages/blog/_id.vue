<template>
  <div>
    <div class="tw-relative">
      <img
        src="../../assets/img/img4.jpg"
        class="lg:tw-h-[90vh] tw-object-fill tw-w-full"
        alt="2 Geants Logo"
      />
      <div class="tw-absolute tw-inset-0">
        <div
          class="tw-border-gray-200 tw-h-full tw-flex tw-flex-col tw-justify-between"
        >
          <div class="tw-bg-gray-900 tw-bg-opacity-60">
            <NavBar></NavBar>
          </div>

          <div
            class="tw-container tw-px-4 tw-mx-auto tw-flex tw-flex-col tw-mb-20 tw-gap-2"
          >
            <h1
              class="tw-text-3xl tw-uppercase tw-text-white tw-font-bold tw-animate-bounce"
            >
              Détail de la publication
            </h1>
            <span class="tw-h-2 tw-w-14 tw-bg-red-600"></span>
          </div>
        </div>
      </div>
    </div>

    <div id="blog-Info" class="tw-container tw-mx-auto tw-mt-16" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
        <div class="tw-col-span-2">
            <div class="tw-flex tw-w-full tw-justify-center">
              <div
                v-if="publication"
                class="lg:tw-px-6 tw-flex tw-flex-col tw-w-full"
              >
                <div
                  class="tw-mb-4 md:tw-mb-0 tw-w-full tw-mx-auto tw-relative"
                >
                  <div class="tw-px-4 lg:tw-px-0">
                    <h2
                      class="tw-text-2xl tw-font-semibold tw-text-green-800 tw-uppercase tw-leading-tight"
                    >
                      {{ publication.title }}
                    </h2>
                    <div class="tw-flex tw-w-f tw-justify-between">
                      <p
                        class="tw-uppercase tw-py-2 tw-text-red-500 tw-font-medium tw-inline-flex tw-items-center tw-justify-center tw-mb-2"
                      >Information relative à la sécurité</p>
                      <p
                        href="#"
                        class="tw-py-2 tw-text-xs tw-text-gray-500 tw-inline-flex tw-items-center tw-justify-center tw-mb-2"
                      >
                        Publié le
                        {{ publication.created_at | moment("DD-MM-YYYY") }}
                      </p>
                    </div>
                  </div>

                  <img
                    :src="backendImage(publication.photo)"
                    class="tw-w-full tw-object-cover lg:tw-rounded tw-h-80"
                  />
                </div>
                <div
                  class="tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-12"
                >
                  <div
                    class="tw-px-4 lg:tw-px-0 tw-mt-12 tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-w-full lg:tw-w-full"
                  >
                    <!--     Affiche le sujet sans les balises de html             -->
                    <p v-html="publication.subject" class="tw-text-base"></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="tw-col-span-1">
          <div class="tw-grid tw-grid-cols-3 tw-gap-4 tw-py-8 tw-px-4">
            <div class="tw-col-span-3 tw-shadow-xl">
              <div
                class="tw-block tw-rounded-lg tw-bg-white tw-p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              >
                <h5
                  class="tw-mb-2 tw-text-2xl tw-text-light tw-leading-tight tw-text-dark-blue tw-pb-2 tw-border-b-4 tw-border-red-600 tw-uppercase"
                >
                  à PROPOS DE NOUS
                </h5>
                <p class="tw-mb-4 tw-py-4 tw-text-base text-neutral-600">
                  Située à Metz, en Lorraine, 2GEANTS Sécurité se positionne
                  comme un prestataire national de premier plan dans le domaine
                  de la sécurité et de la sûreté des biens et des personnes.
                </p>

                <div class="tw-flex tw-w-full tw-gap-2">
                  <svg
                    class="-tw-mt-0.5"
                    width="20"
                    height="20"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.87532 20.2702C7.23089 20.8233 8.06056 20.8233 8.41614 20.2702C14.1844 11.9734 15.2511 11.1042 15.2511 8.02259C15.2511 3.83471 11.8534 0.437 7.66548 0.437C3.43809 0.437 0.0798874 3.83471 0.0798874 8.02259C0.0798874 11.1042 1.1071 11.9734 6.87532 20.2702ZM7.66548 11.1833C5.88761 11.1833 4.50482 9.80047 4.50482 8.02259C4.50482 6.28423 5.88761 4.86193 7.66548 4.86193C9.40385 4.86193 10.8261 6.28423 10.8261 8.02259C10.8261 9.80047 9.40385 11.1833 7.66548 11.1833Z"
                      fill="#1A1943"
                    />
                  </svg>
                  <div class="tw-flex tw-flex-col tw-gap-2">
                    <p class="tw-font-semibold tw-text-md">Metz</p>
                  </div>
                </div>

                <div class="tw-flex tw-w-full tw-gap-2">
                  <svg
                    class="-tw-mt-0.5"
                    width="20"
                    height="20"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1585 14.739L15.7335 12.8426C15.615 12.8031 15.4965 12.7636 15.3384 12.7636C15.0619 12.7636 14.7853 12.9216 14.6273 13.1192L12.6519 15.5292C9.57023 14.0674 7.12071 11.6178 5.65891 8.5362L8.06891 6.56079C8.26645 6.40275 8.42449 6.1262 8.42449 5.81013C8.42449 5.6916 8.38498 5.57308 8.34547 5.45455L6.44907 1.02962C6.29104 0.674049 5.93546 0.437 5.54038 0.437C5.50087 0.437 5.42186 0.476508 5.34284 0.476508L1.23398 1.42471C0.799384 1.54323 0.522826 1.89881 0.522826 2.3334C0.522826 12.487 8.70104 20.6653 18.8547 20.6653C19.2893 20.6653 19.6448 20.3887 19.7634 19.9541L20.7116 15.8452C20.7116 15.7662 20.7116 15.6872 20.7116 15.6477C20.7116 15.2526 20.4745 14.897 20.1585 14.739Z"
                      fill="#1A1943"
                    />
                  </svg>

                  <div class="tw-flex tw-flex-col tw-gap-2">
                    <p class="tw-font-semibold tw-text-md">+33 06 0550 8865</p>
                  </div>
                </div>

                <div class="tw-flex tw-w-full tw-gap-2">
                  <svg
                    class="-tw-mt-0.5"
                    width="20"
                    height="20"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.356 5.98309C19.4473 6.69423 18.3016 7.56342 14.2717 10.487C13.4816 11.0797 12.0198 12.3834 10.637 12.3834C9.21466 12.3834 7.79237 11.0797 6.96269 10.487C2.93284 7.56342 1.7871 6.69423 0.878412 5.98309C0.720379 5.86456 0.522838 5.98309 0.522838 6.18063V14.2403C0.522838 15.307 1.35251 16.1367 2.41924 16.1367H18.8547C19.8819 16.1367 20.7511 15.307 20.7511 14.2403V6.18063C20.7511 5.98309 20.514 5.86456 20.356 5.98309ZM10.637 11.0797C11.5457 11.1192 12.8494 9.93392 13.5211 9.45982C18.7757 5.66702 19.1708 5.31144 20.356 4.36324C20.5931 4.20521 20.7511 3.92865 20.7511 3.61259V2.86193C20.7511 1.83471 19.8819 0.965531 18.8547 0.965531H2.41924C1.35251 0.965531 0.522838 1.83471 0.522838 2.86193V3.61259C0.522838 3.92865 0.641363 4.20521 0.878412 4.36324C2.06366 5.31144 2.45874 5.66702 7.71335 9.45982C8.38499 9.93392 9.68876 11.1192 10.637 11.0797Z"
                      fill="#1A1943"
                    />
                  </svg>

                  <div class="tw-flex tw-flex-col tw-gap-2">
                    <p class="tw-font-semibold tw-text-md">
                      <a
                        href="mailto:contact@2geants-securite.com"
                        class="tw-text-dark-blue"
                        >contact@2geants-securite.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="tw-col-span-3 tw-shadow-xl">
              <div class="tw-block tw-rounded-lg tw-bg-white tw-px-6 tw-py-4">
                <h5
                  class="tw-mb-2 tw-text-2xl tw-text-light tw-leading-tight tw-text-dark-blue tw-pb-2 tw-border-b-4 tw-border-red-600"
                >
                  Publictions récentes
                </h5>
              </div>

              <div class="tw-block tw-rounded-lg tw-bg-white tw-px-6">
                  <div class="tw-grid tw-grid-cols-4 tw-gap-4">
                    <div v-for="(publication, pub_index) in blog_publications" :key="pub_index" v-if="pub_index < 3" class="tw-col-span-3 tw-flex">
                      <img
                        class="tw-w-[160px]"
                        :src="backendImage(publication.photo)"
                        alt=""
                      />
  
                      <a
                        href="#"
                        class="tw-mb-4 tw-text-base tw-text-dark tw-font-bold tw-px-2 hover:tw-underline tw-text-black"
                      >
                      <NuxtLink :to="`/blog/${publication.id}`" v-html="publication.subject" class="tw-line-clamp-4"></NuxtLink>
                        <br />
                        <span
                          class="tw-text-sm tw-text-gray-400 tw-font-medium tw-mt-4"
                          >{{  publication.created_at | moment('dddd-MM-YYYY') }}</span
                        >
                      </a>
                    </div>
  
                    <br />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "master",
  data() {
    return {
      publication: null,
      blog_publications: [],
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.getBlogPublication();
      this.getAllPublication()
    },
    async getBlogPublication() {
      await axios
        .get(`/blog-publication/${this.$route.params.id}`)
        .then((response) => {
          this.publication = response.data.blog;
        });
    },
    async getAllPublication() {
        await axios.get("/blog-publication").then((response) => {
          this.blog_publications = response.data.blogs;
          this.blog_publications.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
        });
      },
  },
};
</script>

<style scoped>
.tw-line-clamp-4 {
    overflow: hidden;
     text-overflow: ellipsis;
      display: -webkit-box;
       -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
}</style>
