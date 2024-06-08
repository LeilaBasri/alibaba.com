import './FilterSearchBarPopUp.css'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'

const FilterSearchBarPopUp = ({searchContent , setSearchContent}) =>{
    return(
            (SearchBarSuggestions.filter((searchItem)=>{
                return(searchItem.fullName.toLowerCase().startsWith
                (searchContent.toLowerCase()))})).map((searchItem)=>{
                    return(<div key={searchContent.id}  
                        style={{padding:"10px 40px", cursor:'pointer'}} 
                        onClick={()=>setSearchContent(searchItem.fullName)}>
                            {searchItem.fullName}
                            </div>)
                })
    )
}
export default FilterSearchBarPopUp