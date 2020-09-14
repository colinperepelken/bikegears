<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="card">
          <div class="card-header">
            <b-dropdown variant="primary" text="Gear ratios" size="lg"></b-dropdown>
          </div>
          <div class="card-body">
            <BikeForm></BikeForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BikeForm from "./BikeForm";

export default {
  name: "MainPanel",
  components: { BikeForm },
};
</script>

<style scoped lang="scss">
.card {
  margin-top: 1rem;
}
</style>