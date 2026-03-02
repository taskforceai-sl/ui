/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Navigate } from 'react-router';
import { useAuthenticated } from '../common/hooks/useAuthenticated';

export function Index() {
  const authenticated = useAuthenticated();

  return authenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
}
