import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 3 children', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it('given an invalid email address, validateEmail() returns false', () => {
    const validateEmail = jest.spyOn(App, 'validateEmail');
    expect(validateEmail(';lk@asd.$')).toBe(false);
  });
  
  it('given a valid email address, validateEmail() returns true', () => {
    expect(validateEmail('cookie@monster.com')).toBe(true);
  });
  
});