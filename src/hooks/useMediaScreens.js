import useMediaQuery from "@mui/material/useMediaQuery";

export const useIsTabletScreen = () =>{
   return useMediaQuery((theme) => theme.breakpoints.up("sm"));
}

export const useIsLargeScreen = () =>{
   return useMediaQuery((theme) => theme.breakpoints.up("lg"));
}
