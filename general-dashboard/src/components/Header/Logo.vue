<template>
  <div
    :style="style"
    class="wd60px ht60px z-index-0 borderBottomC5"
    :class="[this.active ? 'state-header-selected' : 'state-header-default']"
  >
    <div type="span" class="z-index-1 " :style="style"></div>
    <div class="borderBottomFF ht60px fl-jccnt-alcnt-fdrow wd100 bcwhite brr110 ">
      <img :src="VonixLogo" alt="VonixLogo" />
    </div>
  </div>
</template>

<script>
import VonixLogo from '%/icons/VonixLogo.svg'

export default {
  name: 'LogoCard',

  components: {},
  data() {
    return {
      VonixLogo
    }
  },

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String
    },
    active: {
      type: Boolean
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
