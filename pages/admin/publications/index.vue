<template>
  <v-container fluid>
    <div>
      <v-dialog v-model="showPublicationForm" persistent max-width="600px">
        <v-form ref="profModal" lazy-validation>
          <v-card>
            <v-card-title>
              <span class="text-h5">Mettre à jour un cours</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="publication.title" label="Intitulé*" placeholder="Tapez l'intitulé du cour"
                      required :rules="nameRules"></v-text-field>
                  </v-col>
                  <v-col cols="12">

                    <vue-quill-editor :rule="nameRules" id="editor" useCustomImageHandler @imageAdded="handleImageAdded"
                      v-model="publication.subject">
                    </vue-quill-editor>
                  </v-col>
                </v-row>
              </v-container>
              <small>*Indique un champ requis</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="showPublicationForm = false, publicationIsEditing = false, publication = {
                title: '', photo: '', subject: ''
              }">
                Annuler
              </v-btn>
              <v-btn v-if="publicationIsEditing" color="blue darken-1" class="tw-text-white" :loading="registerBtn"
                @click="updateCour()">
                Mettre à jour
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
            </v-dialog>
      <div
        class="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded {color === 'light' ? 'tw-bg-white' : 'tw-bg-red-800 tw-text-white'}">
        <div class="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
          <div class="tw-flex tw-flex-wrap tw-items-center">
            <div class="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex tw-flex-1">
              <h3 class="tw-font-semibold tw-text-lg tw-whitespace-nowrap">
                Liste des publications
              </h3>
              <div class="tw-flex tw-justify-end tw-w-full">
                <p class="tw-text-green-600 tw-text-lg hover:tw-cursor-pointer"
                  @click="$router.push('/admin/add-publication')">
                  <v-icon class="tw-text-green-600">mdi-plus-circle-outline</v-icon>
                  Faire une publication
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="tw-block tw-w-full tw-overflow-x-auto">
          <!-- Projects tw-table -->
          <table class="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">
            <thead>
              <tr>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left">
                  Publication
                </th>

                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left">
                  Publié le
                </th>
                <th
                  class="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(publication, index) in displayedData" :key="index">
                <th
                  class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center">
                  <img :src="backendImage(publication.photo)"
                    class="tw-h-12 tw-w-12 tw-bg-white tw-rounded-full tw-border" alt="publication image" />
                  <span class="tw-ml-3 tw-font-bold tw-text-base">
                    {{ publication.title }}
                  </span>
                </th>

                <td
                  class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <a href="#" class="tw-text-gray-800">{{ publication.created_at | moment('DD-MM-YYYY') }}</a>
                </td>

                <td style="width: 60px"
                  class="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div class="tw-flex tw-items-center tw-gap-2">
                    <v-btn @click="statusPublication(publication)">
                      <v-icon v-if="publication.status" color="green">mdi-lock-open-variant-outline</v-icon>
                      <v-icon v-else color="red">mdi-lock</v-icon>
                    </v-btn>

                    <NuxtLink :to="`/admin/publications/${publication.id}`">
                      <v-btn>
                        <v-icon color="red">mdi-pencil</v-icon>
                      </v-btn>
                    </NuxtLink>

                    <v-btn @click="deletePublicationItem(publication)">
                      <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <v-pagination v-model="page" :length="pages" prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"></v-pagination>
        </div>
      </div>
    </div>
  </v-container>
</template>
  
<script>
// import {VueEditor} from "vue2-editor";
import VueQuillEditor from 'vue-quill-editor';

export default {
  layout: "admin",
  components: { VueQuillEditor },

  data() {
    return {
      blog_publications: [],
      itemsPerPage: 10,
      page: 1,
      PublicationBtn: false,
      dialog: false,
      showPublicationForm: false,
      publicationIsEditing: false,
      publication: {
        title: "",
        subject: "",
        photo: null,
      },
      nameRules: [
        v => !!v || 'Ce champs est obligatoire',
      ],
      emailRules: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Entrez un email valide'
      ],

    }
  },
  mounted() {
    this.getBlogPublication()
  },
  methods: {
    onFileSelected() {
      this.selectedFile = event.target.files[0];
    },
    initialize() {
      this.getBlogPublication();
    },
    async getBlogPublication() {
      await axios.get('/blog-publication')
        .then(response => {
          this.blog_publications = response.data.blogs;
        })
    },
    deletePublicationItem(item) {
      Swal.fire({
        icon: 'question',
        title: "Attention!",
        text: "Voulez-vous vraiment supprimer cette publication ?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "annuler",
        preConfirm: async () => {
          Swal.showLoading()
          await axios.delete('/blog-publication/' + item.id)
            .then(response => {
              this.showToast('success', 'Publication supprimée avec succès')
              this.initialize()
            })
            .catch(error => {
              this.showToast('error', 'Une erreur s\'est produite')
            })
          Swal.hideLoading()
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    },
    statusPublication(item) {
      Swal.fire({
        icon: 'question',
        title: "Attention!",
        text: "Voulez-vous vraiment changer le status de cette publication ?",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "annuler",
        preConfirm: async () => {
          Swal.showLoading()
          await axios.post('/blog-status/' + item.id)
            .then(response => {
              this.showToast('success', 'Statut changé avec success')
              this.initialize()
            })
            .catch(error => {
              this.showToast('error', 'Une erreur s\'est produite')
            })
          Swal.hideLoading()
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    },
    editItem(item) {
      this.courIsEditing = true
      this.publication = item
      this.showPublicationForm = true
    },
    async updateStation() {
      this.btnLoading = true
      await axios.put('/societe/' + this.station.id, this.station).then((response) => {
        if (response.data.error) {
          this.btnLoading = false
          Swal.fire({
            title: 'Echec',
            text: 'Une Erreur s\'est produite',
            icon: 'error'
          })
          return
        }
        this.station = {
          dirigeant_is_proprio: "isadmin",
          type_societe_id: 1,
          nom: "",
          nif: "",
          rccm: "",
          email: "",
          adresse: "",
          description: "",
          site_web: "",
          telephone: "",
          dirigeant_nom: "",
          dirigeant_email: "",
          dirigeant_prenom: "",
          dirigeant_telephone: "",
          nom_proprio: "",
          email_proprio: "",
          prenom_proprio: "",
          telephone_proprio: "",
          ville_id: null,
          region_id: null
        },
          this.btnLoading = false
        this.dialog = false,
          this.showToast('success', 'Station modifiée avec succès')
        this.getBusStations()
      }).catch(error => {
        this.showToast('error', "Une erreur s'est produite")
      });
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.blog_publications.length / this.itemsPerPage)
    },
    displayedData() {
      const start = (this.page - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.blog_publications.slice(start, end)
    },
  }
};
</script>