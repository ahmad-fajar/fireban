<template>

  <li class="drag-column drag-column-on-hold">
    <span class="drag-column-header">
      <h2>Todos</h2>
      <svg class="drag-header-more" data-target="options1" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/</svg>
    </span>
    <div class="drag-options" id="options1"></div>
    <ul class="drag-inner-list" id="1">
      <li class="drag-item" v-for="(t, idx) in todo":key="idx">
        <strong>{{ t.task }}</strong>
        <br>
        {{ t.desc }}
      </li>
    </ul>
  </li>

</template>

<script>
export default {
  computed: {
    todo () {
      return this.$store.getters.todoList
    }
  },

  methods: {
    test (event) {
      console.log(event)
    }
  }
}
</script>

