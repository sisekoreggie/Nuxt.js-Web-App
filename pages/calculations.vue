<template>
  <div id="calculations">
    <div class="light-grey-row">
      <h1>Calculator</h1>
      <p>Use any of the following calculators</p>
    </div>
    <div>
      <b-container>
        <b-row>
          <h2>Add/Subtract/Divide/Multiply Numbers</h2>
        </b-row>
        <b-row>
          <b-col>
            <form class="form-inline" @submit.prevent="addNumbers">
              <div class="form-group mb-2">
                <label for="first-number" class="sr-only">First Number</label>
                <input
                  type="number"
                  v-model="firstNumber"
                  class="form-control"
                  id="first-number"
                  placeholder="First Number"
                />
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="second-number" class="sr-only">Second Number</label>
                <input
                  type="number"
                  v-model="secondNumber"
                  class="form-control"
                  id="second-number"
                  placeholder="Second Number"
                />
              </div>
            </form>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div>
              <button v-on:click="addNumbers" class="btn btn-primary mb-2 add">Add</button>
              <button v-on:click="subtractNumbers" class="btn btn-primary mb-2 sub">Subtract</button>
              <button v-on:click="multiplyNumbers" class="btn btn-primary mb-2 mult">Multiply</button>
              <button v-on:click="divideNumbers" class="btn btn-primary mb-2 div">Divide</button>
              <button v-on:click="increment" class="btn btn-primary mb-2 div">Increment: {{ this.$store.state.count }}</button>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>Total: {{this.total}}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Calculations',
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      total: 0
    }
  },
  head() {
    return {
      title: `Calculations | ${process.env.BasePageTitle}`
    }
  },
  computed: mapState(['counter']),
  methods: {
    addNumbers() {
      this.total = parseInt(this.firstNumber) + parseInt(this.secondNumber)
      return this.total
    },
    subtractNumbers() {
      this.total = parseInt(this.firstNumber) - parseInt(this.secondNumber)
      return this.total
    },
    multiplyNumbers() {
      this.total = parseInt(this.firstNumber) * parseInt(this.secondNumber)
      return this.total
    },
    divideNumbers() {
      this.total = parseInt(this.firstNumber) / parseInt(this.secondNumber)
      return this.total
    },
    increment() {
      this.$store.commit("increment");
    }
  }
}
</script>
