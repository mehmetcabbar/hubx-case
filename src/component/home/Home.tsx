import { get } from 'lodash';
import data from '../../assets/data/data.json';
import BottomTabs from '../bottomTabs/BottomTabs';
import Hero from '../hero/Hero';

const Home = () => {

    return (
        <div className='w-full h-[100dvh] lg:h-screen justify-center content-center lg:bg-soft-gray bg-content-bg'>
            <div className='flex flex-col lg:h-[736px] w-full bg-content-bg'>
                {data && <Hero data={get(data, "content")} />}
                {data && <BottomTabs data={get(data, "tabs")} />}
            </div>
        </div>
    )
}

export default Home