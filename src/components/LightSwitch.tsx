/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Moon, Sun } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../common/stores/slices/settings';
import { RootState } from '../common/stores/store';

export function LightSwitch() {
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setDarkMode({ status: !darkMode }))}>
      {darkMode ? <Moon className="text-white" /> : <Sun />}
    </button>
  );
}
