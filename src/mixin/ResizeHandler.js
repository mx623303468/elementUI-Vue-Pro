import debounce from 'lodash/debounce'
import variables from '@/styles/variables.scss'
import { mapMutations } from 'vuex'

export default {
  beforeMount() {
    window.addEventListener('resize', debounce(this._resizeHandler, 200))
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resizeHandler)
  },
  methods: {
    ...mapMutations({
      setsliderBarStatus: 'SET_SLIDER_BAR_STATUS'
    }),
    _resizeHandler() {
      if (!document.hidden) {
        let { width } = document.body.getBoundingClientRect()
        let breakpoint = parseInt(variables['breakpoints_xs'])

        width >= breakpoint
          ? this.setsliderBarStatus({ isCollapse: false })
          : this.setsliderBarStatus({ isCollapse: true })
      }
    }
  }
}
