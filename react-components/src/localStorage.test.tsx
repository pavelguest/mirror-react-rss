import React from 'react';
import '@testing-library/jest-dom';

interface IObjectKeys {
  [key: string]: string | number;
}

const mock = () => {
  let storage = {} as IObjectKeys;
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string | number, value: string) => (storage[key] = value || ''),
    removeItem: (key: string | number) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});

describe('storage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mock(),
    });
  });

  it('saves the key to the storage', () => {
    window.localStorage.setItem('the-key', 'fake-value');
    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });
});
