<template>
    <base-layout page-title="Exercise">
        <h4>Activity</h4>
        <exercise-list></exercise-list>
    </base-layout>
</template>
<script>
import ExerciseList from '../Exercise/ExerciseList.vue';
export default {
  components: { 
    ExerciseList 
      },
};
</script>