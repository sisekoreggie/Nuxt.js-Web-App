<template>
  <div id="request-a-demo">
    <div class="wrapper">
      <div class="light-grey-row">
        <h1>Request a Demo</h1>
        <p>Fill in your details and we will contact you to schedule a demo</p>
      </div>
      <div class="row second-row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <b-form id="request-demo-form" @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1">
              <b-container>
                <b-row>
                  <b-col>
                    <b-form-input id="input-1" type="text" required placeholder="Full Name"></b-form-input>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-container>
                <b-row>
                  <b-col>
                    <b-form-input id="input-2" type="email" required placeholder="Email Address"></b-form-input>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-group>

            <b-form-group id="input-group-3">
              <b-container>
                <b-row>
                  <b-col>
                    <b-form-input id="input-3" type="phone" required placeholder="Phone Number"></b-form-input>
                  </b-col>
                  <b-col>
                    <b-form-input id="input-4" type="text" required placeholder="Company Name"></b-form-input>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-container>
                <b-row>
                  <b-col>
                    <b-form-input id="input-5" type="text" required placeholder="Job Title"></b-form-input>
                  </b-col>
                  <b-col>
                    <b-form-select
                      id="input-6"
                      placeholder="Customer based size"
                      :options="customerSize"
                      required
                    ></b-form-select>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-group>

            <b-form-goup>
              <b-container>
                <b-row>
                  <b-col id="checkbox-field">
                    <b-form-checkbox name="subscribe-to-newsletter">Subscribe to our newsletter</b-form-checkbox>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-goup>

            <b-form-goup>
              <b-container>
                <b-row>
                  <b-col>
                    <b-button type="submit" variant="primary">Submit</b-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-form-goup>
          </b-form>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <p>
            "Mobiz is a great tool for sending mobile messages to customers!
            Not only is it user-friendly but its capability allows for personalisation
            which is key for any business. The team at Mobiz are fantastic to work with
            and are always helpful and friendly. No task is too big or too small for them.
            I’d highly recommend giving Mobiz a try!
            \We have been working with the team for years now and the tool has
            added a lot of value to our business."
          </p>
          <p>
            <strong>Marius Lock</strong>
            <br />Head of Brand and Marketing - Momentum
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestADemo',
  data() {
    return {
      customerSize: [
        { text: 'Customer based size', value: null },
        '0 - 10 000',
        '10 000 - 50 000',
        '50 000 - 200 000',
        '200 000 - 500 000',
        '500 000 - 1 000 000',
        'More than 1 000 000'
      ]
    }
  },
  head () {
    return {
      title: `Sign Up | ${process.env.BasePageTitle}`
    }
  }
}
</script>

<style scoped>
.wrapper .second-row {
    margin-bottom: 2rem;
}

#request-demo-form input,
#request-demo-form select {
  background: #f6f6f6;
  border: none;
  width: 100%;
  font-size: 1em;
}

#request-demo-form #checkbox-field {
    margin-bottom: 1rem;
}
</style>