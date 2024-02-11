import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';
import ItemCard from './component/ItemCard';

function App() {
  const response  = [
    {
      itemName: "Name1",
      ItemDate: "20",
      itemMonth: "july",
      itemYear: "1997"
    },
    {
      itemName: "Name2",
      ItemDate: "21",
      itemMonth: "Aug",
      itemYear: "1998"
    },
    {
      itemName: "Name3",
      ItemDate: "22",
      itemMonth: "sep",
      itemYear: "1999"
    }
  ]
  return (
    
    <div>
    <ItemCard>
    <Item name={response[0].itemName}>Hello Jee mai hu aapki first item</Item>
    <ItemDate day={response[0].ItemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName} ></Item>
    <ItemDate day={response[1].ItemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName} ></Item>
    <ItemDate day={response[2].ItemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    <div className="App">
      Hello Ji
    </div>
    </ItemCard>
  
    </div>
   
  );
}

export default App;
