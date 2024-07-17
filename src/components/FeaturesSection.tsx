import { GiHeartInside, GiPuzzle } from "react-icons/gi";
import feature_img from "../assets/feature_bg.png"
import vector_bg from "../assets/feature_vectors_bg.png"

const FeaturesSection = () => {
    return (
        <div className="relative w-full overflow-hidden flex justify-center bg-primary-50">
            <div className="w-full px-4 py-8 flex max-w-screen-xl">
                <div className="w-full flex flex-row gap-12 items-center justify-center p-4 md:p-16 z-10">
                    <div className="hidden md:block md:w-full md:ml-auto lg:block max-w-xs">
                        <img src={feature_img} alt="" loading="lazy" width="" height="" />
                    </div>

                    <div className="space-y-8 mt-8">
                        <h1 className="text-3xl md:text-4xl text-gray-900 font-bold lg:leading-tight">Premium <span className="text-primary-600 text-4xl md:text-5xl">Learning</span> Experience</h1>
                        {/* <p className="text-gray-600">Stay ahead with our current affairs analysis and IAS preparation resources. Master concepts and stay informed for the exam.</p> */}
                        <div className="flex flex-row items-center gap-4">
                            <div className="bg-primary-600 rounded-lg p-4">
                                <GiHeartInside size={24} className="text-white" />
                            </div>
                            <div className="flex-col">
                                <p className="font-bold">Tailored Courses</p>
                                <p className="text-sm text-gray-500">Based on your strong and weak areas, the mentors will curate a tailored course to help your preparation better.</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className=" bg-red-600 rounded-lg p-4">
                                <GiPuzzle size={24} className="text-white" />
                            </div>
                            <div className="flex-col">
                                <p className="font-bold">One to One Personal guidance</p>
                                <p className="text-sm text-gray-500">Individual guidance to every aspirant and assured step by step improvement in preparation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={vector_bg} className="absolute max-w-lg top-0 bottom-0 md:left-48 self-center" />
            </div>
        </div>
    )
}

export default FeaturesSection