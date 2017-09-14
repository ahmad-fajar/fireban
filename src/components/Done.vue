<template>

  <li class="drag-column drag-column-approved">
    <span class="drag-column-header">
      <h2>Done</h2>
      <svg data-target="options4" class="drag-header-more" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/</svg>
    </span>
    <div class="drag-options" id="options4"></div>
    <ul class="drag-inner-list" id="4">
      <li class="drag-item" v-for="(d, idx) in done":key="idx">
        <strong>{{ d.task }}</strong>
        <br>
        {{ d.desc }}
      </li>
    </ul>
  </li>

</template>

<script>
export default {
  computed: {
    done () {
      return this.$store.getters.doneList
    }
  }
}
</script>