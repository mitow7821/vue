<template>
  <div id="nav">
    <router-link to="/">Options API</router-link> |
    <router-link to="/composition">Composition API</router-link> |
    <router-link to="/vuex">Vuex</router-link> |
    <router-link to="/validation">Validation</router-link> |
    <router-link to="/request">Vue Resource</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
