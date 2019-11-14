<template>
  <el-scrollbar wrap-style="overflow-x: hidden;" style="height: 100%;">
    <Logo :isCollapse="isCollapse" />
    <el-menu
      :default-active="avtiveMenu"
      :collapse="isCollapse"
      :unique-opened="true"
      :background-color="sliderBarBgColor"
      :text-color="menuTextColor"
      :active-text-color="menuTextColor"
      mode="vertical"
      router
    >
      <template v-for="item in router">
        <template v-if="!item.hidden">
          <el-menu-item
            v-if="!item.hidden && !item.children"
            :key="item.path"
            :index="item.path"
            >{{ item.meta.name }}</el-menu-item
          >

          <el-menu-item
            v-if="!item.hidden && item.children && item.children.length === 1"
            :key="item.children[0].path"
            :index="item.children[0].path"
            >{{ item.children[0].meta.name }}</el-menu-item
          >

          <el-submenu
            v-if="!item.hidden && item.children && item.children.length > 1"
            :key="item.path"
            :index="item.path"
          >
            <template slot="title">
              <i
                :class="['iconfont', item.meta.icon]"
                style="margin-right: 10px;"
              ></i>
              <span>{{ item.meta.name }}</span>
            </template>

            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.path"
              :index="subItem.path"
              >{{ subItem.meta.name }}</el-menu-item
            >
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapState } from 'vuex'
import variables from '@/styles/variables.scss'
import Logo from './Logo'

export default {
  name: 'sliderBar',
  components: {
    Logo
  },
  data() {
    return {
      router: []
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.sliderBar_isCollapse
    }),
    avtiveMenu() {
      const { path } = this.$route
      return path
    },
    sliderBarBgColor() {
      return variables.sliderBarBgColor
    },
    menuTextColor() {
      return variables.menuTextColor
    }
  },
  mounted() {
    this.router = this.$router.options.routes
  },
  methods: {}
}
</script>
