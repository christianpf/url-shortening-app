import Logo from "@/assets/logo_footer.svg"
import TwitterIcon from "@/assets/icon-twitter.svg"
import InstagramIcon from "@/assets/icon-instagram.svg"
import PinterestIcon from "@/assets/icon-pinterest.svg"
import FacebookIcon from "@/assets/icon-facebook.svg"

import { AiFillFacebook, AiOutlineTwitter} from "react-icons/ai"
import { BsPinterest, BsInstagram} from "react-icons/bs"


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full bg-violet-900'>
      <div className="grid place-items-center  lg:place-items-start lg:grid-flow-col lg:grid-rows-1 w-5/6 2xl:w-4/6 mx-auto py-24 text-lg gap-12">
        <img className="text-center lg:col-span-4"  src={Logo} alt="Shortly Logo"/>
          <ul className= "text-center md:text-left">
            <li className="text-white font-bold">Features</li>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
          <ul className="text-center md:text-left">
            <li className="text-white font-bold">Resources</li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
          <ul className="text-center md:text-left">
            <li className="text-white font-bold">Company</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="flex gap-8 text-white text-3xl">
            <a href="https://www.facebook.com" target="_blank"><AiFillFacebook/></a>
            <a href="https://www.twitter.com" target="_blank"><AiOutlineTwitter/></a>
            <a href="https://www.pinterest.com" target="_blank"><BsPinterest/></a>
            <a href="https://www.instagram.com" target="_blank"><BsInstagram/></a>
          </ul>
      </div>
    </div>
  )
}

export default Footer