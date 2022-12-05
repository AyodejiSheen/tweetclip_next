import React, { useContext } from "react";
import { Composition } from "remotion";
import ArtBoardContext from "../context/artboard/context";
import { MyComposition } from "./composition";

export const RemotionRoot = () => {

    let { singleArtboard } = useContext(ArtBoardContext)

    return (
        <>
            <Composition
                id={singleArtboard.id}
                component={MyComposition}
                durationInFrames={150}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
