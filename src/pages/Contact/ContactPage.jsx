import React from 'react'
import ContactForm from '../../components/Forms/ContactForm'

export default function ContactPage() {
  return (
    <div className='container mx-auto  min-h-screen flex justify-center items-center'>
    <div className="w-96 px-4 py-16 rounded-lg bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <ContactForm/>
    </div>
    </div>
  )
}
