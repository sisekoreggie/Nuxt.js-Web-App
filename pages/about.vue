<template>
  <div class="about">
    <div class="light-grey-row">
      <h1>About Mobiz</h1>
      <p>Connecting brands and people where it matters</p>
    </div>
    <div class="second-row">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <div>
              <h2 class="red-heading">2014</h2>
              <p>When we were established</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <h2 class="red-heading">20 Million+</h2>
              <p>People have engaged with Mobiz</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <h2 class="red-heading">14 years</h2>
              <p>In mobile web-based technology</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <p>Using our bespoke technologies, we help bring brands closer to their customers so that they can tell them the right story at the right time.</p>
      <p>Supercharging the power of mobile, Mobiz helps businesses across a range of industries create meaningful engagements with their customers.</p>
      <p>At Mobiz, we know that it’s no longer enough for brands to tell people why they matter. In today’s world of IoT, brands have to prove why they matter to each and every one of their customers.</p>
      <p>We believe that personalisation goes beyond your customer’s name and date of birth. With Mobiz you can ensure that your customer experience will be engaging, relevant and appealing.</p>
      <p>We can’t wait to be a part of your customer success story</p>
      <div>
        <h2>The Team Behind Mobiz</h2>
        <b-container class="row-container">
          <b-row>
            <b-col>
              <img class="team-image" src="../assets/team/greg.jpg" />
              <h4>Greg</h4>
              <p>COMMERCIAL</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/clark.jpg" />
              <h4>Clark</h4>
              <p>TECHNOLOGY</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/yusuf.jpg" />
              <h4>Yusuf</h4>
              <p>SALES</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/kath.jpg" />
              <h4>Kath</h4>
              <p>ADMIN & ACCOUNTS</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="row-container">
          <b-row>
            <b-col>
              <img class="team-image" src="../assets/team/ronald.jpg" />
              <h4>Ronald</h4>
              <p>USER INTERFACE</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/jennifer.jpg" />
              <h4>Jennifer</h4>
              <p>CUSTOMER SUCCESS</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/victoria.jpg" />
              <h2>Victoria</h2>
              <p>BRAND</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/bentzy.jpg" />
              <h4>Bentzy</h4>
              <p>STRATEGY</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="row-container">
          <b-row>
            <b-col>
              <img class="team-image" src="../assets/team/liam.jpg" />
              <h4>Liam</h4>
              <p>BUSINESS DEVELOPMENT</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/roland.jpg" />
              <h4>Roland</h4>
              <p>CUSTOMER INSIGHTS</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/denver.jpg" />
              <h4>Denver</h4>
              <p>DISRUPTOR</p>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <GetInTouch />
  </div>
</template>

<script>
import GetInTouch from '~/components/getInTouch.vue'

export default {
  name: 'About',
  components: {
    GetInTouch
  },
  head() {
    return {
      title: `About Us | ${process.env.BasePageTitle}`
    }
  }
}
</script>

<style scoped>
.second-row {
  text-align: center;
  padding-right: 10rem;
  padding-left: 10rem;
  align-content: center;
}

.red-heading {
  color: #cc0033;
}
.team-image {
  max-height: 8rem;
  max-width: 8rem;
}

.row-container p {
  font-size: 0.9rem;
}
</style>
