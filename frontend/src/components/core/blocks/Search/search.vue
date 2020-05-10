<template>
    <form>
        <div class="form-group">
            <b-icon-search class="form-control-icon"></b-icon-search>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ik zoek een product">
        </div>
    </form>
</template>

<script lang="ts">
import { BIconSearch } from 'bootstrap-vue'
    export default {
        name: 'search',
        components: {
            BIconSearch
        }  
}
</script>

<style scoped lang="scss">
.search {
    .form-group { 
        margin-top: 20px;
    }
} 
</style>