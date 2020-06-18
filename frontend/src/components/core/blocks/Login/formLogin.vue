<template>
  <div>
    <div class="login-container"  v-if="show">
          <b-card
              title="Mijn Technische Unie"
              style="max-width: 15rem;"
              class="mb-3"
            >
            <b-card-text>
                <b-form @submit="onSubmit" >
                  <b-form-group id="input-group-1" label="Klantnummer:" label-for="client" >
                      <b-form-input id="client" v-model="form.customerNumber" required ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Gebruker:" label-for="user">
                      <b-form-input id="user" v-model="form.userName" required ></b-form-input>
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
  </div>
</template>


<script>
import { mapGetters, mapActions }  from 'vuex';
import api from '@/constants/api';
import querystring from 'querystring';

  export default {
    name: 'loginForm',
    computed: mapGetters(['myAccount']),
    data() {
      return {
        form: {
          customerNumber: '',
          userName: '',
          password: '',
          grantType: '',
          captchaText: ''
        },
        show: true

      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault() 
        const configHeaders = {
          "content-type": "application/x-www-form-urlencoded"
        };
        console.log(this.form.userName)

        const form = {
          data:  querystring.stringify({
            // "customerNumber": "1600030",
            // "password": "password",
            // "grant_type": "password",
            // "userName": "001"
            "customerNumber": this.form.customerNumber,
            "password": this.form.password,
            "grant_type": this.form.password,
            "userName": this.form.userName
          })
        };
    
        this.axios({
            url: api.getCiUser,
            method: "post",
            data: form.data,
            headers: configHeaders
          })
          .then((response)=>{
           if (response.status == 200) {
            console.log('>' + response.data.access_token);
             this.$session.start();
             this.$session.set('token', response.data.access_token);
             this.$session.set('company', this.form.customerNumber);
             this.$session.set('client', this.form.userName);
             this.show = false;
             this.fetchClient(this.form.customerNumber);
             this.$router.push("/webshop");
           }
        })
        .catch(function (error) {
          console.log(error);
        });
        
      },
      ...mapActions(['fetchClient'])
    },
    created() {
      if(this.$session.get('name')) {
        this.show = false;
      }
    }
  }
</script>

<style scoped lang="scss">
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
@media (max-width: 1280px){
  .login-container {
      float: right;
      position: relative;
      top: -10rem;
      right: 0px;
      z-index: 3;
  }
}
@media (max-width: 768px){
  .login-container {
      float: left;
      position: absolute;
      top: inherit;
      right: 0px;
      z-index: 3;
      width: 100%;
  }
  .card {
    max-width: 100% !important;
  }
}
</style>