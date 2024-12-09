
import Image from 'next/image'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: 'url("/bg-shop.png")' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center">
          <Image src="/logo.png" alt="logo" width={100} height={100} className="h-[77px] w-[77px]" />
          <h1 className={` text-3xl text-black`}>Contact</h1>
          <p className={` text-sm text-black`}>Home &gt; Contact </p>
        </div>
      </div>
      <br/><br/> <br/>
        
      <div className="flex max-w-4xl">
        <div className="mt-56 ml-28">
          <div className="mb-4 flex">
            <FaLocationDot className="mr-3" />
            <div className='w-48'>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-sm text-[#9F9F9F]">236 5th SE Avenue,</p>
              <p className="text-sm text-[#9F9F9F]"> New York NY10000, United States</p>
            </div>
          </div>
          <div className="mb-4 flex">
            <BsTelephoneFill className="mr-3" />
            <div className='w-42'>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-[#9F9F9F]">Mobile: +(84) 546-6789</p>
              <p className="text-sm text-[#9F9F9F]">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="mb-4 flex">
            <FaClock className="mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <p className="text-sm text-[#9F9F9F]">Monday - Friday: 9:00 - 21:00</p>
              <p className="text-sm text-[#9F9F9F]">Saturday - Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div>
            <h1 className="text-center text-3xl mt-2 mb-4"><strong>Get In Touch With Us</strong></h1>
            <p className="text-[#9F9F9F] text-center"> For More Information About Our Product & Services Please Feel Free To Drop</p>
            <p className="text-[#9F9F9F] text-center">  An Email.Our Staff Always Be There To Help You Out. Do Not Hesitate!</p><br/><br/><br/><br/>        
          </div>       
          <div aria-label="form" className="max-w-md mx-auto p-4 ml-40">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" placeholder='Abc' className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder='Abc@def.com' className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" placeholder='This is an optional' className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" placeholder='Hi, I would like to ask about' className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <div className="mb-4">
                <button type="submit" className="px-8 py-2 border border-color-black font-semibold rounded-lg hover:bg-gray-300 ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#fdf6f7] py-12  my-8">
        <div className=" my-4 max-w-6xl mx-auto  px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className=" flex flex-col justify-start">
            <h3 className={` text-lg font-semibold text-black`}>
              Free Delivery
            </h3>
            <p className={` text-sm text-gray-600 mt-1`}>
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col justify-start">
            <h3 className={` text-lg font-semibold text-black`}>
              90 Days Return
            </h3>
            <p className={` text-sm text-gray-600 mt-1`}>
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col justify-start">
            <h3 className={` text-lg font-semibold text-black`}>
              Secure Payment
            </h3>
            <p className={` text-sm text-gray-600 mt-1`}>
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page