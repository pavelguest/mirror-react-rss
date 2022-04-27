import { ICArdMovie } from './components/Card/Card';
import { ICardForForm } from './components/Forms/Forms';
import { IFormInput, IFormPage, IHomePage, IMovieCards } from './context';

enum Types {
  movieCards = 'MOVIE_CARDS',
  currentMovie = 'MOVIE_CURRENT',
  movieSearch = 'SEARCH_VALUE',
  movieSort = 'MOVIE_SORT',
  movieTotalPages = 'MOVIE_TOTAL_PAGES',
  prevPage = 'PREV_PAGE',
  nextPage = 'NEXT_PAGE',
  resetPage = 'RESET_PAGE',
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
  | {
      type: Types.currentMovie;
      payload: ICArdMovie;
    }
  | { type: Types.movieSearch; payload: string }
  | { type: Types.movieSort; payload: string }
  | { type: Types.movieTotalPages; payload: number }
  | { type: Types.prevPage }
  | { type: Types.nextPage }
  | { type: Types.resetPage };

const moviesReducer = (state: IHomePage, action: HomePageActions) => {
  switch (action.type) {
    case Types.movieCards:
      return { ...state, movies: action.payload };
    case Types.currentMovie:
      return { ...state, currentMovie: action.payload };
    case Types.movieSearch:
      return { ...state, searchInput: action.payload };
    case Types.movieSort:
      return { ...state, sort: action.payload };
    case Types.movieTotalPages:
      return { ...state, pages: action.payload };
    case Types.prevPage:
      return { ...state, page: state.page - 1 };
    case Types.nextPage:
      return { ...state, page: state.page + 1 };
    case Types.resetPage:
      return { ...state, page: 1 };
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
