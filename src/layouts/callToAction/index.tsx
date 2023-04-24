import ActionButton from "@/shared/ActionButton"

type Props = {}

const CTA = (props: Props) => {
  return (
    <section className="w-full bg-cta-mobile md:bg-cta-desktop bg-violet-700">
      <div className="text-center py-16">
        <h2 className="font-bold text-white text-3xl pb-8">Boost your links today</h2>
        <ActionButton url="#home">Get Started</ActionButton>
      </div>
    </section>
  )
}

export default CTA