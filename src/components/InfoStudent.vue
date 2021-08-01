<template>
  <div class="section-overview section1">
        <img class="avatar-overview" height="160" width="150" :src="datos.avatar" alt="">
        <div class="info-overview">
            <p class="name-overview">{{datos.name}}</p>
            <p class="sub-dato">{{datos.email}}</p>
        </div>
        <div class="numbers-overview">
            <div>
                <p class="number">{{datos.hour}}</p>
                <p class="sub-dato">Hours</p>
            </div>
            <div>
                <p class="number">{{datos.courses}}</p>
                <p class="sub-dato">Classes</p>
            </div>
        </div>
        <div class="interest-overview">
            <p>Interests</p>
            <button :class="interest.interest ? 'interest-button-yellow':'interest-button-white'" class="interest-button" v-for="(interest, index) in datos.interests" :key="index">{{interest.name}}</button>
        </div>
  </div>
</template>

<script>
export default {
    props:['datos']
}
</script>

<style>
.section1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.avatar-overview{
    margin: 10px 0;
}

.avatar-overview:hover{
    transition: .5s;
    transform: scale(1.1);
}

.info-overview{
    text-align: center;
    margin: 20px 0px;
}

.sub-dato{
    font-size: 15px;
    color: grey;
    font-weight: 400;
}

.number{
    font-size: 30px;
    margin: 0;
    font-weight: 500;
}

.numbers-overview{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
}

.numbers-overview p {
    text-align: center;
}
.interest-overview{
    padding: 5px 20px;
}

.interest-overview p{
    margin-left: 20px;
    font-size: 30px;
    font-weight: 300;
}

.interest-button{
    height: 35px;
    margin: 3px 5px;
    border-radius: 5px;
    outline: none;
    color: #0A192A;
    padding: 6px 15px;
    cursor: pointer;
}

.interest-button-white{
    border: 1px solid grey;
    background: white;
}

.interest-button-yellow{
    border: none;
    background: #F4D03F;
}

.avatar-overview{
    border-radius: 20px;
}
</style>