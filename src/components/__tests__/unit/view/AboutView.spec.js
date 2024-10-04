import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(AboutView)
    //snaptshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})