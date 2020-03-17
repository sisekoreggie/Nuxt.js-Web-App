import test from 'ava';
import { shallowMount } from '@vue/test-utils';
import Calculations from '../../pages/calculations.vue';
import Vue from 'vue';

Vue.config.ignoredElements = [/b-/];
const wrapper = shallowMount(Calculations);

test("passing test", t => {
	t.pass();
});

test("it renders", t => {
	t.false(wrapper.isEmpty());
});
