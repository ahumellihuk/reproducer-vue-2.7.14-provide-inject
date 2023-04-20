<script lang="ts">
import {Component, InjectReactive, Prop, Vue} from "vue-property-decorator";

type Service = { work: () => string };

@Component({})
export default class HelloWorld extends Vue {
  @Prop({type: String})
  msg: string;

  @InjectReactive('serviceA')
  serviceA: Service;

  @InjectReactive('serviceB')
  serviceB: Service;

  @InjectReactive('serviceC')
  serviceC: Service;

  count = 0;

  readonly test = this._test();
  readonly work = this._work();

  onPress() {
    this.count++;
    console.log(this.test.next());
    console.log(this.work.next());
  }

  * _test() {
    while (true) {
      yield '[A] Testing...';
      yield '[B] Testing...';
      yield '[C] Testing...';
    }
  }

  * _work() {
    while (true) {
      try {
        yield this.serviceA.work();
      } catch (e) {
        yield '[A] Error!'
      }
      try {
        yield this.serviceB.work();
      } catch (e) {
        yield '[B] Error!'
      }
      try {
        yield this.serviceC.work();
      } catch (e) {
        yield '[C] Error!'
      }
    }
  }
}
</script>

<template>
    <div>

        <h2>{{ msg }}</h2>
        <p>Press the button repeatedly and watch console output.</p>
        <p>Three services (A, B, C) are injected into one component, which repeatedly calls each service one at a time looping over indefinitely.
        <p>Each service, when called successfully, increments the respective variable - `a`, `b`, `c`. Unfortunately, 2 out of 3 services are `undefined`, leading to errors.</p>
        <p>
            Services are provided by parent component through three mixins (one for each service).
            The problem appears to be <a href="https://github.com/vuejs/vue/commit/d1899caf688de961e63e7a0d56f806fc4a12efd9">this change</a>, which interferes with how `@ProvideReactive` decorator works (nested `__reactiveInject__` object).
        </p>
        <button type="button" @click="onPress">count is {{ count }}</button>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
