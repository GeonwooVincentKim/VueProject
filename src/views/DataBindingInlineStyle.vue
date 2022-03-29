<template>
    <div v-bind:style="[baseStyle, addStyle]">Inline Style Binding</div>
</template>

<script>
export default {
    data () {
        return {
            baseStyle: 'background-color: #ffff00; width: 100%: height: 200px;',
            addStyle: 'color: #ff0000; font-weight: bold;'
        }
    },
}
</script>
