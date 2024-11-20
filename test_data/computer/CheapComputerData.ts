import {CheapComputerComponent} from "../../models/components/computers/CheapComputerComponent";
import {commonCredsData} from "./LoginCredsData";

export const cheapComputerData = [
    {
        "loginCreds": commonCredsData,
        "computerCompClass": CheapComputerComponent,
        "processorType": "Fast",
        "ram": "8 GB",
        "hdd": "320 GB",
        "software": "Image Viever"
    },
    {
        "loginCreds": commonCredsData,
        "computerCompClass": CheapComputerComponent,
        "processorType": "Fast",
        "ram": "4 GB",
        "hdd": "400 GB",
        "software": "Office Suite"
    },
    {
        "loginCreds": commonCredsData,
        "computerCompClass": CheapComputerComponent,
        "processorType": "Fast",
        "ram": "2 GB",
        "hdd": "320 GB",
        "software": "Other Office Suite"
    }
]