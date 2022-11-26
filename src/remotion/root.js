import React from "react";
import { Composition } from "remotion";
import { MyComposition } from "./composition";

export const RemotionRoot = () => {
    return (
        <>
            <Composition
                id="MyComposition"
                component={MyComposition}
                durationInFrames={60}
                fps={30}
                width={600}
                height={600}
            />
        </>
    );
};
