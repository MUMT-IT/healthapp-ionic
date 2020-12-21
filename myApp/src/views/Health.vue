<template>
<ion-page>
 <ion-header>
      <ion-toolbar>
        <ion-title>Health</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
     <ion-segment @ionChange="segmentChanged($event)">
        <ion-segment-button value="HealthPhysical">
          <ion-label>Physical</ion-label>
        </ion-segment-button>
        <ion-segment-button value="HealthAdd">
          <ion-label>Add</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Graph">
          <ion-label>Graph</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-list>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="./img/weight.png">
          </ion-thumbnail>
          <ion-label>
            <h2>น้ำหนัก</h2>
            <h3>53</h3>
            <p>21/12/2020</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="./img/height.png">
          </ion-thumbnail>
          <ion-label>
            <h2>ส่วนสูง</h2>
            <h3>165</h3>
            <p>21/12/2020</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <h2>BMI</h2>
          </ion-thumbnail>
            <p>สมส่วน</p>
        </ion-item>
          <ion-item>
          <ion-thumbnail slot="start">
            <img src="./img/Hr.png">
          </ion-thumbnail>
          <ion-label>
            <h2>ชีพจร</h2>
            <h3>80</h3>
            <p>21/12/2020</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="./img/Systolic.png">
          </ion-thumbnail>
          <ion-label>
            <h2>ความดันโลหิต</h2>
            <h3>100/60</h3>
            <h4>เกณฑ์ปกติ</h4>
            <p>21/12/2020</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonSegment, IonSegmentButton,IonList,IonThumbnail  } from '@ionic/vue';


export default  {
  name: 'Health',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonSegment, IonSegmentButton,IonList,IonThumbnail  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    }
  }
}
</script>