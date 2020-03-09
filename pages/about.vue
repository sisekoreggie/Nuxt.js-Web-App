<template>
  <div class="about">
    <div class="first-row">
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
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <img class="team-image" src="../assets/team/greg.jpg" />
              <h2>Greg</h2>
              <p>COMMERCIAL</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/clark.jpg" />
              <h2>Clark</h2>
              <p>TECHNOLOGY</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/yusuf.jpg" />
              <h2>Yusuf</h2>
              <p>SALES</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/kath.jpg" />
              <h2>Kath</h2>
              <p>ADMIN & ACCOUNTS</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <img class="team-image" src="../assets/team/ronald.jpg" />
              <h2>Ronald</h2>
              <p>USER INTERFACE</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/jennifer.jpg" />
              <h2>Jennifer</h2>
              <p>CUSTOMER SUCCESS</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/victoria.jpg" />
              <h2>Victoria</h2>
              <p>BRAND</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/bentzy.jpg" />
              <h2>Bentzy</h2>
              <p>STRATEGY</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <img class="team-image" src="../assets/team/liam.jpg" />
              <h2>Liam</h2>
              <p>BUSINESS DEVELOPMENT</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/roland.jpg" />
              <h2>Roland</h2>
              <p>CUSTOMER INSIGHTS</p>
            </b-col>
            <b-col>
              <img class="team-image" src="../assets/team/denver.jpg" />
              <h2>Denver</h2>
              <p>DISRUPTOR</p>
            </b-col>
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
  }
}
</script>

<style scoped>
.first-row {
  background-color: #f6f6f6;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.second-row {
  text-align: center;
  max-width: 70%;
  align-content: center;
}

.red-heading {
  color: #cc0033;
}
.team-image {
  max-height: 8rem;
    max-width: 8rem;
}
</style>
