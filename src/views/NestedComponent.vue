<template>
    <page-title title="title" />
</template>

<script>
    import PageTitle from '../components/PageTitle';

    export default {
        components: { PageTitle },
        data() {
            return {
                title: "동적 페이지 타이틀"
            }
        }
    }
</script>
