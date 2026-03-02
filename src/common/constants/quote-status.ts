/**
 * Red Invoice.
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { QuoteStatus } from '$app/common/enums/quote-status';

export default {
  [QuoteStatus.Draft]: 'draft',
  [QuoteStatus.Sent]: 'sent',
  [QuoteStatus.Approved]: 'approved',
  [QuoteStatus.Converted]: 'converted',
  [QuoteStatus.Expired]: 'expired',
};
