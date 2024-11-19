<template>
    <ul>
        <menu-items-desktop v-for="item in menuItems" :key="item.tag" :name="item.name" @click="submitTab(item.tag)"></menu-items-desktop>
    </ul>
</template>
<script>
import MenuItemsDesktop from './MenuItemsDesktop.vue';
export default{
    inject:['menuItems', 'selectedTabIs'],
    components:{
        MenuItemsDesktop
    },
    data(){
        return{
            tab: null
        }
    },
    methods:{
        submitTab(tab){
            this.selectedTabIs(tab)
        }
    }
}
</script>