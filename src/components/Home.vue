<template>
<div class="home">
    <h1>Start Page</h1>

    <div class="alert col-8 alert-success alert-dismissible fade show" role="alert">
        With Bootstrap!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span></button>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.alert {
    margin: 10% auto;
}
</style>
