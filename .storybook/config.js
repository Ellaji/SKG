import { configure } from '@storybook/react';
import '../bundles/main.css';

import './storybook-style.css';

function loadStories() {
  require('../stories/Breadcrumb');
  require('../stories/PageHeader');
  require('../stories/MainNav');
  require('../stories/NavBar');
}

configure(loadStories, module);