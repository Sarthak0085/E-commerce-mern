/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    return (
        <div className="w-[15rem] m-3 transition-all border mb-7 hover:shadow-4xl hover:-translate-y-4 delay-300 ease-out">
            <div className="h-[20rem]">
                <img
                    className="w-full h-full object-cover object-left-top"
                    src={product.imageUrl}
                    alt=""
                />
            </div>
            <div className="text-part bg-white p-3 ">
                <div >
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p >{product.title}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <p className="font-semibold">&#8377;{product.discountedPrice}</p>
                    <p className="line-through opacity-50">&#8377;{product.price}</p>
                    <p className="text-blue-500">{product.discountPercent}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard