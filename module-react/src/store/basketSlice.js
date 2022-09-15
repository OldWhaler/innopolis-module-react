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
      const newId = action.payload;
      const elem = state.idList.find(({ id }) => id === newId);
      elem ? elem.amount++ : state.idList.push({ id: newId, amount: 1 })
    },

    removeFromIdList(state, action) {
      const deleteId = action.payload;
      const elem = state.idList.find(({ id }) => id === deleteId);

      if (elem.amount === 1) {
        state.idList = state.idList.filter(({ id }) => id !== deleteId)
      } else {
        elem.amount--
      }
    },

    clearIdList(state) {
      state.idList = [];
      state.sum = 0;
      state.counter = 0;
    }
  }
})

export const { changeCounter, changeSum, addToIdList, removeFromIdList, clearIdList } = basketSlice.actions;

export default basketSlice.reducer;