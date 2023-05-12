<template>
  <NavbarJournal />
  <div class="d-flex">
    <div class="col-4">
      <EntryListJournal />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavbarJournal: defineAsyncComponent(() =>
      import("../components/NavbarJournal.vue")
    ),
    EntryListJournal: defineAsyncComponent(() =>
      import("../components/EntryListJournal.vue")
    ),
  },
};
</script>
