import { Route, Routes } from "react-router-dom";
import { Home } from ".././pages";

export const Navigation = () => (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
)