import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom'
export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="`block pr-4 pl-3 duration-200 lightcolor hover:bg-transparent border-0  lg:p-0">
          BATCHES
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <NavLink
                  to="/Batches:2026"
                  className={
                    `block  duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2026</NavLink>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
                <NavLink
                  to="/Batches:2027"
                  className={
                    `block  duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2027</NavLink>
              
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <NavLink
                  to="/Batches:2028"
                  className={
                    `block  duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2028</NavLink>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
