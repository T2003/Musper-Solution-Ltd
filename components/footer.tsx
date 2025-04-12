import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-[#134B42] text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <Image
                src='/Logo_white.png'
                alt='Musper Solutions Logo'
                width={250}
              
                height={250}
                className='rounded-md'
              />
              {/* <span className='text-xl font-bold'>Musper Solutions</span> */}
            </Link>
            <p className='text-white/80'>
              Transforming Business, Empowering Leaders
            </p>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='text-white/80 hover:text-white'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='text-white/80 hover:text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-white/80 hover:text-white'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-white/80 hover:text-white'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services#digital-transformation'
                  className='text-white/80 hover:text-white'
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href='/services#business-diagnostics'
                  className='text-white/80 hover:text-white'
                >
                  Business Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href='/services#strategic-planning'
                  className='text-white/80 hover:text-white'
                >
                  Strategic Planning
                </Link>
              </li>
              <li>
                <Link
                  href='/services#business-advisory'
                  className='text-white/80 hover:text-white'
                >
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Contact</h3>
            <ul className='space-y-2'>
              <li className='flex items-start gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5 shrink-0 mt-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <a
                  href='https://wa.me/250788300840'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/80 hover:text-white'
                >
                  +250 788 300 840
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5 shrink-0 mt-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span className='text-white/80'>info@musper.com</span>
              </li>
              <li className='flex items-start gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5 shrink-0 mt-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-white/80'>Kigali - Nyarugenge KN 12</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-white/80 text-sm'>
            © 2025 Musper Solutions Ltd. All rights reserved.
          </p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <Link
              href='https://www.instagram.com/muspersolutions'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-white'
            >
              <Instagram className='w-5 h-5' />
            </Link>
            <Link
              href='https://twitter.com/muspersolutions'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-white'
            >
              <Twitter className='w-5 h-5' />
            </Link>
            <Link
              href='https://www.linkedin.com/company/musper-solutions'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white/80 hover:text-white'
            >
              <Linkedin className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
