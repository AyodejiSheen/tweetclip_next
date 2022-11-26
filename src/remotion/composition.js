import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import "./composition.css";
import Title from './Title';
import Hello from './Hello';
import { useContext, useEffect } from 'react';
import ArtBoardContext from '../context/artboard/context';
import { ProjectSkeleton } from '../skeletons/projectSkeleton';
import UiContext from '../context/UI/context';

export const MyComposition = (props) => {


    let { getSingleArtboard, artboardLoading, artboardProps, singleArtboard } = useContext(ArtBoardContext);
    let { isDark } = useContext(UiContext)
    let { id } = props;
    useEffect(() => {
        getSingleArtboard(id)
    }, [id]);




    const { fps, durationInFrames, width, height } = useVideoConfig();





    return (
        <>
            <div className="border-4 border-yellow-600">
                {
                    artboardLoading ?

                        <div>
                            <AbsoluteFill className='px-10 border-4 border-green-700 bg-red-500 text-white'>
                                <h1 className="break-words font-semibold " style={{ fontFamily: ` ${artboardProps.fontStyle}`, fontSize: `${artboardProps.fontSize}px` }} >
                                    <Title />
                                </h1>
                            </AbsoluteFill>
                        </div>

                        :

                        <div> {
                            <AbsoluteFill className='p-10'>{
                                [1].map((n) => <ProjectSkeleton key={n} theme={isDark === "light" ? "light" : "dark"} />)
                            }
                            </AbsoluteFill>
                        }
                        </div>

                }
            </div>
        </>
    )
};
