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

export function useCompanyBackupRestoreTabs() {
  const { t } = useTranslation();

  const tabs: Tab[] = [
    { name: t('backup'), href: '/settings/backup_restore' },
    { name: t('restore'), href: '/settings/backup_restore/restore' },
  ];

  return tabs;
}
