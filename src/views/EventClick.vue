<template>
    <div id="topButton">
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The Counter is : {{ counter }}</p>
    </div>
    <div id="bottomButton">
        <button type="button" @click="one(), two()">CLick</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter + 1;
        },
        
        one() {
            alert("One");
        },

        two() {
            alert("Two");
        }
    }
}
</script>
<style scoped>
    div {padding: 10px 0; line-height: 5px;}
    div p {font-size: 15px; line-height: 22px;}

    #topButton {border-bottom: 1px solid #ebebeb;}
    div#bottomButton {padding: 15px 0 15px 0px}
</style>
