/**
 * Red Invoice.
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { numberFormat } from './number-format';

export class NumberFormatter {
  public static formatValue(value: string | number, precision: number) {
    return numberFormat(value, precision, '.', '');
  }
}
