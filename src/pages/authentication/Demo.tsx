/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { endpoint, isDemo } from '$app/common/helpers';
import { request } from '$app/common/helpers/request';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './common/hooks';

const email = import.meta.env.VITE_DEMO_EMAIL;
const password = import.meta.env.VITE_DEMO_PASSWORD;

export function Demo() {
  const navigate = useNavigate();
  const login = useLogin();

  useEffect(() => {
    if (!isDemo()) {
      return navigate('/login');
    }

    request('POST', endpoint('/api/v1/login'), {
      email,
      password,
    })
      .then((response) => login(response))
      .catch(() => navigate('/login'));
  }, []);

  return <div></div>;
}
