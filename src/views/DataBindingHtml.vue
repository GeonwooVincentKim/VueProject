<template>
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString" id="html-id"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            htmlString: '<p style="color: red;">This is a red string.</p>'
        }
    },
}
</script>
