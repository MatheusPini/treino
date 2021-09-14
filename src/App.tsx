import Form from "./Components/Form";
import List from './Components/List'
import {ProductsProvider} from '../src/Hooks/useProducts'
const App = (): JSX.Element => {
  
  return (
    <>
    <ProductsProvider>
      <List />
      <Form />
    </ProductsProvider>
    </> 
  );
}

export default App;
