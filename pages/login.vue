<template>
    <div>
      <div class="tw-min-h-screen tw-bg-white tw-text-gray-900 tw-flex tw-justify-center">
        <div
          class="tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-flex tw-justify-center tw-flex-1"
        >
          <div class="tw-flex tw-flex-col tw-justify-center lg:tw-w-1/2 xl:tw-w-6/12 tw-p-6 sm:tw-p-12">
            <div class="tw-flex tw-justify-center tw-w-full">
  <!--            <img @click="$router.push('/')"-->
  <!--                 class="hover:tw-cursor-pointer tw-h-20 tw-w-44 md:tw-h-12 lg:tw-h-16 xl:tw-h-20 md:tw-w-auto"-->
  <!--                 src="../assets/svg/logo.svg" alt="Logo">-->
            </div>
            <div class="tw-mt-12 tw-flex tw-flex-col tw-items-center">
              <div class="tw-w-full tw-flex-1 tw-mt-8 tw-flex tw-flex-col tw-items-center">
                <div class="tw-max-w-md tw-flex tw-w-full tw-flex-col tw-items-center">
                  <button
                    class="tw-w-full tw-font-bold tw-shadow tw-rounded-lg tw-py-3 tw-bg-blue-100 tw-text-gray-800 tw-flex tw-items-center tw-justify-center tw-transition-all tw-duration-300 tw-ease-in-out focus:tw-outline-none hover:tw-shadow focus:tw-shadow-sm focus:tw-shadow-outline"
                  >
                    <div class="tw-bg-white tw-p-2 tw-rounded-full">
                      <svg class="tw-w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span class="tw-ml-4 tw-text-sm">
                    Se connecter avec Google
                  </span>
                  </button>
                </div>
  
                <!--              <div class="tw-my-12 tw-max-w-md tw-flex tw-justify-center tw-w-full tw-border-b tw-text-center">-->
                <!--                <div-->
                <!--                  class="tw-translate-y-2 tw-leading-none tw-px-2 tw-inline-block tw-text-sm tw-text-gray-800 tw-tracking-wide tw-font-medium tw-bg-white tw-transform tw-translate-y-1/2"-->
                <!--                >-->
                <!--                  Ou connectez-vous par e-mail-->
                <!--                </div>-->
                <!--              </div>-->
  
                <div class="tw-my-12 tw-max-w-md tw-flex tw-justify-center tw-w-full tw-border-b tw-border-black tw-border-dashed tw-text-center">
                  <div
                    class="tw-translate-y-2 tw-leading-none tw-px-2 tw-inline-block tw-text-md tw-text-gray-800 tw-tracking-wide tw-font-medium tw-bg-white tw-transform tw-translate-y-1/2"
                  >
                    Ou connectez-vous par e-mail
                  </div>
                </div>
  
                <p v-if="showError" class="tw-text-pink-600 tw-font-medium tw-text-xs tw-mb-2">Mot de passe ou email incorrect</p>
  
                <div class="tw-mx-auto tw-max-w-md tw-w-full">
                  <div class="tw-relative tw-mb-5">
                    <input
                      type="email"
                      required
                      v-model="auth.email"
                      class="tw-w-full tw-px-8 tw-py-4 tw-rounded-lg tw-font-medium tw-bg-blue-100 tw-border tw-border-gray-200 tw-placeholder-gray-700 tw-text-sm focus:tw-outline-none focus:tw-border-pink-500 focus:tw-bg-white"
                      placeholder="Adresse email"
                    />
  
                    <span class="tw-absolute tw-inset-y-0 tw-right-0 tw-grid tw-place-content-center tw-px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="tw-w-5 tw-h-5">
                        <path stroke-linecap="round"
                              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                      </svg>
                    </span>
                  </div>
  
                  <div class="tw-relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      required
                      v-model="auth.password"
                      class="tw-w-full tw-px-8 tw-py-4 tw-rounded-lg tw-font-medium tw-bg-blue-100 tw-border tw-border-gray-200 tw-placeholder-gray-700 tw-text-sm focus:tw-outline-none focus:tw-border-pink-500 focus:tw-bg-white"
                      placeholder="Mot de passe"
                    />
  
                    <span @click="showPassword =! showPassword"
                          class="tw-absolute tw-inset-y-0 tw-right-0 tw-grid tw-place-content-center tw-px-4 hover:tw-cursor-pointer">
  
                      <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke-width="1.5"
                           stroke="currentColor" class="tw-w-5 tw-h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
  
                      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" class="tw-w-5 tw-h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                      </svg>
                    </span>
                  </div>
  
                  <v-btn :loading="loginBtn" @click="login()"
                         class="tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-red-600 tw-text-white tw-w-full tw-py-6 tw-rounded-lg hover:tw-bg-red-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center focus:tw-shadow-outline focus:tw-outline-none"
                  >
                    <svg
                      class="tw-w-6 tw-h-6 tw--ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="8.5" cy="7" r="4"/>
                      <path d="M20 8v6M23 11h-6"/>
                    </svg>
                    <span class="tw-ml-3">
                    Se Connecter
                  </span>
                  </v-btn>
                  
                </div>
              </div>
            </div>
          </div>
  
          <div class="tw-flex-1 tw-text-center tw-hidden lg:tw-flex">
            <div
              class="background-image tw-w-full tw-h-full tw-bg-center tw-bg-cover tw-bg-no-repeat"
            >
              <div class="tw-h-full tw-w-full ">
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showError: false,
        showPassword: false,
        loginBtn: false,
        auth: {
          email: "",
          password: "",
        },
      }
    },
    methods: {
      async login() {
        let response = null
        this.errors = {}
        this.loginBtn = true
        this.showError = false
        let error = true
        response = await axios.post('/auth/login', this.auth)
          .then(resp => resp.data)
          .catch(error => {
            this.errors = error.response?.data
            this.loginError = true;
            this.loginBtn = false
          })
        error = false
        console.log(response)
        this.loginBtn = false
        if (response && !error) {
          await this.$store.dispatch('auth/saveToken', {
            token: response.token_type,
            user: response.user
          })
          this.$router.replace('/admin/dashboard');
        }else {
          this.showError = true
        }
        this.loginBtn = false
        this.loginInProgress = false
      }
    },
  }
  </script>
  <style scoped>
  .background-image{
    background-image: url("../assets/img/img1.jpg");
  }
  </style>
  