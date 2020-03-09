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

    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="light-grey-row">
      <b-container>
        <b-row>
          <h3>Automate</h3>
          <p>Using Mobiz' simple click-and-create interface, you can build incredible campaigns that appeal to your customers as individuals. Best of all, you can do it with zero coding knowledge.</p>
        </b-row>
        <b-row>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div>
      <b-container>
        <b-row>
          <h3>Analyze</h3>
          <p>Take the guesswork out of marketing. Our real time analytics tool allows you to make informed decisions about your campaigns almost instantly. The insights from our analytics also help you improve on optimise your next campaign.</p>
        </b-row>
        <b-row>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
          <b-col>
            <h3>Fast, simple, and easy to deploy</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartSms'
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