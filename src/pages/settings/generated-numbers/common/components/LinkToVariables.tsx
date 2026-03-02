/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Link } from '$app/components/forms';
import { useTranslation } from 'react-i18next';

export function LinkToVariables() {
  const [t] = useTranslation();

  return (
    <Link
      className="pl-4 sm:pl-6"
      to="https://invoiceninja.github.io/docs/advanced-topics/custom-fields#custom-fields"
      external
    >
      {t('click_to_variables')}
    </Link>
  );
}
