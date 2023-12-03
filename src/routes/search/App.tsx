import { useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

const Search: React.FC = () => {
  console.log('Call Search.');

  const products = [
    {
      id: 1,
      name: 'iPhone',
      price: 1000,
    },
    {
      id: 2,
      name: 'iPad',
      price: 500,
    },
    {
      id: 3,
      name: 'iPod',
      price: 40,
    },
    {
      id: 4,
      name: 'MacBook',
      price: 2000,
    },
  ];

  const searchProduct = (target: string | null) => {
    return products.filter( product => {
      console.log(target);
      return target ? product.name.includes(target) : products;
    })
  };

  const [searchParam, setSearchParam] = useSearchParams();
  const inputReducer = (_prev: string, input: string) => {
    return input;
  };
  const [input, inputDispatch] = useReducer(inputReducer, '');
  const handleChange: React.ChangeEventHandler<HTMLInputElement>  = event => {
    const productName = event.target.value;
    productName 
     ? setSearchParam({productName: productName})
     : setSearchParam({});
    inputDispatch(event.target.value);
  };

  useEffect( () => {
    setSearchParam({productName: input});
  }, []);

  return <>
    <h2>Search</h2>
    <input type="text" onChange={handleChange} value={input} />
    <ul>
      {
        searchProduct(searchParam.get('productName')).map( (product: any) => {
          return <li key={product.id}>
            {product.name}: {product.price}
          </li>
        })
      }
    </ul>
  </>
}

export default Search;
