<template>
    <div>
        <home-header/>
        <home-search/>
        <home-list/>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSearch from './components/Search.vue'
import HomeList from './components/List.vue'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSearch,
        HomeList
    }
}
</script>

<style>

</style>


