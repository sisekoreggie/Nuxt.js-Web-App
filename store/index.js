export const state = () => ({
    count: 0,
    total: 0,
})

export const mutations = {
    increment(state) {
        state.count++;
    },
    setTotal(state, total) {
        state.total = total;
    }
}