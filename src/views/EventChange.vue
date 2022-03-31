<template>
    <select v-model="selectedValue" @change="changeSelect">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
    </select>

    <div class="inputType">
        <input @keyup.enter="submit" />
        <input @keyup.alt.enter="clear" />
    </div>

    <div class="btnStatus">
        <button @click.ctrl="doSomething = !doSomething">Do Something</button>
        <div>
            <h1 v-if="doSomething">Ctrl + Click is pressed</h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedValue: '',
            doSomething: false
        };
    },

    methods: {
        changeSelect() {
            alert(this.selectedValue);
        }
    }
}
</script>
<style scoped>
    select + div {padding: 100px 0;}
    .btnStatus {align-items: center;}
    .btnStatus button {width: 100%; max-width: 300px; height: 50px; background-color: #f00f4e;}
    .btnStatus div {width: 100%; justify-content: center;}
    .btnStatus h1 {margin-left: 500px; margin-right: 500px; font-size: 35px; font-weight: 650; color: #0ffd00; background-color: antiquewhite;}
</style>
