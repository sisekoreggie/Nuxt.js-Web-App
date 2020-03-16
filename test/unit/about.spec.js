import {shallowMount} from '@vue/test-utils';
import About from '@/pages/about';
import Vue from 'vue';

Vue.config.ignoredElements = [/b-/];

const wrapper = shallowMount(About);

describe("About Page Component", () => {
    test("is Vue Instance", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test("not an empty component", () => {
        expect(wrapper.contains('div')).toBe(true);
    })
});