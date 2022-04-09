import React, { Component } from 'react';
import CardForForm from '../CardForForm';
import './Forms.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}
export interface ICardForForm {
  name: string | undefined;
  date: string | undefined;
  country: string | undefined;
  urlImage: string | undefined;
  isRight: string | undefined;
}
interface FormState {
  formData: ICardForForm[];
  isDisabled: boolean;
  formValid: boolean;
}

class Forms extends Component<IProps, FormState> {
  checkbox: React.RefObject<HTMLInputElement>;
  inputImg: React.RefObject<HTMLInputElement>;
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  form: React.RefObject<HTMLFormElement>;
  checkboxTwo: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.select = React.createRef();
    this.inputImg = React.createRef();
    this.checkbox = React.createRef();
    this.checkboxTwo = React.createRef();
    this.form = React.createRef();
    this.state = {
      formData: [],
      isDisabled: true,
      formValid: true,
    };
  }
  handleError() {
    if (
      !this.inputName.current?.checkValidity() ||
      !this.inputDate.current?.checkValidity() ||
      !this.inputImg.current?.checkValidity() ||
      !this.select.current?.checkValidity() ||
      !this.checkbox.current?.checkValidity()
    ) {
      this.disableButton();
    }
  }
  inputHandler = () => {
    (this.inputName.current && this.inputName.current.value.length > 0) ||
    (this.inputDate.current && this.inputDate.current.value.length > 0) ||
    (this.select.current && this.select.current.value.length > 0) ||
    (this.inputImg.current && this.inputImg.current.value.length > 0) ||
    (this.checkbox.current && this.checkbox.current.checked)
      ? this.activateButton()
      : this.disableButton();
  };
  disableButton = () => this.setState({ isDisabled: true });
  activateButton = () => this.setState({ isDisabled: false });
  addCard(newCard: ICardForForm) {
    this.setState({
      formData: this.state.formData.concat(newCard),
    });
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.addCard({
      name: this.inputName.current?.value,
      date: this.inputDate.current?.value,
      country: this.select.current?.value,
      urlImage: URL.createObjectURL(this.inputImg.current?.files?.[0] as Blob),
      isRight: this.checkboxTwo.current?.value,
    });
    this.resetForm();
  }
  resetForm() {
    this.form.current?.reset();
    this.disableButton();
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
              onChange={this.inputHandler}
              minLength={3}
              onInvalid={this.handleError}
              data-testid="input-name"
              required
            />
          </label>
          <label className="label" htmlFor="input-date">
            <div>Date: *</div>

            <input
              id="input-date"
              type="date"
              ref={this.inputDate}
              onChange={this.inputHandler}
              onInvalid={this.handleError}
              data-testid="input-data"
              required
            />
          </label>
          <label className="label" htmlFor="select-countries">
            <div>Select countries: *</div>
            <select
              name="countries"
              id="select-countries"
              ref={this.select}
              onChange={this.inputHandler}
              onInvalid={this.handleError}
              data-testid="input-select"
              required
            >
              <option value="USA">USA</option>
              <option value="CHINA">CHINA</option>
              <option value="MEXICO">MEXICO</option>
            </select>
          </label>
          <label className="label" htmlFor="input-file">
            {' '}
            *
            <input
              type="file"
              id="input-file"
              ref={this.inputImg}
              onChange={this.inputHandler}
              required
              onInvalid={this.handleError}
              data-testid="input-file"
            />
          </label>
          <div>Согласен получать уведомления</div>
          <label className="checkbox-green">
            <input type="checkbox" ref={this.checkboxTwo} data-testid="input-radio" />
            <span className="checkbox-green-switch" data-label-on="On" data-label-off="Off"></span>
          </label>

          <label className="label" htmlFor="input-checkbox">
            <div>Согласен на обработку данных *</div>
            <input
              type="checkbox"
              id="input-checkbox"
              ref={this.checkbox}
              onChange={this.inputHandler}
              onInvalid={this.handleError}
              data-testid="input-agreement"
              required
            />
          </label>
          <input
            type="submit"
            id="submit"
            disabled={this.state.isDisabled}
            data-testid="input-text"
          />
        </form>
        <div className="form-container__card">
          {this.state.formData.map((card, index) => (
            <CardForForm
              key={index}
              name={card.name}
              date={card.date}
              country={card.country}
              urlImage={card.urlImage}
              isRight={card.isRight}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
