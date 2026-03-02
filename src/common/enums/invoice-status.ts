/**
 * Red Invoice.
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export const enum InvoiceStatus {
  Viewed = '-3',
  Unpaid = '-2',
  PastDue = '-1',
  Draft = '1',
  Sent = '2',
  Partial = '3',
  Paid = '4',
  Cancelled = '5',
  Reversed = '6',
}
