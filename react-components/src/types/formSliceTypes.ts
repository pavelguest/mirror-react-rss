import { ICardForForm } from '../components/Forms/Forms';

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
