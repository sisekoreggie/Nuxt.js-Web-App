<template>
  <div id="header">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="/">
          <img src="../assets/mobiz_logo_black.png" />
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Solutions" right>
            <b-dropdown-item href="#">
              <img src="../assets/smartsms_logo.png" class="dropdown-image" />
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <img src="../assets/smartstatement_logo.png" class="dropdown-image" />
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
          <b-nav-item href="#">Blog</b-nav-item>
          <b-nav-item id="login-button" href="#">Login</b-nav-item>
          <b-nav-item id="demo-request-button" href="/signup">Request A Demo</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.dropdown-image {
  max-height: 1.5rem;
}
#demo-request-button {
  background-color: #0178bc;
  border: 1px solid #0178bc;
  border-radius: 0.5rem;
  margin-left: 1rem;
}
#login-button {
  border: 1px solid white;
  border-radius: 0.5rem;
}
</style>
