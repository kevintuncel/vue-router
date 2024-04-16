<script>
    export default {
        data() {
            return {
                navImagePaths: [
                    "src/assets/images/nav-img-1.jpg",
                    "src/assets/images/nav-img-2.jpg",
                    "src/assets/images/nav-img-3.jpg",
                ],
                navItems: [
                    "Home",
                    "Product",
                    "Cart",
                    "About us",
                    "Contact"
                ]
            }
        }
    }
</script>

<template>
    <nav class="navbar">
        <input type="checkbox" id="check" class="checkbox">
        <div class="hamburger-menu">
            <label for="check" class="menu">
                <div v-for="index in 3" 
                    class="menu-line" 
                    v-bind:class="`menu-line-${index}`">
                </div>
            </label>
        </div>
        <div class="navbar-navigation">
            <div class="navbar-navigation-left">
                <img v-for="(imagePath, index) in navImagePaths" 
                    v-bind:src="imagePath" 
                    alt="navigation image"
                    class="left-img"
                    v-bind:class="`left-img-${index + 1}`">
            </div>
            <div class="navbar-navigation-right">
                <ul class="nav-list">
                    <li v-for="navItem in navItems"
                        class="nav-list-item">
                        <a href="#" class="nav-list-link">{{ navItem }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>