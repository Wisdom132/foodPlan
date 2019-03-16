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
    // computed: {
    //     recipes() {
    //         return this.$store.state.recipes;
    //     }
    // }
}
</script>
<style scoped>
    
</style>