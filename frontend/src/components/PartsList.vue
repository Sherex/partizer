<template>
  <v-container fluid>
    <h1>Part list</h1>
    <v-row>
      <v-col cols="3" v-for="part in parts" :key="part._id">
        <v-card>
          <v-card-title>{{part.name}}</v-card-title>
          <v-card-subtitle>
            <v-chip v-for="(val, key) in part.attributes" :key="key">
              {{val}}
            </v-chip>
          </v-card-subtitle>
          <v-card-text>
            {{part.description}}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="`/part/${part._id}`">
              <v-icon>mdi-wrench</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
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
