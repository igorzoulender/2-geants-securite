<template>
  <v-container fluid>
    <div>
      <div
        class="tw-relative tw-px-20 tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-xs tw-rounded">
        <div class="tw-rounded-t tw-mb-0 tw-py-3 tw-border-0">
          <div class="tw-flex tw-flex-wrap tw-items-center">
            <div class="tw-relative tw-text-center tw-w-full tw-max-w-full tw-flex tw-flex-1">
              <h3 class="tw-font-semibold tw-text-center tw-text-lg tw-whitespace-nowrap">
                Formulaire d'enrégistrement de publication
              </h3>
              <div class="tw-flex tw-justify-end tw-w-full">
                <p class="tw-text-green-600 tw-text-lg hover:tw-cursor-pointer"
                  @click="$router.push('/admin/publications')">
                  <span class="mdi mdi-arrow-left-bold-circle-outline"></span>
                  Liste des publications
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <v-form ref="PublicationRef" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="publication.title" outlined label="Titre*" required
                  hint="Tapez le titre de la publication" :rules="nameRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input v-model="publication.photo" @change="onFileSelected" accept="image/*"
                  label="Image de la publication" outlined :rules="[v => !!v || 'File is mandatory']" show-size
                  truncate-length="100" clearable="true"></v-file-input>
              </v-col>

              <v-col cols="12">
                <vue-editor :rule="nameRules" id="editor" useCustomImageHandler @imageAdded="handleImageAdded"
                  v-model="publication.subject">
                </vue-editor>
              </v-col>
            </v-row>

            <v-btn @click="savePublication()" :loading="PublicationBtn" color="#1A1943"
              class="tw-text-white tw-w-full tw-mt-6">Publier
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
  
<script>
// import {VueEditor} from "vue2-editor";
import VueQuillEditor from 'vue-quill-editor';
import VueEditor from "vue2-editor"
export default {
  components: { VueQuillEditor, VueEditor },
  layout: "admin",
  data() {
    return {
      media: [],
      photo_index: 0,
      htmlForEditor: "",
      PublicationBtn: false,
      publication: {
        title: "",
        photo: null,
        subject: "<h1>Un petit texte par défaut</h1>"
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
  },
  methods: {
    onFileSelected() {
      this.selectedFile = event.target.files[0];
    },
    async savePublication() {
      if (this.$refs.PublicationRef.validate()) {
        this.PublicationBtn = true
        let formData = new FormData();
        formData.append("title", this.publication.title);
        formData.append("subject", this.publication.subject);
        formData.append("photo", this.publication.photo);
        await axios.post('/save-blog-publication', formData).then(res => {
          if (res.data.error) {
            Swal.fire({
              title: 'Echec',
              text: "Une erreur s'est produite",
              icon: 'error'
            })
            this.PublicationBtn = false
            return
          }
          this.PublicationBtn = false
          this.publication = {
            title: "",
            subject: "",
            photo: ""
          },
            this.showToast('success', 'Publication crée avec succès')
        }).catch(error => {
          this.PublicationBtn = false
          console.log(error)
          this.showToast('error', "Error")
        })
      }
    },
  },
};
</script>