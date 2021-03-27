<template>
    <div class="get-dropoff">
          <div class="dropoff-head">
            <h6>GET A DROP OFF</h6>
          </div>
        
          <div class="p-4 bg-white">
            <div class="row">
              <div class="col-md-3 mb-3">
                <div class="pick_up">
                  <h5>VEHICLE TYPE</h5>
                  <div class="input_form">
                    <img src="../../assets/images/location.svg" alt="location">
                    <select name="vehicles">
                      <option value="cab">Cab</option>
                      <option value="keke">Keke Napep</option>
                      <option value="bike">Bike</option>
                      <option value="truck">Truck</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="pick_up">
                  <h5>PICK UP</h5>
                  <div class="input_form">
                    <img src="../../assets/images/location.svg" alt="location">
                    <input type="text" placeholder="Okigwe, Okigwe Bus stop">
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="pick_up">
                  <h5>DROP OFF</h5>
                  <div class="input_form">
                    <img src="../../assets/images/location.svg" alt="location">
                    <input type="text" placeholder="Okigwe, Okigwe Bus stop">
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <router-link to="drivers">
                <div class="d-flex align-items-end h-100 w-100">
                  <div class="pick_up w-100">
                    <div class="get_ride_btn"><span>GET RIDE</span> <font-awesome-icon icon="chevron-right" class="fontawesom" /></div>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
</template>