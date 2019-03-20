<style scoped>
  .profile-wrapper {
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

          <input
            v-validate="'required'"
            id="firstName"
            name="firstName"
            data-vv-as="First Name"
            v-model="firstName"
            type="text"
          >
          <p class="error-message text-left">{{ errors.first('firstName') }}</p>
        </div>

        <div class="col-6">
          <label for="lastName">Last Name<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            id="lastName"
            name="lastName"
            data-vv-as="Last Name"
            v-model="lastName"
            type="text"
          >

          <p class="error-message text-left">{{ errors.first('lastName') }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="phone">Phone Number<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            id="phone"
            name="phone"
            data-vv-as="Phone Number"
            v-model="phone"
            type="tel"
          >

          <p class="error-message text-left">{{ errors.first('phone') }}</p>
        </div>

        <div class="col-6">
          <label for="email">Email<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            id="email"
            name="email"
            data-vv-as="Email"
            v-model="email"
            type="email"
          >

          <p class="error-message text-left">{{ errors.first('email') }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="addressOne">Address 1<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            id="addressOne"
            name="addressOne"
            data-vv-as="Address 1"
            v-model="addressOne"
            type="text"
          >

          <p class="error-message text-left">{{ errors.first('addressOne') }}</p>
        </div>

        <div class="col-6">
          <label for="addressTwo">Address 2</label>

          <input
            id="addressTwo"
            type="text"
            v-model="addressTwo"
          >

          <p class="error-message text-left">{{ errors.first('addressTwo') }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="city">City<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            id="city"
            name="city"
            data-vv-as="City"
            v-model="city"
            type="text"
          >

          <p class="error-message text-left">{{ errors.first('city') }}</p>
        </div>

        <div class="col-6">
          <label for="state">State<span class="required-field">*</span></label>

          <select
            class="form-item"
            name="state"
            data-vv-as="State"
            v-model="state"
            v-validate="'required'"
          >
            <option>WA</option>
            <option>TN</option>
            <option>Some other state</option>
          </select>

          <p class="error-message text-left">{{ errors.first('state') }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label for="zip">Zip Code<span class="required-field">*</span></label>

          <input
            v-validate="'required'"
            id="zip"
            name="zip"
            data-vv-as="Zip Code"
            v-model="zip"
            type="text"
          >

          <p class="error-message text-left">{{ errors.first('zip') }}</p>
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
    name: 'Profile',

    data() {
      return {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zip: '',
      };
    },

    methods: {
      validateFields() {
        this.$validator.validate()
          .then(() => {
            if (!this.errors.items.length) {
              this.$parent.successEvent()
            }
          });
      },
    },
  };
</script>
