/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Navigate, Outlet } from 'react-router-dom';

export function TestingRoute() {
  return import.meta.env.VITE_IS_TEST === 'true' ? (
    <Outlet />
  ) : (
    <Navigate to="/logout" />
  );
}
