import { Navigate, Route, Routes } from "react-router-dom"

import { BaseLayout } from "../shared/layouts/BaseLayout"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={ <BaseLayout></BaseLayout>} path="/home"> </Route>
            <Route element={<Navigate to={"/home"}></Navigate>} path="*" > </Route>
        </Routes>
    )
}