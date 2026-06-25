<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import AppHeader from './AppHeader.vue'
import FilterBar from './FilterBar.vue'
import PropertyGrid from './PropertyGrid.vue'

const store = useStore()

const searchQuery = ref('')
const sortBy = ref('low-to-high')

const filteredProperties = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  const allProperties = store.state.properties
  let result = allProperties.filter(property => {
    return property.title.toLowerCase().includes(query) || 
           property.location.toLowerCase().includes(query)
  })

  if (sortBy.value === 'low-to-high') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'high-to-low') {
    result.sort((a, b) => b.price - a.price)
  }

  return result
})

const availableCount = computed(() => {
  return filteredProperties.value.filter(p => p.available).length
})
</script>

<template>
  <div class="listings-container">
    <AppHeader :totalProperties="availableCount" />
    
    <FilterBar v-model:search="searchQuery" v-model:sort="sortBy" />
    
    <PropertyGrid :properties="filteredProperties" />
  </div>
</template>