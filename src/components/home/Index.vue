<script lang="ts" setup>
import { loadToken, issuesList } from '../_source/serve'

!(async () => {
  await loadToken()
  await issuesList()
})()
</script>
<template></template>
