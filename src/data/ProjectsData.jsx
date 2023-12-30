import firstProjectScreen from "$/avatar.png";
import secondProjectScreen from "$/avatar.png";
import thirdProjectScreen from "$/avatar.png";

export const projectsData = {
    projectImg: {
        first: firstProjectScreen,
        second: secondProjectScreen,
        third: thirdProjectScreen
    },
    description: {
        first: "Website developed as a portfolio showcasing the most relevant projects " +
            "that I made. Fully interactive, with customization possibilities, such as " +
            "color selection, dark and light modes, and a way to stop typing animation. " +
            "The project includes a functioning contact form implemented using EmailJS, " +
            "so there is a possibility to contact me directly through this website.",
        second: "loll",
        third: ""
    },
    descriptionSecondaryText: {
        first: "During development, instead of bootstrap, I used some functionalities provided " +
        "by Mui, such as icons, buttons, and a navigation tab, all of which were customized. " +
        "LazyLoad was used on images to optimize page load times. Most of the remaining " +
        " components were written entirely by me.",
        second: "",
        third: ""
    },
    linkToProject: {
        first: "",
        second: "",
        third: ""
    }
};