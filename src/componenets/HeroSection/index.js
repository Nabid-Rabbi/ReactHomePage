import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements';
const HeroSection = () => {
const [hover, setHover] =useState(false)

const onHover = () => {
    setHover(!hover)
}
    return (
        <HeroContainer >
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>

              
              </HeroBg> 
              <HeroContent>
                  <HeroH1>Store your necessary medical informations in a safer and easier way</HeroH1>
                  <HeroP>
                     Sign up for a new account today and enjoy our services 
                  </HeroP>
                  <HeroBtnWrapper>
                     <Button to='signup' onMouseEnter={onHover} 
                     onMouseLeave={onHover}
                     primary='true'
                     dark='true'
                     >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                         </Button> 
                  </HeroBtnWrapper>
                  </HeroContent> 
        </HeroContainer>
    )
}

export default HeroSection