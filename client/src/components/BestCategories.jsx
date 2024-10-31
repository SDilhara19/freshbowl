import React, { useEffect, useState } from 'react'
import { getHealthyMenus } from '../services/HealthyMenus'

const BestCategories = () => {

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
    <div className='category-card-con'>
      <div className='flex flex-col w-full h-full justify-between lg:flex-row'>
        <div>
          <div className='subtitle'>Best Categories</div>
          <div className='subtitle-2'>We Have</div>
        </div>
        <div className='arrow-keys flex gap-6'>

        </div>
      </div>
      <div className='w-full h-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
                {healthyMenus.slice(0, 3).map((menu) => (
                <div key={menu.id} className='healthy-menu-card relative'>
                    <div className='category-img-con'>
                        <img className="" src={menu.imageUrl} alt="" />

                    </div>
                    <div className='price-tag flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <div className='name'>{menu.name}</div>
                            <div className='price'>${menu.price}</div>
                        </div>
                        <div className='cart-icon'>
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

export default BestCategories