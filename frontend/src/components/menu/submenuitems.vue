<template>
    <div >
        <div v-for="submenu in submenus"  v-bind:key="submenu.id">
            <h3>{{submenu.name}}</h3>
            <b-dropdown-item v-for="item in submenu.items"  v-bind:key="item.id" href="#">
                {{ item.name }}
            </b-dropdown-item>   
        </div>
    </div>
</template>

<script lang="ts">
export default  {
    props: ['submenus'],
     data() {
        return {
            }   
        },
     name: 'submenuitem'
}
</script>


<style scoped lang="scss">
 
</style>