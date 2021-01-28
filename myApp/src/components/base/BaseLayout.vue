<template>
   <ion-page>
     <ion-header>
        <ion-toolbar>
            <ion-title> Social Health </ion-title>
        </ion-toolbar>
    </ion-header>
        <ion-content class="ion-padding" slot="top">
           <slot />
        </ion-content>
    </ion-page>
</template>
<style>
    h1 {text-align: center;}
    p {text-align: justify;}
    div {text-align: center;}
</style>
<script>
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent} from '@ionic/vue'
export default {
  components: { IonPage,IonHeader,IonToolbar,IonTitle,IonContent },
}
</script>