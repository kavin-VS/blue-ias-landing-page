import { FaArrowRightLong } from "react-icons/fa6"

const FormCTA = () => {
    return (
        <div className="w-full flex justify-center items-center px-4 py-8">
            <div className="w-full flex flex-wrap md:flex-row justify-between items-center max-w-screen-xl gap-16 md:gap- bg-primary-700 rounded-lg px-8 md:px-12 py-8 m-4">
                <div className="flex-col max-w-screen-sm">
                    <p className="font-bold text-white text-4xl pb-4">Latest Current Affairs + Materials For your Preparation</p>

                    <p className="text-gray-200">Stay ahead with our current affairs analysis and UPSC preparation resources. Master concepts and stay informed for the exam.</p>
                </div>
                <a href="https://forms.gle/Y9SJZB1Pz5vUuArA9" target="_blank" title="Mentoring Guidance" className="w-full py-3 px-6 rounded-full text-center transition bg-white text-primary-700 sm:w-max">
                    <span className="font-semibold flex flex-row justify-center items-center gap-4">
                        Download Now <FaArrowRightLong />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default FormCTA