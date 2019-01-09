<template>
<div class="missing-page">
    <h1>Missing page</h1>
    <br>
    <h3>Path {{ path }} doesn't exist</h3>
</div>
</template>

<script>
export default {
    data() {
        return {
            path: location.pathname
        }
    }
}
</script>
