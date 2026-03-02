/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Activity = lazy(() => import('./show/Activity'));

export const activityRoutes = (
  <Route>
    <Route path="/activities/:id" element={<Activity />} />
  </Route>
);
