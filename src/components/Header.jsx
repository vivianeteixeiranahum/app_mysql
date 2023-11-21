import { Box, Container, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container  boxShadow={1} >
      <Box flexDirection={"row"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Meu site</Box>
        <Tabs>
          <Tab label="Home" value="/" LinkComponent={<Link />} />
          <Tab label="Home" value="/" LinkComponent={<Link />} />
          <Tab label="Home" value="/" LinkComponent={<Link />} />
          <Tab label="Home" value="/" LinkComponent={<Link />} />
          <Tab label="Home" value="/" LinkComponent={<Link />} />
          <Tab label="Home" value="/" LinkComponent={<Link />} />
          <Tab label="Home" value="/" LinkComponent={<Link />} />
        </Tabs>
      </Box>
    </Container>
  );
}
