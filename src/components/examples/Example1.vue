<template>
<div id="example1">
    <h3>Vue examples</h3>
    <br>
    <div class="card col-7 col-lg-5 m-auto shadow">
        <div class="card-body pb-1">
            <!-- element if-else directly in the template,
                renders one <p> element on a condition -->
            <p v-if="!message">Enter some text</p>
            <!-- when using {{ property }} the element gets 
                re-rendered on property change -->
            <p v-else>Text is: {{ message }}</p>
        </div>
    </div>
    <!-- v-model binds input to property -->
    <input class="mt-4" v-model="message" placeholder="edit me">
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Example1',
    data() {
        return {
            message: ''
        }
    }
}
</script>
