<template>
  <div>
    <div v-if="properties.length > 0" class="property-grid">
      <PropertyCard 
        v-for="item in properties" 
        :key="item.id" 
        :property="item" 
      />
    </div>
    
    <div v-else class="empty-state-card">
      <div class="icon"></div>
      <h3>No Properties Match Your Search</h3>
      <p>Try modifying your location or keyword search keywords.</p>
    </div>
  </div>
</template>

<script>
import PropertyCard from './PropertyCard.vue'

export default {
  name: 'PropertyGrid',
  components: {
    PropertyCard
  },
  props: {
    properties: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.empty-state-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.empty-state-card .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-state-card h3 {
  color: #1e293b;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.empty-state-card p {
  color: #64748b;
  font-size: 0.95rem;
}
</style>