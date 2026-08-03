type RoadmapItem = {
  phase: string;
  title: string;
  text: string;
  state: 'active' | 'passive';
};

export function RoadmapTimeline({ items }: { items: readonly RoadmapItem[] }) {
  return (
    <div>
      <div className='flex items-center justify-center'>
        {items.map((item, index) => (
          <div className='flex items-center' key={item.phase}>
            <span
              className={`size-4 shrink-0 rounded-full border-4 border-core-white ring-1 ${item.state === 'active' ? 'bg-brand-01 ring-brand-01' : 'bg-grey-04 ring-grey-04'}`}
            />
            {index < items.length - 1 && (
              <span className='mx-3 h-px w-xs bg-grey-03' />
            )}
          </div>
        ))}
      </div>
      <div className='mt-5 grid gap-3 md:grid-cols-3'>
        {items.map((item) => (
          <div
            className='rounded-soft border border-grey-02 bg-core-white p-5'
            key={item.phase}
          >
            <span className='text-xs font-semibold uppercase tracking-[0.16em] text-brand-01'>
              {item.phase}
            </span>
            <h3 className='mt-5 text-xl font-semibold'>{item.title}</h3>
            <p className='mt-2 text-sm leading-relaxed text-text-secondary'>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
