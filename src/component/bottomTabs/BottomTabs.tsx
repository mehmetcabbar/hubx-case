import { isEqual } from 'lodash'
import { useEffect, useRef } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { IconType, IProps, Item } from '../../types/Types';
import { changeIndex } from '../../redux/slices/numberSlice';

import Icon1 from '../../assets/images/icons/1.svg'
import Icon2 from '../../assets/images/icons/2.svg'
import Icon3 from '../../assets/images/icons/3.svg'
import Icon4 from '../../assets/images/icons/4.svg'
import Icon5 from '../../assets/images/icons/5.svg'
import Active1 from '../../assets/images/icons/1Active.svg'
import Active2 from '../../assets/images/icons/2Active.svg'
import Active3 from '../../assets/images/icons/3Active.svg'
import Active4 from '../../assets/images/icons/4Active.svg'
import Active5 from '../../assets/images/icons/5Active.svg'


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
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.number.index);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const getMyIcon = (key: number): IconType[keyof IconType] => {
        const iconKey: string = isEqual(activeTab, key) ? `active${key + 1}` : `icon${key + 1}`
        return icons[iconKey as keyof IconType];
    }

    useEffect(() => {
        if (itemRefs.current[activeTab]) {
            itemRefs.current[activeTab]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }, [activeTab]);

    return (
        <div className="h-[124px] bg-white overflow-x-auto whitespace-nowrap w-full scrollbar-hidden">
            {
                data &&
                data.map((item: Item, key: number) => {
                    return (
                        <div
                            key={key}
                            ref={e => (itemRefs.current[key] = e)}
                            onClick={() => dispatch(changeIndex(key))}
                            className={`inline-flex justify-center items-center gap-4 h-full w-[300px] cursor-pointer hover:bg-custom-hover 
                                ${!isEqual(0, key) ? "border-l" : null} 
                                    ${isEqual(activeTab, key) ? "bg-custom-hover" : null}`}>
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