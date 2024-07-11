import { get } from 'lodash';
import data from '../../assets/data/data.json';
import BottomTabs from '../bottomTabs/BottomTabs';
import Hero from '../hero/Hero';
import Error from '../error/Error';

const Home = () => {

    return (
        <header className='w-full h-[100dvh] lg:h-screen justify-center content-center lg:bg-soft-gray bg-content-bg'>
            {
                data ? (
                    <div className='flex flex-col lg:h-[736px] w-full bg-content-bg'>
                        {<Hero data={get(data, "content")} />}
                        {<BottomTabs data={get(data, "tabs")} />}
                    </div>
                ) : (
                    <Error />
                )
            }
        </header>
    )
}

export default Home