<template>

  <div>

  <section class="section title">
    <h1>Kanban Drag and Drop Interface Layout</h1>
    <h4>
      <router-link to="/new-task">
        <a class="btn btn-default btn-sm">Add New Todo</a>
      </router-link>
    </h4>
    <!-- <h4>Inspired by
      <a href="https://trello.com/">Trello</a>, and
      <a href="https://www.google.com/keep/">Google Keep</a>,
      <a href="http://blog.invisionapp.com/design-project-management-tool/">Invision</a> and
      <a href="https://twitter.com/aaronstump">@aaronstump</a>
    </h4> -->
  </section>

  <!-- container blok todo -->
  <PanelsBlock></PanelsBlock>

  </div>

</template>

<script>
import PanelsBlock from '@/components/PanelsBlock'
export default {
  components: {
    PanelsBlock
  },
  computed: {
    testFetchData () {
      return this.$store.state.tasks
    }
  }
}
</script>