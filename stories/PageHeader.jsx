import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from '../src/components/Header/PageHeader';

const headerNavigation = {
    "mainNavigation": [
      {
        "title": "Dozen",
        "label": "",
        "link": "#",
        "target": "",
        "behaviour": null,
        "icon": null,
        "image": null,
        "children": {},
        "active": typeof location !== 'undefined' ? location.pathname === '/dozen' : false,
        "level": 1,
      },
      {
        "title": "Verpakking",
        "label": "",
        "link": "#",
        "target": "",
        "behaviour": null,
        "icon": null,
        "image": null,
        "active": false,
        "level": 1,
      },
      {
        "title": "Groenteverpakking",
        "label": "",
        "link": "#",
        "target": "",
        "behaviour": null,
        "icon": null,
        "image": null,
        "active": false,
        "level": 1,
      }
    ],
}

storiesOf('PageHeader', module)
  .add('Default', () => (
    <PageHeader navigation={headerNavigation} />
    ));
