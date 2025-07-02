import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import BestSeller from '../BestSeller/BestSeller'
import styled from 'styled-components';
import ModiWeek from '../ModiWeek/ModiWeek';
import Collection from '../Collection/Collection';
import HeadingH3 from '../HeadingH3/HeadingH3';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const FilterStyles = styled(Box)(({ theme }) => ({
    position: "sticky",
    maxWidth: "392px",
    ".selectedFilter": {
        marginBottom: "16px",
        ".filerClearBtn": {
            display: "flex",
            button: {
                padding: "8px 25px",
            }
        }
    },
    ".filterAccording": {
        marginBottom: "18px",
        button: {
            width: "100%",
            maxWidth: "100%",
            fontWeight: "bold",
        },
        ".filterValues ": {
            border: "1px solid #5A6D57",
            borderTop: "0",
            padding: "16px",
            ".filterFiled": {
                display: "flex",
                alignItems: "center",
                gap: "15px",
                "input[type=checkbox]": {
                    position: "relative",
                    appearance: "none",
                    width: "19px",
                    height: "19px",
                    cursor: "pointer",
                    padding:"0",
                    "&:after": {
                        content: "''",
                        position: "absolute",
                        width: "19px",
                        height: "19px",
                        border: "1px solid gray",
                    },
                    "&:checked": {
                        "&:after": {
                            background: "#5A6D57",
                        }
                    }
                },
                p: {
                    margin: "0",
                    lineHeight: "30px",
                },
            },
        }
    }

}));





const FiltersBlock = ({ svgIcon }) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isColorOpen, setIsColorOpen] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const [isFabricOpen, setIsFabricOpen] = useState(false);

    const [isSelectFilter, setIsSelectFilter] = useState(0);
    const [filterApplied, setfilterApplied] = useState([]);
    function handleCheckbox(e) {

        console.log(e.target.value, e.target.checked)
        if (e.target.checked) {
            setfilterApplied([...filterApplied, e.target.value])
        } else {
            if (filterApplied.includes(e.target.value)) {
                const updatedFilters = filterApplied.filter(item => item !== e.target.value);
                setfilterApplied(updatedFilters);
            }
        }
    }

    const sorting = [
        {
            featured: "Featured"
        },
        {
            featured: "BestSeller"
        },
        {
            featured: "Price: Low To Hight"
        },
        {
            featured: "Price: HightTo Low"
        },
    ]
    const size = ['XS / US (0-4)', 'S / US (4-6)', 'M / US (6-10)', 'L / US (10-14)', 'XL / US (12-16)']

    const collections = ['In Stocks', 'Out of Stocks']

    const fabric = ['Cotton', 'Linen', 'Wool', 'Silk', 'Cashmere']
    return (
        <FilterStyles>
            <HeadingH3 title="Filers" />
            <Box className="selectedFilter">
                <Box>   
                <p>
                    {filterApplied.map((item)=><span key={item}>{item}</span>)}
                </p>


                    {isSelectFilter ? (

                        <Box className="filerClearBtn">
                            <ButtonComponent buttonTitle="ClearAllFilter" />
                            <ButtonComponent buttonTitle="Applied Filters" className="bgFill" />
                        </Box>
                    ) : (
                        <></>
                    )}
                </Box>

            </Box>
            <Box className="filterAccording">
                <ButtonComponent
                    buttonTitle="Sort"
                    onClick={() => { setIsSortOpen(!isSortOpen); }
                    }
                    className={`${!isSortOpen ? "  " : " activeTab "} bgFill accordingBtn `}
                    svgIcon={!isSortOpen ? "+" : "-"} >
                </ButtonComponent>
                {isSortOpen && (
                    <Box className="filterValues">
                        {sorting.map((items, index) => (
                            <Box className="filterFiled" key={index}>
                                <input type='checkbox' onChange={handleCheckbox} value={items.featured} />
                                <p>{items.featured}</p>
                            </Box>
                        ))}

                    </Box>
                )
                }
            </Box>
            <Box className="filterAccording">
                <ButtonComponent buttonTitle="Size"
                    onClick={() => { setIsSizeOpen(!isSizeOpen) }}
                    className={`${!isSizeOpen ? "  " : " activeTab "} bgFill accordingBtn  `}
                    svgIcon={!isSizeOpen ? "+" : "-"}

                >

                </ButtonComponent>
                {isSizeOpen && (
                    <Box className="filterValues">
                        {size.map((items, index) => (
                            <Box className="filterFiled" key={index}>
                                <input type='checkbox' value={0} onClick={() => setIsSelectFilter(true)} />
                                <p>{items}</p>
                            </Box>
                        ))

                        }


                    </Box>
                )
                }
            </Box>
            <Box className="filterAccording">
                <ButtonComponent buttonTitle="Color" onClick={() => { setIsColorOpen(true) }} className={`${!isColorOpen ? "  " : "  activeTab"} bgFill accordingBtn  `}
                    svgIcon={!isColorOpen ? "+" : "-"}
                >

                </ButtonComponent>
                {isColorOpen && (
                    <Box className="filterValues">


                    </Box>
                )
                }
            </Box>
            <Box className="filterAccording">
                <ButtonComponent buttonTitle="Collection" onClick={() => { setIsCollectionOpen(true) }} className={`${!isCollectionOpen ? "  " : " activeTab "} bgFill accordingBtn  `}
                    svgIcon={!isCollectionOpen ? "+" : "-"}
                >

                </ButtonComponent>
                {isCollectionOpen && (
                    <Box className="filterValues">
                        {collections.map((items, index) => (
                            <Box className="filterFiled" key={index}>
                                <input type='checkbox' value={0} onClick={() => setIsSelectFilter(!isSelectFilter)} />
                                <p>{items}</p>
                            </Box>
                        ))}

                    </Box>
                )
                }
            </Box>
            <Box className="filterAccording">
                <ButtonComponent buttonTitle="Fabric" onClick={() => { setIsFabricOpen(true) }} className={`${!isFabricOpen ? "  " : " activeTab "} bgFill accordingBtn  `}
                    svgIcon={!isFabricOpen ? "+" : "-"}
                >

                </ButtonComponent>
                {isFabricOpen && (
                    <Box className="filterValues">
                        {fabric.map((itemsFeb, index) => (
                            <Box className="filterFiled" key={index}>
                                <input type='checkbox' value={0} onClick={() => setIsSelectFilter(!isSelectFilter)} />
                                <p>{itemsFeb}</p>
                            </Box>
                        ))}


                    </Box>
                )
                }
            </Box>

        </FilterStyles>
    )
}

export default FiltersBlock
