import { ContactTranslations } from "@/constants"
import { useLangaugeStore } from "@/hooks/LanguageStore"
import emailjs from '@emailjs/browser'
import { FormEvent, useRef, useState } from 'react'

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { langauge, font } = useLangaugeStore()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!form.current) return

    try {
      setIsSubmitting(true)
      
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      form.current.reset()
      alert('Message sent successfully!')
    } catch (error) {
      console.error(error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full lg:px-16">
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <input 
            name="name"
            type="text" 
            placeholder={ContactTranslations.form.fullname[langauge]} 
            className={`!${font} font-inter p-4 bg-yellowish border border-black/30 w-full placeholder:text-black/50 rounded-2xl`} 
            required
          />
          <input 
            name="phone"
            type="number" 
            placeholder={ContactTranslations.form.phone[langauge]} 
            className={`!${font} font-inter p-4 bg-yellowish border border-black/30 w-full placeholder:text-black/50 rounded-2xl`} 
            required
          />
        </div>
        <input 
          name="emai"
          type="email" 
          placeholder={ContactTranslations.form.email[langauge]} 
          className={`!${font} font-inter p-4 bg-yellowish border border-black/30 w-full placeholder:text-black/50 rounded-2xl`} 
          required
        />
        <textarea 
          name="message"
          placeholder={ContactTranslations.form.message[langauge]} 
          className={`!${font} font-inter min-h-[250px] p-4 bg-yellowish border border-black/30 w-full placeholder:text-black/50 rounded-2xl`} 
          required
        />
        <input 
          type="submit" 
          value={isSubmitting ? 'Sending...' : ContactTranslations.form.send[langauge]} 
          className={`!${font} font-inter w-fit cursor-pointer px-6 py-3 text-black/50 bg-yellowish hover:bg-black hover:text-white rounded-full border border-black/30 disabled:opacity-50`}
          disabled={isSubmitting}
        />
      </form>
    </div>
  )
}

export default ContactForm