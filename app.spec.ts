import { shallowMount } from '@vue/test-utils';
import App from './app.vue';

describe('App', () => {
  it('should be true', () => {
    expect(() => shallowMount(App)).not.toThrow();
  });
});
