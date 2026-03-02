/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2024. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function formatLabel(
  firstName: string | null | undefined,
  lastName: string | null | undefined,
  email: string | null | undefined,
  fallback: string
): string {
  const first = firstName || '';
  const last = lastName || '';
  const emailAddr = email || '';
  const name = [first, last].filter(Boolean).join(' ').trim();

  if (name) {
    return name;
  }

  if (emailAddr) {
    return emailAddr;
  }

  return fallback;
}
