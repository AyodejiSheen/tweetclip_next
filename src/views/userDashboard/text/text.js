import { useContext } from "react"
import ArtBoardContext from "../../../context/artboard/context"







export const Text = () => {

    let {fonts} = useContext(ArtBoardContext)



    return (

        <>
            {
                fonts === null ? ( <p>Loading...</p>) : (
                    fonts.slice(0, 100).map((each) => {
                        return(
                            <p>{each.family}</p>
                        )
                    })
                )
            }
        </>
    )
}