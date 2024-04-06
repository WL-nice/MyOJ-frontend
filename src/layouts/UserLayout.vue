<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/oj-logo.svg" class="logo" />
          <div>MyOJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">muqiu</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
}

.header {
  margin-bottom: 16px;
  margin-top: 16px;
}

.logo {
  width: 64px;
  height: 64px;
}

.content {
  margin-bottom: 16px;
  padding: 20px;
}

.footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
