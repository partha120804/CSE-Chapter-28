import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
export default function Example({DropUp}) {
  return (
    <Menu as="div" className="relative inline-block text-left" 
    onClick={close} >
      <div>
        <MenuButton className="`block pr-4 pl-3 duration-200 lightcolor hover:bg-transparent border-0  lg:p-0">
          BATCHES
        </MenuButton>
      </div>
      
      <MenuItems
        onClick={()=>{close();
          DropUp();
        }}
        transition
        className="absolute right-0 z-10 mt-3 w-[8rem] origin-top-right rounded-md bg-[#d1fffa] bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        
        <div className="py-1">
          
          <MenuItem onClick={()=>{close();
            DropUp();
          }}>
           
              {({ close }) => (
              <NavLink
                  onClick={()=>{close();
                    DropUp();
                  }}
                  to="/Batches:2026"
                  className={
                    `block px-4 py-2 text-3xl text-center text-[#0e4a3f] data-[focus]:bg-[#d1fffa80] data-[focus]:text-[#081513]  duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2026</NavLink>
              )}
          </MenuItem>
          <MenuItem >
           
                {({ close }) => (
                <NavLink
                  onClick={()=>{close();
                    DropUp();
                  }}
                  to="/Batches:2027"
                  className={
                    `block px-4 py-2 text-3xl text-center text-[#0e4a3f] data-[focus]:bg-[#d1fffa80] data-[focus]:text-[#081513]  duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2027</NavLink>
              )}
          </MenuItem>
          <MenuItem >
            
              {({ close }) => (
              <NavLink
                  onClick={()=>{close();
                    DropUp();
                  }}
                  to="/Batches:2028"
                  className={
                    `block px-4 text-center py-2 text-3xl text-[#0e4a3f] data-[focus]:bg-[#d1fffa80] data-[focus]:text-[#081513]  duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2028</NavLink>
              )}
          </MenuItem>
        </div>
        
      </MenuItems>
      
    </Menu>
  )
}
