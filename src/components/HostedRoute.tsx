/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Navigate, Outlet } from 'react-router';
import { isHosted } from '../common/helpers';

export function HostedRoute() {
  return isHosted() ? <Outlet /> : <Navigate to="/" />;
}
