import { useState} from 'react';
import {Sidebar, SearchForm, Button, Input} from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar ({onSubmit}){
  const [query, setQuery] = useState ('');


  const handlerChangeSearch=e=>{
    setQuery( e.currentTarget.value.toLowerCase())
 }

 const  handleSubmit = e =>{
    e.preventDefault();
    
    if(query.trim()=== ''){
        toast.error('Enter your query');
        return
    }
    onSubmit(query)
    setQuery('')
}

 return(
  <Sidebar>
   <header >
  <SearchForm
  onSubmit={handleSubmit}>
    <Button type="submit">
      <span>Search</span>
    </Button>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      value = {query}
      onChange={handlerChangeSearch}
    />
    
  </SearchForm>
</header>
</Sidebar>
        )
}