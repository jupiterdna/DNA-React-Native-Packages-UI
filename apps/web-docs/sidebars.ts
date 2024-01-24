import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure


 docs: [
      {
        type: 'category',
        label: 'Getting Started',
        collapsed: false,
        items: ['getting-started/installation', 'getting-started/overview'],
      },{
        type: 'category',
        label: 'Base Components',
        collapsed: false,
        items: [
          {
            collapsible: false,
            type: 'category',
            link: { type: 'doc', id: 'components/avatar' },
            label: 'Avatar',
            items: [
              'components/avatar-with-status',
              'components/avatar-with-badge',
            ],
          },
          'components/badge',
          'components/button',
          'components/card',
          'components/checkbox',
          'components/chip',
          'components/dialog',
          'components/dropdown',
          'components/fab',
          'components/header',
          'components/icon',
          'components/image',
          'components/popover',
          'components/progress',
          'components/radio_button',
          'components/rte',
          'components/spinner',
          'components/switch',
          'components/tabs',
          'components/textinput',
        ]
      },
      {
        type: 'category',
        label: 'Field Level Controls',
        collapsed: false,
        items: [
          'field-level/currency',
          {
            collapsible: false,
            type: 'category',
            link: { type: 'doc', id: 'field-level/date' },
            label: 'Date',
            items: [
              'field-level/date_of_birth',
            ],
          },
          'field-level/email',
          'field-level/name',
          'field-level/password',
          'field-level/phone_number',
          'field-level/time',
          'field-level/zipcode',
        ]
      },
    ],
};

export default sidebars;
