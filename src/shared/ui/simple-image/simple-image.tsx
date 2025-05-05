"use client";
import { FC } from "react";
import { getClasses } from "./styles/get-classes";

type SimpleImage = {
    imageUrl: string;
    defaultImageUrl?: string;
};

export const SimpleImage: FC<SimpleImage> = ({ imageUrl, defaultImageUrl }) => {
    const { cnRoot, cnImage } = getClasses();

    return (
        <div className={cnRoot}>
            <img
                src={imageUrl || defaultImageUrl}
                alt="cat"
                className={cnImage}
            />
        </div>
    );
};
