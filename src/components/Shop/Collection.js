import React from 'react';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux'; 
import ShopDisplay from './ShopDisplay'
import ShopHero from './ShopHero';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';



function Collections(){
    let {collection} = useParams()
    const products = useSelector(state => state.cart.products)
    let plantCollection = []

    switch(collection) {
        case 'airPurifying':
            plantCollection = products.filter(item => item.purify)
            break 
        case 'beginner':
            plantCollection = products.filter(item => item.beginner)
            break
        case 'pet-friendly':
            plantCollection = products.filter(item => item.petFriendly)
            break 
        case 'succulents':
            plantCollection = products.filter(item => item.succulents)
            break 
            default:
            break 
    }

    let plants = plantCollection.map(plant => 
        <ShopDisplay
        key={plant.id}
        name={plant.name}
        light={plant.light}
        price={plant.price}
        purify={plant.purify}
        beginner={plant.purify}
        petFriendly = {plant.petFriendly}
        img={plant.img}

         />)

    return(
        <div className='h-screen relative'>
            <Nav /> 
            <ShopHero /> 
            <ShopNav /> 
          <div className=' grid grid-cols-2 md:grid-cols-3 mx-8 mb-14 gap-x-8 gap-y-12'>
            {plants}
          </div>
          <Footer/> 
        </div>
    )


}

export default Collections; 