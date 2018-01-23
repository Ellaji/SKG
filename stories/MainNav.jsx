import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MainNav from '../src/components/Header/MainNav';

const linkList = [
    {text: 'Home', url: '#'},
    {text: 'Dozen', url: '#'},
    {text: 'Karton', url: '#'},
    {text: 'Hard Karton', url: '#'},
    {text: 'Display', url: '#'}
]

storiesOf('MainNav', module)
    .add('Default', () => (
        <MainNav links={linkList}></MainNav>
    ));
