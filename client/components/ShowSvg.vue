<template>
   <div v-html="src"></div>
</template>
<script>
export default {
    name: 'ShowSvg',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        src() {
            const src = require(`assets/svg/${this.name}?raw`)
            return src
        }
    }
}
</script>