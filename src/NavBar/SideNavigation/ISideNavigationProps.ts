import {IListItem} from "../../data/list-items";

export interface ISideNavigationProps {
    listItems: IListItem[];
    onSetContent: (id: number) => void;
}