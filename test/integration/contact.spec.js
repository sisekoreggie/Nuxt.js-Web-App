import Contact from '@/pages/contact.vue';
import { mount } from '@vue/test-utils';
import Header from '@/components/header.vue';
import axios from 'axios';
jest.mock('axios');

const headerWrapper = mount(Header);
const contactWrapper = mount(Contact);

describe("integration test for contact form submission", () => {
    test("submit contact form", () => {
        const contactButton = headerWrapper.find('b-nav-item#contact');
        expect(contactButton.isEmpty()).toBe(false);
        expect(contactButton.text()).toBe('Contact');
        expect(headerWrapper.html()).toContain('/contact');

        expect(contactWrapper.html()).toContain('request-demo-form');
        const sendContactEmail = jest.fn();
        contactWrapper.setMethods({ sendContactEmail });
        contactWrapper.find('form#request-demo-form').trigger('submit');
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