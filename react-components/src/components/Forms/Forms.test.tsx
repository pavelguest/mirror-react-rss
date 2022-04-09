import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Forms from './Forms';

describe('form', () => {
  it('render', () => {
    render(<Forms />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-data')).toBeInTheDocument();
    expect(screen.getByTestId('input-select')).toBeInTheDocument();
    expect(screen.getByTestId('input-file')).toBeInTheDocument();
    expect(screen.getByTestId('input-radio')).toBeInTheDocument();
    expect(screen.getByTestId('input-agreement')).toBeInTheDocument();
  });
  it('input name', () => {
    const { getByTestId } = render(<Forms />);
    const inputName = getByTestId('input-name') as unknown as HTMLInputElement;
    fireEvent.change(inputName, { target: { value: 'test' } });
    expect(inputName.value).toBe('test');
  });
  it('input date', () => {
    const { getByTestId } = render(<Forms />);
    const inputDate = getByTestId('input-data') as unknown as HTMLInputElement;
    fireEvent.change(inputDate, { target: { value: '2022-04-23' } });
    expect(inputDate.value).toBe('2022-04-23');
  });
  it('input select', () => {
    const { getByTestId } = render(<Forms />);
    const inputSelect = getByTestId('input-select') as unknown as HTMLSelectElement;
    userEvent.selectOptions(inputSelect, 'USA');
    expect(inputSelect.value).toBe('USA');
  });
  it('input agreement', () => {
    const { getByTestId } = render(<Forms />);
    const inputAgreement = getByTestId('input-agreement') as unknown as HTMLInputElement;
    userEvent.click(inputAgreement);
    expect(inputAgreement.checked).toBe(true);
  });
  it('input radio', () => {
    const { getByTestId } = render(<Forms />);
    const inputRadio = getByTestId('input-radio') as unknown as HTMLInputElement;
    userEvent.click(inputRadio);
    expect(inputRadio.checked).toBe(true);
  });
});
