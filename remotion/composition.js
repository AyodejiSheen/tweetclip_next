import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { useContext } from 'react';
import ArtBoardContext from '../context/artboard/context';


export const MyComposition = () => {


    let { artboardProps, singleArtboard, artboardLoading } = useContext(ArtBoardContext);

    const videoConfig = useVideoConfig();
    const frame = useCurrentFrame();


    return (
        <>

            {
                artboardLoading && (
                    <section className="flex flex-col justify-between p-6 md:p-14 h-max gap-12 md:gap-24 rounded-xl shadow-2xl w-5/6 2xl:w-2/3 mx-auto" style={{ backgroundColor: `${artboardProps.bgColor}`, color: `${artboardProps.fontColor}`, backgroundImage: `url(${artboardProps.bgUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        {/* top */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 md:gap-5 items-center">
                                <div>
                                    <img src={singleArtboard.profileImageUrl} alt="img" className="w-10 md:w-20 xl:w-24 rounded-full" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-base md:text-lg xl:text-xl">{singleArtboard.name}</h4>
                                    <p className="text-xs md:text-base xl:text-lg" style={{ color: `${artboardProps.fontColor}` }}>@{singleArtboard.username}</p>
                                </div>
                            </div>
                        </div>

                        {/* main text */}
                        <div >
                            <h1 className="w-11/12 break-words font-semibold" style={{ fontFamily: ` ${artboardProps.fontStyle}`, fontSize: `${artboardProps.fontSize}px` }} >
                                {/* {singleArtboard.text} */}

                                {singleArtboard.text.split(' ').map((t) => ` ${t} `).map((t, i) => {
                                    return (
                                        <span
                                            key={t}
                                            style={{
                                                marginLeft: 10,
                                                marginRight: 10,
                                                transform: `scale(${spring({
                                                    fps: videoConfig.fps,
                                                    frame: frame - i * 5,
                                                    config: {
                                                        damping: 100,
                                                        stiffness: 200,
                                                        mass: 0.5,
                                                    },
                                                })})`,
                                                display: 'inline-block',
                                            }}
                                        >
                                            {t}
                                        </span>
                                    );
                                })}

                            </h1>
                        </div>

                        {/* bottom */}
                        <div className="space-y-3" style={{ color: `${artboardProps.fontColor}` }}>
                            <p className="text-xs md:text-base xl:text-lg ">11:40 AM · Nov 16, 2022 · {singleArtboard.source}</p>
                            <div className="border-y p-2.5 md:p-4">
                                <div className="text-[10.5px] md:text-base lg:text-sm xl:text-base flex justify-between">
                                    <div className="flex gap-0.5 md:gap-2 ">
                                        <p className="font-bold">{singleArtboard.retweetCount}</p>
                                        <p>Retweets</p>
                                    </div>
                                    <div className="flex gap-0.5 md:gap-2 ">
                                        <p className="font-bold">{singleArtboard.quoteCount}</p>
                                        <p>Quote Tweets</p>
                                    </div>
                                    <div className="flex gap-0.5 md:gap-2 ">
                                        <p className="font-bold">{singleArtboard.likeCount}</p>
                                        <p>Likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                )
            }
        </>
    )
};
