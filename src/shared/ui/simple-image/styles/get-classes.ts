import classNames from "classnames/bind";
import styles from "./simple-image.module.scss";

const cn = classNames.bind(styles);

export const getClasses = () => {
    const cnRoot = cn("wrapper");
    const cnImage = cn("simple-image");

    return {
        cnRoot,
        cnImage,
    };
};
