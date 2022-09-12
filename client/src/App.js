import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

// IMPORT PAGE COMPONENTS
import Homepage from './components/HomePage'
import PageNavBar from './components/PageNavBar'

import BasesIndex from './components/bases/BasesIndex'
import BaseSingle from './components/bases/BaseSingle'

import EssentialsIndex from './components/essentials/EssentialsIndex'
import EssentialSingle from './components/essentials/EssentialSingle'

import RecipesIndex from './components/recipes/RecipesIndex'
import RecipeSingle from './components/recipes/RecipeSingle'

import ProfileDetail from './components/profile/ProfileDetail'
import SavedRecipes from './components/profile/SavedRecipes'
import CreatedRecipe from './components/profile/CreatedRecipes'

function App() {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/recipes/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavBar/>
        <Routes>
          <Route path='/' element ={<Homepage />} />
          <Route path='/essentials' element ={<EssentialsIndex />} />
          <Route path='/essentials/:eoId' element ={<EssentialSingle />} />
          <Route path='/bases' element ={<BasesIndex />} />
          <Route path='/bases/:boId' element ={<BaseSingle />} />
          <Route path='/recipes' element ={<RecipesIndex />} />
          <Route path='/recipes/:recipeId' element ={<RecipeSingle />} />
          <Route path='/profile' element ={<ProfileDetail />} />
          <Route path='/profile/savedrecipes/' element ={<SavedRecipes />} />
          <Route path='/profile/createdrecipes/' element ={<CreatedRecipe />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


