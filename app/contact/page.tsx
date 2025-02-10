'use client'
import { useRouteStore } from "@/hooks/RouteStore"
import { useEffect } from "react"
import ContactInfo from "@/components/ContactInfo"
import { useLangaugeStore } from "@/hooks/LanguageStore"
import ContactForm from "@/components/ContactForm"
const page = () => {

  const {setCurrentRoute} = useRouteStore()
  const {langauge , font , direction} = useLangaugeStore()

  useEffect(() => {
    setCurrentRoute('/contact')
  } , [])
  
  return (
    <section dir={direction} className="flex flex-col lg:flex-row gap-8 max-container lg:custom-height bg-yellowish padding-y ">
      <div className="flex-1 flex justify-center items-center">
        <ContactInfo />
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <ContactForm />
      </div>
    </section>
  )
}

export default page