/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Tooltip } from '$app/components/Tooltip';
import { Link } from '$app/components/forms';
import { useTranslation } from 'react-i18next';
import { MdWarning } from 'react-icons/md';
import reactStringReplace from 'react-string-replace';

interface Props {
  size?: number;
}
export function UserUnsubscribedTooltip(props?: Props) {
  const [t] = useTranslation();

  const { size = 22 } = props || {};

  return (
    <Tooltip
      tooltipElement={reactStringReplace(
        t('user_unsubscribed') as string,
        ':link',
        () => (
          <Link
            className="lowercase text-xs"
            to="https://invoiceninja.github.io/docs/hosted/hosted-mail/"
            external
          >
            {t('link')}.
          </Link>
        )
      )}
      width="auto"
      placement="top"
    >
      <MdWarning color="red" size={size} />
    </Tooltip>
  );
}
