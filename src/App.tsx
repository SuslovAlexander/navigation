import { FC, useState } from "react";

import ContentScreen from "./Content/ContentScreen";
import SideNavigation from "./NavBar/SideNavigation/SideNavigation";
import { CONTENT_LIST, IContentItem } from "./shared/constants/content-list";
import { LIST_ITEMS } from "./shared/constants/list-items";

import classes from "./App.module.css";
import Modal from "./Modal/Modal";
import EditSettings from "./EditSettings/EditSettings";

const App: FC = () => {
  const [active, setActive] = useState(false);

  const [showContent, setShowContent] = useState<IContentItem | undefined>({
    id: 1,
    content: "Content for id===1",
  });
  const handleSetContent = (id: number) => {
    const temp = CONTENT_LIST.find((el) => el.id === id);
    setShowContent(temp);
  };

  return (
    <div className={classes.container}>
      <section className={classes.app}>
        <SideNavigation
          onSetContent={handleSetContent}
          listItems={LIST_ITEMS}
        />
        <ContentScreen content={showContent} />
      </section>
      <Modal
        active={active}
        setActive={() => {
          setActive(false);
        }}
      >
        <EditSettings />
      </Modal>
      <button onClick={() => setActive(true)}>Open Modal</button>
    </div>
  );
};

export default App;
