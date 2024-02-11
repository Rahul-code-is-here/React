import './ItemCard.css'
function ItemCard(props){
    return <div className='card'>{props.children}</div>;
}

export default ItemCard;