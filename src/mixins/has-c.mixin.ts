import {Component, ProvideReactive, Vue} from "vue-property-decorator";

@Component({})
export default class HasCMixin extends Vue {
  protected c = 0;

  @ProvideReactive()
  readonly serviceC = {
    work: this.doWorkC,
  }

  doWorkC() {
    this.c++;
    return '[C] Working!';
  }
}
