import { useState, useEffect, useRef } from 'react';
import { isEqual } from 'lodash'

import Icon1 from '../../assets/images/icons/1.svg'
import Active1 from '../../assets/images/icons/1Active.svg'
import Icon2 from '../../assets/images/icons/2.svg'
import Active2 from '../../assets/images/icons/2Active.svg'
import Icon3 from '../../assets/images/icons/3.svg'
import Active3 from '../../assets/images/icons/3Active.svg'
import Icon4 from '../../assets/images/icons/4.svg'
import Active4 from '../../assets/images/icons/4Active.svg'
import Icon5 from '../../assets/images/icons/5.svg'
import Active5 from '../../assets/images/icons/5Active.svg'


type Item = {
    id: number;
    name: string;
    icon?: string
    activeIcon?: string
};

type IProps = {
    data: Item[];
};

type IconType = {
    icon1: string;
    active1: string;
    icon2: string;
    active2: string;
    icon3: string;
    active3: string;
    icon4: string;
    active4: string;
    icon5: string;
    active5: string;
}

const icons: IconType = {
    "icon1": Icon1,
    "active1": Active1,
    "icon2": Icon2,
    "active2": Active2,
    "icon3": Icon3,
    "active3": Active3,
    "icon4": Icon4,
    "active4": Active4,
    "icon5": Icon5,
    "active5": Active5
}


const BottomTabs = ({ data }: IProps) => {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeTab, setActiveTab] = useState(0)

    const getMyIcon = (key: number): IconType[keyof IconType] => {
        const iconKey: string = isEqual(activeTab, key) ? `active${key + 1}` : `icon${key + 1}`
        // TODO : I will check this type error
        return icons[iconKey];
    }

    useEffect(() => {
        if (itemRefs.current[activeTab]) {
            itemRefs.current[activeTab]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }, [activeTab]);

    return (
        <div className="h-[124px] bg-white overflow-x-auto whitespace-nowrap w-full">
            {
                data &&
                data.map((item: Item, key: number) => {
                    return (
                        <div
                            key={key}
                            ref={el => (itemRefs.current[key] = el)}
                            onClick={() => setActiveTab(key)}
                            className={`inline-flex justify-center items-center gap-4 h-full w-[300px] cursor-pointer hover:bg-custom-hover scrollbar-hidden ${!isEqual(0, key) ? "border-l" : null} ${isEqual(activeTab, key) ? "bg-custom-hover" : null}`}>
                            <img src={getMyIcon(key)} alt="icon-image" />
                            <div className="font-medium text-xl">{item?.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BottomTabs