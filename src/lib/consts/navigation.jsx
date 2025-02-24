// react icons all are must be imported
import {
    HiOutlineViewGrid,
    HiHome,
    HiOutlineInformationCircle,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiOutlineChartBar
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/",
        icon: <HiOutlineViewGrid />,
    },
    {
        key: "Home",
        label: "Home",
        path: "/Home",
        icon: <HiHome />,
    },
    {
        key: "About",
        label: "About",
        path: "/About",
        icon: <HiOutlineInformationCircle />,
    },
    {
        key: "Services",
        label: "Services",
        path: "/Services",
        icon: <HiOutlineUsers />,
    },
    {
        key: "Project Dashboard",
        label: "Project Dashboard",
        path: "/ProjectDashboard",
        icon: <HiOutlineDocumentText />,
    },
    {
        key: "Department",
        label: "Department",
        path: "/Department",
        icon: <HiOutlineAnnotation />,
    },
    {
        key: "Chart",
        label: "Chart",
        path: "/barchart",
        icon: <HiOutlineChartBar />,
    },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: "Settings",
        label: "Settings",
        path: "/Settings",
        icon: <HiOutlineCog />,
    },
    {
        key: "Support",
        label: "Support",
        path: "/Support",
        icon: <HiOutlineQuestionMarkCircle />,
    },
];
