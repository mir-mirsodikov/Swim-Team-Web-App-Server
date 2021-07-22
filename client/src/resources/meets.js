const meets = [
    {
        date: new Date(2020, 11, 3, 14, 0),
        name: "Newton",
        location: "Newton High School",
        locationMap: "https://www.google.com/maps/place/Newton+High+School/@37.7317031,-97.3966053,10z/data=!4m8!1m2!2m1!1snewton+high+school!3m4!1s0x87bb14908ed6ee91:0xeafa0bc7b68bb7ba!8m2!3d38.0584238!4d-97.3634228"
    },
    {
        date: new Date(2020, 11, 5, 13, 0),
        name: "Maize",
        location: "Northwest YMCA",
        locationMap: "https://www.google.com/maps/place/Ken+Shannon+NORTHWEST+Branch+-+Greater+Wichita+YMCA/@37.7232046,-97.5057174,17z/data=!3m1!4b1!4m5!3m4!1s0x87badf6bb1d8951f:0x5b7fc0850f2d7684!8m2!3d37.7232046!4d-97.5035287?hl=en"
    },
    {
        date: new Date(2020, 11, 11, 16, 0),
        name: "El Dorado",
        location: "El Dorado High School",
        locationMap: "https://www.google.com/maps/place/El+Dorado+High+School/@37.8312567,-96.865618,14z/data=!4m8!1m2!2m1!1sEl+Dorado+High+School!3m4!1s0x87bbb3ed9af5e177:0x5355a52c0e99d2eb!8m2!3d37.8449565!4d-96.8451716?hl=en"
    },
    {
        date: new Date(2020, 11, 15, 15, 30),
        name: "Hutchinson",
        location: "Hutchinson YMCA",
        locationMap: "https://www.google.com/maps/place/YMCA+of+Hutchinson+and+Reno+County/@38.0671677,-97.9183241,17z/data=!3m1!4b1!4m5!3m4!1s0x87a4b71e23be19ad:0xaf65bea9e326f676!8m2!3d38.0671677!4d-97.9161354?hl=en"
    },
    {
        date: new Date(2021, 0, 7, 14, 0),
        name: "Newton",
        location: "Newton High School",
        locationMap: "https://www.google.com/maps/place/Newton+High+School/@37.7317031,-97.3966053,10z/data=!4m8!1m2!2m1!1snewton+high+school!3m4!1s0x87bb14908ed6ee91:0xeafa0bc7b68bb7ba!8m2!3d38.0584238!4d-97.3634228"
    },
    {
        date: new Date(2021, 0, 12, 15, 30),
        name: "Hutchinson",
        location: "Hutchinson YMCA",
        locationMap: "https://www.google.com/maps/place/YMCA+of+Hutchinson+and+Reno+County/@38.0671677,-97.9183241,17z/data=!3m1!4b1!4m5!3m4!1s0x87a4b71e23be19ad:0xaf65bea9e326f676!8m2!3d38.0671677!4d-97.9161354?hl=en"
    },
    {
        date: new Date(2021, 0, 14, 13, 30),
        name: "Salina South",
        location: "Salina South High School",
        locationMap: "https://www.google.com/maps/place/Salina+South+High+School/@38.7964043,-97.6018356,17z/data=!3m1!4b1!4m5!3m4!1s0x87bcc63b34bc361b:0xb70ce1578772cfe7!8m2!3d38.7964043!4d-97.5996469?hl=en"
    },
    {
        date: new Date(2021, 0, 23, 14, 0),
        name: "Heights",
        location: "Heights High School",
        locationMap: "https://www.google.com/maps/place/Heights+Senior+High+School/@37.7797355,-97.3001917,17z/data=!4m8!1m2!2m1!1sheights+high+school!3m4!1s0x87bb1d0945644f7b:0x199b914d96397864!8m2!3d37.7797355!4d-97.3001917"
    },
    {
        date: new Date(2021, 0, 30, 9, 15),
        name: "East High ICT Invite",
        location: "Wichita Swim Club",
        locationMap: "https://www.google.com/maps/place/Wichita+Swim+Club/@37.6845906,-97.239546,17z/data=!3m1!4b1!4m5!3m4!1s0x87bafc912c4db88d:0x1017dba2b3fa1e3e!8m2!3d37.6845906!4d-97.2373573?hl=en"
    },
    {
        date: new Date(2021, 1, 6, 13, 0),
        name: "Maize South",
        location: "Northwest YMCA",
        locationMap: "https://www.google.com/maps/place/Ken+Shannon+NORTHWEST+Branch+-+Greater+Wichita+YMCA/@37.7232046,-97.5057174,17z/data=!3m1!4b1!4m5!3m4!1s0x87badf6bb1d8951f:0x5b7fc0850f2d7684!8m2!3d37.7232046!4d-97.5035287?hl=en"
    },
    {
        date: new Date(2021, 1, 13, 9, 0),
        name: "League Meet",
        location: "El Dorado High School",
        locationMap: "https://www.google.com/maps/place/El+Dorado+High+School/@37.8312567,-96.865618,14z/data=!4m8!1m2!2m1!1sEl+Dorado+High+School!3m4!1s0x87bbb3ed9af5e177:0x5355a52c0e99d2eb!8m2!3d37.8449565!4d-96.8451716?hl=en"
    },
    {
        date: new Date(2021, 1, 19, 14, 30),
        name: "State Meet - Prelims",
        location: "Shawnee Mission School District Aquatic Center",
        locationMap: "https://www.google.com/maps/place/Shawnee+Mission+School+District+Aquatic+Center/@38.9704652,-94.7876001,17z/data=!3m1!4b1!4m5!3m4!1s0x87c095a2e287a719:0x16adb0c9759b6b00!8m2!3d38.9704652!4d-94.7854114?hl=en"
    },
    {
        date: new Date(2021, 1, 20, 14, 30),
        name: "State Meet - Finals",
        location: "Shawnee Mission School District Aquatic Center",
        locationMap: "https://www.google.com/maps/place/Shawnee+Mission+School+District+Aquatic+Center/@38.9704652,-94.7876001,17z/data=!3m1!4b1!4m5!3m4!1s0x87c095a2e287a719:0x16adb0c9759b6b00!8m2!3d38.9704652!4d-94.7854114?hl=en"
    }
];

export default meets;