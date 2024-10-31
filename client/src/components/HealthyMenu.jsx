import React, { useEffect, useState } from 'react'
import { getHealthyMenus } from '../services/HealthyMenus'
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-right-2.svg'
import cart from '../assets/cart.svg'

const HealthyMenu = () => {

    const [healthyMenus, setHealthyMenus] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHealthyMenus = async () => {
            try {
                const menus = await getHealthyMenus();
                setHealthyMenus(menus);
            } catch (err) {
                setError('Failed to fetch healthy menus.');
            } finally {
                setLoading(false);
            }
        };

        fetchHealthyMenus();
    }, []);
    return (
        <div>
            <div className='flex flex-row w-full h-full justify-between px-4 gap-8'>
                <p className='subtitle'>Our <span className=''>Healthy Menus</span></p>
                <div className=' h-auto'>
                    <div className='items-center justify-center flex-grow w-full h-full gap-4 hidden lg:flex md:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4/5' height="4" fill="none">
                            <path d="M2 2H437" stroke="#A7FF04" stroke-opacity="0.51" stroke-width="4" stroke-linecap="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-1/5' height="4" fill="none">
                            <path d="M2 2H437" stroke="#A7FF04" stroke-opacity="0.51" stroke-width="4" stroke-linecap="round" />
                        </svg>

                    </div>

                </div>
                <div className='arrow-keys flex gap-6'>
                    <div className='arrow-icon disabled'>
                        <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrow-icon'>
                        <img src={arrowRight} alt="" />
                    </div>

                </div>
            </div>
            <div className='w-full h-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
                {healthyMenus.slice(0, 3).map((menu) => (
                <div key={menu.id} className='healthy-menu-card relative'>
                    <div className='img-con'>
                        <img className="" src={menu.imageUrl} alt="" />
                        <div className='discount'>10% off</div>

                    </div>
                    <div className='price-tag flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <div className='name'>{menu.name}</div>
                            <div className='price'>${menu.price}</div>
                        </div>
                        <div className='cart-icon'>
                            <img src={cart} alt="" />
                        </div>
                    </div>

                </div>
                )
            )
            }
            </div>
            
           
        </div>
    )
}

export default HealthyMenu