<template>
    <div class="section-overview section2">
        <CourseVue :course="course" v-for="course in classes" :key="course.name"/>
    </div>
</template>

<script>
import CourseVue from './Course.vue'
export default {
    props:['classes'],
    components:{
        CourseVue
    }
}
</script>

<style>
.section2{
    justify-content: center;
    overflow-y: scroll;
}
</style>