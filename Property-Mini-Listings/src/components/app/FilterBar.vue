<template>
  <div class="filter-bar">
    <div class="search-wrapper">
      <span class="search-icon"></span>
      <input 
        v-model="searchModel"
        type="text" 
        placeholder="Search by title or location..."
        class="search-input"
      />
    </div>
    
    <div class="sort-wrapper">
      <label for="sort-select">Sort By:</label>
      <select 
        id="sort-select"
        v-model="sortModel" 
        class="sort-select"
      >
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  search: { type: String, default: '' },
  sort: { type: String, default: 'low-to-high' }
})

const emit = defineEmits(['update:search', 'update:sort'])

const searchModel = defineModel('search')
const sortModel = defineModel('sort')
</script>

<style scoped>
.filter-bar {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.search-wrapper {
  flex: 1;
  min-width: 260px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.search-input:focus {
  border-color: #14b8a6;
}

.sort-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-select {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
  font-size: 1rem;
  cursor: pointer;
}

.sort-select:focus {
  border-color: #14b8a6;
}
</style>