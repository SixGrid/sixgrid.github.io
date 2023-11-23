<template>
    <div>
        <div class="epic">
            <div class="epic-image">
                <img src="~@/assets/logo-h-center-nobackground.png" />
            </div>
            <div class="epic-title">
                SixGrid
            </div>
            <div class="epic-subtitle">
                An Open-Source Desktop Client for e926/e621
            </div>
            <!-- <div class="epic-title">
                SixGrid
            </div> -->
        </div>
        <md-button href="https://github.com/sixgrid/sixgrid/releases/latest" class="md-raised md-primary md-btn-lg">Download</md-button>
    </div>
</template>
<script>
import HomeLinks from './HomeLinks.vue'
export default {
    name: 'Home',
    components: {HomeLinks}
}
</script>
<style scoped>
.epic {
    text-align: center;
    width: 100vw;
    margin-top: 3rem;
}
.epic-title {
    font-size: 4rem;
    padding: 2rem;
    font-family: 'Segoe UI';
    color: white;
}
.epic-subtitle {
    font-size: 2rem;
    padding: 2rem;
    font-family: 'Segoe UI';
    color: white;
    line-height: 2.5rem;
}
.epic-image {
    text-align: center;
}
.epic-image img {
    max-width: min(80vw, 25rem);
}

.md-btn-lg {
    --mult: 1.5;

    min-width: calc(88px * var(--mult));
    height: calc(30px * var(--mult));
    border-radius: calc(2px * var(--mult));
    font-size: calc(14px * var(--mult));
    margin: calc(6px * var(--mult)) calc(8px * var(--mult));

    text-transform: none;
}
</style>