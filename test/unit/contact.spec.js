import { shallowMount } from '@vue/test-utils';
import Contact from '@/pages/contact.vue';
import axios from 'axios';
jest.mock('axios');

var wrapper = shallowMount(Contact);

describe("Contact Us Page", () => {
    test("is a Vue instance", () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    });

    test("is rendered", () => {
        expect(wrapper.exists()).toBe(true)
    });

    test("submitting form actually calls sendContactEmail", () => {
        const sendContactEmail = jest.fn();
        wrapper.setMethods({ sendContactEmail });
        wrapper.find('form#request-demo-form').trigger('submit');
        expect(sendContactEmail).toBeCalled();
    });

    test("send contact form axios to node api", async () => {
        const data = {
            data: {
                message: "Success!"
            }
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
    })
});