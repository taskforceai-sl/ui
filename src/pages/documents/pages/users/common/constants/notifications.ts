/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface NotificationType {
  id: string;
  labelKey: string;
}

export const NOTIFICATION_TYPES: NotificationType[] = [
  {
    id: 'document_created',
    labelKey: 'document_created_notification',
  },
  {
    id: 'document_sent',
    labelKey: 'document_sent_notification',
  },
  {
    id: 'document_viewed',
    labelKey: 'document_viewed_notification',
  },
  {
    id: 'document_signed',
    labelKey: 'document_signed_notification',
  },
  {
    id: 'document_completed',
    labelKey: 'document_completed_notification',
  },
  {
    id: 'document_rejected',
    labelKey: 'document_rejected_notification',
  },
  {
    id: 'document_voided',
    labelKey: 'document_voided_notification',
  },
  {
    id: 'document_expired',
    labelKey: 'document_expired_notification',
  },
];

export const NOTIFICATION_VALUES = {
  NONE: 'none',
  ALL: 'all',
  ALL_USER: 'all_user',
  CUSTOM: 'custom',
} as const;

export type NotificationValue = typeof NOTIFICATION_VALUES[keyof typeof NOTIFICATION_VALUES];



