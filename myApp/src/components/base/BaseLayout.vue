<template>
   <ion-page>
     <ion-header>
        <ion-toolbar>
            <ion-title> Social Health </ion-title>
        </ion-toolbar>
    </ion-header>
        <ion-content>
           <slot />
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent} from '@ionic/vue'
export default {
  components: { IonPage,IonHeader,IonToolbar,IonTitle,IonContent },
}
</script>