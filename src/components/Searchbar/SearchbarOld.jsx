import { Component} from 'react';
import {Sidebar, SearchForm, Button, Input} from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component{
    state={
        query: '',
    };

    

    handlerChangeSearch=e=>{
       this.setState({query: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e =>{
        e.preventDefault();
        
        if(this.state.query.trim()=== ''){
            toast.error('Enter your query');
            return
        }
        this.props.onSubmit(this.state.query)
        this.setState({query: ''})
    }

    render(){
        return(

  <Sidebar>
   <header >
  <SearchForm
  onSubmit={this.handleSubmit}>
    <Button type="submit">
      <span>Search</span>
    </Button>

    <Input
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      value = {this.state.query}
      onChange={this.handlerChangeSearch}
    />
    
  </SearchForm>
</header>
</Sidebar>
        )
    }
}
export default Searchbar