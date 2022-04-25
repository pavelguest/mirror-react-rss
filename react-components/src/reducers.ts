import { ICardForForm } from './components/Forms/Forms';
import { IFormInput, IFormPage, IHomePage, IMovieCards } from './context';

enum Types {
  movieCards = 'MOVIE_CARDS',
  movieSearch = 'SEARCH_VALUE',
  formCards = 'FORM_CARDS',
  formInputs = 'CHANGE_FORM_VALUES',
  disableSubmit = 'DISABLE_SUBMIT_BUTTON',
  enableSubmit = 'ENABLE_SUBMIT_BUTTON',
}

export type HomePageActions =
  | {
      type: Types.movieCards;
      payload: IMovieCards[];
    }
  | { type: Types.movieSearch; payload: string };

const moviesReducer = (state: IHomePage, action: HomePageActions) => {
  switch (action.type) {
    case Types.movieCards:
      return { ...state, movies: action.payload };
    case Types.movieSearch:
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

export type FormPageActions =
  | { type: Types.formCards; payload: ICardForForm }
  | { type: Types.formInputs; payload: IFormInput }
  | { type: Types.disableSubmit }
  | { type: Types.enableSubmit };

export const formReducer = (state: IFormPage, action: FormPageActions) => {
  switch (action.type) {
    case Types.formCards:
      return {
        ...state,
        formCards: [...state.formCards, action.payload],
      };
    case Types.formInputs:
      return {
        ...state,
        form: action.payload,
      };
    case Types.disableSubmit:
      return {
        ...state,
        isDisabledSubmit: true,
      };
    case Types.enableSubmit:
      return {
        ...state,
        isDisabledSubmit: false,
      };
    default:
      return state;
  }
};

export { moviesReducer, Types };
