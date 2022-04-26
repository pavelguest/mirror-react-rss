import React, { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppContext } from '../../context';
import { Types } from '../../reducers';
import CardForForm from '../CardForForm';
import './Forms.css';
export interface ICardForForm {
  name: string;
  date: string;
  country: string;
  file: string;
  agree: string;
  agreeNotification?: string;
}

type StateKeys = 'name' | 'date' | 'country' | 'file' | 'agree';

const defaultValuesInputs = {
  name: '',
  date: '',
  file: '',
  country: '',
  agree: '',
  agreeNotification: '',
};

const Forms = () => {
  const { state, dispatch } = useContext(AppContext);
  const formState = state.formPage.form;

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<ICardForForm>({
    defaultValues: {
      name: formState.name,
      date: formState.date,
      file: formState.file,
      country: formState.country,
      agree: formState.agree,
      agreeNotification: formState.agreeNotification,
    },
  });

  const formErrors = {
    name: 'Поле `Имя` должно быть больше 3-ех букв',
    date: 'Поле `Дата` не должно быть пустым',
    file: 'Поле `Файл` не должно быть пустым',
    country: 'Нужно выбрать страну',
    agree: 'Нужно согласие',
  };

  useEffect(() => {
    return () => {
      const { name, date, country, agree, agreeNotification } = getValues();
      dispatch({
        type: Types.formInputs,
        payload: {
          name,
          date,
          country,
          file: '',
          agree,
          agreeNotification: agreeNotification ? agreeNotification : '',
        },
      });
    };
  }, [dispatch, getValues]);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name as StateKeys;
    dispatch({ type: Types.enableSubmit });
    clearErrors(name);
  };

  const isDisabledSubmitBtn = () =>
    state.formPage.isDisabledSubmit ||
    errors.agree ||
    errors.name ||
    errors.date ||
    errors.file ||
    errors.country
      ? true
      : false;
  const onSubmit: SubmitHandler<ICardForForm> = (data: ICardForForm) => {
    const dateCard = {
      name: data.name,
      date: data.date,
      country: data.country,
      file: URL.createObjectURL(data.file[0] as unknown as Blob),
      agree: data.agreeNotification ? 'да' : 'нет',
    };
    dispatch({ type: Types.formCards, payload: dateCard });
    dispatch({ type: Types.disableSubmit });
    reset(defaultValuesInputs);
  };

  return (
    <div className="form__wrapper">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <label className="label" htmlFor="input-name">
          <div>Name: *</div>
          <input
            {...register('name', { required: true, minLength: 3 })}
            id="input-name"
            placeholder="Enter name..."
            data-testid="input-name"
            onChange={onChangeHandler}
          />
          <p className="form-text__error">{errors.name ? formErrors.name : ''}</p>
        </label>
        <label className="label" htmlFor="input-date">
          <div>Date: *</div>
          <input
            {...register('date', { required: true })}
            id="input-date"
            data-testid="input-data"
            type="date"
            onChange={onChangeHandler}
          />
          <p className="form-text__error">{errors.date ? formErrors.date : ''}</p>
        </label>
        <label className="label" htmlFor="select-countries">
          <div>Select countries: *</div>
          <select
            id="select-countries"
            data-testid="input-select"
            defaultValue={''}
            {...register('country', {
              validate: (data) => data.length > 0,
            })}
            onChange={onChangeHandler}
          >
            <option value="" disabled>
              Выберите страну
            </option>
            <option value="USA">USA</option>
            <option value="CHINA">CHINA</option>
            <option value="MEXICO">MEXICO</option>
          </select>
          <p className="form-text__error">{errors.country ? formErrors.country : ''}</p>
        </label>
        <label className="label" htmlFor="input-file">
          *
          <input
            type="file"
            id="input-file"
            data-testid="input-file"
            {...register('file', {
              validate: (data) => data.length > 0,
            })}
            onChange={onChangeHandler}
          />
          <p className="form-text__error">{errors.file ? formErrors.file : ''}</p>
        </label>
        <div>Согласен получать уведомления</div>
        <label className="checkbox-green">
          <input type="checkbox" data-testid="input-radio" {...register('agreeNotification')} />
          <span className="checkbox-green-switch" data-label-on="да" data-label-off="нет"></span>
        </label>
        <label className="label" htmlFor="input-checkbox">
          <div>Согласен на обработку данных *</div>
          <input
            type="checkbox"
            id="input-checkbox"
            data-testid="input-agreement"
            {...register('agree', { validate: (data) => data })}
            onChange={onChangeHandler}
          />
          <p className="form-text__error">{errors.agree ? formErrors.agree : ''}</p>
        </label>
        <input
          type="submit"
          id="submit"
          disabled={isDisabledSubmitBtn()}
          data-testid="input-text"
        />
      </form>
      <div className="form-container__card">
        {state.formPage.formCards.map((card, index) => (
          <CardForForm
            key={index}
            name={card.name}
            date={card.date}
            country={card.country}
            file={card.file}
            agree={card.agree}
          />
        ))}
      </div>
    </div>
  );
};

export default Forms;
