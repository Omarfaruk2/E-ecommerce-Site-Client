import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import SingleItems from './SingleItems'

const Item = () => {

    const param = useParams()
    const item = param?.item



    const { isLoading, error, data: products, refetch } = useQuery(['repoData'], () =>
        fetch(`http://localhost:5000/item/${item}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading</p>
    }
    // refetch()
    // console.log(products)


    return (
        <div>
            <h2>{item}</h2>

            <div className='grid lg:grid-cols-4 lg-w-11/12 mx-auto  sm:grid-cols-1'>

                {
                    products.map((singleProducts, index) =>
                        <SingleItems
                            singleProducts={singleProducts}
                            key={index}

                        />
                    )
                }

                {/* Building matarials */}

            </div>


        </div>
    )
}

export default Item