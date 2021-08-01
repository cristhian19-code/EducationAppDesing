<template>
  <div class="main">
    <SidebarVue/>
    <StudentsVue/>
    <OverviewVue :datos="datos"/>
  </div>
</template>

<script>
import {provide, ref} from 'vue'
import SidebarVue from './components/Sidebar.vue'
import StudentsVue from './components/Students.vue'
import OverviewVue from './components/Overview.vue'

export default {
  name: 'App',
  components: {
    SidebarVue,
    StudentsVue,
    OverviewVue,
  },
  setup() {

    const datos = ref({email:'christian.a@gmail.com',
            name: 'Christian Gutierrez',
            hour: 50,
            courses: 12,
            classes: [
              {name: 'Porgramacion en JS',nivel: 2,hours: 64,progress: 90},
              {name: 'Master PHP',nivel: 3,hours: 50,progress: 35},
              {name: 'Matematica II',nivel: 1,hours: 24,progress: 54},
              {name: 'Fisica I',nivel: 4,hours: 74,progress: 67},
            ],
            avatar: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
        );

    provide('datos',datos)

    return {
      datos
    }
  },
  data() {
    return {
      classes: [
        {name: 'Porgramacion en JS',nivel: 2,hours: 64,progress: 90}
      ]
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500&display=swap');

*{
  font-family: 'Roboto', sans-serif;
}

body,
html{
  margin: 0;
  padding: 0;
}

#app,
.main,
body,
html{
  height: 100%;
}

.main{
  display: flex;
  flex-direction: row;
}

</style>
