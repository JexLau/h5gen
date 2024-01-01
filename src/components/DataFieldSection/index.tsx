import { DataFieldClient } from "./DataFieldClient";

export const DataFieldSection = () => {
  const dataFields = {
    Name: 'Name',
    "Phone": "Phone",
    "Email address": "Email address",
    "Social Medias": "Social Medias",
    "Website": "Website",
    "Domain": "Domain",
    "Fulladdress": "Fulladdress",
    "Street": "Street",
    "Municipality": "Municipality",
    "Categories": "Categories",
    "Claimed": "Claimed",
    "Price": "Price",
    "Plus code": "Plus code",
    "Review Count": "Review Count",
    "Reviews": "Reviews",
    "Review URL": "Review URL",
    "Photos": "Photos",
    "Average Rating": "Average Rating",
    "Google Maps URL": "Google Maps URL",
    "Google Knowledge URL": "Google Knowledge URL",
    "Latitude": "Latitude",
    "Longitude": "Longitude",
    "Opening hours": "Opening hours",
    "Featured image": "Featured image",
    "Cid": "Cid",
    "Place Id": "Place Id",
    "Kgmid": "Kgmid",
  }
  
  return <DataFieldClient dataFields={dataFields} />
}


