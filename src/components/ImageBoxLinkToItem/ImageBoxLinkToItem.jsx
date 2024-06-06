import './ImageBoxLinkToItem.css'

const ImageBoxLinkToItem = ({linkToImg}) =>{
    return(
        <div className='ImageContainer'>
            <img src={linkToImg}/>
        </div>
    )
}
export default ImageBoxLinkToItem