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
        maxInputCurrent: '200mA',
        maxSupplyVoltage: '3.3V'
      }
    },
    {
      _id: '5f1abab670ab5d438c0c5913',
      name: 'MAX0101',
      description: 'A part',
      attributes: {
        resolution: '10 bit',
        channels: '2CH'
      }
    },
    {
      _id: '5f1abab670ab5d4384512348',
      name: 'Atmega 328p',
      description: 'A microcontroller',
      attributes: {
        adcResolution: '10 bit',
        ioPins: '10'
      }
    }
  ]
}
</script>
