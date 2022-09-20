import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'basket',
  initialState: {
    counter: 0,
    sum: 0,
    idList: [],
    logged: false,
    modalVisability: false,
    modalData: {}

  },
  reducers: {
    changeModalData(state, action) {
      state.modalData = action.payload;
    },

    toggleModalVisability(state) {
      state.modalVisability = !state.modalVisability;
    },

    changeLoginStatus(state, action) {
      state.logged = action.payload;
    },

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

    clearBasket(state) {
      state.idList = [];
      state.sum = 0;
      state.counter = 0;
    }
  }
})

export const { changeModalData, toggleModalVisability, changeLoginStatus, changeCounter, changeSum, addToIdList, removeFromIdList, clearBasket } = appSlice.actions;

export default appSlice.reducer;