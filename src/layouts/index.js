import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { RenderReactPlaceholder } from '../components/Placeholder'

import MainLayout from '../components/Main/MainLayout'
import PageHeader from '../components/Header/PageHeader'
import CollapsibleNav from '../components/Navigation/CollapsibleNav'
import LabeledLink from '../components/Navigation/LabeledLink'
import VisualisedNavigationItem from '../components/Navigation/VisualisedNavigationItem'

import '../../bundles/main.css'

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
      "children": {
        "secondaryNavigation": [
          {
            "title":"Kleine Dozen",
            "label": "",
            "link": "#",
            "target": "",
            "behaviour": null,
            "icon": null,
            "image": null,
            "active": false,
            "level": 2,
            "alignment": null
          }
        ]
      },
      "active": typeof location !== 'undefined' ? location.pathname === '/dozen' : false,
      "level": 1,
      "alignment": null
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
      "alignment": null
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
      "alignment": null
    }
  ],
  "secondaryNavigation": [
    {
      "title":"Kleinere Dozen",
      "label": "",
      "link": "#",
      "target": "",
      "behaviour": null,
      "icon": null,
      "image": null,
      "active": false,
      "level": 2,
      "alignment": null
    }
  ]
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SKG ">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    <MainLayout>
      <RenderReactPlaceholder>
        <PageHeader navigation={headerNavigation} />
      </RenderReactPlaceholder>
      
      <RenderReactPlaceholder>
        {children()}
      </RenderReactPlaceholder>

      <RenderReactPlaceholder>
        {/* Footer placeholder */}
      </RenderReactPlaceholder>

    </MainLayout>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper