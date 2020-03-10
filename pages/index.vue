<template>
  <div class="home">
    <div class="light-grey-row">
      <b-container>
        <b-row>
          <b-col class="first-row-text">
            <h3>Your Ultimate Mobile Engagement Partner</h3>
            <div>
              <p>Unlock the power of people-based marketing with Mobiz' powerful mobile tools.</p>
              <img src="../assets/homepage/hero_plant.png" />
            </div>
          </b-col>
          <b-col class="first-row-image">
            <img src="../assets/homepage/hero_image.png" />
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
  components: {
    GetInTouch
  },
  head () {
    return {
      title: process.env.BasePageTitle
    }
  }
}
</script>

