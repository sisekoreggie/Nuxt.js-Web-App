import { shallowMount } from '@vue/test-utils';
import Calculations from '@/pages/calculations.vue';

const wrapper = shallowMount(Calculations);

const wrapperWithData = shallowMount(Calculations, {
    data() {
      return {
        firstNumber: 5,
        secondNumber: 5
      }
    }
  })

describe("Calculations Page", () => {
    test("is Vue Instance", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    test("initial data is correct", () => {
        expect(wrapper.vm.$data.firstNumber).toBe(0);
        expect(wrapper.vm.$data.secondNumber).toBe(0);
        expect(wrapper.vm.$data.total).toBe(0);
    });

    test('clicking add button calls addNumbers method', () => {
        const addNumbers = jest.fn();
        wrapper.setMethods({ addNumbers });
        wrapper.find('button.add').trigger('click');
        expect(addNumbers).toBeCalled();
    });

    test('clicking subtract button calls subtractNumbers method', () => {
        const subtractNumbers = jest.fn();
        wrapper.setMethods({ subtractNumbers });
        wrapper.find('button.sub').trigger('click');
        expect(subtractNumbers).toBeCalled();
    });

    test('clicking multiply button calls multiplyNumbers method', () => {
        const multiplyNumbers = jest.fn();
        wrapper.setMethods({ multiplyNumbers });
        wrapper.find('button.mult').trigger('click');
        expect(multiplyNumbers).toBeCalled();
    });

    test('clicking divide button calls divideNumbers method', () => {
        const divideNumbers = jest.fn();
        wrapper.setMethods({ divideNumbers });
        wrapper.find('button.div').trigger('click');
        expect(divideNumbers).toBeCalled();
    });

    test('check addNumber updates total value', () => {
        wrapperWithData.find('button.add').trigger('click');
        expect(wrapperWithData.vm.total).toBe(10);
    });

    test('check subtractNumber updates total value', () => {
        wrapperWithData.find('button.sub').trigger('click');
        expect(wrapperWithData.vm.total).toBe(0);
    });

    test('check multiplyNumber updates total value', () => {
        wrapperWithData.find('button.mult').trigger('click');
        expect(wrapperWithData.vm.total).toBe(25);
    });

    test('check divideNumber updates total value', () => {
        wrapperWithData.find('button.div').trigger('click');
        expect(wrapperWithData.vm.total).toBe(1);
    });

    test('add numbers together', () => {
        expect(wrapper.vm.addNumbers(2,3)).toReturn(5);
    });
});