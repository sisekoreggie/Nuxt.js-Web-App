<template>
  <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <h5>Stay up to date with our latest updates and features</h5>
          <div class="footer_mailing_list_container">
            <input
              class="footer_mailing_list_input mobiz_white"
              type="textbox"
              placeholder="Enter your email address"
              value
            />
            <button id="newsletter_signup" class="newsletter-signup">
              <span style="padding-bottom:1px;" class="mif-chevron-thin-right">></span>
            </button>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 last-column">
          <h5>Connect with us</h5>
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
          <ul class="list-unstyled quick-links">
            <li>
              <p>sales@mobiz.co.za</p>
            </li>
            <li>
              <p>+27 21 510 7911</p>
            </li>
            <li>
              <p>2H Matrix Building, Bridgeway Boulevard,</p>
            </li>
            <li>
              <p>Century City, 7441, Cape Town</p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <p>
            Proud member of:
            <img src="../assets/footer/mma-logo.png" />
            <img src="../assets/footer/waspa-logo.png" />
          </p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 last-column">
          <p>&copy; Copyright 2018 Mobiz. All rights reversed.</p>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#footer {
  background: #282828 !important;
}
#footer h5 {
  font-size: 1rem;
  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li {
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #ffffff;
}
#footer ul.social li a:hover {
  color: #eeeeee;
}
#footer ul.quick-links li {
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}

#footer ul.quick-links li a i {
  margin-right: 5px;
}

#footer .last-column {
  text-align: right;
}
#footer .last-column p {
  color: #999999;
  margin-bottom: 0rem;
}

#footer p {
  color: #999999;
}

#footer hr {
  border-top-color: #d8d8d8;
}

#footer input {
  border: none;
  outline: none;
  outline-width: 0;
  box-shadow: none;
  cursor: text;
  background-color: transparent;
  border-bottom: 1px solid #aaa;
  line-height: 30px;
  padding: 0px 50px 0px 0px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1em;
  width: 100%;
  max-width: 384px;
  height: 50px;
  color: #ffffff;
}

#footer button {
  margin-top: -3rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 30px;
  font-size: 20px;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  color: #f0f0f0;
}

#footer .footer_social_icons {
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

#footer .social_linkedin {
  background-image: url('../assets/footer/social_linkedin.png');
}

#footer .social_facebook {
  background-image: url('../assets/footer/social_facebook.png');
}

#footer .social_twitter {
  background-image: url('../assets/footer/social_twitter.png');
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
