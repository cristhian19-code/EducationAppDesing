<template>
    <div class="card" @click="getDatos()">
        <img class="avatar" height="45" width="45" :src="data.avatar" alt="">
        <div class="info">
            <p class="name">{{data.name}}</p>
            <p class="date">{{data.hour}}h | {{data.courses}} <mdicon :height="15" name="book"></mdicon></p>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    props: {
        person: {
            name: String,
            courses: Number,
            avatar: String,
            hour: Number,
        }

    },
    setup(props) {
        const datos = inject('datos')

        const getDatos = ()=>{
            datos.value = props.person
        }

        return {
            getDatos,
            data: props.person
        }
    },
}
</script>

<style>
.mdi-book{
    color: black;
}

.avatar{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.info{
    margin-left: 10px;
}

.name{
    font-size: 15px;
    font-weight: 500;
}

.date{
    color: #63616E;
    font-size: 13px;
    font-weight: 300;
}

.card{
    padding: 6px 2rem;
    display: flex;
    width: 90%;
    border-radius: 10px;
    height: 4.2rem;
    align-items: center;
    cursor: pointer;
    margin: 3px 0;
}


.card:hover{
    transition: .5s;
    background: #F2EFE0;
}

.name,.date{
    margin: 2px;
}
</style>