<template>
    <ion-tabs>
      <ion-tab-bar slot="button">
        <ion-tab-button tab="book" href="/booking/page">
          <ion-icon :icon="bookOutline" />
          <ion-label>บริการต่างๆ</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Calendar" href="/booking/booklist">
          <ion-icon :icon="calendarOutline" />
          <ion-label>วันที่จอง</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
</template>
<script>
import { bookOutline,calendarOutline } from 'ionicons/icons'; 
import  {IonTabs,IonTabBar,IonTabButton,IonLabel,IonIcon}  from    '@ionic/vue';
export default {
    components:{
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonLabel,
      IonIcon,
    },
    setup(){
      return{
        bookOutline,
        calendarOutline,
      }
    }
}
</script>