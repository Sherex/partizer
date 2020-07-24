<template>
  <div>
    <h1>Parts</h1>
    <parts-list :parts=parts />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

import PartsList from '@/components/PartsList.vue'

@Component({
  components: {
    PartsList
  }
})
export default class Parts extends Vue {
  parts = [
    {
      _id: '5f1abab670ab5d438c0c5908',
      name: 'NE555',
      description: 'A 555 timer',
      attributes: {
        cool: 'story',
        stuff: 'yay'
      }
    },
    {
      _id: '5f1abab670ab5d438c0c5913',
      name: 'MAX0101',
      description: 'A part',
      attributes: {
        cool: 'story',
        stuff: 'yay'
      }
    },
    {
      _id: '5f1abab670ab5d4384512348',
      name: 'Atmega 328p',
      description: 'A microcontroller',
      attributes: {
        cool: 'story',
        stuff: 'yay'
      }
    }
  ]
}
</script>
