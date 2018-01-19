<template>
  <div id="app">
    <header></header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.87);;
  display: flex;
  flex-direction: column;
  height: 100%;
}
h1, h2, h3, h4, h5 {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
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
</style>
