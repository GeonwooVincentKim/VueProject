<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/databinding">Data Binding</router-link> | 
    <router-link to="/dataBindingClass">Data Binding Class</router-link> | 
    <router-link to="/dataBindingStyle">Data Binding Style</router-link> | 
    <router-link to="/dataBindingList">Data Binding List</router-link> | 
    <router-link to="/renderingVIf">Rendering V If</router-link> | 
    <router-link to="/eventClick">Event Link</router-link> | 
    <!-- <router-link to="/clickCtrl.html">Click Ctrl</router-link> -->
    <router-link to="/computedExample">Computed</router-link> | 
    <router-link to="/watchExample">Watch</router-link> | 
    <router-link to="/dataBindingList2">Data Binding List 2</router-link> | 
    <router-link to="/nested">Nested Components</router-link>

    <!-- <router-link to="/databinding">Data Binding</router-link> | 
    <router-link to="/databindinghtml">Data Binding HTML</router-link> | 
    <router-link to="/databindinginputtext">Data Binding Input Text</router-link> | 
    <router-link to="/dataBindingInputNumber">Data Binding Input Number</router-link> | 
    <router-link to="/dataBindingTextarea">Data Binding Textarea</router-link> | 
    <router-link to="/dataBindingSelect">Data Binding Select</router-link> | 
    <router-link to="./dataBindingCheckbox">Data Binding Check Box</router-link> | 
    <router-link to="./dataBindingCheckbox2">Data Binding Check Box 2</router-link> | 
    <router-link to="./dataBindingAttribute">Data Binding Attribute</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
