import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardForForm } from '../../components/Forms/Forms';

export enum CountryEnum {
  usa = 'USA',
  china = 'CHINA',
  mexico = 'MEXICO',
}
export enum SortType {
  rating = 'RATING',
  vote = 'NUM_VOTE',
  year = 'YEAR',
}

export interface IFormInput {
  name: string;
  date: string;
  country: string;
  file: string;
  agree: string;
  agreeNotification: string;
}

export interface IFormPage {
  formCards: ICardForForm[];
  form: IFormInput;
  isDisabledSubmit: boolean;
}

export interface IInitialState {
  formPage: IFormPage;
}
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
