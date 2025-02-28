'use client';

import HeroSection from '@/components/hero-section';
import SectionHeader from '@/components/section-header';
import CTASection from '@/components/cta-section';
import { Check, Leaf, Telescope, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedElement, HoverScaleElement } from '@/components/ui/animation';

// Create properly typed motion components
const MotionSection = motion.section;

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title='About Musper Solutions'
        subtitle='A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.'
      />

      {/* Company Overview */}
      <MotionSection
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className='py-20 bg-white'
      >
        <div className='container mx-auto px-4 max-w-4xl text-gray-700'>
          <p className='text-lg mb-6 leading-relaxed'>
            Musper Solutions Ltd. is a premier consultancy firm specializing in
            empowering businesses with innovative and sustainable solutions.
            Established with a vision to revolutionize how businesses approach
            challenges, we provide expert insights and customized strategies
            that drive success.
          </p>
          <p className='text-lg mb-6 leading-relaxed'>
            Operating across diverse industries, we focus on diagnosing
            operational inefficiencies, implementing cutting-edge technologies,
            and crafting strategic plans tailored to each client's unique needs.
          </p>
          <p className='text-lg leading-relaxed'>
            We believe in building lasting relationships with our clients,
            becoming trusted partners in their growth journey.
          </p>
        </div>
      </MotionSection>

      {/* Vision & Mission */}
      <MotionSection
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={fadeInUp}
        className='py-20 bg-gray-100'
      >
        <div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-4xl'>
          {[
            {
              icon: <Telescope className='h-6 w-6 text-green-700' />,
              title: 'Our Vision',
              color: 'bg-green-200',
              quote: 'Inspiring Excellence and Sustainability',
              description:
                'To be a global leader in providing smart and sustainable business solutions.',
            },
            {
              icon: <Target className='h-6 w-6 text-yellow-600' />,
              title: 'Our Mission',
              color: 'bg-yellow-200',
              quote: 'Driving Transformative Solutions for Success',
              description:
                'To deliver innovative, actionable, and sustainable solutions.',
            },
          ].map(({ icon, title, color, quote, description }, index) => (
            <AnimatedElement
              key={title}
              animation='slideUp'
              delay={index * 0.2}
            >
              <HoverScaleElement>
                <div className='bg-white p-8 rounded-lg shadow-sm h-full'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div
                      className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}
                    >
                      {icon}
                    </div>
                    <h2 className='text-2xl font-bold text-green-900'>
                      {title}
                    </h2>
                  </div>
                  <p className='text-xl italic text-green-900 mb-6'>
                    "{quote}"
                  </p>
                  <p className='text-gray-700 leading-relaxed'>{description}</p>
                </div>
              </HoverScaleElement>
            </AnimatedElement>
          ))}
        </div>
      </MotionSection>

      {/* Core Values */}
      <MotionSection
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className='py-20 bg-white'
      >
        <div className='container mx-auto px-4 max-w-5xl'>
          <SectionHeader
            title='Our Core Values'
            subtitle='Guiding principles that shape our business.'
          />
          <div className='grid md:grid-cols-3 gap-8 mt-8'>
            {[
              'Integrity',
              'Customer-Centricity',
              'Innovation',
              'Sustainability',
              'Excellence',
              'Collaboration',
            ].map((value, index) => (
              <AnimatedElement
                key={index}
                animation='slideUp'
                delay={index * 0.1}
              >
                <HoverScaleElement>
                  <div className='bg-gray-100 p-6 rounded-lg shadow-sm h-full'>
                    <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4'>
                      <Check className='h-6 w-6 text-green-700' />
                    </div>
                    <h3 className='text-xl font-bold text-green-900 mb-2'>
                      {value}
                    </h3>
                    <p className='text-gray-700'>{`We uphold ${value.toLowerCase()} in all aspects of our operations.`}</p>
                  </div>
                </HoverScaleElement>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <CTASection
        title='Partner with Musper Solutions'
        subtitle="Let's transform your business challenges into growth opportunities."
        buttonText='Contact Us Today'
        buttonLink='/contact'
      />
    </div>
  );
}
