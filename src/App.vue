<template>
    <div id="app">
        <md-tabs>
            <template v-for="(item, index) in tabLocations">
                <template v-if="item.to != undefined">
                    <md-tab
                    v-bind:key="`tab-location-index-${index}`"
                    :md-label="item.name"
                    :to="item.to" />
                </template>
                <template v-else-if="item.href != undefined">
                    <md-tab
                    v-bind:key="`tab-location-index-${index}`"
                    :md-label="item.name"
                    :href="item.href" />
                </template>
            </template>
        </md-tabs>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            tabLocations: [
                {
                    name: 'Home',
                    to: '/'
                },
                {
                    name: 'Discord',
                    href: ''
                },
                {
                    name: 'Steam',
                    href: 'https://store.steampowered.com/app/1992810'
                }
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
