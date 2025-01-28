interface MenuItem {
    id: number;
    page:string;
    title: string;
    target: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
 
    {
        id: 1,
        page:"nav_1",
        target:"",
        has_dropdown: false,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        page:"nav_1",
        target:"",
        has_dropdown: false,
        title: "Feature",
        link: "/#feature",
    },
    {
        id: 3,
        page:"nav_1",
        has_dropdown: false,
        target:"", 
        title: "RoadMap",
        link: "/#roadMap",
    },
    {
        id: 3,
        page:"nav_1",
        has_dropdown: false,
        target:"_blank",
        title: "White Paper",
        link: "/assets/onconetwork.pdf",
    },
    {
        id: 7,
        page:"nav_1",
        has_dropdown: false,
        target:"blank",
        title: "Presale",
        link: "https://gempad.app/embed?address=0x933796c017cfA25083b466e4aA647A1A7FAC8161&bgColor=%2312181F&fgColor=%23161D27&hasAnimation=true&hasBanner=true&hasSocialLinks=true&network=Ethereum&padding=30&refer=&responsive=true&saleType=presale&theme=dark&txtColor=%23FFFFFF",
    },
    /*{
        id: 4,
        page:"nav_1",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Our Blog" },
            { link: "/blog-details", title: "Blog-Details", },
        ],
    },*/
    {
        id: 5,
        page:"nav_1",
        has_dropdown: false,
        target:"",
        title: "Contact",
        link: "/contact",
    },
    {
        id: 6,
        page:"nav_1",
        has_dropdown: false,
        target:"",
        title: "About Us",
        link: "/about-us",
    },
    
    {
        id: 1,
        page:"nav_2",
        has_dropdown: true,
        target:"",
        title: "Home",
        link: "#",
        sub_menus: [
            { link: "/", title: "ICO Investment" },
            { link: "/home-two", title: "Blockchain", },
        ],
    },
    {
        id: 2,
        page:"nav_2",
        has_dropdown: false,
        target:"",
        title: "Why Blockchain",
        link: "/home-two/#blockchain",
    },
    {
        id: 3,
        page:"nav_2",
        has_dropdown: false,
        target:"",
        title: "Feature",
        link: "/home-two/#feature",
    },
    {
        id: 4,
        page:"nav_2",
        has_dropdown: true,
        target:"",
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Our Blog" },
            { link: "/blog-details", title: "Blog-Details", },
        ],
    },
    {
        id: 5,
        page:"nav_2",
        has_dropdown: false,
        target:"",
        title: "Contact",
        link: "/contact",
    },
    {
        id: 7,
        page:"nav_2",
        has_dropdown: false,
        target:"blank",
        title: "Presale",
        link: "https://gempad.app/embed?address=0x933796c017cfA25083b466e4aA647A1A7FAC8161&bgColor=%2312181F&fgColor=%23161D27&hasAnimation=true&hasBanner=true&hasSocialLinks=true&network=Ethereum&padding=30&refer=&responsive=true&saleType=presale&theme=dark&txtColor=%23FFFFFF",
    },
];
export default menu_data;
