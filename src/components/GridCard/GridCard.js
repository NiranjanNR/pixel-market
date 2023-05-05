import React from 'react'
import Card from '../Card/Card'

const GridCard = () => {
    return (
        <div className='ml-6 '>
            <div className='grid grid-cols-4'>
                <div>
                    <Card image={"https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"} name={"NFT"} price={19} number={3} />
                </div>
                <div>
                    <Card image={"https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"} name={"NFT"} price={19} number={3} />
                </div>
                <div>
                    <Card image={"https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"} name={"NFT"} price={19} number={3} />
                </div>
                <div>
                    <Card image={"https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"} name={"NFT"} price={19} number={3} />
                </div>
            </div>
        </div>
    )
}

export default GridCard