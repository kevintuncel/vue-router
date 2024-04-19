<template lang="html">
    <div class="container">
        <h1 class="main-heading">Products</h1>
        <h2> {{ paramPrice }}</h2>
    </div>
</template>

<script>
    export default {
        computed: {
            paramPrice() {
                return this.$router.paramsPrice;
            }
        }
    }
</script>