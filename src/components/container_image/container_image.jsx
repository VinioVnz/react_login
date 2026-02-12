import { Box } from "@mui/material";
import image from '../../assets/images/image.jpg'
//import "./style.css"
export const ContainerImage = () => {
  return <Box
  sx={{
    flex: 1,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: '20px',
  }}
/>
};
