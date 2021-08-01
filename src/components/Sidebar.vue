<template>
    <div class="sidebar">
        <div class="logo">
        </div>
        <div class="button-group">
            <button class="btn-icon">
                <mdicon name="accountCircleOutline" />
            </button>
            <button class="btn-icon">
                <mdicon name="fileDocumentOutline" />
            </button>
            <button class="btn-icon">
                <mdicon name="sourceFork" />
            </button>
            <button class="btn-icon">
                <mdicon name="message" />
            </button>
            <button class="btn-icon">
                <mdicon name="cog" />
            </button>
        </div>
        <button class="btn-icon">
            <mdicon name="exitToApp" />
        </button>
    </div>
</template>

<script>
export default {
}
</script>

<style>


*,
*::before,
*::after{
    box-sizing: border-box;
}

:root{
    --color-sidebar: #0A192A;
    --color-logo: white
}

.sidebar{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 5rem;
    background-color: var(--color-sidebar);
    align-items: center;
    justify-content: space-around;
}


.button-group{
    display: flex;
    flex-direction: column;
}

.btn-icon{
    height: 40px;
    width: 40px;
    background:none;
    border: none;
    outline: none;
    margin: 10px 0;
    cursor: pointer;
}

.mdi-accountCircleOutline,
.mdi-fileDocumentOutline,
.mdi-sourceFork,
.mdi-message,
.mdi-cog,
.mdi-exitToApp{
    color: white;
}

.mdi:hover{
    transition: .5s;
    color: #F4D03F;
}

.logo{
    background-color: var( --color-logo);
    height: 47px;
    width: 47px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background-image: url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-size: cover;
    background-position: center center;
}

.logo p{
    margin: 0;
    word-spacing: 1rem;
    text-align: center;
    font-weight: 700;
}
</style>