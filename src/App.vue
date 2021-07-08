<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/compositionapi">CompositionAPI</router-link> |
    <router-link to="/mixins">Mixins</router-link>
    <!-- <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinghtml">DataBindingHtml</router-link> |
    <router-link to="/databindinginputtext">DataBindingInputText</router-link> |
    <router-link to="/databindinginputnumber">DataBindingInputNumber</router-link> |<br>
    <router-link to="/databindingtextarea">DataBindingTextarea</router-link> |
    <router-link to="/databindingcheckbox">DataBindingCheckbox</router-link> |
    <router-link to="/databindingradio">DataBindingRadio</router-link> |
    <router-link to="/databindingattr">DataBindingAttr</router-link> |
    <router-link to="/databindingbutton">DataBindingButton</router-link> | <br>
    <router-link to="/databindinglist">DataBindingList</router-link> |
    <router-link to="/databindingif">DataBindingIf</router-link> |
    <router-link to="/databindingselect">DataBindingSelect</router-link> |<br>
    <router-link to="/eventclick">EventClick</router-link> |
    <router-link to="/eventkey">EventKey</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/axioslist">AxiosList</router-link> |
    <router-link to="/nestedcomponent">NestedComponent</router-link> |
    <router-link to="/parentcomponent">ParentComponent</router-link> |
    <router-link to="/slotusemodallayout">SlotUseModalLayout</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link> -->
  </div>
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
