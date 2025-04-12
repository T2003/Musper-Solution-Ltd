import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: CTASectionProps) {
  return (
    <section className='py-20 bg-gradient-to-br from-[#134B42] to-[#134B42]/90 text-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>{title}</h2>
          <p className='text-lg mb-8 text-white/90'>{subtitle}</p>
          <Link href={buttonLink}>
            <Button className='bg-[#EEA83B] hover:bg-[#EEA83B]/90 text-[#134B42] font-medium px-8 py-6 rounded-lg text-lg'>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
