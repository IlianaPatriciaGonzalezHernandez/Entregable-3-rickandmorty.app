import React, { useState } from 'react'
import './styles/cardFilter.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'


const FilterList = ({ suggestedList, setSearchInput }) => {

  console.log(suggestedList)


  const handleClick = id => setSearchInput(id)


  const [dropdown, setdropdown] = useState(false)
  const opencloseDropdown = () => {
    setdropdown(!dropdown);
  }

  return (

    <Dropdown isOpen={dropdown} toggle={opencloseDropdown}>
      <DropdownToggle caret className='card__btn-dropdown'>
      </DropdownToggle>

      <DropdownMenu>
        <ul >
          {
            suggestedList?.map(location => (
              <DropdownItem onClick={() => handleClick(location.id)} key={location.id}>{location.name} </DropdownItem>
            ))
          }
        </ul>
      </DropdownMenu>
    </Dropdown>

  )
}

export default FilterList