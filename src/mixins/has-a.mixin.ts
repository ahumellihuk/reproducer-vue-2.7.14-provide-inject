import {Component, ProvideReactive, Vue} from "vue-property-decorator";

@Component({})
export default class HasAMixin extends Vue {
  protected a = 0;

  @ProvideReactive()
  readonly serviceA = {
    work: this.doWorkA,
  }

  doWorkA() {
    this.a++;
    return '[A] Working!';
  }
}
