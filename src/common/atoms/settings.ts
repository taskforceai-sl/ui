/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { atom } from 'jotai';
import { GroupSettings } from '../interfaces/group-settings';
import { Client } from '../interfaces/client';

export const activeSettingsAtom = atom<GroupSettings | Client | undefined>(
  undefined
);
