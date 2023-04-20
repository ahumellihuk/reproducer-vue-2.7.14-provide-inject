<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue'
import HasAMixin from "./mixins/has-a.mixin.ts";
import HasBMixin from "./mixins/has-b.mixin.ts";
import HasCMixin from "./mixins/has-c.mixin.ts";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Mixins(HasAMixin, HasBMixin, HasCMixin) {

}
</script>

<template>
    <div>
        <HelloWorld msg="Vue 2.7.14 Provide/Inject Bug Reproducer"/>
        <div>
            <div class="card">
                A = {{ a }}
            </div>
            <div class="card">
                B = {{ b }}
            </div>
            <div class="card">
                C = {{ c }}
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
