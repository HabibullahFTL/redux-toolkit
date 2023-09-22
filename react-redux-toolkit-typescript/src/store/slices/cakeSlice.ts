import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IInitialState = {
  numOfCake: number;
};

const initialState: IInitialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCake--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
