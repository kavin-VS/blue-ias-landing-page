import { FaArrowRightLong } from "react-icons/fa6"

type CardViewPropsType = {
    title: string
    image:string,
    variants: string
    desc?: string
    onClick?: () => void
}
const CardView = ({ title, image, variants, desc, onClick }: CardViewPropsType) => {
    return (
        <div className="rounded-lg border border-gray-200 max-w-screen-sm flex flex-col overflow-hidden">
            <div className="flex flex-col">
                <div className="relative rounded-lg">
                    <img className="h-64 w-full object-cover" src={image} alt={title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 flex items-center justify-center">
                        <p className="text-white p-4 text-start text-2xl font-black shadow">{title}</p>
                    </div>
                </div>
                <div className="w-full flex flex-col p-2 md:p-4 gap-2">
                    {/* <p className="font-bold text-gray-700 leading-snug">
                        {title}
                        </p> */}
                    <p className="text-gray-700 tracking-wider text-start line-clamp-2">{desc}</p>
                    <p className="mt-2 text-sm text-red-600 font-bold text-right">{variants}</p>
                </div>
            </div>
            <button type="button" className="w-full p-4 text-sm text-center transition border-t hover:bg-gray-50" onClick={onClick}>
                <span className="text-primary-600 flex flex-row justify-center items-center gap-2">
                    View Details<FaArrowRightLong size={12} />
                </span>
            </button>
        </div>
    )
}

export default CardView