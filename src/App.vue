<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .row {
    padding: 2rem;
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

  .error-message {
    bottom: -2rem;
    color: red;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0;
    position: absolute;
    text-align: left;
    width: 100%;
  }
    .all-examples-wrapper {
    border: 0.1rem solid rgb(238, 238, 238);
    border-radius: 1rem;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin: 0 auto;
    max-width: 60rem;
    padding: 1.5rem;
  }

  button {
    background-color: #206177;
    border-radius: 1rem;
    color: white;
    font-size: 1.8rem;
    height: 4rem;
    margin: 1rem auto 0;
    width: 9rem
  }

  .required-field {
    color: red;
  }

  label {
    font-size: 1.6rem;
    font-weight: bolder;
    text-align: left;
    width: 100%;
  }

  .form-block {
    position: relative;
  }

  .form-item {
    border-color: rgb(238, 238, 238);
    border-radius: 0.4rem;
    font-size: 1.4rem;
    height: 3rem;
    padding: 1rem;
    width: 100%;
  }

  .form-checkbox {
    height: 1rem;
    width: 1rem;
  }

  .form-checkbox-text {
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 0.6rem;
  }

  .group-wrapper {
    display: inline-block;
    margin-left: 0.6rem;
  }
</style>

<template>
  <div id="app">
    <div class="nav-links">
      <a href
        @click.prevent="currentView = 'all-examples'"
        :class="{ 'active-link' : currentView === 'all-examples' }"
      >Show All Examples</a>

      <span class="link-separator">|</span>

      <a href
        @click.prevent="currentView = 'profile'"
        :class="{ 'active-link' : currentView === 'profile' }"
      >Show Profile Example</a>
    </div>

    <div v-on:testers="successEvent">
      <template v-if="currentView === 'all-examples'">
        <all-examples />
      </template>

      <template v-if="currentView === 'profile'">
        <profile />
      </template>

      <template v-if="currentView === 'success'">
        <success />
      </template>
    </div>
  </div>
</template>

<script>
  import AllExamples from './components/AllExamples.vue';
  import Profile from './components/Profile.vue';
  import Success from './components/Success.vue';

  export default {
    name: 'app',

    data() {
      return {
        currentView: 'profile',
        // currentView: 'all-examples',
      };
    },

    methods: {
      successEvent() {
        this.currentView = 'success';
      },
    },

    components: {
      AllExamples,
      Success,
      Profile,
    },
  };
</script>
