import { useContext, useState } from "react";
import { Box, Flex } from "@chakra-ui/react"
import { VisibilityContext } from "react-horizontal-scrolling-menu"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

import ImageForScrollbar from "./ImageForScrollbar";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1" >
            <Box 
            height={467}
            bg="white"
            width={5}
            as={IoIosArrowBack}
            onClick={()=>scrollPrev()}
            fontSize="2xl"
            cursor="pointer"
            color="blue.400"
            sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
            ></Box>
        </Flex>
    )
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1" marginLeft="1" >
            <Box 
            height={467}
            bg="white"
            width={5}
            as={IoIosArrowForward}
            onClick={()=>scrollNext()}
            fontSize="2xl"
            cursor="pointer"
            color="blue.400"
            sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
            ></Box>
        </Flex>
    )
}


const ScrollbarForImage = ({data}) => 
    (
        <ImageForScrollbar data = {data} LeftArrow={LeftArrow} RightArrow={RightArrow}/>
    )
export default ScrollbarForImage


