# Vue 2.7.14 Provide/Inject Bug Reproducer

https://github.com/vuejs/vue/issues/13005

https://github.com/kaorun343/vue-property-decorator/issues/451

Press the button repeatedly and watch console output.

Three services (A, B, C) are injected into one component, which repeatedly calls each service one at a time looping over indefinitely.

Each service, when called successfully, increments the respective variable - `a`, `b`, `c`. Unfortunately, 2 out of 3 services are `undefined`, leading to errors.

Services are provided by parent component through three mixins (one for each service).

The problem appears to be [this change](https://github.com/vuejs/vue/commit/d1899caf688de961e63e7a0d56f806fc4a12efd9), which interferes with how `@ProvideReactive` decorator works (nested `__reactiveInject__` object).
