import type { RoadmapItem } from '../constants/landing';

export function RoadmapTimeline({ items }: { items: readonly RoadmapItem[] }) {
  return (
    <div className='space-y-0'>
      {items.map((item, index) => (
        <div className='grid grid-cols-[1.5rem_minmax(0,1fr)] gap-4' key={item.phase}>
          <div className='flex flex-col items-center'>
            <span
              className={`relative z-10 mt-5 size-4 shrink-0 rounded-full border-4 border-core-white ${item.state === 'active' ? 'bg-brand-01 ring-1 ring-brand-01' : 'bg-grey-04 ring-1 ring-grey-04'}`}
            />
            {index < items.length - 1 && (
              <span className='relative z-0 w-px flex-1 bg-grey-03' />
            )}
          </div>
          <div className='pb-5'>
            <div
              className={`grid gap-5 rounded-soft border bg-core-white p-6 sm:grid-cols-[1fr_auto] sm:items-center ${item.state === 'active' ? 'border-brand-01' : 'border-grey-02'}`}
            >
              <div>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>
                <p className='mt-3 text-base leading-relaxed text-text-secondary'>
                  {item.text}
                </p>
              </div>
              <span
                className={`justify-self-start rounded-full border px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] sm:justify-self-end ${item.state === 'active' ? 'border-brand-01 text-brand-01' : 'border-grey-03 text-grey-04'}`}
              >
                {item.phase}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
