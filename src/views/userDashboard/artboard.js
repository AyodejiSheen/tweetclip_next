
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArtBoardContext from "../../context/artboard/context";








export const Artboard = () => {


    let { id } = useParams();

    const navigate = useNavigate();
    let { getSingleArtboard, artboardLoading, artboardProps, singleArtboard } = useContext(ArtBoardContext);

    useEffect(() => {
        getSingleArtboard(id)
    }, [id])


    return (
        <>
            <div className="mb-6 lg:hidden">
                <button onClick={() => navigate(-1)} className="font-semibold bg-slate-300 px-6 py-2 rounded-full text-xs md:text-sm"> <i class="lni lni-arrow-left"></i> Back</button>
            </div>

            {
                artboardLoading ?
                    <section className="flex flex-col justify-between p-6 md:p-14 h-max gap-12 md:gap-24 rounded-xl shadow-lg" style={{ backgroundColor: `${artboardProps.bgColor}`, color: `${artboardProps.fontColor}` }}>
                        {/* top */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 md:gap-5 items-center">
                                <div>
                                    <img src={singleArtboard.profileImageUrl} alt="img" className="w-10 md:w-20 lg:w-24 rounded-full" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-base md:text-lg lg:text-xl">{singleArtboard.name}</h4>
                                    <p className="font-medium text-slate-600  text-xs md:text-base lg:text-lg">@{singleArtboard.username}</p>
                                </div>
                            </div>
                        </div>

                        {/* main text */}
                        <div >
                            <h1 className="w-11/12 break-words animate__animated animate__bounce" style={{ fontFamily: ` ${artboardProps.fontStyle}`, fontSize: `${artboardProps.fontSize}px` }} >
                                {singleArtboard.text}
                            </h1>
                        </div>


                        {/* bottom */}
                        <div className="space-y-3">
                            <p className="text-xs md:text-base lg:text-lg text-slate-600">11:40 AM · Nov 16, 2022 · {singleArtboard.source}</p>
                            <div className="border-y p-2.5 md:p-4">
                                <div className=" text-xs md:text-base flex justify-between">
                                    <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                        <p className="font-bold">{singleArtboard.retweetCount}</p>
                                        <p>Retweets</p>
                                    </div>
                                    <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                        <p className="font-bold">{singleArtboard.quoteCount}</p>
                                        <p>Quote Tweets</p>
                                    </div>
                                    <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                        <p className="font-bold">{singleArtboard.likeCount}</p>
                                        <p>Likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section> :
                <p>Loading...</p>
}
        </>
    )
}