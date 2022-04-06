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
  constructor(props: IProps) {
    super(props);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.select = React.createRef();
    this.inputImg = React.createRef();
    this.checkbox = React.createRef();
    this.form = React.createRef();
    this.state = {
      formData: [],
      isDisabled: true,
      formValid: true,
    };
  }
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
    });
    this.resetForm();
  }
  resetForm() {
    this.form.current?.reset();
  }
  render() {
    return (
      <div className="form__wrapper">
        <form className="form-container" onSubmit={this.handleSubmit.bind(this)} ref={this.form}>
          <label className="label" htmlFor="input-name">
            <div>Name: *</div>
            <input id="input-name" type="text" placeholder="Enter name..." ref={this.inputName} />
          </label>
          <label className="label" htmlFor="input-date">
            <div>Date: *</div>

            <input id="input-date" type="date" ref={this.inputDate} />
          </label>
          <label className="label" htmlFor="select-countries">
            <div>Select countries: *</div>
            <select name="countries" id="select-countries" ref={this.select}>
              <option defaultValue="USA">USA</option>
              <option value="CHINA">CHINA</option>
              <option value="MEXICO">MEXICO</option>
            </select>
          </label>
          <label className="label" htmlFor="input-file">
            {' '}
            *
            <input type="file" id="input-file" ref={this.inputImg} />
          </label>
          <label className="label" htmlFor="input-radio">
            <div>Согласен получать уведомления</div>
            <input type="radio" id="input-radio" />
          </label>
          <label className="label" htmlFor="input-checkbox">
            <div>Согласен на обработку данных *</div>
            <input type="checkbox" id="input-checkbox" ref={this.checkbox} />
          </label>
          <input type="submit" id="submit" />
        </form>
        <div className="form-container__card">
          {this.state.formData.map((card, index) => (
            <CardForForm
              key={index}
              name={card.name}
              date={card.date}
              country={card.country}
              urlImage={card.urlImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
