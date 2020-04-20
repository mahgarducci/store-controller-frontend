<template>
  <q-form @submit="onSubmit">
    <div id="login-background" class="q-pa-md column items-start q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="col self-center text-h5">Login</div>
        </q-card-section>

        <q-separator inset />
        <div class="column">
          <div class="col self-center q-pa-md">
            <div class="q-gutter-y-md column" style="max-width: 300px">
              <q-input color="blue-12" v-model="text" label="Username">
                <template v-slot:prepend>
                  <q-icon name="account_box" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="col self-center q-pa-md">
            <div class="q-gutter-y-md column col-6">
              <q-input color="blue-12" v-model="passowrd" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </div>
          </div>
        </div>

        <div class="full-width row inline justify-center">
          <q-btn
            class="col-6"
            label="Submit"
            style="overflow: auto;"
            type="submit"
            color="primary"
          />
        </div>
        <br />
        <br />
        <div class="column">
          <p class="col self-center">
            Don't have an account?
            <a href="#" style="overflow: auto;" class="bg-6">Sign Up</a>
          </p>
          <a href class="col self-center">Forgot your password?</a>
        </div>
      </q-card>
    </div>
  </q-form>
</template>

<style lang="sass" scoped>
#login-background
  background-image: url('/statics/background-login.jpg')
  background-repeat: no-repeat
  background-size: cover

.my-card
  width: 100%
  max-width: 350px
  margin-left: 35%
  margin-top: 8%
  background-color: #e6e2d3
</style>

<script>
export default {
  data () {
    return {
      text: '',
      passowrd: ''
    }
  },

  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }
}
</script>
