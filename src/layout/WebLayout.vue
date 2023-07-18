
import TopNav from '../views/shared/TopNav.vue';

<template>
    <TopNav />
    <div>layout</div>
    <slot></slot>
    <Footer></Footer>
</template>

<script>
import Footer from '../views/shared/Footer.vue';
import TopNav from '../views/shared/TopNav.vue';

    export default {
        name: "webLayout",
    components: { TopNav, Footer }
}
</script>