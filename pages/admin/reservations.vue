<template>
  <div>
    <v-card class="tw-my-8">
      <v-tabs v-model="tab" background-color="tw-bg-yellow-600" centered dark icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Demandes en attentes
          <v-icon>mdi-file-clock</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          Demandes confirmées
          <v-icon>mdi-file-document-multiple</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <v-card flat>
            <v-card-text>
              <div class="tw-block tw-w-full tw-overflow-x-auto">
                <table class="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">

                  <tbody v-if="kids">

                    <tr v-for="(kid, index) in kids" :key="index" v-if="kid.status === '0'">
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
                        <span
                          class="tw-text-white tw-font-medium tw-bg-gray-500 tw-px-2.5 tw-py-1 tw-rounded-full">{{kid.kid_sex}}</span>
                      </td>

                      <td
                        class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                        <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{ kid.kid_email }}</span>
                      </td>

                      <td
                        class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                        <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{ $moment(kid.created_at).format('MMMM D,YYYY') }}</span>
                      </td>

                      <td 
                        class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                        <div class="tw-flex tw-w-full tw-justify-end tw-gap-2">
                          <span class="hover:tw-cursor-pointer tw-bg-yellow-600 tw-px-4 tw-py-2 tw-rounded tw-text-white"
                          @click="dialog = true">
                          <v-icon size="20" color="white" class="tw-text-blue-500">mdi mdi-apps-box</v-icon>
                          Voir détail
                        </span>
                        <span class=" hover:tw-cursor-pointer tw-bg-yellow-600 tw-px-4 tw-py-2 tw-text-xs tw-rounded tw-text-white"
                          @click="updateStatus(kid.id)">
                          <v-icon size="20" color="white" class="tw-text-green-500">mdi-hand-back-left</v-icon>
                          Commencer le traitement
                        </span>
                        </div>
                      </td>

                      <v-dialog v-model="dialog" width="500">
                        <v-card>
                          <v-card-title class="text-h5 grey lighten-2">
                            Informations supplémentaire
                          </v-card-title>

                          <v-card-text>
                            <div class="tw-flex tw-gap-4">
                                <div class="tw-bg-yellow-600" style="width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                                  <span style="color: white; font-size: 20px;">{{ kid.father_firstname[0] }}</span>
                                </div>

                                <div class="tw-flex tw-flex-col tw-gap-1">
                                  <h1 class="tw-font-medium">{{ kid.father_email }} - {{ kid.father_contact }}</h1>
                                  <h2 class="tw-text-gray-600 tw-text-sm">{{ kid.father_firstname }}
                                    {{ kid.father_lastname }},{{ kid.kid_adresse }}</h2>
                                </div>
                              </div>
                          </v-card-text>

                          <v-divider></v-divider>
                          <v-card-text>
                            <div class="tw-flex tw-gap-4">
                              <div class="tw-bg-yellow-600" style="width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                                  <span style="color: white; font-size: 20px;">{{ kid.mother_firstname[0] }}</span>
                                </div>

                              <div class="tw-flex tw-flex-col tw-gap-1">
                                <h1 class="tw-font-medium">{{ kid.mother_email }} - {{ kid.mother_contact }}</h1>
                                <h2 class="tw-text-gray-600 tw-text-sm">{{ kid.mother_firstname }}
                                  {{ kid.mother_lastname }},{{ kid.kid_adresse }}</h2>
                              </div>
                            </div>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false">
                              Fermer
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <div class="tw-block tw-w-full tw-overflow-x-auto">
                <table class="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">

                  <tbody v-if="kids">

                    <tr v-for="(kid, index) in kids" :key="index" v-if="kid.status === '1'">
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
                        <span
                          class="tw-text-white tw-font-medium tw-bg-gray-500 tw-px-2.5 tw-py-1 tw-rounded-full">{{kid.kid_sex}}</span>
                      </td>

                      <td
                        class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                        <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{kid.kid_email}}</span>
                      </td>

                      <td
                        class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                        <span class="tw-ml-3 tw-font-bold tw-text-gray-800">{{ $moment(kid.created_at).format('MMMM D, YYYY') }}</span>
                      </td>

                      <td class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                        <a :href="'mailto:' + kid.kid_email" class="hover:tw-cursor-pointer tw-bg-yellow-600 tw-px-4 tw-py-2 tw-rounded tw-text-white">
                          <v-icon size="20" color="white" class="tw-text-green-500">mdi-gmail</v-icon>
                          Contacter
                        </a>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      tab: null,
      items: [/* list of items */],
      modalIsOpen: false,
      selectedIndex: null,
      kids: [],
      dialog: false,
      items: [
        'Demandes en attentes', 'Demandes Confirmées',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  created() {
    this.getAllKids()
  },

  computed: {
    selectedItem() {
      return this.items[this.selectedIndex]
    },
  },
  methods: {
    openModal(index) {
      this.selectedIndex = index
      this.modalIsOpen = true
    },

    initialise() {
      this.getAllKids()
      this.updateStatus()
    },
    async getAllKids() {
      await axios.get('/kids')
        .then(response => {
          this.kids = response.data.data;
        })
    },

    async updateStatus(id) {
      await axios.get(`/update-status/${id}`)
        .then(response => {
          this.kids = response.data.data;
        })
        this.getAllKids()
    },
  }
}
</script>

<style scoped></style>
