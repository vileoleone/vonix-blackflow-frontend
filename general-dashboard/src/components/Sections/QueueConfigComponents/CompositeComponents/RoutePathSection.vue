<template>
  <div
    type="span"
    class="next-section-outer-box bcwhite"
    :class="classes"
    @click="onClick"
    :style="styles"
  >
    <RoutePath class="next-section-title" label="Importação de Contatos" :list="routes" />
    <ButtonTopRight label="Próximo" />
  </div>
</template>

<script>
import ButtonTopRight from '../Components/ButtonTopRight.vue'
import { useMailingStore } from '@/stores/useMailingStore'
import { mapWritableState } from 'pinia'
import RoutePath from '../Components/RoutePath.vue'
export default {
  name: 'RoutePathSection',

  components: { ButtonTopRight, RoutePath },

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
    routes: {
      type: Array
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
    },
    ...mapWritableState(useMailingStore, {
      step: 'globalStep',
      fileIsLoaded: 'mailingCsvFile',
      isLoading: 'isLoading'
    })
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.next-section-outer-box {
  align-items: center;
  border-bottom: 1px #ced4da solid;
  box-sizing: border-box;
  display: flex;
  height: 93px;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
}

.next-section-title {
  margin-right: 20px;
}
</style>
