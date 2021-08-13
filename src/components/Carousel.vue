<template>
<div class="col-md-12">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="https://www.englishclub.com/images/vocabulary/food/vegetables/vegetables.jpg" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="https://mcdn.wallpapersafari.com/medium/73/2/wObY21.jpg" class="d-block w-100" alt="">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style>
img{
  width:100%;
  height:350px;
  object-fit: cover;
  overflow:hidden;
}
</style>
