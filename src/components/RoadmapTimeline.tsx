import type { RoadmapItem } from '../constants/landing';

export function RoadmapTimeline({ items }: { items: readonly RoadmapItem[] }) {
  return (
    <div className='space-y-0'>
      {items.map((item, index) => (
        <div className='grid grid-cols-[1.5rem_1fr] gap-4' key={item.phase}>
          <div className='flex flex-col items-center'>
            <span
              className={`mt-5 size-4 shrink-0 rounded-full border-4 border-core-white ring-1 ${item.state === 'active' ? 'bg-brand-01 ring-brand-01' : 'bg-grey-04 ring-grey-04'}`}
            />
            {index < items.length - 1 && <span className='w-px flex-1 bg-grey-03' />}
          </div>
          <div className='pb-5'>
            <div
              className={`rounded-soft border bg-core-white p-5 ${item.state === 'active' ? 'border-brand-01' : 'border-grey-02'}`}
            >
              <span className='text-xs font-semibold uppercase tracking-[0.16em] text-brand-01'>
                {item.phase}
              </span>
              <h3 className='mt-3 text-xl font-semibold'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-text-secondary'>
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
