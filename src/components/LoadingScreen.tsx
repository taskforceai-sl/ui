/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Spinner } from './Spinner';

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner variant="dark" />
    </div>
  );
}
