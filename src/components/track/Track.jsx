import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Track() {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-5 mx-10">
                <div className="h-full rounded-lg bg-white transition hover:shadow-2xl border-2 border-gray-200">
                    <div className='p-4 py-5'>
                    <h2 className="title-font font-medium text-lg text-gray-800 my-5" style={{color: mode === 'dark' ? 'white' : ''}}>PRIVATE CUSTOMER</h2>
                    <p className="leading-relaxed text-sm text-gray-500 my-5">We offer a long and short term car rental deals for private customers, with or without driver with unlimited mileage all over Luzon area. We also provide car delivery and car pick up all the way to the customer house.</p>
                    </div>
                </div>
                <div className="h-full rounded-lg bg-white transition hover:shadow-2xl border-2 border-gray-200">
                    <div className='p-4 py-5'>
                    <h2 className="title-font font-medium text-lg text-gray-800 my-5" style={{color: mode === 'dark' ? 'white' : ''}}>CORPORATE ACCOUNTS</h2>
                    <p className="leading-relaxed text-sm text-gray-500 my-5">We offer a long term deals for corporate accounts, including monthly car maintenance, car rescue, car tracking with GPS and dedicated account manager to coordinate all corporation needs</p>
                    </div>
                </div>
                <div className="h-full rounded-lg bg-white transition hover:shadow-2xl border-2 border-gray-200">
                    <div className='p-4 py-5'>
                    <h2 className="title-font font-medium text-lg text-gray-800 my-5" style={{color: mode === 'dark' ? 'white' : ''}}>SHUTTLE SERVICES</h2>
                    <p className="leading-relaxed text-sm text-gray-500 my-5">We provide shuttle services to the biggest companies in the Philippines, with big new vans and executive drivers to any point in Metro Manila and the entire Luzon area. Our shuttle service cars are equipped with GPS system.</p>
                    </div>
                </div>
            </div>
                        {/*<section className="text-gray-600 body-font">
                <div className="container px-5 md:py-5  mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="h-40 p-2 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >


                                <h2 className="title-font font-medium text-lg text-gray-800" style={{color: mode === 'dark' ? 'white' : ''}}>PRIVATE CUSTOMER</h2>
                                <p className="leading-relaxed text-gray-400">We offer a long and short term car rental deals for private customers, with or without driver with unlimited mileage all over Luzon area. We also provide car delivery and car pick up all the way to the customer house.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="h-40 p-2 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100  px-4 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >



                                <h2 className="title-font font-medium text-lg text-gray-900" style={{color: mode === 'dark' ? 'white' : ''}}>CORPORATE ACCOUNTS</h2>
                                <p className="leading-relaxed text-gray-400">We offer a long term deals for corporate accounts, including monthly car maintenance, car rescue, car tracking with GPS and dedicated account manager to coordinate all corporation needs</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="h-40 p-2 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >


                                <h2 className="title-font font-medium text-lg text-gray-900" style={{color: mode === 'dark' ? 'white' : ''}}>SHUTTLE SERVICES</h2>
                                <p className="leading-relaxed text-gray-400">We provide shuttle services to the biggest companies in the Philippines, with big new vans and executive drivers to any point in Metro Manila and the entire Luzon area. Our shuttle service cars are equipped with GPS system.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>*/}

        </div>
    )
}

export default Track
