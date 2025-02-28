import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryButtonText = 'Explore Our Services',
  primaryButtonLink = '/services',
  secondaryButtonText = 'Schedule a Consultation',
  secondaryButtonLink = '/contact',
}: HeroSectionProps) {
  return (
    <section className='relative bg-gradient-to-br from-[#134B42] via-[#134B42]/90 to-[#134B42]/80 py-20 overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#EEA83B]'></div>
        <div className='absolute -left-20 top-40 w-80 h-80 rounded-full bg-[#CA763B]'></div>
        <div className='absolute right-40 bottom-0 w-64 h-64 rounded-full bg-[#AEBA8A]'></div>
      </div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            {title}
          </h1>
          <p className='text-lg md:text-xl text-white/90 mb-8'>{subtitle}</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              className='bg-[#EEA83B] hover:bg-[#EEA83B]/90 text-[#134B42] font-medium text-lg px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <Link href={primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#134B42] font-medium text-lg px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
