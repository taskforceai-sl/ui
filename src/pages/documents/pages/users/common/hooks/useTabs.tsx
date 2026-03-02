/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Tab } from '$app/components/Tabs';
import { useTranslation } from 'react-i18next';

const useTabs = () => {
  const [t] = useTranslation();

  const tabs: Tab[] = [
    {
      name: t('create'),
      href: '/docuninja/users/create',
    },
    {
      name: t('documents'),
      href: '/credits/create/documents',
    },
    {
      name: t('settings'),
      href: '/credits/create/settings',
    },
  ];

  return tabs;
};

export default useTabs;
