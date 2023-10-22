import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarList } from "../../pages/car-list";
import { Layout } from "./layout";
import { CarAdd } from "../../pages/car-add";
import { CardUpdate } from "../../pages/car-update";

export const Content = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CarList />} />
        <Route path="add" element={<CarAdd />} />
        <Route path="update" element={<CardUpdate />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
