import Logo from "../ui/logo";
import FooterLastPosts from "./footerLastPosts";
import FooterInstitutional from "./footerInstitutional";
import FooterCopyright from "./footerCopyright";
import Networks from "./networks";

const Footer = () => {
    return(
        <footer className="container flex-col w-full pt-20 pb-20 xl:pb-4">
            <div className="flex flex-col sm:flex-row pb-10">
                <div className="w-full sm:w-[33.33%] flex flex-col pb-10 sm:pb-0 sm:pl-4">
                    <FooterInstitutional />
                </div>
                <div className="w-full sm:w-[33.33%] flex flex-col pb-10 sm:pb-0 sm:pl-12">
                    <FooterLastPosts />
                </div>
                <div className="w-full sm:w-[33.33%] flex justify-center items-center">
                    <div>
                        <Logo width={290} height={150} />
                        <Networks />
                    </div>
                </div>
            </div>
            <FooterCopyright />
        </footer>
    )
}

export default Footer;