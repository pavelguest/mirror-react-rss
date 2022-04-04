import React, { Component } from 'react';
import './Forms.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}
interface FormState {
  formData: string[];
  isDisabled: boolean;
  formValid: boolean;
}

class Forms extends Component<IProps, FormState> {
  checkbox: React.RefObject<HTMLInputElement>;
  inputImg: React.RefObject<HTMLInputElement>;
  inputName: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  constructor(props: IProps) {
    super(props);
    this.inputName = React.createRef();
    this.inputDate = React.createRef();
    this.select = React.createRef();
    this.inputImg = React.createRef();
    this.checkbox = React.createRef();
    this.state = {
      formData: [],
      isDisabled: true,
      formValid: true,
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addCard(newCard: any) {
    this.setState({
      formData: [...this.state.formData, ...newCard],
    });
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.inputName.current?.value);
  }
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
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
            <option value="0">USA</option>
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
          <input type="checkbox" id="input-checkbox" ref={this.inputImg} />
        </label>
        <input type="submit" id="submit" />
      </form>
    );
  }
}

export default Forms;
