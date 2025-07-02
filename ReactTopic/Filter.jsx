import { Box } from '@mui/material'
import React from 'react'

const FilterTest = () => {

    const companyData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
        }, {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and S",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },

    ]

    // 5. Multi-Filter (Checkbox Filters)

    const products = [
        { id: 1, name: "Phone", tags: ["Electronics", "Mobile"] },
        { id: 2, name: "Tablet", tags: ["Electronics"] },
        { id: 3, name: "Shoes", tags: ["Clothing"] },
        { id: 4, name: "Laptop", tags: ["Electronics", "Computers"] },
        { id: 5, name: "T-Shirt", tags: ["Clothing"] },
        { id: 6, name: "Smartwatch", tags: ["Electronics", "Wearables"] },
        { id: 7, name: "Blender", tags: ["Home Appliances", "Kitchen"] },
        { id: 8, name: "Desk", tags: ["Furniture", "Office"] },
        { id: 9, name: "Camera", tags: ["Electronics", "Photography"] },
        { id: 10, name: "Microwave", tags: ["Home Appliances", "Kitchen"] },
        { id: 11, name: "Chair", tags: ["Furniture", "Office"] },
        { id: 12, name: "Backpack", tags: ["Accessories"] },
        { id: 13, name: "Jeans", tags: ["Clothing"] },
        { id: 14, name: "Monitor", tags: ["Electronics", "Computers"] },
        { id: 15, name: "Headphones", tags: ["Electronics", "Audio"] },
    ];



    let electronItems = products.filter((item) => {
        for (let i of item.tags) {
            if (i === 'Electronics' || i === 'Furniture') {
                return true;
            }
        }
    });

    console.log(electronItems)

    // const electronicItems = products.filter((product) =>
    //        console.log( product.tags.includes("Electronics"))
    //         );
    //         console.log(electronicItems);

    // products.filter((items)=> {
    //     console.log(items.tags.includes("Electronics"));

    // })




    return (
        <>
            {/* <Box className="companyDataBlock">
                {companyData.filter((item)=> item.company?.name?.length >= 10).map((value, index) => (
                    <div className='companyDetails' key={index}>
                        <p>Name : {value.name}</p>
                        <p>Company Name: {value.company?.name?.length}</p>
                    </div>
                ))

                }
            </Box> */}


            <Box>
                <Box className="" sx={{ display: "flex" }}>
                    <input type='checkbox' value={0} />
                    <p>Electronics</p>
                </Box>
                <Box className="" sx={{ display: "flex" }}>
                    <input type='checkbox' value={1} />
                    <p>Clothing</p>
                </Box>
                <Box className="" sx={{ display: "flex" }}>
                    <input type='checkbox' value={2} />
                    <p>Home Appliances</p>
                </Box>
                <Box className="" sx={{ display: "flex" }}>
                    <input type='checkbox' value={3} />
                    <p>Electronics</p>
                </Box>
            </Box>
            <Box>
                <ul>

                    {electronItems.map((items, index) => (
                        <li key={index}>
                            {items.products}
                        </li>
                    ))}
                </ul>

            </Box>
        </>
    )
}

export default FilterTest
