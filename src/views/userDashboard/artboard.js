import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import dp from '../../assets/media/dp.png'
import ArtBoardContext from "../../context/artboard/context";








export const Artboard = () => {

    const navigate = useNavigate();
    let { color, font, font_size } = useContext(ArtBoardContext);

    return (
        <>
            <div className="mb-6">
                <button onClick={() => navigate(-1)} className="font-semibold bg-slate-300 px-6 py-2 rounded-full text-xs md:text-sm"> <i class="lni lni-arrow-left"></i> Back</button>
            </div>

            <section className="flex flex-col justify-between p-6 md:p-14 h-max gap-12 md:gap-24 rounded-xl shadow-lg" style={{ backgroundColor: `${color}` }}>
                {/* top */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 md:gap-5 items-center">
                        <div>
                            <img src={dp} alt="img" className="w-10 md:w-20 lg:w-24 rounded-full" />
                        </div>

                        <div>
                            <h4 className="font-bold text-base md:text-lg lg:text-xl">The Intern Place</h4>
                            <p className="font-medium text-slate-400  text-xs md:text-base lg:text-lg">@the_interplace</p>
                        </div>
                    </div>
                </div>

                {/* main text */}
                <div >
                    <h1 className="w-11/12 break-words" style={{ fontFamily: ` ${font}`, fontSize: `${font_size}px` }} >
                        Flutter Developer

                        Locations: Ibadan, Oyo and Ogun

                        Send their CV to info@finosell.com using "FLUTTER DEVELOPER" as the subject of the mail.
                    </h1>
                </div>


                {/* bottom */}
                <div className="space-y-3">
                    <p className="text-xs md:text-base lg:text-lg text-slate-400">11:40 AM · Nov 16, 2022 · Twitter for Android</p>
                    <div className="border-y p-2.5 md:p-4">
                        <div className=" text-xs md:text-base flex justify-between">
                            <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                <p className="font-bold">1345</p>
                                <p>Retweets</p>
                            </div>
                            <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                <p className="font-bold">45</p>
                                <p>Quote Tweets</p>
                            </div>
                            <div className="flex gap-0.5 md:gap-2 text-slate-600">
                                <p className="font-bold">156</p>
                                <p>Likes</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}