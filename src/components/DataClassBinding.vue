<template>
    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding</div> 
</template>

<script>
export default {
    name: "DataClassBinding",
    data() {
        return {
            isActive: true,
            hasError: false
        }
    }
}
</script>
<style scoped>
    .container {width: 100%; height: 200px;}
    .active {background-color: #ffff00;}
    .text-red {color: #ff0000;}
</style>
