import React from 'react';
import { render, screen } from '@testing-library/react';
import { isReturnStatement } from 'typescript';
import CardForForm from './CardForForm';

describe('card', () => {
  it('render', () => {
    render(
      <CardForForm
        name={'pavel'}
        date={'12-12-2012'}
        country={'usa'}
        file={'eeqwewqeqwe'}
        isRight={'он'}
      />
    );
    screen.debug();
    expect(screen.getByText('pavel')).toBeInTheDocument();
  });
});
