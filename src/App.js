import './App.css';
import { Card, Metric, Text, Title, BarChart, Subtitle, AreaChart, DonutChart, Flex, BadgeDelta, Badge, BarList, Bold} from "@tremor/react";
import cascadeImg from './cascade-recovery.svg';
import employeePresence from './Employees.svg';
import greenTeamCard from './SAPGREENTEAMCARDCOLLECTIONV2.png';
import napkinHero from './NapkinHeroV2.png';
import ddaLogo from './DDALOGO.png';
import anishaCard from './Anisha_CardPhoto.jpg';

import { Carousel, Typography } from '@material-tailwind/react';

  //Creating an array for the data to be inputted into the 'Solid Waste Diversion' Card
  const recycling = [
    {
      name: 'Diversion',
      value: '64'
    },
    {
      name: 'Landfill',
      value: '36',
    }
  ]

  export default () => (
  <div>

    <Flex>
      <Flex
        justifyContent='center'
        alignItems='center'
      >
        <Card className="max-w-sm mx-auto mt-10 mb-10 flex bg-bgmain">
          <img 
            width={100}
            height={80}
            src={employeePresence}/>
          <div className='flex flex-col items-center justify-center mx-12 p-10'>
            <Text className='text-lg text-indigo-600 font-bold'>March</Text>
            <BadgeDelta
              deltaType='decrease'
              isIncreasePositive={true}
              size="xl"
            >3.48%
            </BadgeDelta>
          </div>
        </Card>
      </Flex>
      

      <Flex
        justifyContent='center'
        alignItems='center'
        className='m-10'>
        {/* <div>
          <Title>Solid Waste Diversion</Title>
        </div> */}
        <Card className="max-w-lg bg-bgmain">
          <Flex className="mt-4">
            <Text>
              <Bold>March</Bold>
            </Text>
            <Text>
              <Bold>Total %</Bold>
            </Text>
          </Flex>
          <BarList data={recycling} className="mt-2" />
        </Card>
      </Flex>
    </Flex>


    {/* Middle Carousel Section */}
    <div>
      <Carousel
        className='bg-bgmain'
      >
        {/* Card 1 */}
        <Card className="max-w-3xl mx-auto bg-blue-400 mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Cascade Recovery</h1>
                <h2 className='text-xl text-white font-bold'>Non-Refundable Recycling Experts</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Cascade is responsible for managing and processing non-refundable materials at the SAP office, including paper, cardboard, and glass. From efficient handling to innovative recycling solutions, Cascade Recovery ensures sustainability and a circular economy.  Find out more about Cascade’s sustainability efforts here.</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={cascadeImg}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <BadgeDelta
                  isIncreasePositive={true}
                  size="xl"
                >12.58%
                </BadgeDelta>
                <Text className='text-xs text-white'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>


        {/* Card 2 */}
        <Card className="max-w-3xl mx-auto bg-green-800 mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Eco Action</h1>
                <h2 className='text-xl text-white font-bold'>Your In-Office Organic Recycling Experts at SAP</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Eco Action Recycling is Metro Vancouver's top choice for in-office, restaurant, and strata food waste recycling. They take responsibility for managing and recycling organics at SAP, including food scraps, soil paper, and napkins. With their effective solutions, Eco Action Recycling ensures a clean and odor-free environment. Their dedicated team sanitizes bins, while providing freshly cleaned totes during every pickup.</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={cascadeImg}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <BadgeDelta
                  isIncreasePositive={true}
                  size="xl"
                >48.5%
                </BadgeDelta>
                <Text className='text-xs text-white'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="max-w-3xl mx-auto bg-gray-800 mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Waste Control Services</h1>
                <h2 className='text-xl text-white font-bold'>The Comprehensive Waste Management Partner</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Waste Control Services manages SAP's waste solutions prioritizing landfill diversion. They expertly handle various types of waste, including plastic waste, Styrofoam containers, and food plastic materials Waste Control Services mission aligns with the City of Vancouver's 2040 Zero Waste goal [include link].</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={cascadeImg}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <BadgeDelta
                  deltaType='decrease'
                  isIncreasePositive={false}
                  size="xl"
                >2.87%
                </BadgeDelta>
                <Text className='text-xs text-white'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>

        {/* Card 4 */}
        <Card className="max-w-3xl mx-auto bg-blue-900 mt-12 mb-12">
          <div>
            <Flex>
              <div>
                <h1 className='text-3xl text-white font-bold'>Refundables</h1>
                <h2 className='text-xl text-white font-bold'>Refundable Recycling for a stronger community</h2>
                <div className='w-[500px]'>
                  <p className='text-white mt-4 max-w'>Cascade Recovery also takes charge of collecting and processing refundable items, including can, bottles, and anything with environmental deposits. SAP’s recycling efforts actively contribute to the Development Disabilities Association [include link], making a positive impact within our local community.</p>
                </div>
              </div>
              <div>
                <img 
                  className='mb-5'
                  height={180}
                  src={cascadeImg}
                />
                <Text className='text-lg text-white font-bold'>April</Text>
                <BadgeDelta
                  isIncreasePositive={true}
                  size="xl"
                >3.48%
                </BadgeDelta>
                <Text className='text-xs text-white'>*Total Weight: 250 tons</Text>
              </div>
            </Flex>
          </div>
        </Card>
    </Carousel>
    </div>
    
    {/* WHATS NEW SECTION */}
    <h1
      className='text-xl'
    >What's new, SAP?</h1>
    <Carousel 
      className='rounded-lg'
      transition={{ duration: 1.5 }}
      autoplay={true}
      prevArrow={false}
      nextArrow={false}
      loop={true}
    >
        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <Flex>
              <div className='flex flex-row m-8 gap-x-20'>
                <img 
                 className='rounded-lg'
                  width={230}
                  src={anishaCard}
                /> 
                <div className='w-[350px]'>
                  <h1 className='text-3xl text-textmain font-bold'>SAP Greenest Employer 2023</h1>
                  <p className='text-textmain mt-4 max-w'>Did you know SAP Labs Vancouver is recognized as one of Canada’s Greenest Employers for 2023? 
                  Our goal was to maintain our waste diversion program to meet or exceed 80% of total weight of 13195 kg from 2021. As of the end of 2022, the waste diverted is 97%!</p>
                </div>
              </div>
            </Flex>
          </div>
        </Card>

        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <Flex>
            <div className='flex flex-row gap-x-32'>
                <img 
                  className=''
                  src={greenTeamCard}
                />    
              </div>
              <div>
                <h1 className='text-3xl text-textmain font-bold'>Meet the 2023 SAP Green Team</h1>
                <div className='w-[400px]'>
                  <p className='text-textmain mt-4 max-w'>The SAP Green Team proudly welcomes Amanna, Anisha, Christopher, Dave, Josh, Kayla, Marlowe and Tiffany from BCIT’s New Media Design & Web Development program as summer interns 2023. The group took on the task of redesign the waste dashboard as a more engaging experience that brings a deeper understanding of SAP’s environmental impacts.</p>
                </div>
              </div>
            </Flex>
          </div>
        </Card>


        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <Flex>
            <div className='p-8'>
                <img 
                  className='mb-5'
                  height={180}
                  src={ddaLogo}
                />    
              </div>
              <div className='p-4'>
                <h1 className='text-3xl text-textmain font-bold'>DDA Donations 2023 SAP Green Team</h1>
                <div className='w-[350px]'>
                  <p className='text-textmain mt-4 max-w'>Your recycling efforts raised a total of $[number] last month for the Developmental Disabilities Association. The Developmental Disabilities Association provides community-based programs and services to individuals and their families living with developmental disabilities in the Vancouver and Richmond area.</p>
                </div>
              </div>
            </Flex>
          </div>
        </Card>


        <Card className="max-w-3xl mx-auto bg-bgmain mt-12 mb-12">
          <div>
            <img 
              className='mb-5'
              height={180}
              src={napkinHero}
              />    
          </div>
        </Card>
        
        
      </Carousel>

        {/* <Carousel 
        className="rounded-xl w-80 h-60 max-w-3xl mx-auto bg-bgmain mt-12 mb-12"
        transition={{ duration: 1.5 }}
        autoplay={true}
        prevArrow={false}
        nextArrow={false}
        loop={true}
        >

          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />

        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        </Carousel> */}


        






  
  </div>
);
