import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactFormProps {
  onSuccess: () => void
}

interface FormValues {
  name: string
  email: string
  message: string
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  message: '',
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState<FormValues>(INITIAL_VALUES)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event: React.FormEvent) {
    if (form.name && form.email && form.message) {
      event.preventDefault()
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_PUBLICK_KEY

      const emailBody = {
        from_name: form.name,
        email: form.email,
        message: form.message,
      }

      if (serviceId && templateId && publicKey) {
        const { status } = await emailjs.send(
          serviceId,
          templateId,
          emailBody,
          publicKey
        )

        if (status === 200) {
          setForm(INITIAL_VALUES)
          onSuccess()
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-8 text-2xl font-bold text-black">Send me a message</h1>
      <form
        className="flex w-full flex-col gap-4 text-black"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-thin text-gray-600">
            Your name:
          </label>
          <input
            placeholder="Enter your name"
            id="name"
            name="name"
            type="text"
            required
            minLength={1}
            value={form.name}
            onChange={(event) => handleChange(event)}
            className="rounded-lg bg-gray-200 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-thin text-gray-600">
            Your email:
          </label>
          <input
            placeholder="Enter your email"
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => handleChange(event)}
            className="rounded-lg bg-gray-200 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-thin text-gray-600">
            Your name:
          </label>
          <textarea
            placeholder="Write your message in here"
            id="message"
            name="message"
            required
            value={form.message}
            onChange={(event) => handleChange(event)}
            className="rounded-lg bg-gray-200 p-2"
          />
        </div>
        <button className="rounded-lg bg-black p-4 text-white hover:bg-gray-900">
          Send message
        </button>
      </form>
    </div>
  )
}
