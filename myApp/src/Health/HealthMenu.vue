<template>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Physical" href="/health/physical">
          <ion-icon :icon="man" />
          <ion-label>Physical</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Add" href="/health/add">
          <ion-icon :icon="add" />
          <ion-label>Add</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Graph" href="/health/graph">
          <ion-icon :icon="analytics" />
          <ion-label>Graph</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
</template>
<script>
import { man,add,analytics } from 'ionicons/icons'; 
import  {IonTabs,IonTabBar,IonTabButton,IonLabel,IonIcon}  from    '@ionic/vue';
export default {
    components:{
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonLabel,
      IonIcon
    },
    setup(){
      return{
        man,
        add,
        analytics
      }
    }
}
</script>