import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    counter: 0,
    sum: 0,
    idList: []
  },
  reducers: {
    changeCounter(state, action) {
      state.counter = state.counter + action.payload
    },
    changeSum(state, action) {
      state.sum = state.sum + action.payload
    },
    addToIdList(state, action) {
      state.idList.push(action.payload)
      state.idList.sort((a, b) => a - b)
    },
    removeFromIdList(state, action) {
      const removableId = state.idList.indexOf(action.payload);
      state.idList.splice(removableId, 1)
    }
  }
})

export const { changeCounter, changeSum, addToIdList, removeFromIdList } = basketSlice.actions;

export default basketSlice.reducer;