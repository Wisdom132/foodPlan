<template>
  <span>
     <homehero></homehero>
     <homedetails></homedetails>
     <homeplan></homeplan>
  </span>
</template>

<script>
// @ is an alias to /src

import homehero from '@/components/homehero'
import homedetails from '@/components/homedetails'
import homeplan from '@/components/homeplan'
export default {
  name: 'home',
  components: {
  homehero,
homedetails,
 homeplan
  }

  

}
</script>
