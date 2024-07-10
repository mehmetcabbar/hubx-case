
import data from '../src/assets/data/data.json'
import { get } from 'lodash'
import BottomTabs from './component/bottomTabs/BottomTabs';
import Hero from './component/hero/Hero';
import { useState } from 'react';


export function App() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className='w-full h-[100dvh] lg:h-screen justify-center content-center lg:bg-soft-gray bg-content-bg'>
        <div className='flex flex-col lg:h-[736px] w-full bg-content-bg'>
          <Hero activeTab={activeTab} data={get(data, "content")} />
          {data && <BottomTabs data={get(data, "tabs")} activeTab={activeTab} setActiveTab={setActiveTab} />}
        </div>
      </div>
    </>
  );
}
