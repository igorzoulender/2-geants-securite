<template>
    <div>
        <div class="sm:lg:tw-flex tw-gap-12 tw-w-full tw-p-2">
          <div
            class="tw-w-full lg:tw-w-6/12 tw-px-2  tw-rounded-2xl ">
          <v-form ref="messageRef" class=" tw-w-full">
            <div class="tw-w-full  tw-mb-2">
              <div class="tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-2">
                <input
                  v-model="form.firstname"
                  class="tw-w-full tw-bg-gray-100 tw-text-gray-900 tw-mt-2 tw-p-3 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
                  type="text" placeholder="Nom*"/>
                <input
                  v-model="form.lastname"
                  class="tw-w-full tw-bg-gray-100 tw-text-gray-900 tw-mt-2 tw-p-3 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
                  type="text" placeholder="Prénom*"/>
              </div>
              <input
                v-model="form.email"
                class="tw-w-full tw-bg-gray-100 tw-text-gray-900 tw-mt-5 tw-p-3 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
                type="email" placeholder="Email*"/>
              <div class="tw-my-4">
                <textarea placeholder="Message*"
                          v-model="form.message"
                          class="tw-w-full tw-h-32 tw-bg-gray-100 tw-text-gray-900 tw-mt-2 tw-p-3 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"></textarea>
              </div>
              <div class="tw-my-2 tw-w-[fit-content]">
                <v-btn :loading="sendMessageBtn" @click="storeMessage()" class="hover:tw-cursor-pointer tw-uppercase tw-text-sm tw-font-bold tw-tracking-wide tw-bg-[#1A1943] tw-text-white tw-p-3 tw-w-full
                        focus:tw-outline-none focus:tw-shadow-outline">
                  Envoyer votre message
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
          <div
            class="tw-w-full lg:tw-w-6/12 tw-px-2  tw-rounded-2xl tw-mt-8">
            <h1 class="tw-text-3xl tw-uppercase tw-text-[#1A1943] tw-font-bold">Nous contacter</h1>
            <div class="tw-grid tw-grid-cols-2 tw-mt-6">
              <div class="tw-flex tw-w-full tw-gap-2">
                <svg class="-tw-mt-0.5" width="28" height="28" viewBox="0 0 16 21" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.87532 20.2702C7.23089 20.8233 8.06056 20.8233 8.41614 20.2702C14.1844 11.9734 15.2511 11.1042 15.2511 8.02259C15.2511 3.83471 11.8534 0.437 7.66548 0.437C3.43809 0.437 0.0798874 3.83471 0.0798874 8.02259C0.0798874 11.1042 1.1071 11.9734 6.87532 20.2702ZM7.66548 11.1833C5.88761 11.1833 4.50482 9.80047 4.50482 8.02259C4.50482 6.28423 5.88761 4.86193 7.66548 4.86193C9.40385 4.86193 10.8261 6.28423 10.8261 8.02259C10.8261 9.80047 9.40385 11.1833 7.66548 11.1833Z"
                    fill="#325EE3"/>
                </svg>
                <div class="tw-flex tw-flex-col tw-gap-2">
                  <h2 class="tw-font-semibold tw-text-md">Adresse</h2>
                  <p class="tw-text-sm tw-text-gray-700 tw-font-light">11 Rempart saint - Thiebault 57000 Metz</p>
                </div>
              </div>

              <div class="tw-flex tw-w-full tw-gap-2">
                <svg class="-tw-mt-0.5" width="28" height="28" viewBox="0 0 21 17" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.356 5.98309C19.4473 6.69423 18.3016 7.56342 14.2717 10.487C13.4816 11.0797 12.0198 12.3834 10.637 12.3834C9.21466 12.3834 7.79237 11.0797 6.96269 10.487C2.93284 7.56342 1.7871 6.69423 0.878412 5.98309C0.720379 5.86456 0.522838 5.98309 0.522838 6.18063V14.2403C0.522838 15.307 1.35251 16.1367 2.41924 16.1367H18.8547C19.8819 16.1367 20.7511 15.307 20.7511 14.2403V6.18063C20.7511 5.98309 20.514 5.86456 20.356 5.98309ZM10.637 11.0797C11.5457 11.1192 12.8494 9.93392 13.5211 9.45982C18.7757 5.66702 19.1708 5.31144 20.356 4.36324C20.5931 4.20521 20.7511 3.92865 20.7511 3.61259V2.86193C20.7511 1.83471 19.8819 0.965531 18.8547 0.965531H2.41924C1.35251 0.965531 0.522838 1.83471 0.522838 2.86193V3.61259C0.522838 3.92865 0.641363 4.20521 0.878412 4.36324C2.06366 5.31144 2.45874 5.66702 7.71335 9.45982C8.38499 9.93392 9.68876 11.1192 10.637 11.0797Z"
                    fill="#325EE3"/>
                </svg>

                <div class="tw-flex tw-flex-col tw-gap-2">
                  <h2 class="tw-font-semibold tw-text-md">Email</h2>
                  <p class="tw-text-sm tw-text-gray-700 tw-font-light">
                   contact@2geants-securite.com
                  </p>
                </div>
              </div>

              <div class="tw-flex tw-w-full tw-gap-2">
                <svg class="-tw-mt-0.5" width="28" height="28" viewBox="0 0 21 21" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.1585 14.739L15.7335 12.8426C15.615 12.8031 15.4965 12.7636 15.3384 12.7636C15.0619 12.7636 14.7853 12.9216 14.6273 13.1192L12.6519 15.5292C9.57023 14.0674 7.12071 11.6178 5.65891 8.5362L8.06891 6.56079C8.26645 6.40275 8.42449 6.1262 8.42449 5.81013C8.42449 5.6916 8.38498 5.57308 8.34547 5.45455L6.44907 1.02962C6.29104 0.674049 5.93546 0.437 5.54038 0.437C5.50087 0.437 5.42186 0.476508 5.34284 0.476508L1.23398 1.42471C0.799384 1.54323 0.522826 1.89881 0.522826 2.3334C0.522826 12.487 8.70104 20.6653 18.8547 20.6653C19.2893 20.6653 19.6448 20.3887 19.7634 19.9541L20.7116 15.8452C20.7116 15.7662 20.7116 15.6872 20.7116 15.6477C20.7116 15.2526 20.4745 14.897 20.1585 14.739Z"
                    fill="#325EE3"/>
                </svg>

                <div class="tw-flex tw-flex-col tw-gap-2">
                  <h2 class="tw-font-semibold tw-text-md">Téléphone</h2>
                  <p class="tw-text-sm tw-text-gray-700 tw-font-light">
                    (+33) 06 0550 8865
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
export default {
  layout: 'master',
  data() {
    return {
      sendMessageBtn: false,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      }
    }
  },

  methods: {
   async storeMessage(){
    this.sendMessageBtn = true
      if (!this.form.email || !this.form.message) {
        this.showToast('warning', 'Veuillez remplir tous les champs obligatoires.')
        this.sendMessageBtn = false
        return;
      }
      if (!this.validateEmail(this.form.email)) {
        this.showToast('warning', 'Veuillez saisir une adresse email valide.');
        this.sendMessageBtn = false
        return;
      }
    console.log('storeMessage');
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
  }
}
</script>
  
  <style scoped></style>
  