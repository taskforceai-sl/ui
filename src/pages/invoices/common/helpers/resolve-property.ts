/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { InvoiceItem } from '$app/common/interfaces/invoice-item';
import { aliases } from '$app/common/constants/product-aliases';
import { resolveKey } from './resolve-key';

export function resolveProperty(property: string) {
  const { property: _property } = resolveKey(property);

  return (
    (aliases[_property] as keyof InvoiceItem) ||
    (_property as keyof InvoiceItem)
  );
}
