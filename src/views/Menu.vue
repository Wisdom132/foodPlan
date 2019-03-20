<template>
    <div>
        <homeplan></homeplan>
        <mealrecipes></mealrecipes>
    </div>
</template>

<script>
import homeplan from '@/components/homeplan';
import mealrecipes from '@/components/mealrecipes';

export default {
    name:'Menu',
    components: {
        homeplan,
        mealrecipes
    },
   
}
</script>
<style scoped>
    
</style>