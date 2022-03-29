<template>
    <div v-bind:style="styleObject">Inline Style Binding</div>
</template>

<script>
export default {
    data () {
        return {
            StyleObject: {
                color: '#ff0000',
                fontSize: '13px'
            }
        }
    },
}
</script>
