<template>
  <div class="overview">
      <div class="head-overview">
          <p class="title-overview">Overview</p>
          <div class="btn-group">
              <button class="btn share">Share <mdicon :size="20" name="sourceBranch"></mdicon> </button>
              <button class="btn contact">Contact <mdicon :size="20" name="chevronRight"></mdicon> </button>
          </div>
      </div>
      <div class="body-overview">
        <InfoStudentVue :datos="datos"/>
        <ClassesVue :classes="datos.classes"/>
      </div>
  </div>
</template>

<script>
import ClassesVue from './Classes.vue'
import InfoStudentVue from './InfoStudent.vue'
export default {
    props:['datos'],
    components:{
        InfoStudentVue,
        ClassesVue
    }
}
</script>

<style>

p{
    margin: 5px;
}

.body-overview{
    height: 86%;
    display: grid;
    grid-template-columns: repeat(2,1fr);;
}

.section-overview{
    height:100%;
}

.head-overview{
    display: flex;
    height: 13%;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
}

.overview{
    height: 100%;
    width: 70%;
}

.title-overview{
    font-size: 40px;
    font-weight: 400;
    margin: 20px 0;
}

.btn{
    border: none;
    height: 40px;
    width: 100px;
    border-radius: 7px;
    font-weight: 300;
    font-size: 17px;
    margin: 0 10px;
    outline: none;
    cursor: pointer;
}

.contact{
    background-color: #0A192A;
    color: white;
}


</style>