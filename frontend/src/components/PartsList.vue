<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Part list</h1>
        <div v-for="part in parts" :key="part._id">
          <p>{{part.name}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { PartsType } from '../lib/types'

@Component
export default class PartsList extends Vue {
  name = 'PartsList'
  @Prop() private parts!: PartsType[]
}
</script>
