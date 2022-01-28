import { Ability, AbilityBuilder, AbilityClass, defineAbility } from '@casl/ability';

type Actions = 'create' | 'update' | 'delete' | 'read' | 'list';
type Subjects = 'Article';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;

export function defineRules() {
  const { can, cannot, rules } = new AbilityBuilder(AppAbility);

  can('list', 'Article');
  can('read', 'Article');
  cannot('create', 'Article');

  return rules;
}

export function buildAbility() {
  return new AppAbility(defineRules());
}

// export const abilities = defineAbility((can, cannot) => {
//   can('list', 'Article');
//   can('read', 'Article');
//   cannot('create', 'Article');
// });
