import { FaArrowRightLong } from "react-icons/fa6"

const whyChooseUsContentList = [
    {
        title: "Innovative Learning Techniques",
        desc: "We integrate AI and ML tools to analyze your strengths and weaknesses, offering tailored study plans and resources that adapt to your progress."
    },
    {
        title: "Self-Preparation Focus",
        desc: "Our approach emphasizes self-study, critical thinking, and independent problem-solving skills. We provide the tools and guidance you need to prepare effectively on your own terms."
    },
    {
        title: "Experienced Faculty",
        desc: "Our team comprises seasoned educators and industry experts who bring a wealth of knowledge and insights, ensuring you receive the highest quality education and support."
    },
    {
        title: "Comprehensive Resources",
        desc: "From interactive online modules to extensive question banks and mock tests, our resources are designed to cover every aspect of the IAS syllabus comprehensively."
    },
    {
        title: "Community and Support",
        desc: "While we advocate for self-preparation, we also understand the importance of community. Our platform connects you with fellow aspirants and mentors, fostering a collaborative and supportive learning environment."
    },
]

const AboutUs = () => {
    return (
        <div className="flex justify-center bg-primary-700 px-8 py-16">
            <div className="flex flex-col justify-center items-center gap-4 text-white max-w-screen-xl">
                <p className="font-bold text-4xl md:text-5xl">About Us</p>
                <p className="text-center text-lg max-w-screen-lg">Welcome to <span className="text-red-500 font-bold">BlueIAS</span>, a pioneering coaching institute dedicated to transforming the way you prepare for the IAS examination. In an era dominated by artificial intelligence and machine learning, we believe in revolutionizing traditional coaching methods to foster self-preparation and individual growth.</p>

                <div className="w-full flex flex-col justify-center items-center bg-white p-4 rounded-2xl my-8 border shadow-md">
                    <p className="font-bold text-2xl md:text-3xl text-gray-900 pt-8">Why Choose Us?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 p-4 md:py-8">
                        {whyChooseUsContentList.map((obj) =>
                            <p className="p-4 border rounded-lg text-center text-gray-900">
                                <span className="font-bold text-primary-600 text-lg underline">{obj.title}<br /><br /></span>{obj.desc}
                            </p>
                        )}
                    </div>
                </div>
                <a href="#" target="_blank" title="View Career" className="w-full py-3 px-6 rounded-full text-center transition bg-white hover:bg-primary-200 sm:w-max mt-4">
                    <span className="text-primary-600 font-semibold flex flex-row justify-center items-center gap-4">
                        View Career <FaArrowRightLong />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default AboutUs