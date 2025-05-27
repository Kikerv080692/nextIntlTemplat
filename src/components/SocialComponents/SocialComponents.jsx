import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import * as SC from './SocialComponents.styled'

export default function SocialComponents() {


    const phoneNumber = "+420773612198"; 

  const viberLink = `viber://chat?number=${phoneNumber}`;
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`; 
    return (
        <>
        <SC.IconWrapperViber href={viberLink} target="_blank" rel="noopener noreferrer" ><FaViber size={30} /></SC.IconWrapperViber>
        <SC.IconWrapperWhatsapp href={whatsappLink} target="_blank" rel="noopener noreferrer" ><FaWhatsapp size={30}  /></SC.IconWrapperWhatsapp>
        </>
    )
}