import type React from 'react';
import { ChevronRight } from 'lucide-react';
import { AnimatedElement, HoverScaleElement } from '@/components/ui/animation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  points,
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimatedElement animation='slideUp' delay={delay} className='h-full'>
      <HoverScaleElement className='h-full'>
        <div className='bg-[#134B42]/5 rounded-lg p-6 hover:shadow-md transition-shadow h-full'>
          <div className='w-12 h-12 bg-[#134B42]/10 rounded-full flex items-center justify-center mb-4'>
            {icon}
          </div>
          <h3 className='text-xl font-bold text-[#134B42] mb-2'>{title}</h3>
          <ul className='text-gray-700 space-y-2'>
            {points.map((point, index) => (
              <li key={index} className='flex items-start'>
                <ChevronRight className='h-5 w-5 text-[#EEA83B] shrink-0 mt-0.5' />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </HoverScaleElement>
    </AnimatedElement>
  );
}
