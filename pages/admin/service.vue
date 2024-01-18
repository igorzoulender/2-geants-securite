<template>
  <div>
    <!-- ====== Table Section Start -->
    <section class="tw-bg-white tw-mt-6">
      <div class="tw-container tw-mx-auto">
        <div class="tw--mx-4 tw-flex tw-flex-wrap">
          <div class="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
            <div class="tw-flex tw-flex-wrap tw-items-center">
              <div class="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1 ">
                <h3 class="tw-font-semibold tw-text-lg tw-text-[#1A1943]">Liste des services</h3>
              </div>
            </div>
          </div>
          <div class="tw-w-full tw-px-4">
            <div class="tw-max-w-full tw-overflow-x-auto">
              <table class="tw-w-full tw-table-auto">
                <thead>
                  <tr class="tw-bg-red-700 tw-text-center">
                    <th
                      class="tw-w-1/6 tw-min-w-[160px] tw-border-l tw-border-transparen tw-px-3 tw-text-md tw-font-semibold tw-text-white lg:tw-p-2">
                      Nom
                    </th>
                    <th class="tw-w-1/6 tw-min-w-[160px] tw-px-3 tw-text-md tw-font-medium tw-text-white lg:tw-p-2">
                      Prénoms
                    </th>
                    <th class="tw-w-1/6 tw-min-w-[160px] tw-px-3 tw-text-md tw-font-medium tw-text-white lg:tw-p-2">
                      Email
                    </th>
                    <th class="tw-w-1/6 tw-min-w-[160px] tw-px-3 tw-text-md tw-font-medium tw-text-white lg:tw-p-2">
                      Contact
                    </th>
                    <th class="tw-w-1/6 tw-min-w-[160px] tw-px-3 tw-text-md tw-font-medium tw-text-white lg:tw-p-2">
                      Date
                    </th>
                    <th
                      class="tw-w-1/6 tw-min-w-[160px] tw-border-r tw-border-transparen tw-px-3 tw-text-md tw-font-semibold tw-text-white lg:tw-p-2">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="displayedData.length > 0" v-for="message in displayedData" :key="message.id">
                    <td
                      class="tw-text-dark tw-border-b tw-border-l tw-border-[#E8E8E8] tw-bg-[#F3F6FF] tw-py-5 tw-px-2 tw-text-center tw-text-base tw-font-medium">
                      {{ message.firstname }}
                    </td>
                    <td
                      class="tw-text-dark tw-border-b tw-border-[#E8E8E8] tw-bg-white tw-py-5 tw-px-2 tw-text-center tw-text-base tw-font-medium">
                      {{ message.lastname }}
                    </td>
                    <td
                      class="tw-text-dark tw-border-b tw-border-[#E8E8E8] bg-[#F3F6FF] tw-py-5 tw-px-2 tw-text-center tw-text-base tw-font-medium">
                      {{ message.email }}
                    </td>
                    <td
                      class="tw-text-dark tw-border-b tw-border-[#E8E8E8] tw-bg-white tw-py-5 tw-px-2 tw-text-center tw-text-base tw-font-medium">
                      {{ message.telephone }}
                    </td>
                    <td
                      class="tw-text-dark tw-border-b tw-border-[#E8E8E8] tw-bg-[#F3F6FF] tw-py-5 tw-px-2 tw-text-center tw-text-base tw-font-medium">
                      {{ message.created_at | moment('DD-MM-YYYY') }}
                    </td>
                    <td
                      class="tw-text-dark tw-border-b tw-border-r tw-border-[#E8E8E8] tw-bg-white tw-py-5 tw-px-2 tw-text-center tw-text-base tw-font-medium">
                      <button @click="openMessageModal(message.id)"
                        class="tw-text-yellow-600 tw-inline-block tw-rounded tw-border tw-border-yellow-500 tw-py-2 tw-px-6">
                        Lire
                      </button>
                    </td>
                    <div class="text-center">
                      <v-dialog :value="messageModals[message.id]" max-width="500px">
                        <v-card style="box-shadow: none !important">
                          <v-toolbar dark color="primary">
                            <v-toolbar-title>Message de {{ message.firstname }} {{ message.lastname }}</v-toolbar-title>
                            <v-spacer></v-spacer>
                          </v-toolbar>
                          <v-form ref="form">
                            <v-card-text>
                              <v-container grid-list-md>
                                <v-layout wrap>
                                  <v-flex xs12>
                                    {{ message.message }}
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="darken-1" @click="closeMessageModal(message.id)">Fermer</v-btn>
                            </v-card-actions>
                          </v-form>
                        </v-card>
                      </v-dialog>
                    </div>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-model="page" :length="pages" prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Table Section End -->
  </div>
</template>
  
<script>
export default {
  layout: "admin",
  data() {
    return {
      data: [],
      messages: [],
      messageModals: [],
      dialog: false,
      itemsPerPage: 10,
      page: 1,
    }
  },

  created() {
    this.getMessages()
  },

  methods: {
    async getMessages() {
      await axios.get('/messages')
        .then(response => {
          console.log(response.data)
          this.messages = response.data.messages.filter(message => message.typeMessage == "ContactService");
          // console.log("la listes des messages: ", this.messages);
          this.messages.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
        })
    },
    openMessageModal(messageId) {
      this.$set(this.messageModals, messageId, true);
    },
    closeMessageModal(messageId) {
      this.$set(this.messageModals, messageId, false);
    }

  },
  computed: {
    pages() {
      return Math.ceil(this.messages.length / this.itemsPerPage)
    },
    displayedData() {
      const start = (this.page - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.messages.slice(start, end)
    },
  }
}
</script>
  
<style scoped></style>
  