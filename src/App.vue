<template>
  <div id="app">
    <div class="container">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/">Угадать перевод</router-link>
            <router-link class="nav-item nav-link" to="/write">Ввести перевод</router-link>
            <router-link class="nav-item nav-link" to="/groups">Группы</router-link>
            <router-link class="nav-item nav-link" to="/words">Слова</router-link>
          </div>
        </div>
      </nav>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="scss" src="./styles/style.scss"></style>
