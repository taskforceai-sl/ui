/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CSSProperties, ReactNode } from 'react';

export default interface CommonProps {
  id?: any;
  className?: string;
  children?: ReactNode;
  onChange?: any;
  value?: any;
  onClick?: any;
  innerRef?: any;
  disabled?: boolean;
  style?: CSSProperties;
  cypressRef?: string;
  tabIndex?: number;
}
