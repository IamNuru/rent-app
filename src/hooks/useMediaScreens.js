import useMediaQuery from "@mui/material/useMediaQuery";

export const useIsMobileScreen = () =>{
   return useMediaQuery((theme) => theme.breakpoints.down("xs"));
}

export const useIsTabletScreen = () =>{
   return useMediaQuery((theme) => theme.breakpoints.up("sm"));
}

export const useIsLargeScreen = () =>{
   return useMediaQuery((theme) => theme.breakpoints.up("lg"));
}
