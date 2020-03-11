<template>
  <div id="contact-us">
    <div class="wrapper">
      <div class="light-grey-row">
        <h1>Contact Us</h1>
        <p>Contact Mobiz by filling out our contact form or using the information below</p>
      </div>
      <b-container class="second-row">
        <b-row>
          <b-col>
            <form id="request-demo-form" @submit.prevent="sendContactEmail">
              <b-form-group id="input-group-1">
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-input
                        id="input-1"
                        v-model="formData.fullName"
                        type="text"
                        required
                        placeholder="Full Name"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-container>
              </b-form-group>

              <b-form-group id="input-group-3">
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-input
                        id="input-3"
                        v-model="formData.phoneNumber"
                        type="text"
                        required
                        placeholder="Phone Number"
                      ></b-form-input>
                    </b-col>
                    <b-col>
                      <b-form-input
                        id="input-2"
                        v-model="formData.emailAddress"
                        type="email"
                        required
                        placeholder="Email Address"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-container>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-input
                        id="input-4"
                        v-model="formData.companyName"
                        type="text"
                        required
                        placeholder="Company Name"
                      ></b-form-input>
                    </b-col>
                    <b-col>
                      <b-form-select
                        id="input-6"
                        v-model="formData.reasonForMessage"
                        placeholder="Reason for message"
                        :options="customerSize"
                        required
                      ></b-form-select>
                    </b-col>
                  </b-row>
                </b-container>
              </b-form-group>

              <b-form-group id="input-group-2">
                <b-container>
                  <b-row>
                    <b-col>
                      <b-form-textarea
                        id="input-2"
                        v-model="formData.message"
                        type="text"
                        required
                        placeholder="Comment"
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                </b-container>
              </b-form-group>

              <b-form-goup>
                <b-container>
                  <b-row>
                    <b-col id="checkbox-field">
                      <b-form-checkbox
                        v-model="formData.subscribe"
                        name="subscribe-to-newsletter"
                      >Subscribe to our newsletter</b-form-checkbox>
                    </b-col>
                  </b-row>
                </b-container>
              </b-form-goup>

              <b-form-goup>
                <b-container>
                  <b-row>
                    <b-col>
                      <button type="submit" variant="primary" class="btn btn-primary send">SEND MESSAGE</button>
                    </b-col>
                  </b-row>
                </b-container>
              </b-form-goup>
            </form>
          </b-col>
          <b-col>
            <p>+27 21 510 7911</p>
            <p>sales@mobiz.co.za</p>
            <h5>Physical Address</h5>
            <p>
              2H Matrix Building
              <br />8 Bridgeway Blvd,
              <br />Bridgeway Precinct
              <br />Century City 7441
              <br />Cape Town, Western Cape
            </p>
            <h5>Postal Address</h5>
            <p>
              P.O Box 539
              <br />Century City,
              <br />7446
              <br />Cape Town
            </p>
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://za.linkedin.com/company/mobiz-south-africa"
                class="footer_social_icons social_linkedin"
                alt="LinkedIn Logo"
                title="linkedIn"
              >LinkedIn</a>
              <a
                href="https://www.facebook.com/MobizSA/"
                class="footer_social_icons social_facebook"
                alt="Facebook Logo"
                title="Facebook"
              >Facebook</a>
              <a
                href="https://twitter.com/Mobiz_RSA"
                class="footer_social_icons social_twitter"
                alt="Twitter Logo"
                title="Twitter"
              >Twitter</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RequestADemo',
  data() {
    return {
      customerSize: [
        { text: 'Reason for message', value: null },
        'Request Demo',
        'Sales Enquiry',
        'Request Pricing',
        'Technical Support'
      ],
      formData: {
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        companyName: '',
        reasonForMessage: '',
        message: '',
        subscribe: false
      },
      responseData: ''
    }
  },
  methods: {
    sendContactEmail() {
      axios
        .post('/api/email', {
          to: 'siseko@mobiz.co.za',
          from: 'sisekoreggieneti@gmail.com',
          subject: 'Contact Form Submission',
          bodyHtml: `
            Name: ${this.formData.fullName} 
            Email: ${this.formData.emailAddress} 
            Phone: ${this.formData.phoneNumber} 
            CompName: ${this.formData.companyName} 
            ReasonForMessage: ${this.formData.reasonForMessage} 
            Message: ${this.formData.message}
          `
        })
        .then((response) => {
          this.responseData = response;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  head() {
    return {
      title: `Contact Us | ${process.env.BasePageTitle}`
    }
  }
}
</script>

<style scoped>
.wrapper .second-row {
  margin-bottom: 2rem;
}

#request-demo-form input,
#request-demo-form select,
#request-demo-form textarea {
  background: #f6f6f6;
  border: none;
  width: 100%;
  font-size: 1em;
}

#request-demo-form #checkbox-field {
  margin-bottom: 1rem;
}

#contact-us .footer_social_icons {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #bbb;
  cursor: pointer;
  font-size: 0px;
  display: inline-block;
  background-position: center center;
  background-size: 40px;
  background-repeat: no-repeat;
}

#contact-us .social_linkedin {
  background-image: url('../assets/footer/social_linkedin.png');
}

#contact-us .social_facebook {
  background-image: url('../assets/footer/social_facebook.png');
}

#contact-us .social_twitter {
  background-image: url('../assets/footer/social_twitter.png');
}
</style>