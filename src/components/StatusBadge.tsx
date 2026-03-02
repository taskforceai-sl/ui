/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */
import CommonProps from '$app/common/interfaces/common-props.interface';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface Props extends CommonProps {
  for: any;
  code: string | number;
  headless?: boolean;
}

export function StatusBadge(props: Props) {
  const [t] = useTranslation();

  return (
    <span
      className={classNames({
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800':
          !props.headless,
      })}
      style={props.style}
      onClick={props.onClick}
    >
      {t(props.for[props.code]) || t(props.code.toString())}
    </span>
  );
}
