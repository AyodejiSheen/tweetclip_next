import React, { useContext } from "react";
import { Composition } from "remotion";
import ArtBoardContext from "../context/artboard/context";
import { MyComposition } from "./composition";

export const RemotionRoot = () => {

    return (
        <>
            <Composition
                id={"HelloWorld"}
                component={MyComposition}
                durationInFrames={150}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
