/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { PurchaseOrderStatus } from '$app/common/enums/purchase-order-status';

export default {
  [PurchaseOrderStatus.Accepted]: 'accepted',
  [PurchaseOrderStatus.Cancelled]: 'canclled',
  [PurchaseOrderStatus.Draft]: 'draft',
  [PurchaseOrderStatus.Received]: 'received',
  [PurchaseOrderStatus.Sent]: 'sent',
};
