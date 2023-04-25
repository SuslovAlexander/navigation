export interface INavItemProps {
    id: number;
    text: string;
    selected: boolean;
    url: string;
    name: string;
    onSelect: (id: number) => void;
}


//id text selected name url