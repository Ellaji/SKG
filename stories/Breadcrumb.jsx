import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import Breadcrumb from '../src/components/Navigation/Breadcrumb';

const linkList = [
    {text: 'Home', url: '#'},
    {text: 'Dozen', url: '#'},
    {text: 'Karton', url: '#'},
    {text: 'Hard Karton', url: '#'},
    {text: 'Display', url: '#'}
];

let rangeOptions = { min: 0, max: 5, step: 1 };

storiesOf('Breadcrumb', module)
.addDecorator(withKnobs)
  .add('Default', () => (
    <Breadcrumb links={linkList.slice(0, number('Total breadcrumbs items', 3, rangeOptions))} />
  ));
