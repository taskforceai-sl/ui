/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Badge } from '$app/components/Badge';
import { useTranslation } from 'react-i18next';

interface Props {
  isTaxExempt: boolean;
}

export function TaxExemptBadge({ isTaxExempt }: Props) {
  const [t] = useTranslation();

  if (!isTaxExempt) {
    return null;
  }

  return <Badge variant="orange">{t('tax_exempt')}</Badge>;
}
