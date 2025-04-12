import HeroSection from '@/components/hero-section';
import SectionHeader from '@/components/section-header';
import ContactForm from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        title='Get in Touch'
        subtitle="Have a question or want to learn more? We'd love to hear from you."
        primaryButtonText='Call Us'
        primaryButtonLink='https://wa.me/250788300840'
        secondaryButtonText='Book Now'
        secondaryButtonLink='https://shorturl.at/JudZ0'
      />
      {/* Business Hours */}
      <section className='py-20 bg-[#134B42]/5'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='Business Hours'
            subtitle='Our team is available during the following hours.'
          />

          <div className='max-w-2xl mx-auto'>
            <div className='bg-white p-8 rounded-lg'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='border-b pb-2'>
                  <p className='font-semibold text-[#134B42]'>
                    Monday - Friday
                  </p>
                </div>
                <div className='border-b pb-2'>
                  <p>9:00 AM - 5:00 PM</p>
                </div>

                <div className='border-b pb-2'>
                  <p className='font-semibold text-[#134B42]'>Saturday</p>
                </div>
                <div className='border-b pb-2'>
                  <p>By Appointment Only</p>
                </div>

                <div className='border-b pb-2'>
                  <p className='font-semibold text-[#134B42]'>Sunday</p>
                </div>
                <div className='border-b pb-2'>
                  <p>Closed</p>
                </div>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-gray-700'>
                  Need to meet outside of regular business hours? Contact us to
                  arrange a special appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='Contact Information'
            subtitle='We are always looking for new opportunities to collaborate and create value. Reach out to us today to learn more about how Musper can support your business growth.'
          />

          <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <div className='bg-[#134B42]/5 p-8 rounded-lg text-center'>
              <div className='w-16 h-16 bg-[#134B42]/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Phone className='h-8 w-8 text-[#134B42]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-2'>Phone</h3>
              <a
                href='https://wa.me/250788300840'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-700 hover:text-[#134B42]'
              >
                +250 788 300 840
              </a>
              <p className='text-gray-500 text-sm mt-2'>
                Available Monday-Friday, 9am-5pm
              </p>
            </div>

            <div className='bg-[#134B42]/5 p-8 rounded-lg text-center'>
              <div className='w-16 h-16 bg-[#134B42]/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Mail className='h-8 w-8 text-[#134B42]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-2'>Email</h3>
              <p className='text-gray-700'>muspersolutions@gmail.com</p>
              <p className='text-gray-500 text-sm mt-2'>
                We'll respond within 24 hours
              </p>
            </div>

            <div className='bg-[#134B42]/5 p-8 rounded-lg text-center'>
              <div className='w-16 h-16 bg-[#134B42]/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <MapPin className='h-8 w-8 text-[#134B42]' />
              </div>
              <h3 className='text-xl font-bold text-[#134B42] mb-2'>
                Location
              </h3>
              <p className='text-gray-700'>Kigali - Nyarugenge KN 12</p>
              <p className='text-gray-500 text-sm mt-2'>Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-20 bg-[#80917D]/10'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='Send Us a Message'
            subtitle='Fill out the form below to schedule a consultation or inquire about our services.'
          />

          <div className='max-w-3xl mx-auto'>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <SectionHeader
            title='Visit Our Office'
            subtitle="We're located in the heart of Kigali, Rwanda."
          />

          <div className='max-w-5xl mx-auto h-96 rounded-lg overflow-hidden shadow-md'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5063983243006!2d30.05881!3d-1.9441100000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42885bc2b7d%3A0x527f6d6a68b8d4cb!2sKN%2012%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1651234567890!5m2!1sen!2srw'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Musper Solutions Office Location'
              aria-label='Map showing Musper Solutions office location in Kigali, Rwanda'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
