import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Layout = () => (
    <Container>
        <Header />

        <Outlet />
    </Container>
)