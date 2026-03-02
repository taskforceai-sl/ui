/**
 * Red Invoice.
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { EntityState } from '$app/common/enums/entity-state';

export default {
  [EntityState.Active]: 'active',
  [EntityState.Archived]: 'archived',
  [EntityState.Deleted]: 'deleted',
};
