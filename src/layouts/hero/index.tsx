import ActionButton from "@/shared/ActionButton"

import heroImage from "@/assets/illustration-working.svg"


type Props = {}

const Hero = (props: Props) => {
  return (
    <section > 
      <div className="flex flex-col-reverse lg:flex-row items-center md:justify-center justify-between gap-8 lg:gap-0 w-5/6 2xl:w-4/6 mx-auto lg:py-16">
        <div className="text-center lg:text-start w-full lg:w-1/2 ">
          <h1 className="text-gray-800 font-bold text-4xl lg:text-7xl leading-[1.125] tracking-tight">
            More than just Shorter links
          </h1>
          <p className="font-medium text-lg lg:text-xl pt-2 ">
            Build your brand’s recognition and get detailed insights 
            on how your links are performing.
          </p>
          <ActionButton content="Get Started" url="#start" addedClases="mt-8 px-10 py-3"/>
        </div>
        
          <img className="overflow-visible object-cover pl-48 lg:pl-72 w-full lg:w-1/2 h-[400px] lg:h-[500px] " alt="" src={heroImage} />
       
      </div>
    </section>
  )
}

export default Hero