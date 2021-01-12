<template>
    <from class="ion-padding">
    <ion-list>
        <ion-item v-for="exeritem in exerlst" :router-link="`/exercise/${exeritem.id}`" :key="exeritem.id">
            <ion-thumbnail slot="start">
                <ion-img :src="exeritem.image" :alt="exeritem.title"></ion-img>
            </ion-thumbnail>
            <ion-label>
                {{ exeritem.title }}
             </ion-label>
        </ion-item>
    </ion-list>
    </from>
</template>
<script>
import {IonList,IonItem,IonImg,IonThumbnail,IonLabel} from '@ionic/vue'
export default { 
    components:{
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    computed:{
        exerlst(){
            return this.$store.getters.exerlst;
        },
    }
};
</script>