'use client'
import React ,{ useState, useEffect } from "react";
export default function Home() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDataProduct = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch posts")
      }
      setProduct(data);
      setError(null)
      setLoading(false)
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDataProduct();
  }, [])
  console.log(product)
  if (loading) {
    return <p className="text-center text-xl text-gray-800">Loading...</p>;
  }

  return (
    <div className="bg-amber-800">
          <main className="flex flex-row flex-wrap gap-2 justify-center items-center  min-h-screen p-[15rem]">
            {product.map ((item, index) => (
                          <section key={index} className="flex flex-col w-[25rem] bg-amber-50 rounded-3xl min-h-[50rem]">
                          <img src = {item?.images?.[0]} className="rounded-t-3xl"/>
                          <div className="p-4">
                              <h1 className="text-lg font-bold">{item?.title}</h1>
                              <h3 className="text-xl font-bold">{item?.price}$</h3>
                              <p className="my-3 text-justify">{item?.description}</p>
                              <div className="flex flex-row justify-between">
                                  <div>
                                      <p className="font-bold">colors</p>
                                      <div className="flex gap-2">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full cursor-pointer border-3 border-white hover:border-gray-400"></div>
                                        <div className="w-4 h-4 bg-red-500 rounded-full cursor-pointer border-2 border-white hover:border-gray-400"></div>
                                        <div className="w-4 h-4 bg-yellow-400 rounded-full cursor-pointer border-2 border-white hover:border-gray-400"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded-full cursor-pointer border-2 border-white hover:border-gray-400"></div>
                                      </div>
                                  </div>
                                  <button className="flex flex-col justify-center items-center p-1 rounded-lg text-center w-[4rem] bg-emerald-400 hover:bg-emerald-600">Buy</button>
                              </div>
                          </div>
                      </section>
            ))}

            {/* <section className="flex flex-col w-[25rem] bg-amber-50 rounded-3xl">
                <img src = {product?.images?.[0]} className="rounded-t-3xl"/>
                <div className="p-4">
                    <h1 className="text-lg font-bold">{product?.title}</h1>
                    <h3 className="text-xl font-bold">{product?.price}$</h3>
                    <p className="my-3 text-justify">{product?.description}</p>
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="font-bold">colors</p>
                            <div className="flex gap-2">
                              <div className="w-4 h-4 bg-blue-500 rounded-full cursor-pointer border-3 border-white hover:border-gray-400"></div>
                              <div className="w-4 h-4 bg-red-500 rounded-full cursor-pointer border-2 border-white hover:border-gray-400"></div>
                              <div className="w-4 h-4 bg-yellow-400 rounded-full cursor-pointer border-2 border-white hover:border-gray-400"></div>
                              <div className="w-4 h-4 bg-green-500 rounded-full cursor-pointer border-2 border-white hover:border-gray-400"></div>
                            </div>
                        </div>
                        <button className="flex flex-col justify-center items-center p-1 rounded-lg text-center w-[4rem] bg-emerald-400"> <FaShoppingCart /></button>
                    </div>
                </div>
            </section> */}
          </main>
    </div>
  );
}
