<template>
  <div class="logo" v-show="!isCollapse">
    <h1 class="title">{{ $t('Logo.title') }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isCollapse: state => state.sliderBar_isCollapse
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.logo {
  height: $headerHeight;
  width: 100%;
  // transition: width 0.2s;
  .title {
    text-align: center;
    color: $menuTextColor;
    line-height: $headerHeight;
    margin: 0;
  }
}
</style>
