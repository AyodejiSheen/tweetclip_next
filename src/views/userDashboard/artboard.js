
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArtBoardContext from "../../context/artboard/context";
import UiContext from "../../context/UI/context";
import { ProjectSkeleton } from "../../skeletons/projectSkeleton";

import html2canvas from "html2canvas";
import { Player } from "@remotion/player";
import { MyComposition } from "../../remotion/composition";








export const Artboard = () => {


    let { id } = useParams();

    let textNew= "Welcome home thanks you hkhklfhklf k fkl v kldhhflhjklhf  lhjhfjkhjhlkfjdhhdfjkl imgName cannot be blank @hackSultan @edemkumodzi It’s totally stressful. Best I’ve ever done was use the main GitHub app to just checkout somethings. More? It’s worse than use of a phone. But the case changes when you conenct an external keyboard to it, then you have a laptop with a very";
    const textyyy = textNew.split(' ').map((t) => ` ${t} `);

    console.log(textyyy.length)

    return (
        <>
            <Player
                component={MyComposition}
                inputProps={{ id: id }}
                durationInFrames={textyyy.length * 25 / 2}
                compositionWidth={1920}
                compositionHeight={1080}
                fps={25}
                style={{
                    width: 300,
                    height: 300,
                }}
                className="border-2 border-red-700"
                controls
            />

        </>
    )
}