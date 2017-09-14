<template>

  <li class="drag-column drag-column-needs-review">
    <span class="drag-column-header">
      <h2>Testing</h2>
      <svg data-target="options3" class="drag-header-more" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/</svg>
    </span>
    <div class="drag-options" id="options3"></div>
    <ul class="drag-inner-list" id="3">
      <li class="drag-item" v-for="(t, idx) in testing":key="idx">
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
    testing () {
      return this.$store.getters.testingList
    }
  }
}
</script>