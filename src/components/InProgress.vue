<template>

  <li class="drag-column drag-column-in-progress">
    <span class="drag-column-header">
      <h2>In Progress</h2>
      <svg class="drag-header-more" data-target="options2" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/</svg>
    </span>
    <div class="drag-options" id="options2"></div>
    <ul class="drag-inner-list" id="2">
      <li class="drag-item" v-for="(p, idx) in progress":key="idx">
        <strong>{{ p.task }}</strong>
        <br>
        {{ p.desc }}
      </li>
    </ul>
  </li>

</template>

<script>
export default {
  computed: {
    progress () {
      return this.$store.getters.progressList
    }
  }
}
</script>