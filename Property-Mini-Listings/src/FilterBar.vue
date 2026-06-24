<template>
  <div class="filter-bar">
    <div class="search-wrapper">
      <span class="search-icon">🔍</span>
      <input 
        type="text" 
        :value="search"
        @input="$emit('update:search', $event.target.value)"
        placeholder="Search by title or location..."
        class="search-input"
      />
    </div>
    
    <div class="sort-wrapper">
      <label for="sort-select">Sort By:</label>
      <select 
        id="sort-select"
        :value="sort" 
        @change="$emit('update:sort', $event.target.value)" 
        class="sort-select"
      >
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    search: {
      type: String,
      default: ''
    },
    sort: {
      type: String,
      default: 'low-to-high'
    }
  },
  emits: ['update:search', 'update:sort']
}
</script>

<style scoped>
.filter-bar {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 1.25rem;
  border-radius: 16px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
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
  font-size: 1rem;
  color: #94a3b8;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
  background: #ffffff;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
}

.sort-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.sort-wrapper label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
}

.sort-select {
  padding: 0.75rem 1.5rem 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
  font-size: 0.95rem;
  color: #1e293b;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sort-select:focus {
  border-color: #14b8a6;
}
</style>