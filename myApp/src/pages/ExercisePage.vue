<template>
    <base-layout page-title="Exercise">
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