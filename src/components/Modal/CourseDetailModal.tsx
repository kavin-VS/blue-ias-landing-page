import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Radio, RadioGroup } from '@headlessui/react'
import { IoMdClose } from "react-icons/io";
import { CourseObjType } from '../Courses';
// import GooglePayButton from '@google-pay/button-react'

type CourseDetailModalPropsType = {
    isOpen: boolean
    course?: CourseObjType
    onClose: (val: boolean) => void
}

// const plans = [
//     { name: 'Beginner', price: "1999", details: ["Online", "10 Sessions/Month"] },
//     { name: 'Expert', price: "1299", details: ["Online", "6 Sessions/Month"] },
// ]

const CourseDetailModal = ({ isOpen, course, onClose }: CourseDetailModalPropsType) => {
    // const [selected, setSelected] = useState(plans[0])

    return (
        <Dialog className="relative z-10" open={isOpen} onClose={onClose}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <button className='z-20 absolute -top-12 right-1/2 md:-right-8 rounded-full p-2 bg-white' onClick={() => onClose(false)}><IoMdClose /></button>
                        <div className="grid gap-6 p-6 sm:p-8">
                            <div className="grid gap-2">
                                <DialogTitle as="h2" className="text-2xl font-bold">{course?.course_name}</DialogTitle>
                                <p className="text-sm">
                                    {course?.description}
                                </p>
                            </div>
                            {/* defaultValue={selected} value={selected} onChange={setSelected} */}
                            <RadioGroup aria-label="Course Types" className="space-y-2">
                                {course?.details.map((plan) => (
                                    <Radio
                                        key={plan.name}
                                        value={plan}
                                        className="group relative flex rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition border focus:outline-none"
                                        // className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition border focus:outline-none data-[checked]:ring-2 ring-green-600"
                                    >
                                        <div className="flex w-full items-center justify-between">
                                            <div className="text-sm/6">
                                                <p className="font-semibold text-gray-500">{plan.name}</p>
                                                <p className="font-bold text-2xl text-gray-900">₹{plan.price}</p>
                                                <div className="flex gap-2 text-gray-500">
                                                    {plan.details.join('  •  ')}
                                                </div>
                                            </div>
                                            {/* <FaCheckCircle size={24} className="text-green-600 opacity-0 transition group-data-[checked]:opacity-100" /> */}
                                        </div>
                                    </Radio>
                                ))}
                            </RadioGroup>
                            <button className='w-full bg-green-600 text-white p-4 rounded-lg font-medium'>Register Now</button>
                            {/* TODO */}
                            {/* <GooglePayButton
                                className='w-full mt-4'
                                environment="TEST"
                                buttonSizeMode='fill'
                                buttonType='pay'
                                paymentRequest={{
                                    emailRequired: true,
                                    apiVersion: 2,
                                    apiVersionMinor: 0,
                                    allowedPaymentMethods: [
                                        {
                                            type: 'CARD',
                                            parameters: {
                                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                            },
                                            tokenizationSpecification: {
                                                type: 'PAYMENT_GATEWAY',
                                                parameters: {
                                                    gateway: 'example',
                                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                                },
                                            },
                                        },
                                    ],
                                    merchantInfo: {
                                        merchantId: '12345678901234567890',
                                        merchantName: 'Demo Merchant',
                                    },
                                    transactionInfo: {
                                        totalPriceStatus: 'FINAL',
                                        totalPriceLabel: 'Total',
                                        totalPrice: '100.00',
                                        currencyCode: 'USD',
                                        countryCode: 'US',
                                    },
                                }}
                                onLoadPaymentData={paymentRequest => {
                                    console.log('load payment data', paymentRequest);
                                }}
                            /> */}
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default CourseDetailModal