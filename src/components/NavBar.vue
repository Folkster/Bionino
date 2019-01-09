<!-- 
    When creating new pages you need to update the navbar
 -->
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <router-link class="navbar-brand" to="/">
        <img alt="Vue logo" src="../assets/logo.png">
      My app
    </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/todo">Todo List</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/examples">Examples</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </div>
</nav>
</template>

<script>
/* eslint-disable */
</script>

<style>
nav {
    padding: 30px;
    background-image: linear-gradient(lightgray, white);
    box-shadow: 0 0 10px;
}

nav img {
    width: 1.5em;
    height: 1.5em;
    margin-right: 5px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

.navbar>a {
    font-size: 1.6em;
    margin-right: 5%;
}

.navbar-expand-lg li {
    text-align: start;
    margin-left: 3%;
}

ul {
    width: 100%;
}

li {
    margin-right: 3%;
}

li>a {
    font-size: 1.4em;
}

li>a:hover {
    text-decoration: none;
    color: green;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
