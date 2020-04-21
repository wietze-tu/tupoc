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
            <b-form-input id="password" v-model="form.password" required type="password"></b-form-input>
        </b-form-group>

        <b-button type="submit" class="btn-login">Inloggen</b-button>

        </b-form>
            <p>Klantnummer kwijt of uw wachtwoord vergeten?</p>
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
          client: '',
          user: '',
          password: ''          
        },
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
        this.form.client = ''
        this.form.user = ''
        this.form.password = ''
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
    top: -18rem; 
    right: 0px;
    z-index: 3;
    .card {
      border-radius: 0.25rem;
    }
  .card-title {
    font-size: 1.12em;
    color: $tuGray;
    text-align: left;
    }
  
  .form-group {
    text-align: left;
    font-size: 0.9em;
    margin-bottom: 0.4rem;
  }
  .form-control {
    font-size: 1em;
    height: auto;
  }
  .card-text{
    font-size: 0.8em;
    p {
      margin-top: 10px;
    }
  }
  label {
      margin-bottom: 0rem !important;
    }
  .btn-secondary {
      background-color: $tuGreen;
      border-color: $tuGreen;
      font: bold 1.3em Arial;
      line-height: 20px;
      width: 100%;
      margin-top: 10px;
   }
}
.d-block {
     margin-bottom: 0rem !important;
    }
.card {
  background-color: rgba(554,254,254,0.9);

}
</style>