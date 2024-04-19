<script>
    export default {
        data() {
            return {
                mainHeading: "Welcome",
                subHeading: "Find you preferred sneakers now",
                buttonText: "Buy now"
            }
        },
        props: {
            mainTitle: String,
            subTitle: String
        },
        methods: {
            goToProduct() {
                this.$router.push('product');
            }
        }
    }
</script>

<template>
    <header class="header">
        <div class="brand">
            <!--<a href="#" class="logo">-->
                <router-link to="/Home" class="logo">
                <i class="fas fa-shoe-prints"></i>

            </router-link >
            
            <div>
                <h1 class="main-name">{{ mainTitle }}</h1>
                <p class="sub-name">{{ subTitle }}</p>
            </div>
        </div>
        <div class="header-banner">
            <h1 class="main-heading">{{ mainHeading }}</h1>
            <h3 class="sub-heading">{{ subHeading }}</h3>
            <button type="button" class="main-button" @click="goToProduct()">{{ buttonText }}</button>
        </div>
    </header>
</template>