<template>
<div class="login-container">
      <b-card
    title="Mijn Technische Unie"
     style="max-width: 15rem;"
    class="mb-3"
  >
        <b-card-text>
        <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Klantnummer:" label-for="client" >
            <b-form-input id="client" v-model="form.client" required ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Gebruker:" label-for="user">
            <b-form-input id="user" v-model="form.user" required ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Wachtwoord:" label-for="password">
            <b-form-input id="password" v-model="form.password" required ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Inloggen</b-button>

        </b-form>
            Klantnummer kwijt of uw wachtwoord vergeten?
        </b-card-text>
    </b-card>
  </div>
</template>


<script>
  export default {
    name: 'loginForm',
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../../color.scss';
.login-container {
    float: right;
    position: absolute;
    top: -250px; 
    right: 0px;
    z-index: 3;
  .card-title {
    font-size: 18px;
    color: $tuGray;
    text-align: left;
    }
  
  .form-group {
    text-align: left;
    font-size: 11px;
  }
  .form-control {
    font-size: 0.9em;
    height: auto;
  }
}
.d-block {
     margin-bottom: 0rem !important;
    }
.card {
  background-color: rgba(554,254,254,0.9);

}
</style>