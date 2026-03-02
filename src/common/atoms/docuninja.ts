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
import { DocuNinjaData } from '../interfaces/docuninja/api';
// Main DocuNinja data atom - following the exact same pattern as expenses
export const docuNinjaAtom = atom<DocuNinjaData | undefined>(undefined);