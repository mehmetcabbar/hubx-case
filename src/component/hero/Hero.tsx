import First from '../../assets/images/screens/1.svg'
import MyButton from '../myButton/MyButton'

const Hero = () => {
    return (
        <div className="w-full h-[540px] lg:h-[613px] grid lg:grid-cols-2 grid-cols-1 lg:gap lg:gap-10 px-6">
            <div className={"mx-auto content-end lg:order-1 order-2 overflow-y-auto scrollbar-hidden pt-40 lg:pt-0 safari-specific scrollable"}>
                <img src={First} alt="hero-image" className={`w-[230px] lg:w-auto scrollbar-hidden`} />
            </div>
            <div className='flex justify-center align-middle items-center w-full lg:w-[556px] h-auto lg:order-2 order-1'>
                <div className='flex-none lg:text-right text-center px-6'>
                    <h2 className='font-sf-pro-display text-base font-extrabold text-title leading-5 tracking-custom'>DOCUMENT SCANNER</h2>
                    <h1 className='font-sf-pro-display mt-4 text-[32px] font-extrabold text-primary leading-10'>Scan with ease</h1>
                    <div className='mt-5 text-primary font-sf-pro-display font-normal text-sm lg:text-xl px-6 lg:px-0'>
                        Scan any document instantly with your mobile device <br /> by just a few steps. Save as PDF,JPG,ZIP,TXT and <br className='lg:hidden' /> Word format.
                    </div>
                    <div className='mt-6'>
                        <MyButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero