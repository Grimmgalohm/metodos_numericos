<template>
    <li class="menu-item">{{ this.name }}</li>
</template>

<script>
export default{
    props:['name']
}
</script>

<style scoped>
.menu-item{
    list-style: none;
    margin: 1px;
    padding: .9vw 1.5vw;
    text-align: justify;
    background-color: indigo;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
.menu-item:hover{
    background-color: blueviolet;
}
</style>