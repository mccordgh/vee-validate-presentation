<style scoped>
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
  <div>
    <div class="all-examples-wrapper">
      <div class="row">
        <div class="col-6">
          <label>First Name<span class="required-field">*</span></label>
          <input v-validate="'required'" name="firstName" type="text" class="form-item">
        </div>

        <div class="col-6">
          <label>Favorite Food</label>
          <select
            class="form-item"
            name="favoriteFood"
            v-validate="'required'"
            v-model="favoriteFood"
          >
            <option>Pizza</option>
            <option>Burgers</option>
            <option>Smoothies</option>
            <option>Tacos</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-6 text-left">
          <label>Remember Me?</label>

          <input
            type="checkbox"
            name="rememberMe"
            v-validate="'required'"
            v-model="rememberMe"
            class="form-item form-checkbox"
          >

          <span class="form-checkbox-text">Remember me!</span>
        </div>

        <div class="col-6 text-left">
          <label>Multiple Options</label>

          <div v-for="(option, index) in options" :key="index" class="group-wrapper">
            <input
              type="checkbox"
              name="options"
              :value="option"
              v-validate="'required'"
              v-model="selectedOptions"
              class="form-item form-checkbox"
            >

            <span class="form-checkbox-text">{{ option }}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6 text-left">
          <label>Yes or No</label>

          <div v-for="(option, index) in radioOptions" :key="index" class="group-wrapper">
            <input
              type="radio"
              name="yesOrNo"
              :value="option"
              v-validate="'required'"
              v-model="yesOrNo"
              class="form-item form-checkbox"
            >

            <span class="form-checkbox-text">{{ option }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row submit-wrapper">
      <button @click="validateFields">Submit!</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AllExamples',

    data() {
      return {
        rememberMe: true,
        favoriteFood: '',
        options: ['Option A', 'Option B', 'Option C'],
        radioOptions: ['Yes', 'No'],
        selectedOptions: [],
        yesOrNo: '',
      };
    },

    methods: {
      validateFields() {
        this.$validator.validate();
      },
    },
  };
</script>