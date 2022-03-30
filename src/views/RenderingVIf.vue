<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
    <br>
    <div>
        <h1 v-show="bShow">If bShow is true, the current block will display on the screen.</h1>
    </div>
</template>
<script>
export default {
    data () {
        return {
            type: 'A',
            bShow: true
        };
    },
}
</script>
