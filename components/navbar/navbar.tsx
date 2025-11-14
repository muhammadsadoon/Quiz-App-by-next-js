import { DrawerProps } from '@/utils/types/props';
import { Drawer } from '@mantine/core';



export default function Navbar({children, isOpen, onClose }: DrawerProps) {
    return (
        <Drawer position="left" size="sm" opened={isOpen} onClose={() => onClose(isOpen ? false : true)}>
            {children}
        </Drawer>
    );
}