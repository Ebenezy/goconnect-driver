<template>
    <section class="sec-pad-lg grad-prple">
      <div class="container">
          <div class="section-text text-center">
            <p class="">Contact Us</p>
            <h3>Talk to us right away</h3>
          </div>
          <div class="row">
            <div
              class="col-md-10 ml-auto mr-auto"
            >
              <div class="row">
                <div class="col-md-5 col-sm-5 res-margin">
                  <ul class="grad-blue right-dir-col">
                    <li>
                      <span class="icon-sm clip-txt">
                        <font-awesome-icon icon="map-marker-alt" class="fontawesom" />
                      </span>
                      <div class="text">
                        <h6>Office Address</h6>
                        <p>4, Jibowu Street, Jibowu, Lagos</p>
                      </div>
                      <div class="spce"></div>
                    </li>
                    <li>
                      <span class="icon-sm clip-txt">
                        <font-awesome-icon icon="phone-square" class="fontawesom" />
                      </span>
                      <div class="text">
                        <h6>Hotline</h6>
                        <a href="tel:+2348000000000">+23480 0000 0000, </a><br>
                        <a href="tel:+2348000000000">+23480 0000 0000</a>
                      </div>
                      <div class="spce"></div>
                    </li>
                    <li>
                      <span class="icon-sm clip-txt">
                        <font-awesome-icon icon="envelope" class="fontawesom" />
                      </span>
                      <div class="text">
                        <h6>Send a Mail</h6>
                        <a href="mailto:support@goconnect.com.ng">support@goconnect.com.ng</a>
                        <br />
                        <a href="mailto:sales@goconnect.com.ng">info@goconnect.com.ng</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-md-7 col-sm-7">
                  <div class="bg-gray contact-form pd-30">
                    <h5>Have complaints? Send us a message!</h5>
                    <div class="spce"></div>
                    <form
                      id="contact-form"
                      class="custom-form"
                      method="post"
                      action=""
                      role="form"
                      novalidate="true"
                    >
                      <div class="messages"></div>
                      <div class="controls">
                        <div class="form-group">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Enter your name *"
                            required="required"
                            data-error="Name is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                          <input
                            id="form_name"
                            type="tel"
                            name="name"
                            class="form-control"
                            placeholder="Enter your phone number *"
                            required="required"
                            data-error="Phone number is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Enter your email *"
                            required="required"
                            data-error="Valid email is required."
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Message*"
                            rows="4"
                            required="required"
                            data-error="Please,leave us a message."
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                        <button
                          type="submit"
                          class="driver-signup"
                          style="pointer-events: all; cursor: pointer;"
                        >Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>