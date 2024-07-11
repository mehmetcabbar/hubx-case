export type Item = {
    id: number;
    name: string;
    icon?: string
    activeIcon?: string
};

export type IProps = {
    data: Item[];
};

export type IconType = {
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

export type SingleItem = {
    id: number,
    title: string,
    subTitle: string,
    description: string,
}

export type ContentProps = {
    data: SingleItem[],
}