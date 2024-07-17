import { GiHeartInside } from "react-icons/gi"

const amenitiesList = [
  {
    title: "Learn The Latest Skills",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
  },
  {
    title: "Learn The Latest Skills",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
  }, {
    title: "Learn The Latest Skills",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
  }
]
const Amenities = () => {
  return (
    <div className="w-full flex justify-center items-center pb-16">
      <div className="bg-primary-700 rounded-lg max-w-screen-xl px-8 md:px-12 py-8 m-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 md:justify-center md:items-center">
          {amenitiesList.map((val) =>
            <div className="flex flex-row items-start gap-4 text-white">
              <div className="bg-primary-600 rounded-full p-4">
                <GiHeartInside size={24} />
              </div>
              <div className="flex-col">
                <p className="font-bold text-lg">{val.title}</p>
                <p className="text-xs text-gray-300">{val.desc}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Amenities