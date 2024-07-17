import hero_img from "../assets/hero_bg.png"
import vector_bg from "../assets/hero_vectors_bg.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center">
            <div className="w-full max-h-screen pb-16 flex max-w-screen-2xl">
                <div className="w-full flex flex-row gap-12 items-center justify-between p-8 md:p-16 z-10">
                    <div className="space-y-8 mt-8">
                        <h1 className="text-3xl md:text-4xl text-gray-900 font-bold lg:leading-tight">Personal <br className="block md:hidden" /><span className="text-primary-600 text-4xl md:text-5xl">Mentoring </span><span className="text-red-600 text-4xl md:text-5xl">Guidance</span><br /></h1>
                        {/* <h1 className="text-3xl md:text-4xl text-gray-900 font-bold lg:leading-tight">Latest <br className="block md:hidden" /><span className="text-primary-600 text-4xl md:text-5xl">Current Affairs</span> + <span className="text-red-600 text-4xl md:text-5xl">Materials</span><br />For your Preparation</h1> */}
                        <p className="text-gray-600">Fill this form and get your mentoring program tailored according to your areas of strengths and weakness, to make your UPSC journey successful</p>
                        {/* <p className="text-gray-600">Stay ahead with our current affairs analysis and IAS preparation resources. Master concepts and stay informed for the exam.</p> */}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="button" className="w-full py-3 px-6 rounded-full text-center transition bg-primary-600 hover:bg-primary-700 sm:w-max">
                                <span className="text-white font-semibold flex flex-row justify-center items-center gap-4">
                                    Explore Now <FaArrowRightLong />
                                    {/* Free Resources <FaArrowRightLong /> */}
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block md:w-full md:ml-auto lg:block max-w-2xl">
                        <img src={hero_img} alt="" loading="lazy" width="" height="" />
                    </div>
                </div>
                <img src={vector_bg} className="absolute max-w-screen-lg top-0 bottom-0 self-center" />
            </div>
        </div>

    )
}

export default Hero