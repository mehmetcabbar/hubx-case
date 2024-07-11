import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';
import { find, get, isEqual, upperCase } from 'lodash';
import { ContentProps, SingleItem } from '../../types/Types';

import MyButton from '../myButton/MyButton';
import Image1 from '../../assets/images/screens/1.svg';
import Image2 from '../../assets/images/screens/2.svg';
import Image3 from '../../assets/images/screens/3.svg';
import Image4 from '../../assets/images/screens/4.svg';
import Image5 from '../../assets/images/screens/5.svg';

const Hero = ({ data }: ContentProps) => {
  const activeTab = useSelector((state: RootState) => state.number.index);
  const [singleContent, setSingleContent] = useState<SingleItem | undefined>(
    undefined,
  );

  const getMyImage = (id: number) => {
    const image = isEqual(id, 0)
      ? Image1
      : isEqual(id, 1)
        ? Image2
        : isEqual(id, 2)
          ? Image3
          : isEqual(id, 3)
            ? Image4
            : Image5;
    return image;
  };

  useEffect(() => {
    if (data) {
      const single = find(data, { id: activeTab + 1 });
      setSingleContent(single);
    }
    getMyImage(activeTab);
  }, [activeTab, data]);

  return (
    <div className="w-full h-[540px] lg:h-[613px] grid lg:grid-cols-2 grid-cols-1 lg:gap lg:gap-10 px-6">
      <div
        className={
          'mx-auto content-end lg:order-1 order-2 overflow-y-auto scrollbar-hidden pt-40 lg:pt-0 safari-specific scrollable'
        }
      >
        <img
          src={getMyImage(activeTab)}
          alt="hero-image"
          className={`lg:w-auto scrollbar-hidden 
                        ${
                          isEqual(activeTab, 0)
                            ? 'w-[230px]'
                            : isEqual(activeTab, 1)
                              ? 'w-[360px]'
                              : isEqual(activeTab, 2)
                                ? 'w-[230px]'
                                : 'w-[300px]'
                        }`}
        />
      </div>
      <div className="flex justify-center lg:justify-end align-middle items-center w-full lg:w-[556px] h-auto lg:order-2 order-1">
        <div className="flex-none lg:text-right text-center px-6">
          <h2 className="font-sf-pro-display text-base font-extrabold text-title leading-5 tracking-custom">
            {upperCase(get(singleContent, 'title'))}
          </h2>
          <h1 className="font-sf-pro-display mt-4 text-[32px] font-extrabold text-primary leading-10">
            {get(singleContent, 'subTitle')}
          </h1>
          <div className="mt-5 text-primary font-sf-pro-display font-normal text-sm lg:text-xl px-6 lg:px-0 whitespace-pre-line">
            {get(singleContent, 'description')}
          </div>
          <div className="mt-6">
            <MyButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
