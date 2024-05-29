import './TopRanking.css'
import bestSellers from '../../../assets/images/AlibabaImages/products/bestSellers.avif'
import quickResponse from '../../../assets/images/AlibabaImages/products/quickResponse.avif'

const TopRanking = () =>{

const topRanking=[
    {id:620, productName:'Quick response',icon:quickResponse},
    {id:621, productName:'Best sellers',icon:bestSellers},
]
    return(
        <div>
            {topRanking.map((item)=><div key={item.id}>{item}.productName</div>)}
        </div>
    )
}
export default TopRanking