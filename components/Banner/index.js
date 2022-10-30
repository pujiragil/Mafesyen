import { Button } from "../Global"

export default function Banner() {
  return (
    <section className="bg-[url('/images/banner-1.png')] lg:bg-none bg-cover bg-center md:bg-top bg-no-repeat mx-3.5 mb-3.5 lg:mb-8 h-60 p-3.5 lg:p-0 flex items-end lg:items-center lg:gap-8">
      <img src="/images/banner-1.png" className="hidden lg:flex h-full w-full object-cover object-center" />
      <div className="bg-white w-full lg:w-3/5 h-fit py-4 px-5 gap-3 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
        <h4 className="text-sm md:text-xl lg:text-3xl font-medium">EXPLORE THE BEST OF YOU.</h4>
        <p className="font-roboto text-[10px] md:text-sm lg:text-base md:w-3/4">You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco.</p>
        <Button>shop now</Button>
      </div>
    </section>
  )
}