import Image from "next/image";
import Link from "next/link";
import Carousel from "react-grid-carousel";
import Layout from "../component/Layout";
const { default: axios } = require("axios");
const { useState, useEffect, default: React } = require("react");

function Index(props) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = async () => {
        try {
            let response = await axios({
                method: 'get', //method
                url: 'https://api.escuelajs.co/api/v1/products', //url
            })
                .then(function (response) {
                    setProducts(response.data)
                    // console.log(response)
                });
        } catch (e) {
            console.log(e.message)
        }
    }

    const getCategories = async () => {
        try {
            let response = await axios({
                method: 'get', //method
                url: 'https://api.escuelajs.co/api/v1/categories', //url
            })
                .then(function (response) {
                    setCategories(response.data)
                    console.log(response)
                });
        } catch (e) {
            console.log(e.message)
        }
    }


    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <Layout title={process.env.appName}>
            <div className=" pt-20 pb-3 bg-[url('/bg.svg')]">
                <div className="px-2 md:px-20">
                    {/* banner */}
                    <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-1 bg-transparent">
                        <div className="row-span-2 lg:row-span-2 col-span-2">
                            <div className="w-full shadow-2xl h-48 lg:h-full relative">
                                <Image src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide2_bd810925-aaa0-4940-ac4f-a025c0bb64d8_1296x.png?v=1639984186" layout="fill" objectFit="cover" className="rounded-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                            </div>
                        </div>
                        <div className="">
                            <div className="shadow-2xl mx-auto h-24 lg:h-48 relative">
                                <Image src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide1_e0a3e6c7-fc1b-4814-ba0c-1a332c40371f_1950x.png?v=1639984168h" layout="fill" objectFit="cover" className="rounded-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                            </div>
                        </div>
                        <div className="">
                            <div className="shadow-2xl mx-auto h-24 lg:h-48 relative">
                                <Image src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/banner-s2_df1529f5-0e7f-41c0-a495-f02d41deea2f_540x.png?v=1639984323" layout="fill" objectFit="cover" className="rounded-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                            </div>
                        </div>
                    </div>

                    {/* categories */}
                    <div className="my-10 max-w-full bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="border-b-2 border-gray-200">
                            <p className="mb-2 text-xl font-semibold tracking-tight text-blue-800 dark:text-white px-3 py-1">Kategory Pilihan</p>
                        </div>
                        <div className="flex flex-wrap justify-between px-3 py-2">
                            {
                                categories.map((data, index) =>
                                    <div className="item w-12 lg:w-24 lg:h-24 rounded-xl group" key={index}>
                                        <div className="h-8 lg:h-14 w-auto mx-auto group-hover:opacity-75 relative transition-all duration-200">
                                            <Image src={'/image1.png'} alt="product image" layout="fill" objectFit="cover" className="rounded-t-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                                        </div>
                                        <div className="mx-auto lg:mx-3 text-center text-xs lg:text-md font-medium">{data.name}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 md:px-20">
                {/* top sell products */}
                <div className="my-10">
                    <div className="flex justify-between items-center mb-3 bg-white rounded-t-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-3 hover:bg-blue-50 border-b-4 border-blue-800 transition-all duration-200">
                            <h3 className="text-lg lg:text-2xl font-bold text-blue-800">Si Paling Laris</h3>
                        </div>
                        <Link href="">
                            <a className="p-3 text-red-300 hover:text-red-500 inline-flex items-center text-sm lg:text-lg">Lihat semua produk <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" /></svg></a>
                        </Link>
                    </div>
                    {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5"> */}
                        {/* <Carousel cols={4} rows={1} gap={1} loop>
                            <Carousel.Item>
                                <img width="100%" src="https://picsum.photos/800/600?random=1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://picsum.photos/800/600?random=2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://picsum.photos/800/600?random=3" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://picsum.photos/800/600?random=1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://picsum.photos/800/600?random=2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" src="https://picsum.photos/800/600?random=3" />
                            </Carousel.Item>
                        </Carousel> */}
                    <Carousel cols={6} rows={1} gap={10} loop mobileBreakpoint={300} responsiveLayout=[{
                        
                        }]>
                            {
                                products.slice(0, 12).map((data, index) =>
                                    <Carousel.Item>
                                        <Link href={`/product/${data.id}`} key={index}>
                                            <a className="group" >
                                                <div className="w-full max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700" >
                                                    <div className="relative">
                                                        <div className="h-32 lg:h-56 group-hover:opacity-75 relative transition-all duration-200">
                                                            <Image src={'/image1.png'} alt="product image" layout="fill" objectFit="cover" className="rounded-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                                                        </div>
                                                        <div className="my-2 absolute top-0 left-0 right-0">
                                                            <span className="bg-blue-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-r-full dark:bg-indigo-200 dark:text-indigo-900">Paling Laris</span>
                                                        </div>
                                                        <div class="absolute bottom-0 left-0 right-0 px-1 py-0.5 lg:px-4 lg:py-2 bg-gray-600 opacity-75">
                                                            <div class="text-xs lg:text-sm text-white font-semibold">
                                                                Penjualan / Bulan 297RB+</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-md truncate lg:text-lg font-semibold tracking-tight text-gray-900 dark:text-white capitalize">
                                                        {data.title}
                                                    </div>
                                                </div>
                                            </a >
                                        </Link >
                                    </Carousel.Item>
                                )
                            }
                        </Carousel>
                    {/* </div > */}
                </div>

                {/* promo */}
                <div className="grid grid-cols-4 gap-1 md:gap-2">
                    <div className="w-auto h-24 lg:h-44 col-span-3">
                        <div className="w-full shadow-2xl h-full relative">
                            <Image src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide2_bd810925-aaa0-4940-ac4f-a025c0bb64d8_1296x.png?v=1639984186" layout="fill" objectFit="cover" className="rounded-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                        </div>
                    </div>
                    <div className="w-auto h-24 lg:h-44">
                        <div className="w-full shadow-2xl h-full relative">
                            <Image src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/slide2_bd810925-aaa0-4940-ac4f-a025c0bb64d8_1296x.png?v=1639984186" layout="fill" objectFit="cover" className="rounded-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                        </div>
                    </div>
                </div>


                {/* top sell products */}
                <div className="my-10">
                    <div className="flex items-center mb-3 bg-white rounded-t-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-3 hover:bg-blue-50 border-b-4 border-blue-800 transition-all duration-200">
                            <h3 className="text-lg lg:text-2xl font-bold text-blue-800">Rekomendasi</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5">
                        {
                            products.map((data, index) =>
                                <Link href={`/product/${data.id}`} key={index}>
                                    <a className="group" >
                                        <div className="w-full max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700" >
                                            <div className="h-32 lg:h-56 group-hover:opacity-75 relative transition-all duration-200">
                                                <Image src={'/image1.png'} alt="product image" layout="fill" objectFit="cover" className="rounded-t-lg" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                                            </div>
                                            <div className="">
                                                <h5 className="text-md truncate lg:text-lg font-semibold tracking-tight text-gray-900 dark:text-white capitalize">{data.title}</h5>
                                                <div className="text-md lg:text-lg font-bold text-red-400 dark:text-white my-2"> ${data.price}</div>
                                                <div className="my-2">
                                                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-200 dark:text-indigo-900">{data.category.name}</span>
                                                </div>
                                                <div href="#" className="text-blue-800 bg-blue-200 hover:bg-blue-800 hover:text-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-xs lg:text-sm px-2 py-1.5 lg:px-5 lg:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200">Add to cart</div>
                                            </div >
                                        </div >
                                    </a >
                                </Link >
                            )
                        }
                    </div >
                </div>
            </div>
        </Layout >
    )
}

export default Index;