'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the validation schema using Zod
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]{10,}$/, 'Please enter a valid phone number'),
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),
  position: z
    .string()
    .min(2, 'Position must be at least 2 characters')
    .max(100, 'Position must be less than 100 characters'),
  service: z.string().min(1, 'Please select a service'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-[#80917D]/5 p-8 rounded-lg'>
      <h3 className='text-2xl font-bold text-[#134B42] mb-6'>
        Send us a Message
      </h3>

      {submitSuccess && (
        <div className='mb-6 p-4 bg-green-100 text-green-700 rounded-md'>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              First Name *
            </label>
            <input
              {...register('firstName')}
              type='text'
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42] 
                ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.firstName && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Last Name *
            </label>
            <input
              {...register('lastName')}
              type='text'
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.lastName && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email *
            </label>
            <input
              {...register('email')}
              type='email'
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type='tel'
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='companyName'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Company Name *
            </label>
            <input
              {...register('companyName')}
              type='text'
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.companyName && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='position'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Your Position *
            </label>
            <input
              {...register('position')}
              type='text'
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.position ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.position && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.position.message}
              </p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='service'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Service of Interest *
            </label>
            <select
              {...register('service')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value=''>Select a service</option>
              <option value='digital-transformation'>
                Digital Transformation
              </option>
              <option value='business-diagnostics'>Business Diagnostics</option>
              <option value='strategic-planning'>
                Strategic & Business Planning
              </option>
              <option value='business-advisory'>Business Advisory</option>
              <option value='sales-marketing'>Sales & Marketing Modules</option>
              <option value='business-growth'>
                Business Growth & Implementation
              </option>
              <option value='process-management'>Process Management</option>
              <option value='event-management'>
                Event Management Services
              </option>
              <option value='sustainable-business'>
                Sustainable Business Advisory
              </option>
              <option value='training'>Training & Capacity Building</option>
            </select>
            {errors.service && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='preferredTime'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Preferred Meeting Time *
            </label>
            <select
              {...register('preferredTime')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
                ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value=''>Select a time slot</option>
              <option value='monday-10am'>Monday 10:00 AM</option>
              <option value='wednesday-10am'>Wednesday 10:00 AM</option>
              <option value='friday-10am'>Friday 10:00 AM</option>
            </select>
            {errors.preferredTime && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.preferredTime.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:ring-[#134B42] focus:border-[#134B42]
              ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          ></textarea>
          {errors.message && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full bg-[#134B42] hover:bg-[#134B42]/90'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
