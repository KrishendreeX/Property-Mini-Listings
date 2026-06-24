<script>
import AppHeader from './AppHeader.vue'
import FilterBar from './FilterBar.vue'
import PropertyGrid from './PropertyGrid.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    FilterBar,
    PropertyGrid
  },
  data() {
    return {
      searchQuery: '',
      sortBy: 'low-to-high',
      properties: [
        {
          id: 1,
          title: 'Observatory Apartment',
          location: '10 William Street, Observatory',
          price: 2650000,
          type: 'House',
          size: '180m²',
          bedrooms: 2,
          bathrooms: 1,
          garage: 0,
          images: [
            'https://i.ibb.co/CKcHGR3H/observ.jpg',
            'https://i.ibb.co/b5xQLSbx/observ1.jpg',
            'https://i.ibb.co/rK4m6jDM/observ2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 2,
          title: 'Luxury House',
          location: 'Table View',
          price: 3495000,
          type: 'House',
          size: '704m²',
          bedrooms: 4,
          bathrooms: 3,
          garage: 4,
          images: [
            'https://i.ibb.co/DDn7ZVvg/tableview.png',
            'https://i.ibb.co/Gf6x7cRb/tableview1.jpg',
            'https://i.ibb.co/0pmH4XRQ/tableview2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 3,
          title: 'Cosy House',
          location: 'Sunnydale',
          price: 3795000,
          type: 'House',
          size: '704m²',
          bedrooms: 3,
          bathrooms: 2,
          garage: 4,
          images: [
            'https://i.ibb.co/0yYddckX/sunnydale.jpg',
            'https://i.ibb.co/pj8Hz8W6/sunnydale1.jpg',
            'https://i.ibb.co/rGY1QQPs/sunnydale2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 4,
          title: 'Luxury House',
          location: 'Somerset West',
          price: 5500000,
          type: 'House',
          size: '491m²',
          bedrooms: 3,
          bathrooms: 2.5,
          garage: 4,
          images: [
            'https://i.ibb.co/vv49yrKk/somerset-west.jpg',
            'https://i.ibb.co/VpNwh5By/somerset-west1.jpg',
            'https://i.ibb.co/gLH9FBsH/somerset-west2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 5,
          title: 'Westridge Somerset West',
          location: '14 keurboom avenue, westridge, somerset west',
          price: 5500000,
          type: 'House',
          size: '340m²',
          bedrooms: 4,
          bathrooms: 3,
          garage: 6,
          images: [
            'https://i.ibb.co/n8KT8qt3/westridge-somerset-west.jpg',
            'https://i.ibb.co/0pK7qT3v/westridge-somerset-west1.jpg',
            'https://i.ibb.co/xKJj9M7g/westridge-somerset-west2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 6,
          title: '2 Bedroom Townhouse in Vredenburg',
          location: 'Contact agent for more information',
          price: 1795000,
          type: 'House',
          size: '182m²',
          bedrooms: 2,
          bathrooms: 1,
          garage: 2,
          images: [
            'https://i.ibb.co/JRX0648g/vredenberg.jpg',
            'https://i.ibb.co/sdSsM2dZ/vredenbery1.jpg',
            'https://i.ibb.co/LdG68kdn/vredenberg2.jpg'
          ],
          available: false,
          isBookmarked: false
        },
        {
          id: 7,
          title: 'Gordons Bay, Central',
          location: 'harbour park, 42 lancaster road',
          price: 5500000,
          type: 'House',
          size: '180m²',
          bedrooms: 3,
          bathrooms: 3,
          garage: 2,
          images: [
            'https://i.ibb.co/Pvnc8Rbw/gordons-bay.jpg',
            'https://i.ibb.co/LDsmcxSB/gordons-bay1.jpg',
            'https://i.ibb.co/b56qr40M/gordons-bay2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 8,
          title: '2 Bedroom Apartment in Sea Point, Cape Town',
          location: '702 onehundredonm, 100 main road',
          price: 12995000,
          type: 'Apartment',
          size: '104m²',
          bedrooms: 2,
          bathrooms: 3,
          garage: 1,
          images: [
            'https://i.ibb.co/kgVSJW2g/SEA-POINT.jpg',
            'https://i.ibb.co/p6ytq2bm/SEA-POINT1.jpg',
            'https://i.ibb.co/35rcT8bx/SEA-POINT2.jpg'
          ],
          available: false,
          isBookmarked: false
        },
        {
          id: 9,
          title: '1 Bedroom Apartment in Sea Point',
          location: '146 main road',
          price: 4450000,
          type: 'Apartment',
          size: '44m²',
          bedrooms: 1,
          bathrooms: 1,
          garage: 2,
          images: [
            'https://i.ibb.co/wrL6S0hD/seapoint.jpg',
            'https://i.ibb.co/gMMYktx4/seapoint1.jpg',
            'https://i.ibb.co/sdGLwLTH/seapoint2.jpg'
          ],
          available: true,
          isBookmarked: false
        },
        {
          id: 10,
          title: '2 Bedroom Apartment in Brackenfell Central',
          location: '1 simonsberg, 40 fairview crescent',
          price: 1595000,
          type: 'Apartment',
          size: '70m²',
          bedrooms: 2,
          bathrooms: 1,
          garage: 0,
          images: [
            'https://i.ibb.co/R4MVw7xg/Brackenfell.jpg',
            'https://i.ibb.co/h1HkCNJj/brackenfell1.jpg',
            'https://i.ibb.co/9mf3FSFC/brackenfell2.jpg'
          ],
          available: false,
          isBookmarked: false
        }
      ]
    }
  },
  computed: {
    filteredProperties() {
      const query = this.searchQuery.toLowerCase().trim()

      let filtered = this.properties.filter(property => {
        return property.title.toLowerCase().includes(query) || 
               property.location.toLowerCase().includes(query)
      })

      if (this.sortBy === 'low-to-high') {
        filtered.sort((a, b) => a.price - b.price)
      } else if (this.sortBy === 'high-to-low') {
        filtered.sort((a, b) => b.price - a.price)
      }

      return filtered
    }
  }
}
</script>

<template>
  <div class="app-background">
    <div class="listings-container">
      <AppHeader :totalProperties="filteredProperties.filter(p => p.available).length" />
      <FilterBar v-model:search="searchQuery" v-model:sort="sortBy" />
      <PropertyGrid :properties="filteredProperties" />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.app-background {
  min-height: 100vh;
  background: radial-gradient(circle at top right, #f3f8fa, #eef3f6);
  padding: 2rem 1rem;
}

.listings-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>