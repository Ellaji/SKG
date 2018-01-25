import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import NavBar from '../src/components/Navigation/NavBar';


const navigationContent = [
    {
        "text": "Link 1",
        "url": "#",
        "active": true,
        "submenu": [
            {
                "text": "Sublink 1",
                "url": "#",
                "submenu": [
                    {
                        "text": "Subsublink 1",
                        "url": "#",
                    },
                    {
                        "text": "Subsublink 2",
                        "url": "#",
                    },
                    {
                        "text": "Subsublink 3",
                        "url": "#",
                    }
                ]
            },
            {
                "text": "Sublink 2",
                "url": "#",
                "submenu": [
                    {
                        "text": "Subsublink 1",
                        "url": "#",
                    },
                    {
                        "text": "Subsublink 2",
                        "url": "#",
                    },
                    {
                        "text": "Subsublink 3",
                        "url": "#",
                    }
                ]
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
                "url": "#",
            }
        ]
    }
]

storiesOf('NavBar', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <nav>
            <NavBar items={navigationContent} />
        </nav>
    ));
