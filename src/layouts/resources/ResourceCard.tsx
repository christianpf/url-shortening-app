import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  margin: number,
  title: string,
  copy: string,
  img: string,
}

function ResourceCard({margin, title, copy, img}: Props) {

  const isDesktopScreen: boolean = useMediaQuery("(min-width:1024px)")

  return (
    <article className={`relative bg-white p-8 w-full`} style={{marginTop: isDesktopScreen ? `${margin}px` : "0"}}>
      <img className='absolute transition-transform -top-8 left-[42%] md:left-[46%] lg:left-auto bg-violet-700 rounded-full p-4 w-16' src={img} alt="Resource Icon" />
      <div className='pt-8'>
        <h2 className='font-bold text-black text-xl'>
          {title}
        </h2>
        <p className='pt-4 font-medium text-md'>
          {copy}
        </p>
      </div>
    </article>
  )
}

export default ResourceCard