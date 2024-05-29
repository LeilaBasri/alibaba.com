import './ShopCategory.css'
import product from '../../../assets/data/product'
import categoryArrow from '../../../assets/images/AlibabaImages/Icons/shopCategoryIcons/categoryArrow.png'
const ShopCategory = () =>{
    const shopCategoryListItems = product[0]
    return(
        <div>
            <div className='shopCategory'>
                <div className='shopCategoryContainer'>
                    <div className='shopCategoryListContainer'>
                        <div className='shopCategoryListTitle'>Source by category</div>
                        <div className='shopCategoryList'>
                            {shopCategoryListItems.map((item)=><div key={item.id} className='shopCategoryListItemContainer'><div className='shopCategoryListItem'><img src={item.icon} alt={item.categoryName}/>{item.categoryName}</div><img src={categoryArrow} alt={categoryArrow}/></div>)}
                        </div>
                    </div>
                    <div className='subCategoryListContainer'></div>
                </div>
            </div>
        </div>
    )
}
export default ShopCategory