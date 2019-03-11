<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .row {
    padding: 1rem 2rem;
  }

  .link-separator {
    margin:  2rem;
  }

  .nav-links {
    margin: 1.6rem 1.6rem 2rem;
  }

  a {
    border: 1px solid black;
    border-radius: 1rem;
    color: black;
    padding: 0.6rem 1rem;
  }

  a:hover {
    color: blue;
    text-decoration: none;
  }

  .active-link {
    color: white;
    background-color: black;
  }

  .active-link:hover {
    color: white;
  }

  .text-left {
    text-align: left;
  }
</style>

<template>
  <div id="app">
    <div class="nav-links">
      <a href
        @click.prevent="showExamples = true"
        :class="{ 'active-link' : showExamples }"
      >Show All Examples</a>

      <span class="link-separator">|</span>

      <a href
        @click.prevent="showExamples = false"
        :class="{ 'active-link' : !showExamples }"
      >Show Profile Example</a>
    </div>

    <template v-if="showExamples">
      <all-examples />
    </template>

    <template v-else>
      <profile />
    </template>
  </div>
</template>

<script>
  import Profile from './components/Profile.vue';
  import AllExamples from './components/AllExamples.vue';

  export default {
    name: 'app',

    data() {
      return {
        showExamples: true,
      };
    },

    components: {
      AllExamples,
      Profile,
    },
  };
</script>
