function ItemListContainer({greeting}) {
    return (
        <div className='h-full'>
            <div className='mb-8'>
                <h2 className="text-2xl font-bold tracking-tight text-stone-700">Título de la {greeting} elegida</h2>
            </div>

            <div className='mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
                <div className="group relative shadow rounded-b-2xl">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                             className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                    </div>
                    <div className="mt-4 flex justify-between px-4 py-2">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <button>
                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                    Basic Tee
                                </button>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Black</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900 text-moneda">35</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer