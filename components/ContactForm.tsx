'use client'

import { useState } from 'react'
import clsx from 'clsx'

const interests = [
  'Applications',
  'Cloud',
  'Data and AI',
  'Cyber Resilience',
  'Consulting',
  'Other',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Demo site: simulate a short network round-trip
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <div className="animate-slide-up flex h-full min-h-[480px] flex-col items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/50 p-12 text-center">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-2xl font-semibold text-gray-900">
          Message received
        </h3>
        <p className="mt-3 max-w-sm text-gray-600">
          Thank you for reaching out. A NovaCore expert will get back to you
          within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-medium text-blue-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60 md:p-10"
    >
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        Send us a message
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </Field>

        <Field label="Work email" required>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </Field>

        <Field label="Company">
          <input
            type="text"
            name="company"
            placeholder="Company Inc."
            className={inputClass}
          />
        </Field>

        <Field label="Area of interest">
          <select name="interest" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label="How can we help?" required>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, challenge, or question..."
            className={clsx(inputClass, 'resize-y')}
          />
        </Field>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-gray-500">
        By submitting this form you agree to our privacy policy. We&apos;ll
        only use your details to respond to your inquiry.
      </p>

      <button
        type="submit"
        disabled={sending}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
      >
        {sending ? 'Sending…' : 'Send message'}
        {!sending && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </button>
    </form>
  )
}

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100'

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-blue-600">*</span>}
      </span>
      {children}
    </label>
  )
}
