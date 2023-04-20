import {Component, ProvideReactive, Vue} from "vue-property-decorator";

@Component({})
export default class HasBMixin extends Vue {
  protected b = 0;

  @ProvideReactive()
  readonly serviceB = {
    work: this.doWorkB,
  }

  doWorkB() {
    this.b++;
    return '[B] Working!';
  }
}
