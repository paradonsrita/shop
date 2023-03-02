<template>
    <h1>asd</h1>
    <div style="padding: 30px; background-color: yellow;"
    @click="counter1Store.increment">
  {{ counter1Store.count }}
</div>
</template>

<script lang=ts>
import {useCounterStore} from "../stores/counter"

export default {
    setup(){
        const counter1Store = useCounterStore();
        return{counter1Store};
    }
}
</script >

<style>

</style>