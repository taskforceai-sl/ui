/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { HostedRoute } from '$app/components/HostedRoute';
import { PrivateRoute } from '$app/components/PrivateRoute';
import { PublicRoute } from '$app/components/PublicRoute';
import { Route } from 'react-router-dom';
import { Demo } from './Demo';
import { Login } from './Login';
import { Logout } from './Logout';
import { RecoverPassword } from './RecoverPassword';
import { Register } from './Register';

export const authenticationRoutes = (
  <>
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<Login />} />
      <Route path="/recover_password" element={<RecoverPassword />} />
      <Route element={<HostedRoute />}>
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/demo" element={<Demo />} />
    </Route>

    <Route element={<PrivateRoute />}>
      <Route path="/logout" element={<Logout />} />
    </Route>
  </>
);
