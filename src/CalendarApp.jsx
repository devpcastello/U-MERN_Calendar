import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const CalendarApp = () => {
  return (
    <BrowserRouter BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};