import Link from 'next/link';
import {
  Check,
  Lightbulb,
  BarChart2,
  Target,
  Zap,
  TrendingUp,
  Leaf,
  Telescope,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import HeroSection from '@/components/hero-section';
import SectionHeader from '@/components/section-header';
import CTASection from '@/components/cta-section';
import ServiceCard from '@/components/service-card';
import IndustryCard from '@/components/industry-card';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <HeroSection
        title='Empowering Businesses with Smart Solutions'
        subtitle='Established with a vision to revolutionize how businesses approach challenges, we provide expert insights and customized strategies that drive success.'
      />

      {/* About Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='About Musper Solutions'
            subtitle='A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.'
          />

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-gray-700 mb-6 leading-relaxed'>
              Musper is a dynamic company dedicated to providing innovative business development solutions, 
              ICT services, and women empowerment programs. With a deep understanding of Rwanda’s 
              private sector landscape, we specialize in offering tailored support to businesses, 
              helping them scale, optimize operations, and access new opportunities.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                We believe in building lasting relationships with our clients,
                becoming trusted partners in their growth journey. From startups
                to established enterprises, Musper Solutions Ltd. is your go-to
                partner for business transformation and success.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-[#AEBA8A]/10 p-6 rounded-lg border-l-4 border-[#AEBA8A] flex flex-col items-center text-center'>
                <div className='w-16 h-16 bg-[#AEBA8A]/20 rounded-full flex items-center justify-center mb-4'>
                  <Telescope className='w-8 h-8 text-[#AEBA8A]' />
                </div>
                <h3 className='font-bold text-xl text-[#134B42] mb-2'>
                  Our Vision
                </h3>
                <p className='italic text-gray-700 mb-3'>
                  "Inspiring Excellence and Sustainability"
                </p>
                <p className='text-sm text-gray-600'>
                  To be a global leader in providing smart and sustainable
                  business solutions.
                </p>
              </div>
              <div className='bg-[#EEA83B]/10 p-6 rounded-lg border-l-4 border-[#EEA83B] flex flex-col items-center text-center'>
                <div className='w-16 h-16 bg-[#EEA83B]/20 rounded-full flex items-center justify-center mb-4'>
                  <Target className='w-8 h-8 text-[#EEA83B]' />
                </div>
                <h3 className='font-bold text-xl text-[#134B42] mb-2'>
                  Our Mission
                </h3>
                <p className='italic text-gray-700 mb-3'>
                  "Driving Transformative Solutions for Success"
                </p>
                <p className='text-sm text-gray-600'>
                  To deliver innovative, actionable, and sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-20 bg-[#80917D]/10 relative'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#134B42] text-center mb-16'>
            Our Core Values
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#EEA83B]/20 rounded-full flex items-center justify-center mb-6'>
                <Check className='h-6 w-6 text-[#EEA83B]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-3'>
                Integrity
              </h3>
              <p className='text-gray-700'>
                Upholding transparency and ethical practices in all operations.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#CA763B]/20 rounded-full flex items-center justify-center mb-6'>
                <Check className='h-6 w-6 text-[#CA763B]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-3'>
                Customer-Centricity
              </h3>
              <p className='text-gray-700'>
                Putting client needs and satisfaction at the forefront of every
                decision.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#AEBA8A]/20 rounded-full flex items-center justify-center mb-6'>
                <Check className='h-6 w-6 text-[#AEBA8A]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-3'>
                Innovation
              </h3>
              <p className='text-gray-700'>
                Continuously adopting and implementing the latest technological
                and strategic trends.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#134B42]/20 rounded-full flex items-center justify-center mb-6'>
                <Check className='h-6 w-6 text-[#134B42]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-3'>
                Sustainability
              </h3>
              <p className='text-gray-700'>
                Ensuring our solutions positively impact both the environment
                and society.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#EEA83B]/20 rounded-full flex items-center justify-center mb-6'>
                <Check className='h-6 w-6 text-[#EEA83B]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-3'>
                Excellence
              </h3>
              <p className='text-gray-700'>
                Striving for the highest standards in service delivery and
                client satisfaction.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#CA763B]/20 rounded-full flex items-center justify-center mb-6'>
                <Check className='h-6 w-6 text-[#CA763B]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-3'>
                Collaboration
              </h3>
              <p className='text-gray-700'>
                Building strong partnerships with clients and stakeholders for
                shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='Our Services'
            subtitle='We offer a range of services designed to meet the evolving needs of businesses, including:'
          />
          <div className='grid md:grid-cols-2 gap-12 items-center mb-12'></div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              icon={<Lightbulb className='h-6 w-6 text-[#134B42]' />}
              title='Digital Transformation'
              points={[
                'Integrating cutting-edge technology into business operations',
                'Optimizing products, services, and processes for the digital era',
              ]}
            />

            <ServiceCard
              icon={<BarChart2 className='h-6 w-6 text-[#134B42]' />}
              title='Business Diagnostics'
              points={[
                'Identifying operational inefficiencies and areas for growth',
                'Conducting in-depth business health assessments',
              ]}
            />

            <ServiceCard
              icon={<Target className='h-6 w-6 text-[#134B42]' />}
              title='Strategic & Business Planning'
              points={[
                'Developing actionable short- and long-term plans',
                'Aligning organizational goals with market opportunities',
              ]}
            />

            <ServiceCard
              icon={<Zap className='h-6 w-6 text-[#134B42]' />}
              title='Business Advisory'
              points={[
                'Tailored guidance for strategic decision-making',
                'Industry-specific insights to enhance performance',
              ]}
            />

            <ServiceCard
              icon={<TrendingUp className='h-6 w-6 text-[#134B42]' />}
              title='Business Growth & Implementation'
              points={[
                'Designing pathways for scaling businesses sustainably',
                'Ensuring effective execution of growth initiatives',
              ]}
            />

            <ServiceCard
              icon={<Leaf className='h-6 w-6 text-[#134B42]' />}
              title='Sustainable Business Advisory'
              points={[
                'Aligning sustainability goals with profitability objectives',
                'Helping businesses adopt environmentally and socially responsible practices',
              ]}
            />
          </div>

          <div className='text-center mt-12'>
            <Link href='/services'>
              <Button className='bg-[#134B42] hover:bg-[#134B42]/90 text-white px-6 py-3 rounded-lg'>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className='py-20 bg-[#EEA83B]/10 relative'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='Industries We Serve'
            subtitle='Our expertise spans across multiple sectors, allowing us to provide tailored solutions for diverse business needs.'
          />

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <IndustryCard
              icon={
                <svg
                  className='h-8 w-8 text-[#134B42]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              }
              title='Manufacturing'
            />

            <IndustryCard
              icon={
                <svg
                  className='h-8 w-8 text-[#134B42]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              }
              title='Healthcare'
            />

            <IndustryCard
              icon={
                <svg
                  className='h-8 w-8 text-[#134B42]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              }
              title='Technology'
            />

            <IndustryCard
              icon={
                <svg
                  className='h-8 w-8 text-[#134B42]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                  />
                </svg>
              }
              title='Retail'
            />
          </div>

          <div className='text-center mt-12'>
            <Link href='/services#industries'>
              <Button className='bg-[#134B42] hover:bg-[#134B42]/90 text-white px-6 py-3 rounded-lg'>
                View All Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title='Ready to Elevate Your Business?'
        subtitle='Our team of experts is ready to help you overcome challenges and achieve your business goals.'
        buttonText='Schedule a Consultation'
        buttonLink='/contact'
      />
    </div>
  );
}
