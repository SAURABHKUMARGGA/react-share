import { useState, useEffect } from 'react'
import { Link, useLocation} from 'react-router-dom'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'

// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'



// const navigation = [
//   { name: 'Dashboard', href: '#firstPage', current: true ,linkcon:"firstPage"},
//   { name: 'Team', href: '#secondPage', current: false,linkcon:"secondPage" },
//   { name: 'Projects', href: '#thirdPage', current: false,linkcon:"thirdPage" },
//   { name: 'Calendar', href: '#fourthPage', current: false,linkcon:"fourthPage" },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


export default function Navbar() {
  const location = useLocation();
 
  useEffect(()=>{
  
    // let elem = document.getElementsByClassName("myclass");
   
    // Array.from(elem).forEach((e)=>{
    //   if(e.classList.contains("active")){
        
    //     e.children[0].classList.add("bg-gray-900" ,"text-white")
    //   }else{
    //     e.children[0].classList.remove("bg-gray-900" ,"text-white")
    //   }
      
    // })
    
  },[location])
    // const [val,setVal] = useState(navigation);
    // function checkActiveStatus(name,status){
    //     const newArr =  navigation.map((value)=>{
    //           value.current=false;
    //           if(value.name==name){
    //                    value.current=true; 
    //           }
              
    //       })
    //      setVal(newArr);
    //   }
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800 top-0 w-full absolute z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
             
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                  <ul id="myMenu" className="flex">
                      <li data-menuanchor="firstPage" className="flex space-x-4 myclass active"><a href="#firstPage"   className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Dashboard</a></li>
                     
                      <li data-menuanchor="secondPage" className="flex space-x-4 myclass"><a href="#secondPage"   className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Team</a></li>
                      <li data-menuanchor="thirdPage" className="flex space-x-4 myclass"><a href="#thirdPage"   className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Projects</a></li>
                      <li data-menuanchor="fourthPage" className="flex space-x-4 myclass"><a href="#fourthPage"   className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Calendar</a></li>
                    {/* {navigation.map((item) => (
                      <li data-menuanchor={item.linkcon}  className="flex space-x-4" key={item.name} id='menuli'>
                       
                      <a
                        
                        href={item.href}
                        onClick={()=>{checkActiveStatus(item.name,item.current)}}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      </li>
                    ))} */}
                    </ul>
                 
              </div>
              
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
    {/* <Outlet/> */}
    </>
  )
}
