import './HomeScreen.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import Product from '../components/Product'

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'
import { setUserDeatils } from '../redux/actions/userAction'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Button } from 'react-bootstrap'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts;
  const [isSelect, setIsSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  console.log('selected::: ', selected);

  const getCategoryWiseProducts = (products) => {
    const categories = [...new Set(products.map(product => product.category))];
    return categories.map(category => ({
      category,
      products: products.filter(product => product.category === category)
    }));
  };
  const categoryWiseProducts = getCategoryWiseProducts(products);

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  const goCat = (name) => {
    console.log('name::: ', name);
    if (name == 'all') {
      setIsSelect(false)
    } else {
      setIsSelect(true)
      setSelected(categoryWiseProducts.filter((ele) => ele.category == name))
    }
  }

  return (
    <div className="homescreen">
      <div className='d-flex justify-content-center align-items-center'>
        <Button onClick={ () => goCat('all') } className='mx-2 text-capitalize'>All</Button>
        {
          categoryWiseProducts?.map((item) => (
            <Button onClick={ () => goCat(item.category) } className='mx-2 text-capitalize'>{ item.category }</Button>
          )) }
      </div>
      {
        isSelect ?
          <>
            {
              selected?.map((item) => (
                <>
                  <h2 className="homescreen__title text-capitalize">{ item.category }</h2>
                  <div className="homescreen__products">
                    { loading ? (
                      <h2>Loading...</h2>
                    ) : error ? (
                      <h2>{ error }</h2>
                    ) : (
                      item.products.map(product => (
                        <Product
                          key={ product._id }
                          name={ product.name }
                          description={ product.description }
                          price={ product.price }
                          imageUrl={ JSON.parse(product.images) }
                          productId={ product._id }
                        />
                      ))
                    ) }
                  </div>
                </>
              ))
            }
          </>
          :
          <>
            {
              categoryWiseProducts?.map((item) => (
                <>
                  <h2 className="homescreen__title text-capitalize">{ item.category }</h2>
                  <div className="homescreen__products">
                    { loading ? (
                      <h2>Loading...</h2>
                    ) : error ? (
                      <h2>{ error }</h2>
                    ) : (
                      item.products.slice(0, 4).map(product => (
                        <Product
                          key={ product._id }
                          name={ product.name }
                          description={ product.description }
                          price={ product.price }
                          imageUrl={ JSON.parse(product.images) }
                          productId={ product._id }
                        />
                      ))
                    ) }
                  </div>
                </>
              ))
            }
          </>
      }
    </div>
  )
}

export default HomeScreen
