<template>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemData from '../model/ItemData'

@Component({
    components:{

    }
})

export default class ItemList extends Vue {
    memoArr:Array<ItemData> = this.$store.state.aHelper
}
</script>