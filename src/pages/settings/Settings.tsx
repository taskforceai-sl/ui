/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function Settings() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/settings/company_details');
  });

  return <></>;
}
