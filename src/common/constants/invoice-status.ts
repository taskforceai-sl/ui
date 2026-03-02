/**
 * Red Invoice.
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { InvoiceStatus } from '$app/common/enums/invoice-status';

export default {
  [InvoiceStatus.Cancelled]: 'cancelled',
  [InvoiceStatus.Unpaid]: 'unpaid',
  [InvoiceStatus.PastDue]: 'past_due',
  [InvoiceStatus.Draft]: 'draft',
  [InvoiceStatus.Sent]: 'sent',
  [InvoiceStatus.Partial]: 'partial',
  [InvoiceStatus.Paid]: 'paid',
  [InvoiceStatus.Reversed]: 'reversed',
};
