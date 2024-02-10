import portfolioImg from "$/portfolio.png";
import storybookDocImg from "$/storybook_doc.png";
import sejmStreamImg from "$/sejm_stream.png";
import placeholderImg from "$/coming_soon.png";

export const projectsData = {
    projectImg: {
        1: storybookDocImg,
        2: sejmStreamImg,
        4: placeholderImg,
        5: placeholderImg,
        3: portfolioImg,
    },
    projectName: {
        1: "Library",
        2: "SejmStream",
        4: "Brain Stretch",
        5: "E-Commerce",
        3: "Portfolio",
    },
    description: {
        1: "My own React component library, infused with animations and crafted using Storybook. Available as an npm package. Based on Typescript.",
        2: "Live streaming platform showcasing sessions from the Polish Parliament. New version is currently being developed by a three-member team.",
        4: 'Web application allowing users to play cognitively engaging and "brain stretching" games.',
        5: "Showcase website representing a company, complete with integrated e-commerce capabilities.",
        3: "Portfolio site presenting my projects with engaging animations and a unique style that resonates with my personality. Constructed with Next.js and powered by Framer Motion. Crafted using Swiper, EmailJS, Feather Icons and React Fast Marquee. Incorporating a fully functional contact form equipped with validation.",
    },
    shortDescription: {
        1: "My own React component library, infused with animations and crafted using Storybook. Available as an npm package.",
        2: "Live streaming platform showcasing sessions from the Polish Parliament. New version is currently being developed by a three-member team.",
        4: 'Web application allowing users to play cognitively engaging and "brain stretching" games.',
        5: "Showcase website representing a company, complete with integrated e-commerce capabilities.",
        3: "Portfolio site presenting my projects with engaging animations and a unique style that resonates with my personality.",
    },
    linkToProject: {
        1: "https://github.com/adpekalski/preem-ui",
        2: "https://sejm.stream",
        4: "",
        5: "",
        3: "https://github.com/adpekalski/next-portfolio",
    }
};

export const aboutContent = {
    aboutText: {
        1: "I'm Adrian, a passionate professional with a distinctive journey that intertwines engineering expertise with a fervor for web development.",
        2: "With a foundation in Automation Engineering, I have adeptly navigated the complex realms of industry and technology, yet my true excitement has always revolved around crafting exceptional user interfaces.",
        3: "Eager for more challenges and yearning for the opportunity to specialize in UI, I decided to embark on a self-guided journey to master programming.",
        4: "Everything you see in my portfolio is a result of this personal exploration. I have dedicated numerous evenings with enthusiasm to unraveling the intricacies of frontend development.",
        5: "Below you can see some of the skills I've acquired along the way.",
        6: "Programming has undeniably become my passion, and the prospect of pushing my limits excites me. Deep down, I harbor a dream of crafting my own game someday.",
        7: "If you're interested in collaboration, don't hesitate to reach out!"

    },
    shortAboutText: {
        1: "I'm Adrian, a front-end developer with a background in Automation Engineering. While I have successfully navigated the intricate world of industry and technology, my true passion has always been for crafting user interfaces.",
        2: "Eager for more challenges and yearning for the opportunity to specialize in UI, I decided to embark on a self-guided journey to master programming."
    }
}

export const warningPage = {
    warningText: {
        1: "This website contains flashing animations and bright colors which may not be suitable for people with photosensitivity.",
        2: "Remember to consult with your ripperdoc before entering this site, and proceed at your own discretion.",
        3: "Nah, you should be fine choom!"
    },
}