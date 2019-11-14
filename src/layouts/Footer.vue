<template>
  <div class="footer-wrap">
    <div class="desc">
      <div class="copyright">Copyright</div>
      <a class="name">澳克多普科技有限公司</a>
      <div>. All rights reserveb.</div>
    </div>
    <div class="version">Version 1.0</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  line-height: $headerHeight;
  font-size: 12px;

  .desc {
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    .copyright {
      margin-right: 25px;
    }
    .name {
      color: $linkColor;
      cursor: pointer;
    }
  }

  .varsion {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
