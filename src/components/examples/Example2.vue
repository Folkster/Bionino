<template>
<div id="example2">
    <!-- eventhandler calls function on click -->
    <button type="button" class="btn btn-secondary mt-5 mb-2"
    v-on:click="toggleShow">{{showJumbo ? 'Hide' : 'Show'}} content</button>

    <!-- v-show only renders element on condition
        v-if could also be used, but v-show is prefered

        the differense between v-show and v-if is that 
        v-show is pre-cached on pageload, even if it's not rendered
        v-if gets cached when rendered -->
    <div v-show="showJumbo" class="jumbotron jumbotron-fluid col-8 col-lg-6 p-5 m-auto shadow rounded">
        <div class="container">
            <h1 class="display-4">What a nice jumbotron!</h1>
            <p class="lead">Now, hide it!</p>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'Example2',
    data() {
        return {
            showJumbo: false
        }
    },
    methods: {
        toggleShow() {
            // simple boolean toggle on click
            this.showJumbo = !this.showJumbo;
        }
    }
}
</script>
