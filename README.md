# Vue Boilerplate
Vue boilerplate with bootstrap 4 
and vue routes


```
# need Node.js
version 11.2.0 was used when creating this boilerplate

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

When adding a new page, you need to update NavBar.vue and router.js.


There is a reactive store to place global variables.
These variables will update on all components, and can be used
as a mean to let components communicate with eachother.

Use "this.$store.**variableName**" to add a global in a component.


© 2019 Aarkan, MIT License
