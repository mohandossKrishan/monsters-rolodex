import './card-list.styles.css';
import Card from '../card/card.components'

const CardList = ({monsters}) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster = {monster} />;
    })}
  </div>
);
// implicit return  

export default CardList;