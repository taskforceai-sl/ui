/**
 * Red Invoice.
 *
 * @link https://github.com/taskforceai-sl/ui source repository
 *
 * @copyright Copyright (c) 2022. The Red Sun
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Timeline } from './Timeline';

export interface TimelineItemType {
  id: number;
  title: string;
  description?: string;
  time: string;
  completed: boolean;
  status: string;
}

interface TimelineLayoutProps {
  items: TimelineItemType[];
}

export function TimelineLayout({ items }: TimelineLayoutProps) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <Timeline
          key={item.id}
          item={item}
          nextItemCompleted={items[index + 1]?.completed}
          isFirstItem={index === 0}
        />
      ))}
    </div>
  );
}
