import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function ProductCard() {
    const context = useContext(myContext)
    const { mode, product, searchkey, setSearchkey, filtertype, setFilterType,
        filterlocation, setFilterLocation, } = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems)

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('added to cart')
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        
        <section className="text-gray-600 body-font bg-white">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 
                    text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 rounded"></div>
                </div>

                <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8">

                    {product.filter((obj) => obj.brand.toLowerCase().includes(searchkey))
                    .filter((obj) => obj.description.toUpperCase().includes(filtertype))
                    .filter((obj) => obj.location.includes(filterlocation)).slice(0.8).map((item, index) => {
                        
                        const {brand, model, imageURL, price, location, description, id, capacity, size} = item;
                        return (
                                <div key={index} className="block rounded-md p-5 bg-white transition hover:shadow-2xl">    {/*onClick={()=> window.location.href = `/cardetails/${id}`}*/ }
                                <img
                                    alt="Home"
                                    src={imageURL}                          
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                {/**className="flex bg-white transition hover:shadow-xl my-2" */}

                                <div className="mt-2">
                                    <dl>
                                    <div>
                                        <dt className="sr-only">Price</dt>

                                        <dd className="text-sm text-gray-500">{price} / Day</dd>
                                    </div>

                                    <div>
                                        <dt className="sr-only"></dt>
                                        <dd className="font-large">{brand}</dd>

                                        <dd className="font-medium">{model}</dd>
                                    </div>
                                    </dl>

                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                                        <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Make</p>

                                        <p className="font-medium">{brand}</p>
                                        </div>
                                        
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                                        <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Dimension</p>

                                        <p className="font-medium">{size}</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                                        <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Cap.</p>

                                        <p className="font-medium">{capacity}</p>
                                        </div>


                                        
                                    </div>
                                    </div>
                                </div>
                                <hr className='my-2' />
                                <div className="mt-1.5 sm:mt-2">
                                        <p className="text-gray-500">Type</p>

                                        <p className="font-small">{description}</p>
                                        </div>
                                
                                <div className="sm:flex sm:items-end sm:justify-end">
                                <Link to={`/cardetails/${id}`}>
                                <p
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                >
                                    View Details
                                </p>
                                </Link>
                                </div>
                                </div>

                        )
                    })}
                </div>
            </div>
        </section >

    )
}

export default ProductCard