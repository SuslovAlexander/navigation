import {FC} from "react";

import {IContentScreenProps} from "./IContentScreenProps";

import styles from './ContentScreen.module.css'

const ContentScreen: FC<IContentScreenProps> = ({content}) => {
    return (
        <div className={styles.content} >
            {content?.content}
        </div>
    )
}

export default ContentScreen;