import { componentAbout } from "@/schema/schema";
import { TransitionDown } from "../ui/transitions";

const AboutText = () => {
    return(
        <TransitionDown delay={0.3} className="font-normal text-sm md:text-base pt-4 pb-4 md:pb-0 sm:pl-8 sm:pr-5">
            {componentAbout.textarea}
        </TransitionDown>
    )
}

export default AboutText;