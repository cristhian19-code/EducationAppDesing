<template>
  <div class="section-students">
      <div class="head">
          <h1 class="title">Students</h1>
          <div class="cant">
              <p class="cont">214</p>
              <button class="plus">
                <mdicon :height="25" :width="25" name="plus"/>
              </button>
          </div>
      </div>
      <div class="search-section">
          <input class="search" type="text" placeholder="Search">
      </div>
      <div class="cards">
         <StudentVue :person="person" v-for="person in primer" :key="person.name"/> 
      </div>
      <div class="cards">
         <StudentVue :person="person" v-for="person in segundo" :key="person.name"/> 
      </div>
  </div>
</template>

<script>
import StudentVue from './Student.vue'
export default {
    data() {
        return {
            primer: [
                {interests:[
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false}, 
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false},  
                ],
                classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 20,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 30,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 33,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 35,nivel: 'Advanced',hours: 20},
                ],email:'dianne.m@gmail.com',name: 'Dianne Mussell',hour: 50,courses: 15,avatar: 'https://images.pexels.com/photos/39819/woman-girl-eye-models-39819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {interests:[
                    {name: 'App Design',interest: true},
                    {name: 'CSS Frameworkd',interest: true}, 
                    {name: 'Java',interest: false}, 
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false}, 
                ],classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 50,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 21,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 32,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 36,nivel: 'Advanced',hours: 20},
                ],email:'wade.m@gmail.com',name: 'Wade Merren',hour: 44,courses: 10,avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {interests:[
                    {name: 'Javascript',interest: false},
                    {name: 'App Design',interest: true}, 
                    {name: 'React Framework',interest: false},
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false}, 
                ],classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 38,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 35,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 63,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 23,nivel: 'Advanced',hours: 20},
                ],email:'sara.m@gmail.com',name: 'Sara Malkins',hour: 89,courses: 3,avatar: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            ],
            segundo: [
                {interests:[
                    {name: 'App Design',interest: true},
                    {name: 'CSS Frameworkd',interest: true}, 
                    {name: 'Java',interest: false},
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false}, 
                ],classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 57,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 35,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 27,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 45,nivel: 'Advanced',hours: 20},
                ],email: 'esther.n@gmail.com',name: 'Esther Noward',hour: 54,courses: 23,avatar: 'https://images.pexels.com/photos/2250619/pexels-photo-2250619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {interests:[
                    {name: 'App Design',interest: true},
                    {name: 'CSS Frameworkd',interest: true}, 
                    {name: 'Java',interest: false},
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false}, 
                ],classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 53,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 35,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 29,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 46,nivel: 'Advanced',hours: 20},
                ],email: 'eleanor.n@gmail.com',name: 'Eleanor Nema',hour: 87,courses: 5,avatar: 'https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {interests:[
                    {name: 'App Design',interest: true},
                    {name: 'CSS Frameworkd',interest: true}, 
                    {name: 'Java',interest: false},
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: false}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: true}, 
                ],classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 52,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 33,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 37,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 41,nivel: 'Advanced',hours: 20},
                ],email: 'leslie.m@gmail.com',name: 'Leslie Mexander',hour: 87,courses: 2,avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
                {interests:[
                    {name: 'App Design',interest: true},
                    {name: 'CSS Frameworkd',interest: true}, 
                    {name: 'Java',interest: false},
                    {name: 'Web Design',interest: false},
                    {name: 'App Design',interest: true}, 
                    {name: 'Javascript',interest: false}, 
                    {name: 'PHP',interest: false}, 
                ],classes:[
                    {name: 'Neural Networks and Deep Learning',progress: 58,nivel: 'Advanced',hours: 20},
                    {name: 'HTML, CSS and Javascript',progress: 72,nivel: 'Advanced',hours: 20},
                    {name: 'The bits of Computer Networking',progress: 82,nivel: 'Advanced',hours: 20},
                    {name: 'Neural Networks and Deep Learning',progress: 57,nivel: 'Advanced',hours: 20},
                ],email: 'robert.n@gmail.com',name: 'Robert Nox',hour: 86,courses: 9,avatar: 'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            ]
        }
    },
    components:{
        StudentVue
    }
}
</script>

<style>
    .section-students{
        width: 20rem;
        background-color: #FAF8ED;
    }

    .search-section{
        display: flex;
        justify-content: center;
        padding-bottom: 5px;
    }

    .search{
        height: 40px;
        border-radius: 1.5rem;
        border: none;
        outline: none;
        padding: 5px 15px;
        width: 80%;
    }

    .cards{
        padding-top: 10px;
        border-top: 1px solid #CED1D5 ;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
    }

    .cant{
        display: flex;
        align-items: center;
    }

    .cont{
        color: #63616E;
        font-weight: 400;
    }

    .title{
        font-weight: 300;
    }

    .plus{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        padding: 0;
        background-color: #27292C;
        border: none;
        outline: none;
        cursor: pointer;
        margin: 0 10px;
    }

    .mdi-plus{
        color: white;
    }

    .head{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>