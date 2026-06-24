<template>
  <header class="app-header">
    <h1 class="brand-title">Zesty Homes</h1>
    <div class="counter-badge">
      <span class="label">Available Listings:</span>
      <span class="count-pill">{{ totalProperties }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    totalProperties: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 8px;
}

.brand-title {
  font-size: 34px;
  color: #1e293b;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.counter-badge {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #ffffff;
  padding: 14px 16px;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.label {
  font-size: 16px;
  color: #64748b;
  font-weight: 500;
}

.count-pill {
  background: #14b8a6;
  color: #ffffff;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>