import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardForForm } from '../../components/Forms/Forms';
import { IFormInput, IInitialState } from '../../types/formSliceTypes';

const initialState: IInitialState = {
  formPage: {
    formCards: [],
    form: {
      name: '',
      date: '',
      country: '',
      file: '',
      agree: '',
      agreeNotification: '',
    },
    isDisabledSubmit: true,
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormCard(state, action: PayloadAction<ICardForForm>) {
      state.formPage.formCards = [...state.formPage.formCards, action.payload];
    },
    setFormInputs(state, action: PayloadAction<IFormInput>) {
      state.formPage.form = action.payload;
    },
    setIsButtonSubmit(state, action: PayloadAction<boolean>) {
      state.formPage.isDisabledSubmit = action.payload;
    },
  },
});

export default formSlice.reducer;
