<template>

  <div class="drag-container">
    <ul class="drag-list">

      <!-- todo -->
      <Todo></Todo>

      <!-- in-progress -->
      <InProgress></InProgress>

      <!-- testing -->
      <Testing></Testing>

      <!-- done -->
      <Done></Done>

    </ul>
  </div>

</template>

<script>
import Done from '@/components/Done'
import InProgress from '@/components/InProgress'
import Testing from '@/components/Testing'
import Todo from '@/components/Todo'
export default {
  created () {
    this.$store.commit('getAllTasks')
  }, // created

  methods: {
    test () {
      console.log('percobaan')
    }
  },

  components: {
    Done,
    InProgress,
    Testing,
    Todo
  } // components
}
</script>
