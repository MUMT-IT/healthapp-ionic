<template>
    <base-layout :page-title="loadexeritem.title">
      <form class="ion-padding" @submit.prevent="submitForm">
        <h2>{{ loadexeritem.title }}</h2>
        <ion-img :src="loadexeritem.image"></ion-img>

      <ion-list>
        <ion-radio-group value="" v-model="Exlv">
          <ion-list-header>
            <ion-label>Intensity</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Low</ion-label>
            <ion-radio slot="start" value="Low"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Medium</ion-label>
            <ion-radio slot="start" value="Medium"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Hight</ion-label>
            <ion-radio slot="start" value="Hight"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <ion-list>
        <ion-item>
            <label>Hour</label>
            <ion-input slot="end" type="number" placeholder="Enter Input" v-model="ExHour"></ion-input>
        </ion-item>
        <ion-item>
            <label>Minute</label>
            <ion-input slot="end" type="number" placeholder="Enter Input" v-model="ExMinute"></ion-input>
        </ion-item>
        <ion-item>
            <label>Comment</label>
            <ion-input slot="end"></ion-input>
        </ion-item>
        <ion-item v-if="show_distance">
            <label>Distance (km)</label>
            <ion-input slot="end" type="number" placeholder="Enter Input"></ion-input>
        </ion-item>
        <ion-item v-if="show_step">
            <label>Step</label>
            <ion-input slot="end" type="number" placeholder="Enter Input"></ion-input>
        </ion-item>
      </ion-list>

      <ion-button type="submit" expand="block">Save</ion-button>
      </form>
    </base-layout>
</template>
<script>
import {IonImg,IonListHeader,IonLabel,IonList,IonItem,IonRadioGroup,IonRadio,IonInput} from '@ionic/vue'
export default {
  components: {  
    IonImg,
    IonListHeader,
    IonLabel,
    IonList,
    IonItem,
    IonRadioGroup,
    IonRadio,
    IonInput
  },
  data(){
    return{
      exeritemId: this.$route.params.id,
      Exlv: "Low"
    }
  },
  computed:{
    loadexeritem(){
      return this.$store.getters.exeritem(this.exeritemId);
    },
    show_distance(){
      if( this.loadexeritem.title === "RUN" || this.loadexeritem.title === "Walk" || this.loadexeritem.title === "Bike"){
        return true
      }else{
        return false
      }
    },
    show_step(){
      if( this.loadexeritem.title === "RUN" || this.loadexeritem.title === "Walk"){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    submitForm(){
            this.$router.push({path:'/exercise/detail', query: { Exlv: this.Exlv, ExHr: this.ExHour, ExMin: this.ExMinute, Activity: this.loadexeritem.title }})
      }
  },  
};
</script>