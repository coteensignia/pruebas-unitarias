import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'; // Importa mount directamente
import PostView from "@/views/PostView.vue";

const postsDummy = [
  { id: 1, name: 'Post 1' },
  { id: 2, name: 'Post 2' },
  { id: 3, name: 'Post 3' },
  { id: 4, name: 'Post 4' }
];

describe('PostsView.vue', () => {
  it('lista post', async () => {
    const wrapper = mount(PostView);
    wrapper.vm.posts = postsDummy;

    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('li')).toHaveLength(4);
  });
});
