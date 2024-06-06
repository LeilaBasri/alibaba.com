import './ImageBoxLinkToItem.css'

const ImageBoxLinkToItem = ({linkToImg}) =>{
    return(
        <div className='ImageContainer'>
            <img src={linkToImg} alt='streamlineOrdering'/>
        </div>
    )
}
export default ImageBoxLinkToItem