<template>
  <div>
    <section class="tw-relative tw-pb-16 tw-pt-8 bg-blueGray-50">
      <div class="tw-w-full tw-mb-12">
        <div class="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded
          tw-bg-white tw-text-white">
          <div class="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
            <div class="tw-flex tw-flex-wrap tw-items-center">
              <div class="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1 ">
                <h3 class="tw-font-semibold tw-text-lg tw-text-yellow-500">Liste des apprenants</h3>
              </div>
            </div>
          </div>
          <div class="tw-block tw-w-full tw-overflow-x-auto ">
            <table class="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">
              <thead>
              <tr>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left tw-bg-yellow-600 tw-text-white">
                  Nom & Prénoms
                </th>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left tw-bg-yellow-600 tw-text-white">
                  Naissance
                </th>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left tw-bg-yellow-600 tw-text-white">
                  Sex
                </th>
                <th
                  class="tw-px-6 tw-border tw-align-middle tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold  tw-bg-yellow-600 tw-text-white">
                  Email
                </th>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left tw-bg-yellow-600 tw-text-white">
                </th>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left tw-bg-yellow-600 tw-text-white">
                </th>
              </tr>
              </thead>

              <tbody v-if="kids">

              <tr v-for="(kid, index) in kids" :key="index">
                <th class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center">
  <div class="tw-relative tw-flex-shrink-0">
    <div class="tw-top-0 tw-bg-yellow-600 tw-left-0 tw-h-10 tw-w-10 tw-flex tw-items-center tw-justify-center tw-bg-gray-500 tw-text-white tw-rounded-full">
      {{ kid.kid_firstname.substring(0, 1).toUpperCase() }}{{ kid.kid_lastname.substring(0, 1).toUpperCase() }}
    </div>
  </div>
  <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{ kid.kid_firstname }} {{ kid.kid_lastname }}</span>
</th>
                <td
                  class="tw-border-t-0 tw-px-6 tw-text-black tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{kid.kid_dateNais}}</span>
                </td>
                <td
                  class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <span class="tw-text-white tw-font-medium tw-bg-gray-500 tw-px-2.5 tw-py-1 tw-rounded-full">{{kid.kid_sex}}</span>
                </td>

                <td
                  class="tw-border-t-0 tw-px-6  tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap">
                  <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{kid.kid_email}}</span>
                </td>
                <td class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                  <a :href="'mailto:' + kid.kid_email" class="hover:tw-cursor-pointer tw-bg-yellow-600 tw-px-4 tw-py-2 tw-rounded tw-text-white">
                    <v-icon size="20" color="white" class="tw-text-green-500">mdi-gmail</v-icon>
                    Contacter
                  </a>
                </td>
                <td
                  class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                  <v-btn>
                    <v-icon color="green" class="tw-text-green-500">mdi-eye</v-icon>
                  </v-btn>
                  <!-- <v-btn>
                    <v-icon color="yelow" class="tw-text-green-500">mdi-pencil</v-icon>
                  </v-btn> -->
                  <v-btn>
                    <v-icon @click="deleteItem(kid)" color="red" class="tw-text-red-500">mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>


    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",

  data() {
    return {
      kids: [],
    }
  },

  created() {
    this.getAllKidsConfirmed();
  },

  methods: {
    async getAllKidsConfirmed() {
      await axios.get('/kids-confirmed')
        .then(response => {
          this.kids = response.data.data;
        })
    },

    async deleteItem(kid) {
      Swal.fire({
        icon: 'question',
        title: "Attention!",
        text: "Voulez-vous vraiment supprimer ce champion ?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "annuler",
        preConfirm: async () => {
          Swal.showLoading()
          await axios.delete('/kids/' + kid.id)
            .then(response => {
              this.showToast('success', 'Champion supprimé avec succès')
              this.getAllKidsConfirmed()
            })
          Swal.hideLoading()
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    },
  },

}
</script>

<style scoped>

</style>
