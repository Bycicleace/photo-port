import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('H1 title is Contact me', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })
})

describe('Button text is Submit', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('buttontag')).toHaveTextContent('Submit');
    })
})