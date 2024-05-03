/* eslint-disable no-undef */
import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/utils/useDetectOnline";
import { WrapperStyle } from "@/styles/StyledComponents/WrapperStyle";
import { primaryColors } from "@/themes/_muiPalette";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import BannerSection from "../BannerSection/BannerSection";
import { Toolbar } from "@mui/material";

interface wrapperProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children, title } = props;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // useEffect(() => {
  //   if (document) {
  //     const hdrElm = document.querySelector<HTMLElement>(".main_head");
  //     const hdrHeight = hdrElm?.clientHeight;
  //     const paaddngELM = document.querySelector<HTMLElement>(".body_content");
  //     if (!!paaddngELM) {
  //       paaddngELM.style.paddingTop = hdrHeight + "px";
  //     }
  //   }
  // });
  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "Procell";

  useOnlineStatus();

  return (
    <WrapperStyle>
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical=""
        description=""
        url=""
        image=""
      />
      {/* <Header /> */}
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          className="body_content"
          sx={{ width: "100%", paddingInline: "20px", minHeight: "100svh" }}
        >
          <Toolbar />
          <BannerSection title={title} setOpen={() => {}} />
          {children}
        </Box>
      </Box>

      <Footer />

      <Backdrop
        sx={{
          color: `${primaryColors?.white}`,
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </WrapperStyle>
  );
};

export default Wrapper;
