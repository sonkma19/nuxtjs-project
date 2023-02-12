<template>
    <div>
         <Todolist></Todolist>
        <!-- <ul v-for="(item, index) in playerlist" :key="index">
            <li>
                {{ item }}
            </li>
        </ul>  -->
        {{  playerlist}}
    </div>
</template>

<script>
import Todolist from '~~/components/Todolist.vue';
import { computed } from "vue";
import { useStore } from "vuex";
export default {

    setup() {
        const store = useStore();
        const playerlist = computed(() => {
            return store.getters.playerlist;
            console.log("S", store.getters.playerlist);
        });
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>