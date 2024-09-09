import logo from './logo.svg';
import Products from './components/Products'

function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      data: new Date(2021, 8, 10)
    },

    {
      id: "p2",
      title: 'Sirf Excel',
      amount: 200,
      data: new Date(2021, 2, 2)
    },

    {
      id: 'p1',
      title: 'Tide',
      amount: 130,
      data: new Date(2021, 12, 28)
    },
    {
      id: 'p1',
      title: 'Maggie',
      amount: 450,
      data: new Date(2021, 5, 5)
    }
    
  ];
  return (
  <div>
    <Products items={products} />
  </div>

  );
}

export default App;

