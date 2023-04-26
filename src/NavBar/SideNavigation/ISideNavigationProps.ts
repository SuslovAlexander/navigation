import {IListItem} from "../../shared/interfaces/IListItem";

export interface ISideNavigationProps {
    listItems: IListItem[];
    onSetContent: (id: number) => void;
}