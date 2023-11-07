import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const hiddenArticleslice = createSlice({
  name: 'hiddenArticles',
  initialState,
  reducers: {
    hidearticle: (state,action) => {
        state.value = []
    },
    showarticle: (state, action) =>{
        state.value.push(action.payload)
    },
  },
});

export const { hidearticle, showarticle} = hiddenArticleslice.actions;
export default hiddenArticleslice.reducer;
