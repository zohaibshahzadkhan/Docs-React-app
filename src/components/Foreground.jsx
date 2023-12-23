import React, { useRef } from 'react'
import Card from './Card.jsx'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "orange"
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "orange"
            }
        }
    ]

    return (
        <div ref={ref} className='fixed z-[3] w-full h-full flex gap-10 flex-wrap p-10' >
            {
                data.map((item, index) => (
                    <Card data={item} key={index} reference={ref} />
                ))
            }
        </div>
    )
}

export default Foreground