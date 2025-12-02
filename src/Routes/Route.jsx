import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../AuthLayout/login";
import Register from "../AuthLayout/Register";
import PrivateRouts from "./PrivateRouts";
import Rider from "../Pages/Rider/Rider";
import ResetPassword from "../AuthLayout/ResetPassword";
import Story from "../Pages/AboutUs/Story";
import Mission from "../Pages/AboutUs/Mission";
import Success from "../Pages/AboutUs/Success";
import TeamOthers from "../Pages/AboutUs/TeamOthers";
import SendParcel from "../Pages/SendParcel/SendParcel";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/Dashboard/Payment/PaymentCancel";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import ApproveRider from "../Pages/Dashboard/ApproveRider/ApproveRider";
import UserAdmin from "../Pages/Dashboard/UserAdmin/UserAdmin";
import AdminRoutes from "./AdminRoutes";
import AssignRiders from "../Pages/Dashboard/Payment/AssignRiders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <PrivateRouts><Coverage /></PrivateRouts> ,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/sendParcel",
        element: <PrivateRouts><SendParcel /></PrivateRouts> ,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (<PrivateRouts><Rider></Rider></PrivateRouts>),
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "story",
            element: <Story />,
          },
          {
            path: "mission",
            element: <Mission />,
          },
          {
            path: "success",
            element: <Success />,
          },
          {
            path: "team",
            element: <TeamOthers />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/resetPassword",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouts>
        <Dashboard></Dashboard>
      </PrivateRouts>
    ),
    children: [
      {
        path: "myParcels",
        Component: MyParcels,
      },
      {
        path: "paymentHistory",
        Component: PaymentHistory,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-canceled",
        Component: PaymentCancel,
      },
      {
        path: "approveRider",
        // element: <ApproveRider />,
        element: (
          <AdminRoutes>
            <ApproveRider />
          </AdminRoutes>
        ),
      },
      {
        path: "userAdmin",
        // element: <UserAdmin />,
        element: (
          <AdminRoutes>
            <UserAdmin />
          </AdminRoutes>
        ),
      },
      {
        path: "assignRiders",
        // element: <AssignRiders />,
        element: (
          <AdminRoutes>
            <AssignRiders />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
