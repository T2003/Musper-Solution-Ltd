import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  illustration?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  illustration,
}: CTASectionProps) {
  return (
    <section className='py-20 bg-[#134B42] relative overflow-hidden'>
      {illustration && (
        <div className='absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10'>
          <Image
            src={illustration}
            alt='CTA Illustration'
            fill
            className='object-contain'
          />
        </div>
      )}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            {title}
          </h2>
          <p className='text-lg text-white/80 mb-8'>{subtitle}</p>
          <Button
            asChild
            className='bg-[#EEA83B] hover:bg-[#EEA83B]/90 text-[#134B42] px-6 py-3'
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
