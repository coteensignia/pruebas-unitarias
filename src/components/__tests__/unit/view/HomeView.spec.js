import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(HomeView)
    //snaptshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})