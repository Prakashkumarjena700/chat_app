import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../Css/Home.css'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

export default function Home() {
  return (
    <div>
      <div className='heading' >CHIT CHAT🤫🫣</div>
      <div className='form' >
        <Tabs variant='soft-rounded'>
          <TabList>
            <Tab width='50%' >Login</Tab>
            <Tab width='50%' >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}
