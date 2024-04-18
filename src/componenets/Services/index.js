import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import { ServicesContainer,ServicesH1,ServicesWrapper,
    ServicesCard,ServicesIcon,
     ServicesH2,ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
             <ServicesCard>
              <ServicesIcon src={Icon1} />   
              <ServicesH2>Smart recommendations</ServicesH2>
              <ServicesP>We recommend the best doctors for you to consult with based on your priorities.</ServicesP>
                 </ServicesCard>   
                 <ServicesCard>
              <ServicesIcon src={Icon2} />   
              <ServicesH2>Virtual offices</ServicesH2>
              <ServicesP>You can access our platform anytime from anywhere in the world.</ServicesP>
                 </ServicesCard> 
                 <ServicesCard>
              <ServicesIcon src={Icon3} />   
              <ServicesH2>Premium Benifits</ServicesH2>
              <ServicesP>  Your data will be always secure.</ServicesP>
                 </ServicesCard>        
            </ServicesWrapper>
            </ServicesContainer>
    )
}

export default Services
