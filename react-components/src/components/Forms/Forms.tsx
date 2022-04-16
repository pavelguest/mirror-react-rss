import React, { Component } from 'react';
import { isEmptyBindingElement } from 'typescript';
import CardForForm from '../CardForForm';
import './Forms.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}
export interface ICardForForm {
  name: string | undefined;
  date: string | undefined;
  country?: string | undefined;
  file: string | undefined;
  isRight?: string | undefined;
}
interface FormState {
  formCards: ICardForForm[];
  isDisabled: boolean;
  firstChangeForm: boolean;
  name: boolean;
  date: boolean;
  file: boolean;
  country: boolean;
  agree: boolean;
}

interface FormError {
  name: string;
  date: string;
  file: string;
  country: string;
  agree: string;
}
type StateKeys = 'name' | 'date' | 'country' | 'file' | 'agree';
class Forms extends Component<IProps, FormState> {
  checkbox: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  form: React.RefObject<HTMLFormElement>;
  checkboxTwo: React.RefObject<HTMLInputElement>;
  formErrors: FormError;

  constructor(props: IProps) {
    super(props);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.select = React.createRef();
    this.inputFile = React.createRef();
    this.checkbox = React.createRef();
    this.checkboxTwo = React.createRef();
    this.form = React.createRef();
    this.state = {
      formCards: [],
      isDisabled: true,
      firstChangeForm: false,
      name: true,
      date: true,
      file: true,
      country: true,
      agree: true,
    };
    this.formErrors = {
      name: 'Поле `Имя` должно быть больше 3-ех букв',
      date: 'Поле `Дата` не должно быть пустым',
      file: 'Поле `Файл` не должно быть пустым',
      country: 'Нужно выбрать страну',
      agree: 'Нужно согласие',
    };
  }
  resetForm() {
    // this.form.current?.reset();
    this.inputName.current!.value = '';
    this.inputDate.current!.value = '';
    this.inputFile.current!.value = '';
    this.checkbox.current!.checked = false;
    this.checkboxTwo.current!.checked = false;
    this.select.current!.value = '';

    this.setState({ isDisabled: true, firstChangeForm: true });
  }
  onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(`change`, this.state);

    const name = e.target.name as StateKeys;
    this.setState((prevState) => {
      return { ...prevState, [name]: true };
    }, this.enableButton);

    if (!this.state.firstChangeForm) {
      this.setState({ isDisabled: false });
    }
  };

  enableButton = () => {
    console.log(`enable button`, this.state);

    if (
      this.state.country &&
      this.state.agree &&
      this.state.date &&
      this.state.file &&
      this.state.name &&
      this.state.firstChangeForm
    ) {
      this.setState((prevState) => {
        return { ...prevState, isDisabled: false };
      });
    }
  };
  isValidComponent = (condition: boolean, stateKey: StateKeys): boolean => {
    if (condition) {
      this.setState((prevState) => {
        return { ...prevState, [stateKey]: false };
      });
      return false;
    } else {
      this.setState((prevState) => {
        return { ...prevState, [stateKey]: true };
      });
      return true;
    }
  };

  validationAll = (): boolean => {
    const name = (this.inputName.current as HTMLInputElement).value;
    const date = (this.inputDate.current as HTMLInputElement).value;
    const inputAvatar = this.inputFile.current as HTMLInputElement;
    const agree = this.checkbox.current!;
    const select = this.select.current!;

    let isValid = true;
    isValid = this.isValidComponent(!agree?.checked, 'agree') && isValid;
    isValid = this.isValidComponent(select.value === '', 'country') && isValid;
    isValid = this.isValidComponent(name.trim().length < 3, 'name') && isValid;
    const dataValue = new Date(date);
    const currentDay = new Date();
    isValid = this.isValidComponent(!date || dataValue > currentDay, 'date') && isValid;
    isValid =
      this.isValidComponent(!!inputAvatar.files && !inputAvatar.files.length, 'file') && isValid;
    return isValid;
  };

  addCard(newCard: ICardForForm) {
    this.setState({
      formCards: this.state.formCards.concat(newCard),
    });
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // this.setState({ firstChangeForm: true });

    if (!this.validationAll()) {
      this.setState({ isDisabled: true });
      return;
    }
    this.addCard({
      name: this.inputName.current?.value,
      date: this.inputDate.current?.value,
      country: this.select.current?.value,
      file: URL.createObjectURL(this.inputFile.current?.files?.[0] as Blob),
      isRight: this.checkboxTwo.current?.checked ? 'да' : 'нет',
    });
    this.resetForm();
  }
  render() {
    return (
      <div className="form__wrapper">
        <form
          className="form-container"
          onSubmit={this.handleSubmit.bind(this)}
          ref={this.form}
          data-testid="form"
        >
          <label className="label" htmlFor="input-name">
            <div>Name: *</div>
            <input
              id="input-name"
              type="text"
              placeholder="Enter name..."
              ref={this.inputName}
              onChange={this.onChangeHandler}
              data-testid="input-name"
              name="name"
            />
            <p className="form-text__error">{this.state.name ? '' : this.formErrors.name}</p>
          </label>
          <label className="label" htmlFor="input-date">
            <div>Date: *</div>
            <input
              id="input-date"
              type="date"
              ref={this.inputDate}
              onChange={this.onChangeHandler}
              data-testid="input-data"
              name="date"
            />
            <p className="form-text__error">{this.state.date ? '' : this.formErrors.date}</p>
          </label>
          <label className="label" htmlFor="select-countries">
            <div>Select countries: *</div>
            <select
              name="country"
              id="select-countries"
              ref={this.select}
              data-testid="input-select"
              defaultValue={''}
              onChange={this.onChangeHandler}
            >
              <option value="" disabled>
                Выберите страну
              </option>
              <option value="USA">USA</option>
              <option value="CHINA">CHINA</option>
              <option value="MEXICO">MEXICO</option>
            </select>
            <p className="form-text__error">{this.state.country ? '' : this.formErrors.country}</p>
          </label>
          <label className="label" htmlFor="input-file">
            *
            <input
              type="file"
              id="input-file"
              ref={this.inputFile}
              onChange={this.onChangeHandler}
              data-testid="input-file"
              name="file"
            />
            <p className="form-text__error">{this.state.file ? '' : this.formErrors.file}</p>
          </label>
          <div>Согласен получать уведомления</div>
          <label className="checkbox-green">
            <input type="checkbox" ref={this.checkboxTwo} data-testid="input-radio" />
            <span className="checkbox-green-switch" data-label-on="да" data-label-off="нет"></span>
          </label>
          <label className="label" htmlFor="input-checkbox">
            <div>Согласен на обработку данных *</div>
            <input
              type="checkbox"
              id="input-checkbox"
              ref={this.checkbox}
              data-testid="input-agreement"
              onChange={this.onChangeHandler}
              name="agree"
            />
            <p className="form-text__error">{this.state.agree ? '' : this.formErrors.agree}</p>
          </label>
          <input
            type="submit"
            id="submit"
            disabled={this.state.isDisabled}
            data-testid="input-text"
          />
        </form>
        <div className="form-container__card">
          {this.state.formCards.map((card, index) => (
            <CardForForm
              key={index}
              name={card.name}
              date={card.date}
              country={card.country}
              file={card.file}
              isRight={card.isRight}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
