import { Loading } from "notiflix";
import { useContext, useState } from "react"
import phone from '../../assets/media/smartphone-2.svg'
import AuthContext from "../../context/auth/context";
import UiContext from "../../context/UI/context";






export const Verification = () => {


    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpToken, setOtpToken] = useState("");

    let { verifyEmail } = useContext(AuthContext)
    let { setAlert } = useContext(UiContext);


    const handleChange = (e, index) => {
        setOtp([...otp.map((d, idx) => (idx === index ? e.value : d))]);
        if (e.nextSibling) {
            e.nextSibling.focus();
        }
        setOtpToken(+otp.join("") + e.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert({ msg: null, type: "loading" });
        setTimeout(() => {
            verifyEmail(parseInt(otpToken))
            Loading.remove();
        }, 2000)
    }


    let { user } = useContext(AuthContext)




    return (
        <>

            <div><img src={phone} alt="img" className="w-24 mx-auto" /></div>

            <div className='space-y-2'>
                <h2 className='text-xl font-extrabold text-center'> Verify your Email</h2>
                <p className='font-medium text-center text-slate-400'>Enter the verification code we sent to</p>
                <p className='font-bold text-center '>{user.email}</p>
            </div>

            <div className='space-y-6 flex justify-center'>

                <form onSubmit={handleSubmit}>

                    {
                        otp.map((x, index) => (
                            <input
                                type="number"
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                                key={index}
                                value={x}
                                name="token"
                                maxLength={1}
                                className="w-10 h-10 md:w-14 md:h-14 mx-3 border-2 rounded-md text-xl md:text-2xl font-medium text-center"
                            />
                        ))
                    }


                    <button
                        className="block w-full px-4 py-3 shadow-lg shadow-blue-200 mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type='submit'
                    >Verify</button>

                </form>

            </div>
            <p className='font-medium text-center text-xs md:text-sm'>Didn’t get the code? <button className='text-sky-600'>Resend</button> </p>

        </>
    )
}