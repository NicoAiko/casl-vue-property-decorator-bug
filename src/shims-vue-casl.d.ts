import Vue from 'vue';
import { AppAbility, Actions, Subjects } from './abilities';
import type { CanParameters } from '@casl/ability';

declare module 'vue/types/vue' {
  interface Vue {
    $ability: AppAbility;
    $can(this: this, ...args: CanParameters<[Actions, Subjects]>): boolean;
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    ability?: AppAbility;
  }
}
