<template>
    <div>
        <nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    data() {
        return {
            message: 'This is a message'
        }
    },
    computed: {
        ...mapState(['hello'])
    },
    mounted() {
        this.foo()
        this.$store.dispatch('hello/sendName', 'world')
    },
    methods: {
        foo() {
            console.log('bar')
        }
    }
})
</script>

<style lang="stylus">
html
    font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    font-size 16px
    word-spacing 1px
    a-ms-text-size-adjust 100%
    box-sizing border-box

*,
*:before,
*:after
    box-sizing border-box
    margin 0

.button--green
    display inline-block
    border-radius 4px
    border 1px solid #3b8070
    color #3b8070
    text-decoration none
    padding 10px 30px

.button--green:hover
    color #fff
    background-color #3b8070

.button--grey
    display inline-block
    border-radius 4px
    border 1px solid #35495e
    color #35495e
    text-decoration none
    padding 10px 30px
    margin-left 15px

.button--grey:hover
    color #fff
    background-color #35495e

</style>
