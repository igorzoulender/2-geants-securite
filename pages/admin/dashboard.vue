<template>
  <div>
    <div class="tw-flex tw-w-full tw-gap-6 tw-py-6">
      <div class="tw-w-full md:tw-w-1/2 lg:tw-w-1/4 tw-rounded-lg tw-bg-white tw-shadow">
        <div class="tw-flex tw-justify-between tw-px-3 tw-py-4 tw-border-b-2">
              <span
                class="tw-h-12 tw-w-12 tw-bg-[#1A1943] tw-shadow-lg tw-rounded-lg tw-flex tw-justify-center tw-items-center">
                <v-icon class="tw-text-white" size="20">mdi-view-dashboard</v-icon>
              </span>

          <div class="tw-flex tw-flex-col">
            <span class="tw-text-xs tw-gray-500 tw-mb-2">Nombre de services</span>
            <span class="tw-font-bold tw-text-base tw-text-right">6</span>
          </div>
        </div>
      </div>

      <div class="tw-w-full md:tw-w-1/2 lg:tw-w-1/4 tw-rounded-lg tw-bg-white tw-shadow">
        <div class="tw-flex tw-justify-between tw-px-3 tw-py-4 tw-border-b-2">
              <span
                class="tw-h-12 tw-w-12 tw-bg-[#1A1943] tw-shadow-lg tw-rounded-lg tw-flex tw-justify-center tw-items-center">
                <v-icon class="tw-text-white" size="20">mdi-view-dashboard</v-icon>
              </span>

          <div class="tw-flex tw-flex-col">
            <span class="tw-text-xs tw-gray-500 tw-mb-2">Nombre de publications</span>
            <span class="tw-font-bold tw-text-base tw-text-right">{{ blog_publications.length }}</span>
          </div>
        </div>
      </div>

      <div class="tw-w-full md:tw-w-1/2 lg:tw-w-1/4 tw-rounded-lg tw-bg-white tw-shadow">
        <div class="tw-flex tw-justify-between tw-px-3 tw-py-4 tw-border-b-2">
              <span
                class="tw-h-12 tw-w-12 tw-bg-[#1A1943] tw-shadow-lg tw-rounded-lg tw-flex tw-justify-center tw-items-center">
                <v-icon class="tw-text-white" size="20">mdi-view-dashboard</v-icon>
              </span>

          <div class="tw-flex tw-flex-col">
            <span class="tw-text-xs tw-gray-500 tw-mb-2">Nombre de messages</span>
            <span class="tw-font-bold tw-text-base tw-text-right">{{ messages.length }}</span>
          </div>
        </div>
      </div>

      <div class="tw-w-full md:tw-w-1/2 lg:tw-w-1/4 tw-rounded-lg tw-bg-white tw-shadow">
        <div class="tw-flex tw-justify-between tw-px-3 tw-py-4 tw-border-b-2">
              <span
                class="tw-h-12 tw-w-12 tw-bg-[#1A1943] tw-shadow-lg tw-rounded-lg tw-flex tw-justify-center tw-items-center">
                <v-icon class="tw-text-white" size="20">mdi-view-dashboard</v-icon>
              </span>

          <div class="tw-flex tw-flex-col">
            <span class="tw-text-xs tw-gray-500 tw-mb-2">Nombre de demande</span>
            <span class="tw-font-bold tw-text-base tw-text-right">{{ demandes.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      blog_publications: [],
      messages: [],
      demandes: [],
    }
  },
  async created() {
      await this.initialize();
    },
    methods: {
      initialize() {
        this.getBlogPublication()
        this.getMessages()
      },
      async getBlogPublication() {
        await axios.get("/blog-publication-enable").then((response) => {
          this.blog_publications = response.data.blogs;
        
        });
      },

  

      async getMessages() {
        await axios.get('/messages')
          .then(response => {
            console.log(response.data)
            this.messages = response.data.messages.filter(message => message.typeMessage == "ContactSimple")
            this.demandes = response.data.messages.filter(message => message.typeMessage == "ContactService")
          })
      },
    },
}
</script>

<style scoped>

</style>
