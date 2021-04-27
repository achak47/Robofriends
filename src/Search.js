import React from 'react';
const Search = ({searchfield, searchChange})=>{
    return(
     <input type='search' placeholder='search robots' className='pa3 ba --green bg-lightest-blue' onChange = {searchChange}  />
    );
}
export default Search ;