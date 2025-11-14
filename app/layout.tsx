"use client"
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { useState } from "react"
//mantine UI 
import { Button, ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from "react-redux"
import { store } from "@/utils/redux/store";
import NavLinkComponent from "@/components/navLink/navlink";
import { HiOutlineQueueList } from "react-icons/hi2";

const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'cyan',
  autoContrast: true,
  luminanceThreshold: 0.3,
  cursorType: 'pointer',
  colors: {
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ]
  }
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        cz-shortcut-listen="true"
      >
        <Provider store={store}>
          <MantineProvider theme={theme} defaultColorScheme="auto">
            <Navbar isOpen={isOpen} onClose={setIsOpen} >
              <NavLinkComponent />
            </Navbar>
            <Button className="absolute top-3.5 left-3.5" onClick={() => setIsOpen(isOpen ? false : true)}>
              <HiOutlineQueueList color={"white"} size={26}/>
            </Button>
            {children}
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
