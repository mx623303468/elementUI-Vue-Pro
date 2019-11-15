<template>
  <el-container>
    <el-aside
      :width="isCollapse ? sideCollapseWidth : sideBarWidth"
      id="aside-wrap"
    >
      <SliderBar />
    </el-aside>
    <el-container>
      <el-header id="header">
        <i
          class="is-collapse"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="handleCollapse"
        ></i>
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer id="footer">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SliderBar from './SliderBar'
import ResizeHandler from '@/mixin/ResizeHandler'
import variables from '@/styles/variables.scss'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Header,
    Footer,
    SliderBar
  },
  mixins: [ResizeHandler],
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isCollapse: state => state.sliderBar_isCollapse
    }),
    sideCollapseWidth() {
      return variables.sideCollapseWidth
    },
    sideBarWidth() {
      return variables.sideBarWidth
    }
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setsliderBarStatus: 'SET_SLIDER_BAR_STATUS'
    }),
    handleCollapse() {
      this.setsliderBarStatus({ isCollapse: !this.isCollapse })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#aside-wrap {
  position: relative;
  overflow: hidden;
  background-color: $sliderBarBgColor;
  transition: width 0.3s;
}

#header {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}

#footer {
  box-shadow: 0 -1px 0 0 #e5eafa;
}

.is-collapse {
  line-height: $headerHeight;
  font-size: 22px;
  cursor: pointer;
}
</style>
