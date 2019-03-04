<style scoped>
  .row {
    padding: 1rem 2rem;
  }

  .profile-wrapper {
    border: 0.1rem solid rgb(238, 238, 238);
    border-radius: 1rem;
    margin: 0 auto;
    max-width: 60rem;
    padding: 2rem;
  }

  button {
    background-color: blue;
    border-radius: 1rem;
    color: white;
    font-size: 1.8rem;
    height: 4rem;
    margin: 1rem auto 0;
    width: 9rem
  }

  button:hover {
    background-color: lightskyblue;
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

  input {
    border-color: rgb(238, 238, 238);
    border-radius: 0.4rem;
    font-size: 1.4rem;
    height: 3rem;
    padding: 1rem;
    width: 100%;
  }
</style>

<template>
  <div>
    <div class="profile-wrapper">
      <div class="row">
        <div class="col-6">
          <label for="firstName">First Name<span class="required-field">*</span></label>
          <input v-validate="'required'" id="firstName" name="firstName" type="text">
        </div>

        <div class="col-6">
          <label for="lastName">Last Name<span class="required-field">*</span></label>
          <input v-validate="'required'" id="lastName" name="lastName" type="text">
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="phone">Phone Number<span class="required-field">*</span></label>
          <input v-validate="'required'" id="phone" name="phone" type="tel">
        </div>

        <div class="col-6">
          <label for="email">Email<span class="required-field">*</span></label>
          <input v-validate="'required'" id="email" name="email" type="email">
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="addressOne">Address 1<span class="required-field">*</span></label>
          <input v-validate="'required'" id="addressOne" name="addressOne" type="text">
        </div>

        <div class="col-6">
          <label for="addressTwo">Address 2</label>
          <input v-validate="''" id="addressTwo" name="addressTwo" type="text">
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="city">City<span class="required-field">*</span></label>
          <input v-validate="'required'" id="city" name="city" type="text">
        </div>

        <div class="col-6">
          <label for="state">State<span class="required-field">*</span></label>
          <input v-validate="'required'" id="state" name="state" type="text">
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="zip">Zip<span class="required-field">*</span></label>
          <input v-validate="'required'" id="zip" name="zip" type="text">
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
    name: 'profile',

    // data() {
    //   return {
    //     firstName: '',
    //     lastName: '',
    //     phone: '',
    //     email: '',
    //     addressOne: '',
    //     addressTwo: '',
    //     city: '',
    //     state: '',
    //     zip: '',
    //   };
    // },

    methods: {
      validateFields() {
        console.log('validate stuff');
        this.$validator.validate();
      },
    },
  };
</script>