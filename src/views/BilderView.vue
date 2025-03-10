<template>
  <h1 class="bilder-header">Bilder</h1>
  <div class="gallery-container">
    <div v-for="(gallery, gIndex) in galleries" :key="gIndex" class="gallery">
      <h3>{{ gallery.title }}</h3>
      <div class="images">
        <img
          v-for="(img, index) in gallery.images"
          :key="index"
          :src="img"
          alt="Gallery Image"
          @click="openLightbox(gallery.images, index)"
        />
      </div>
    </div>

    <!-- Lightbox -->
    <VueEasyLightbox
      :visible="showLightbox"
      :imgs="selectedImages"
      :index="selectedImageIndex"
      @hide="closeLightbox"
    />
  </div>
  <hr />
  <!-- für den gelben Style unten  -->
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Bilder nach Kategorien sortiert
const galleries = ref([
  {
    title: '🏹 Indoor',
    images: ['src/assets/pictures/Indoor_01.jpg', 'src/assets/pictures/Indoor_02.jpg'],
  },
  {
    title: '🥇 Wettkämpfe',
    images: [
      'src/assets/pictures/Wettkampf_01.jpg',
      'src/assets/pictures/Wettkampf_02.jpg',
      'src/assets/pictures/Wettkampf_03.jpg',
      'src/assets/pictures/Wettkampf_04.jpg',
    ],
  },
  {
    title: '🏹 Outdoor',
    images: [
      'src/assets/pictures/Outdoor_01.jpg',
      'src/assets/pictures/Outdoor_02.jpg',
      'src/assets/pictures/Outdoor_03.jpg',
      'src/assets/pictures/Outdoor_04.jpg',
    ],
  },
])

const showLightbox = ref(false)
const selectedImages = ref([])
const selectedImageIndex = ref(0)

// Lightbox öffnen und nur die Bilder der gewählten Kategorie anzeigen
const openLightbox = (images, index) => {
  selectedImages.value = images
  selectedImageIndex.value = index
  showLightbox.value = true
}

// Lightbox schließen
const closeLightbox = () => {
  showLightbox.value = false
}
</script>

<style scoped>
.bilder-header {
  background-color: rgb(199, 159, 47);
  padding-block: 1.2rem;
  text-align: center;
}

.gallery-container {
  text-align: center;
}

h3 {
  color: #c7611e;
  margin-block: 1rem;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.images img {
  width: 150px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease;
  border: 1px solid;
}

.images img:hover {
  transform: scale(1.1);
}

hr {
  border: 5px solid rgb(199, 159, 47);
  margin-top: 2rem;
  margin-bottom: 2px;
}

/* @media (min-width: 1024px) {
  .gutschein {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
