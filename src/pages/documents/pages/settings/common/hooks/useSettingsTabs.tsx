/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SettingsRoute {
  name: string;
  href: string;
  current: boolean;
  enabled: boolean;
}

export function useSettingsTabs() {
  const [t] = useTranslation();
  const location = useLocation();

  const routes: SettingsRoute[] = [
    {
      name: t('email_templates'),
      href: '/docuninja/settings/email_templates',
      current: location.pathname === '/docuninja/settings/email_templates',
      enabled: true,
    },
    {
      name: t('notifications'),
      href: '/docuninja/settings/notifications',
      current: location.pathname === '/docuninja/settings/notifications',
      enabled: true,
    },
  ];

  return routes;
}
