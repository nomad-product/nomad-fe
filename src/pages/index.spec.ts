import { shallowMount } from '@vue/test-utils';
import Index from './index.vue';

describe('Index Pages', () => {
  it('정상적으로 마운트가 된다.', () => {
    expect(() => shallowMount(Index)).not.toThrow();
  });
});
