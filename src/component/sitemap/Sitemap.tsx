import Image from "next/image";
import Link from "next/link";   
import { ArrowRight, FileText, Shield, Home, File } from 'lucide-react';


const siteStructure = [
   {
     category: "Main Navigation",
     icon: <Home className="w-20 h-20 text-white" />,
     links: [
       { text: 'Home', url: '/' },
       { text: 'About Us', url: '/about-us' },
       { text: 'Contact', url: '/contact' },
     ]
   },
   {
     category: "Resources",
     icon: <FileText className="w-5 h-5 text-white" />,
     links: [
       { text: 'OncoNetwork PDF', url: '/assets/onconetwork.pdf' },
       { text: 'Technology', url: '/technology' },
     ]
   },
   {
     category: "Legal & Compliance",
     icon: <Shield className="w-5 h-5 text-white" />,
     links: [
       { text: 'Privacy Policy', url: '/privacy-policy' },
       { text: 'Terms of Use', url: '/terms-of-use' },
       { text: 'AML and KYC', url: '/aml-and-kyc' },
     ]
   },
   {
     category: "Additional Information",
     icon: <File className="w-5 h-5 text-white" />,
     links: [
       { text: 'Disclaimer', url: '/disclaimer' },
       { text: 'Risk Disclosure', url: '/risk-disclosure' },
       { text: 'Cookies Policy', url: '/cookies-policy' },
     ]
   }
 ];

const Sitemap = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-250">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="blog-details-wrap">
                     <div className="blog-details-content"> 

                        <div className="col-lg-12 pb-30">

                           <section className="pt-60 pb-70">
                              <div className="container">
                                 <div className="row">
                                    <div className="col-lg-12">
                                       <div className="grid md:grid-cols-2 gap-8">
                                       {siteStructure.map((section, index) => (
                                          <div 
                                             key={index} 
                                             className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300"
                                          >
                                             <div className="flex items-center gap-3 mb-4">
                                             
                                             <h2 className="text-xl font-semibold text-blue-300">
                                             {section.icon} {section.category}
                                             </h2>
                                             </div>
                                             
                                             <ul className="space-y-3">
                                             {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex} className="group">
                                                   <a 
                                                   href={`https://www.onconetwork.xyz${link.url}`}
                                                   className="flex items-center gap-2 text-gray-200 hover:text-blue-300 transition-colors duration-200"
                                                   >
                                                   <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                   <span>{link.text}</span>
                                                   </a>
                                                </li>
                                             ))}
                                             </ul>
                                          </div>
                                       ))}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </section>


                        </div>

                      

                         

                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
   )
}

export default Sitemap;
