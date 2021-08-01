<template>
  <div class="card-course">
      <p class="card-header">{{course.nivel}} | {{course.hours}} Hours</p>
      <p class="card-body">{{course.name}}</p>
      <div class="w3-light-grey w3-round-large">
        <div class="w3-container w3-teal w3-center w3-round-large progress"  :style="`width:${course.progress}%`">{{course.progress}}%</div>
      </div>
  </div>
</template>

<script>
export default {
    props:['course']
}
</script>

<style>
.progress{
    height: 17px;
    font-size: 12px;
    margin-top: 40px;
}

.card-course{
    height: 160px;
    width: 80%;
    background-image: url(https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-size: cover;
    background-position: center center;
    margin: 30px auto;
    color: wheat;
    padding: 20px;
    border-radius: 8px;
}

.card-header{
    font-size: 10px;
    font-weight: 400;
}

.card-body{
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
}
</style>