
import { Box, Container, CssBaseline, Stack, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ResponsiveAppBar from "./pages/Navbar";
import React from "react";
import { Index } from "./pages";




function App() {
  const queryClient = new QueryClient()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode:'dark'
        },
      }),
    [prefersDarkMode],
  );
      const Root=()=>{
        return(
          <>
        <QueryClientProvider client={queryClient}>
        <ResponsiveAppBar/>
        <Index/>
        <Outlet/>
        </QueryClientProvider>
        </>
        )
        
      }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
     
      children: [

      ]
    },
  ]);
  
  
  
  
  return (
    <>
     <ThemeProvider theme={theme}>
     <CssBaseline />
     <RouterProvider router={router} />
     
      </ThemeProvider>
      
    </>
  );
}

export default App;
