type RaspberryPiMarkProps = {
  size?: number;
  variant?: 'icon' | 'text';
};

export function RaspberryPiMark({
  size = 32,
  variant = 'icon',
}: RaspberryPiMarkProps) {
  if (variant === 'text') {
    return (
      <span className='ml-1 -rotate-5 text-lg font-black uppercase tracking-[0.12em] text-[#cd2355]'>
        Pi
      </span>
    );
  }

  return (
    <img
      src='/raspberrypi.svg'
      alt='Raspberry Pi'
      className='h-auto -rotate-5'
      style={{ width: size }}
    />
  );
}
