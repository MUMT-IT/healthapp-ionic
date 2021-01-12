<template>
  <base-layout page-title="Profile Page">
        <ion-list>
            <ion-list-header>
               <h3>You Profile</h3>
            </ion-list-header>
            <ion-item>
                <ion-label>Name:</ion-label>
                <ion-label>{{ fullname }}</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Age:</ion-label>
                <ion-label>40</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Gender:</ion-label>
                <ion-label>Male</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Weight:</ion-label>
                <ion-label>60</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Height:</ion-label>
                <ion-label>170</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Exercise:</ion-Label>
                <ion-label>4-5 day/week</ion-Label>
            </ion-item>
            <ion-item>
                <ion-label>Congenital disease:</ion-label>
                <ion-label>Allergy</ion-label>
            </ion-item>
        </ion-list>
         <ion-button expand="block" router-link="/profile/edit">Edit Button</ion-button> 
  </base-layout>
   
</template>
<script>
import { IonList,IonItem,IonLabel,IonListHeader,IonButton} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonLabel,
        IonListHeader,
        IonButton
    },
    data(){
        return{
            fullname: this.$route.query.fullname
        }
    },
};
</script>