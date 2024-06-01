
import {useState, createContext} from "react"


    
    export const SearchContext = createContext({
        searchContext:"",
        searchHandler:()=>{}
    });

    export const SearchContextProvider = (props)=>{

        const [searchContext , setSearchContext] = useState("");

        const searchHandler =(searchContext)=>{
            setSearchContext(searchContext);
        };

        return(
            <SearchContext.Provider value={{searchContext:searchContext , searchHandler:searchHandler}}>
                {props.children}
            </SearchContext.Provider>
        );
    }
    export default SearchContextProvider

  