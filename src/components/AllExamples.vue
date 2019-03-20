<template>
  <div>
    <div class="all-examples-wrapper">
      <div class="row">
        <div class="col-6 form-block">
          <label>First Name<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            name="firstName"
            data-vv-as="First Name"
            type="text"
            class="form-item"
          >

          <p class="error-message">
            {{ errors.first('firstName') }}
          </p>
        </div>

        <div class="col-6 form-block">
          <label>Favorite Food</label>

          <select
            class="form-item"
            name="favoriteFood"
            data-vv-as="Favorite Food"
            v-validate="'required'"
            v-model="favoriteFood"
          >
            <option>Pizza</option>
            <option>Burgers</option>
            <option>Smoothies</option>
            <option>Tacos</option>
          </select>

          <p class="error-message">
            {{ errors.first('favoriteFood') }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-6 text-left form-block">
          <label>Do You Agree To Zee Terms?</label>

          <input
            type="checkbox"
            name="doYouAgree"
            data-vv-as="Do You Agree?"
            v-validate="'required'"
            v-model="doYouAgree"
            class="form-item form-checkbox"
          >

          <span class="form-checkbox-text">I Agreez!</span>

          <p class="error-message">
            {{ errors.first('doYouAgree') }}
          </p>
        </div>

        <div class="col-6 text-left form-block">
          <label>Multiple Options</label>

          <div v-for="(option, index) in options" :key="index" class="group-wrapper">
            <input
              type="checkbox"
              name="options"
              data-vv-as="Multiple Options"
              :value="option"
              v-validate="'required'"
              v-model="selectedOptions"
              class="form-item form-checkbox"
            >

            <span class="form-checkbox-text">{{ option }}</span>
          </div>

          <p class="error-message">
            {{ errors.first('options') }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-6 text-left form-block">
          <label>Yes or No</label>

          <div v-for="(option, index) in radioOptions" :key="index" class="group-wrapper">
            <input
              type="radio"
              name="yesOrNo"
              data-vv-as="Yes or No"
              :value="option"
              v-validate="'required'"
              v-model="yesOrNo"
              class="form-item form-checkbox"
            >

            <span class="form-checkbox-text">{{ option }}</span>
          </div>

          <p class="error-message">
            {{ errors.first('yesOrNo') }}
          </p>
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
        doYouAgree: false,
        favoriteFood: '',
        options: ['Option A', 'Option B', 'Option C'],
        radioOptions: ['Yes', 'No'],
        selectedOptions: [],
        yesOrNo: '',
      };
    },

    methods: {
      validateFields() {
        this.$validator.validate()
          .then(() => {
            if (!this.errors.items.length) {
              this.$parent.successEvent();
            }
          });
      },
    },
  };
</script>
