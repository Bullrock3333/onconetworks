"use client"
import Image from "next/image";
import Link from "next/link";

import footerShape_1 from "@/assets/img/images/footer_shape01.png";
import footerShape_2 from "@/assets/img/images/footer_shape02.png";
import NewsletterForm from "@/component/forms/NewsletterForm";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [
   {
      id: 1,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
      title: "Usefull Links",
      footer_link: [{ link: "/contact", link_title: "Contact us" }, { link: "/contact", link_title: "How it Works" }, { link: "/contact", link_title: "Create" }, { link: "/contact", link_title: "Explore" }, { link: "/contact", link_title: "Terms & Services" },]
   },
   {
      id: 2,
      class_name: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
      title: "SOLUTIONS",
      footer_link: [{ link: "/contact", link_title: "Token Suite" }, { link: "/contact", link_title: "Ecosystem" }, { link: "/contact", link_title: "Investment" }, { link: "/contact", link_title: "Portal" }, { link: "/contact", link_title: "Tokenization" },]
   },
   {
      id: 3,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
      title: "Usefull Links",
      footer_link: [{ link: "/contact", link_title: "Help Center" }, { link: "/contact", link_title: "Partners" }, { link: "/contact", link_title: "Suggestions" }, { link: "/blog", link_title: "Blog" }, { link: "/contact", link_title: "Newsletters" },]
   },
]

const FooterThree = () => {
   return (
      <footer>
         <div className="footer-area footer-bg" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}>
            <div className="container">

               <div className="footer-menu-area">
                  <div className="row gy-4 justify-content-between align-items-center">
                     <div className="col-xl-4 col-lg-3">
                        <div className="social-btn justify-content-center justify-content-lg-start">
                           <Link href="https://t.me/+Noynjp3cxrY3N2I1" target="_blank">
                              <i className="fab fa-telegram"></i>
                           </Link>
                           <Link href="https://x.com/OncoNetworks" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                 <path
                                    d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                    fill="currentColor"></path>
                              </svg>
                           </Link>
                           <Link href="https://www.instagram.com/onconetwork/" target="_blank">
                              <i className="fab fa-instagram"></i>
                           </Link>
                        
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-9 text-lg-end text-center">
                        <ul className="footer-menu-list">
                           <li key={1}>
                              <Link href="/">
                                 HOME
                              </Link>
                           </li>  
                           <li key={3}>
                              <Link href="/assets/onconetwork.pdf" target="_blank">
                              White Paper
                              </Link>
                           </li>
                           <li key={1}>
                              <Link href={'disclaimer'}>
                              Disclaimer
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'privacy-policy'}>
                              Privacy Policy 
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'terms-of-use'}>
                              Terms of use 
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'aml-and-kyc'}>
                              Aml & Kyc 
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'risk-disclosure'}>
                              Risk Disclosure
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'cookies-policy'}>
                              Cookies Policy
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'technology'}>
                              Technology
                              </Link>
                           </li> 
                           <li key={1}>
                              <Link href={'sitemap.xml'}>
                              Sitemap
                              </Link>
                           </li> 
                        </ul>
                     </div>
                  </div>
               </div>

               {/*
               <div className="footer-top">
                  <div className="row">
                     {footer_data.map((item) => (
                        <div key={item.id} className={item.class_name}>
                           <div className="footer-widget">
                              <h4 className="fw-title">{item.title}</h4>
                              <div className="footer-link">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((li, i) => (
                                       <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="col-xl-3 col-lg-4 col-sm-8">
                        <div className="footer-widget">
                           <h4 className="fw-title">Subscribe Newsletter</h4>
                           <div className="footer-newsletter">
                              <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</p>
                              <NewsletterForm/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               */}
               
               <div className="footer-bottom">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text">
                           <p>Copyright © 2024 Onco Network. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-shape-wrap">
               <Image src={footerShape_1} alt="" className="alltuchtopdown" />
               <Image src={footerShape_2} alt="" className="leftToRight" />
            </div>
         </div>
      </footer>
   )
}

export default FooterThree;
