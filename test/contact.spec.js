import { mount } from '@vue/test-utils';
import Contact from '@/pages/contact.vue';

describe("Contact Us Page", () => {
    test("is a Vue instance", () => {
        var wrapper = mount(Contact);
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});