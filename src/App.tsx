import {FC, useState} from "react";

import ContentScreen from "./Content/ContentScreen";
import {CONTENT_LIST, IContentItem} from "./data/content-list";
import {LIST_ITEMS} from "./data/list-items";
import SideNavigation from "./NavBar/SideNavigation/SideNavigation";

import classes from './App.module.css';


const App: FC = () => {

    const [showContent, setShowContent] = useState<IContentItem | undefined>({id: 1, content: "Content for id===1"});
    const handleSetContent = (id: number) => {
        const temp = CONTENT_LIST.find(el => el.id === id);
        setShowContent(temp);
    }

    return (
        <div className={classes.container}>
            <section className={classes.app}>
                <SideNavigation onSetContent={handleSetContent} listItems={LIST_ITEMS}/>
                <ContentScreen content={showContent}/>
            </section>
        </div>
    )
}

export default App;