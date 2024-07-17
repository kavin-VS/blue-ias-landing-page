import { useEffect, useState } from "react"
import supabase from "../../sb"
import CardView from "./CardView"
import CourseDetailModal from "../Modal/CourseDetailModal"
import image_1 from "../../assets/course/1.png"
import image_2 from "../../assets/course/2.jpg"
import image_3 from "../../assets/course/3.png"
import image_4 from "../../assets/course/4.png"

const image_json: { [key: number]: string } = {
    1: image_1,
    2: image_2,
    3: image_3,
    4: image_4
}

export type CourseDetailObjType = {
    name: string
    price: string
    details: string[]
}

export type CourseObjType = {
    id: number
    course_name: string
    description: string
    details: CourseDetailObjType[]
}

const Courses = () => {
    const [courseList, setCourseList] = useState<CourseObjType[]>([])
    const [selectedCourse, setSelectedCourse] = useState<CourseObjType>()
    const [showCourseDetailModal, setShowCourseDetailModal] = useState(false);

    const getCourseList = async () => {
        const { data } = await supabase
            .from('course')
            .select()
        console.log({ data });

        setCourseList((data || []) as CourseObjType[])
    }

    useEffect(() => {
        getCourseList()
    }, [])

    console.log({ courseList });

    return (
        <div className="text-center px-4 py-12 flex justify-center">
            <div className="w-full max-w-screen-2xl">

                <h1 className="font-bold text-gray-800 text-4xl md:text-6xl">
                    {/* <h1 className="font-bold text-header-gradient text-4xl md:text-6xl"> */}
                    What We Offer
                </h1>
                <p className="mt-2 text-gray-600 pb-4">
                    Comprehensive IAS prep: Current affairs, study resources, mock exams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-8">
                    {courseList?.map((course) =>
                        <CardView
                            title={course.course_name}
                            image={image_json[course.id]}
                            variants={`${course.details.length} Variants`}
                            desc={course.description}
                            onClick={() => {
                                setSelectedCourse(course);
                                setShowCourseDetailModal(true)
                            }}
                        />
                    )}
                </div>
            </div>

            {showCourseDetailModal && <CourseDetailModal course={selectedCourse} isOpen={showCourseDetailModal} onClose={setShowCourseDetailModal} />}
        </div>
    )
}

export default Courses