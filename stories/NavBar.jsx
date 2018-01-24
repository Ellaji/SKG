import * as React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../src/components/Navigation/NavBar';


const navigationContent = [
    {
        "text": "Link 1",
        "url": "#",
        "submenu": [
            {
                "text": "Sublink 1",
                "url": "#",
            },
            {
                "text": "Sublink 2",
                "url":"#",
            }
        ]
    },
    {
        "text": "Link 2",
        "url": "#"
    },
    {
        "text": "Link 3",
        "url": "#",
        "submenu": [
        {
            "text": "Sublink 1",
            "url": "#",
        },
        {
            "text": "Sublink 2",
            "url":"#",
        }
        ]
    }
]

storiesOf('NavBar', module)
    .add('Default', () => (
        <nav> 
            <NavBar items={navigationContent}/>
        </nav>
    ));
