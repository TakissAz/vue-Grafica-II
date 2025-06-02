<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/cosa-rotando">Cubo rotando</RouterLink>
        <RouterLink to="/gato-rotando">Dodecaedro</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 1.5rem;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #ccc;
  text-decoration: none;
  color: #333;
}

nav a:first-of-type {
  border-left: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
