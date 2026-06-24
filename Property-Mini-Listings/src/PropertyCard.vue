<template>
  <div class="property-card" :class="{ 'opacity-muted': !property.available }">
    <div class="image-container">
      <img :src="property.images[currentImageIndex]" :alt="property.title" class="property-image" />
      
      <div v-if="property.images && property.images.length > 1" class="image-nav">
        <button @click="prevImage" class="nav-btn prev" aria-label="Previous Image">❮</button>
        <button @click="nextImage" class="nav-btn next" aria-label="Next Image">❯</button>
        
        <div class="image-dots">
          <span 
            v-for="(img, index) in property.images" 
            :key="index" 
            class="dot"
            :class="{ active: index === currentImageIndex }"
            @click="currentImageIndex = index"
          ></span>
        </div>
      </div>

      <span v-if="!property.available" class="badge-unavailable">Not Available</span>
    </div>
    
    <div class="card-details">
      <div class="title-row">
        <div class="tags-row">
          <span class="type-tag">{{ property.type }}</span>
          <span v-if="property.available" class="status-tag available">Available</span>
          <span v-else class="status-tag unavailable">Sold / Rented</span>
        </div>
        <h3>{{ property.title }}</h3>
      </div>
      
      <p class="location">📍 {{ property.location }}</p>
      
      <div class="specs-bar">
        <span v-if="property.bedrooms">{{ property.bedrooms }} Beds</span>
        <span v-if="property.bathrooms">{{ property.bathrooms }} Baths</span>
        <span v-if="property.size">{{ property.size }}</span>
      </div>

      <div class="card-footer">
        <div class="price-container">
          <span class="price">R {{ formatPrice(property.price) }}</span>
          <span v-if="property.period" class="price-period">/ {{ property.period }}</span>
        </div>
        
        <button 
          @click="toggleBookmark"
          class="btn-bookmark"
          :class="{ 'is-active': property.isBookmarked }"
        >
          <span class="star" :class="property.isBookmarked ? 'favourited' : 'empty'"></span>
          {{ property.isBookmarked ? 'Favourited' : 'Favourite' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyCard',
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentImageIndex: 0
    }
  },
  methods: {
    formatPrice(price) {
      if (typeof price !== 'number') return price
      return price.toLocaleString('en-ZA')
    },
    toggleBookmark() {
      this.property.isBookmarked = !this.property.isBookmarked
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.property.images.length
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.property.images.length) % this.property.images.length
    }
  }
}
</script>

<style scoped>
.property-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.image-container {
  position: relative; 
  height: 220px;
  width: 100%;
  background-color: #f1f5f9;
  overflow: hidden;
}

.property-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-nav {
  opacity: 1;
}

.nav-btn {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  transition: background 0.2s;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.85);
}

.nav-btn.prev { border-radius: 0 4px 4px 0; }
.nav-btn.next { border-radius: 4px 0 0 4px; }

.image-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  border-radius: 12px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.dot.active {
  background: #ffffff;
}

.badge-unavailable {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ef4444;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.opacity-muted {
  opacity: 0.75;
}

.card-details {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.tags-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.type-tag {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #14b8a6;
  background: rgba(20, 184, 166, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}

.status-tag {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
}

.status-tag.available {
  color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.status-tag.unavailable {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.card-details h3 {
  margin: 0;
  font-size: 18px;
  color: #1e293b;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
}

.location {
  color: #64748b;
  font-size: 16px;
  margin: 14px 0 16px 0;
}

.specs-bar {
  display: flex;
  gap: 12px;
  font-size: 16px;
  color: #475569;
  background: #f8fafc;
  padding: 6px 10px;
  border-radius: 6px;
  margin-bottom: 16px;
}

.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
}

.price-container {
  display: flex;
  flex-direction: column;
}

.price {
  font-weight: 700;
  font-size: 16px;
  color: #1e293b;
}

.price-period {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  margin-top: -2px;
}

.btn-bookmark {
  background: transparent;
  border: 1px solid #cbd5e1;
  padding: 16px 16px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-bookmark:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}

.btn-bookmark.is-active {
  background: rgba(20, 184, 166, 0.1);
  border-color: #14b8a6;
  color: #14b8a6;
  font-weight: 600;
}

.star {
  display: inline-block;
  margin-right: 8px;
  font-size: 20px;
  line-height: 1;
}

.star.empty::before {
  content: "☆";
}

.star.favourited::before {
  content: "★";
}

</style>