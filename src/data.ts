import { IconType } from "./components/Icon";

export interface ITab {
    path: string;
    name: string;
    icon: IconType;
}

export const tabs: ITab[] = [
    {
        path: "/home",
        name: "Home",
        icon: IconType.home
    },
    {
        path: "/products",
        name: "Products",
        icon: IconType.shoppingCart
    },
    {
        path: "/contact",
        name: "Contact",
        icon: IconType.mail
    },
    {
        path: "/location",
        name: "Location",
        icon: IconType.navigation
    }
];

export interface IProduct {
    name: string;
    description: string;
    image: string;
}

export const products: IProduct[] = [
    {
        name: "Learning Resources Math Mat Challenge Game",
        description:
            "Interactive talking math floor mat game challenges students to listen to an equation, do the math, and step on the correct answer",
        image: "/products/toy2.jpg"
    },
    {
        name: "Munchkin Mozart Magic Cube",
        description:
            "Educational toy teaches how sounds combine to create 8 Mozart masterpiece",
        image: "/products/toy3.jpg"
    },
    {
        name: "Melissa & Doug Geometric Stacker Toddler Toy",
        description:
            "The Melissa & Doug Geometric Stacker Toddler Toy features 25 colorful wooden pieces of rings, octagons, and rectangles that can be matched and stacked on three rods. ",
        image: "/products/toy4.jpg"
    },
    {
        name:
            "Woshishei New Touch Play Keyboard Musical Singing Gym Carpet Mat Best Kids Baby Gift",
        description:
            "Practicing auditory and visual stimulation through interactions with the keyboard.",
        image: "/products/toy1.jpg"
    },
    {
        name: "Munchkin Letters and Numbers Bath Toys",
        description:
            "Non-toxic foam letters and numbers, great for practicing how to count and remembering the alphabet.",
        image: "/products/toy5.jpg"
    }
];
