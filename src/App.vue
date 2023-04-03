<script setup>
import PageHeader from "@/components/PageHeader.vue";
import Versions from "@/components/Versions.vue";
</script>

<template>
  <div class="flex-container">
    <div class="row">

      <div class="flex-item">
        <header>
          <PageHeader/>
        </header>
      </div>

      <div class="flex-item">
        <main>
          <Versions/>
        </main>
      </div>

      <div class="flex-item">
        <footer class="px-3 text-gray text-center alt-text-small">
          <p style="color: #cfe0e0" class="copyright">Maintained with <font-awesome-icon style="color: #f370ad" icon="fa-solid fa-heart" /> by simentbe
            <br><p style="font-size: 10px; font-style: italic; color: rgba(232,255,255,0.16)">and sometimes cp1987 with some shader stuff</p></p>
        </footer>
      </div>

    </div>
  </div>

</template>

<script>

</script>

<style scoped>
.flex-container {
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  width: auto;
}

.flex-item {
  padding: 5px;
  width: 370px;
  margin: 10px;
  text-align: center;
}

header {
  line-height: 1;
}

</style>
