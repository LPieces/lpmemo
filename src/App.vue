<template>
  <div id="app">
    <MenuBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
@Component({
  components: {
    MenuBar
  },
})
export default class App extends Vue {}
</script>


