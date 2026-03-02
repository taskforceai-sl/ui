/**
 * Red Invoice.
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CreditStatus } from '$app/common/enums/credit-status';

export default {
  [CreditStatus.Draft]: 'draft',
  [CreditStatus.Sent]: 'sent',
  [CreditStatus.Partial]: 'partial',
  [CreditStatus.Applied]: 'applied',
};
