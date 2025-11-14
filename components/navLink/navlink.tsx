import Home from '@/app/page';
import { NavLink, useMantineTheme } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';
import Link from 'next/link';

const urls = [
    "/about",
    "/tools",
    "/services",
    "/contact"
]

export default function NavLinkComponent() {
    const theme = useMantineTheme();
    console.log(theme)
    return (
        <>  
            <NavLink component={Link} href={"/"} label="Home"/>
            <NavLink component={Link} href={"/start-quiz"} label="Start Quiz"/>
            <NavLink
                href="#"
                label="Introduction"
                leftSection={<IconGauge size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                {
                    urls?.map((url,index) => {
                        return(
                            <NavLink key={index} component={Link} href={url} label={url.slice(1)}/>
                        )
                    })
                }
            </NavLink>

            <NavLink
                href="#required-for-focus"
                label="Second parent link"
                leftSection={<IconFingerprint size={16} stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink label="First child link" href="#required-for-focus" >

                </NavLink>
                <NavLink label="Second child link" href="#required-for-focus" />
                <NavLink label="Third child link" href="#required-for-focus" />
            </NavLink>
        </>
    );
}