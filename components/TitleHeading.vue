<template>
    <div class="heading-bar my-4 d-flex justify-content-between align-items-center">
        <h4 class="">{{title}}</h4>
        <slot name="extradiv"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Your Title',
        }
    }
}
</script>

<style lang="scss">
 @media (max-width: 399px) {
    .heading-bar  {
        flex-direction: column;
        h4 {font-size:1.3rem};
    }
 }
</style>