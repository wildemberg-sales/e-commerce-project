import styles from "./footer.css"
import Image from "next/image"

export default function Footer(){
  return(
    <div className=" container">
      <div className="links">
      <Image
        src="/instaIcon.svg"
        width={25}
        height={30}
        alt="insta"/>
    <h5>@monke.ecommerce</h5>
    <Image
        src="/emailIcon.svg"
        width={30}
        height={30}
        alt="insta"/>
    <h5>monke.buyonline@email.com</h5>
    <Image
        src="/phoneIcon.svg"
        width={30}
        height={30}
        alt="insta"/>
    <h5>0800 123 1234</h5>
      </div>
 
      <div className="">

      </div>
    </div>
  )
}