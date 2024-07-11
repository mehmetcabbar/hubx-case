import { useTranslation } from 'react-i18next'
import ErrorImage from '../../assets/images/error/error.svg'

const Error = () => {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col justify-center items-center lg:h-[736px] w-full bg-content-bg'>
            <img src={ErrorImage} alt='Error' className='w-[240px] h-[240px] mx-auto' />
            <h1 className='text-2xl font-bold font-sf-pro-display text-center text-primary'>{t("something_went_wrong")}</h1>
            <p className='font-normal text-slate-500 px-8 text-center'>{t("try_again")}</p>
        </div>
    )
}

export default Error