import { FooterLinkType } from '@champagneswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.champagneswap.com/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.champagneswap.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/champagneswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.champagneswap.com/contact-us/telegram',
      },
      {
        label: t('CHAM token'),
        href: 'https://champagneswap.com/tokenomics/cham',
      },
      
      
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.champagneswap.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.champagneswap.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.champagneswap.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/champagneswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.champagneswap.com',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.champagneswap.com/code/bug-bounty',
      },
      
    ],
  },
]
