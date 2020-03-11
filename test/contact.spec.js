

import { shallowMount } from '@vue/test-utils';
import Contact from '@/pages/contact.vue';

var wrapper = shallowMount(Contact);

describe("Contact Us Page", () => {
    test("is a Vue instance", () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    });

    test("is rendered", () => {
        expect(wrapper.exists()).toBe(true)
    });
});