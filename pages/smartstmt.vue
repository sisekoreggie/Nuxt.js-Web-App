<template>
  <div id="smart-statement">
    <div class="light-grey-row">
      <b-container>
        <b-row>
          <b-col class="first-row-text">
            <img src="../assets/smartstatement_logo.png" />
            <h3>Billing and collections made simple and effective</h3>
            <p>Ditch the wastefulness and low collection rates of traditional billing. Mobiz’ fully-managed SmartStatement solution takes the hassle out of invoicing, reducing the costs and workload for your finance department. SmartStatement ensures that more customers see their statements, keeping them more loyal, engaged, and likely to pay.</p>
          </b-col>
          <b-col class="first-row-image">
            <img src="../assets/smartstmt/smartstatement-main.png" />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="light-grey-row">
      <b-container>
        <b-row>
          <b-col class="first-row-image">
            <img src="../assets/smartstmt/smartstatement-graphic.png" />
          </b-col>
          <b-col class="first-row-text">
            <h3>Cost Effective</h3>
            <p>By moving your invoices over to SMS and eliminating printed statements, your organisation can reduce its billing costs by as much as 94%.</p>
            <h3>Improved Collections</h3>
            <p>Tired of having to chase after unpaid bills? Companies that switch to SMS-based invoices report a 49% boost in late bill collections.</p>
            <h3>Increased Reach</h3>
            <p>Ensure that your customers receive their invoices on time. 98% of SMSs are delivered successfully and most are read within 4-5 minutes.</p>
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
  name: 'SmartStatement',
  components: {
    GetInTouch
  }
}
</script>

<style scoped>
</style>