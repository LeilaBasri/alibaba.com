import React from 'react'
import product from '../../../assets/data/product'
import FactoryLIVE from '../../../assets/images/AlibabaImages/Icons/shopCategoryIcons/FactoryLIVE.gif'

const GetProductSamples = () => {
    const getSampleProduct = product[1]
    const factoryLIVE = product[2]
  return (
    <div>
        <div className='getSamples'>
            <h3>Get samples</h3>
            <div className='getSampleProductsContainer'>
                <div className='getSampleProduct'>{getSampleProduct.map((item)=><div className='products'><div className='maskImgContainer'><img src={item.icon} alt={item.productName}/><div className='mask'></div></div> <span className='productName'>{item.productName}</span></div>)}</div>
            </div>
        </div>

        <div className='liveReception'>
                <h3><img src={FactoryLIVE} alt='FactoryLIVE' className='factoryLIVEImage'/>Factory LIVE Q&A</h3>
                <div  className='products'>
                    {factoryLIVE.map((item)=><div><div className='maskImgContainer'><div className='liveReceptionImgages'><img src={item.icon} alt={item.productName} className='liveReceptionImg' /><img src={item.addImg} alt={item.productName} className='liveReceptionAddImg' /></div><div className='mask'></div></div><span className='productName'>{item.productName}</span></div>)}
            </div>
        </div>
    </div>
  )
}

export default GetProductSamples