<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown"
         class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control"
               type="text"
               placeholder="标题" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">
            <span class="category">12</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a>工作</a>
            </li>
            <li>
              <a>生活</a>
            </li>
            <li>
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save"></li>
          <li class="cancel" @click="closeWin"></li>
        </ul>
      </div>
      <textarea class="text-content form-control"
                placeholder="内容"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MemoEditor extends Vue {
    closeWin():void{
      this.$store.state.isShow = false;
    }
  }

</script>