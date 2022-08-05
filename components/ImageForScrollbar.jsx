import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import { useEffect, useState } from "react"

const width = global.window && window.innerWidth
const ImageForScrollbar = ({data,LeftArrow, RightArrow}) => {
    const [dimensionDefault, setDimensionDefault] = useState(width)
    // const height = global.window && window.innerHeight
    useEffect(() => {
        console.log(dimensionDefault)
    }, [dimensionDefault])
    
    return (
        <ScrollMenu 
            LeftArrow={LeftArrow} 
            RightArrow={RightArrow} 
            >
            {data.map((item) => (
                <Box key={item.id} width={`${dimensionDefault-80}px`} itemId={item.id} p="1">
                    <Image 
                        alt="property"
                        placeholder="blur" 
                        blurDataURL={item.url} 
                        src={item.url} 
                        width={250} 
                        height={150} 
                        layout="responsive"
                        sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
                    />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default ImageForScrollbar