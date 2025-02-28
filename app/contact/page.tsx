'use client'
import { useRouteStore } from "@/hooks/RouteStore"
import { useEffect } from "react"
import ContactInfo from "@/components/ContactInfo"
import { useLangaugeStore } from "@/hooks/LanguageStore"
import ContactForm from "@/components/ContactForm"

const Page = () => {
  const {setCurrentRoute} = useRouteStore()
  const { direction } = useLangaugeStore()

  useEffect(() => {
    setCurrentRoute('/contact')
  }, [setCurrentRoute])
  
  return (
    <section dir={direction} className=" bg-yellowish padding-y lg:custom-height flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between gap-8 min-w-[80%] ">

      <div className="flex-1 flex justify-center items-center">
        <ContactInfo />
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <ContactForm />
      </div>
      </div>
    </section>
  )
}

export default Page