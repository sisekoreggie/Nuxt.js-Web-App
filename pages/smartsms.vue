<template>
  <div id="smart-sms">
    <div class="light-grey-row">
      <b-container>
        <b-row>
          <b-col class="first-row-text">
            <img src="../assets/smartsms_logo.png" />
            <h3>Mobile marketing made awesome</h3>
            <p>Mobiz SmartSMS combines the accessibility of SMS with power of the web, allowing you to create messaging that combines feature rich landing pages with a combination of text, videos, surveys and polls, voucher redemption and so much more...</p>
          </b-col>
          <b-col class="first-row-image">
            <img src="../assets/sms/smartsms-main.png" />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div>
      <b-container>
        <b-row>
          <b-col>
            <p>higher click-through rate for personalised CTAs compared to generic CTAs</p>
          </b-col>
          <b-col>
            <p>of consumers believe that businesses should use SMS messages to interact with customers more often than they currently do</p>
          </b-col>
          <b-col>
            <p>of millennials prefer SMS for deliveries, promotions and surveys</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="light-grey-row">
      <b-container>
        <b-row>
          <b-col class="third-row-image">
            <img src="../assets/sms/smartsms-laptop.png" />
          </b-col>
          <b-col class="third-row-text">
            <h3>Fast, simple, and easy to deploy</h3>
            <p>Using Mobiz' simple click-and-create interface, you can build incredible campaigns that appeal to your customers as individuals. Best of all, you can do it with zero coding knowledge.</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div>
      <b-container>
        <b-row>
          <b-col>
            <h3>Personalise</h3>
            <p>Personalisation is about more than just knowing your customer’s first name. With SmartSMS, you can send one hyper-personalised, hyper-targeted campaign designed to appeal to your customers as individuals.</p>
          </b-col>
          <b-col>
            <img src="../assets/sms/smartsms-personalise.png" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <GetInTouch />
  </div>
</template>

<script>
import GetInTouch from '~/components/getInTouch.vue'
export default {
  name: 'SmartSms',
  components: {
    GetInTouch
  },
  head() {
    return {
      title: `SmartSMS | ${process.env.BasePageTitle}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style scoped>
.first-row-text {
  padding-top: 6rem;
  padding-left: 8.5rem;
  text-align: left;
}
.first-row-text img {
  max-width: 13rem;
}
.first-row-image {
  padding-top: 3rem;
  padding-right: 8rem;
}

.third-row-image img {
  width: 30rem;
}
.third-row-text {
  padding-top: 5rem;
  text-align: left;
}
</style>