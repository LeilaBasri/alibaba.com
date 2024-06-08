import {useEffect , useRef } from "react";

const DetectOutsideClick = (props) =>{

    const detectRef = useRef(null)
   // const [isOpen , setIsOpen] = useState(null)
    const {onClickOutside , children} = props

    useEffect(()=>{
        document.addEventListener("click" , outsideClickHandler)
        return()=>{document.removeEventListener("click" , outsideClickHandler);}
    })

    const outsideClickHandler = (event)=>{
        console.log(event)
        if(detectRef.current && !detectRef.current.contains(event.target)){
            onClickOutside && onClickOutside()
        }
    }
    if(!children){return null}

    return <div ref={detectRef}>{children}</div>
}
export default DetectOutsideClick