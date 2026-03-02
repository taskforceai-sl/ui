/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Spinner } from '$app/components/Spinner';

export function TabLoader() {
  return (
    <div className="py-4">
      <Spinner />
    </div>
  );
}
