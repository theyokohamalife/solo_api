import {DoctorController} from "./controller/DoctorController";

export const Routes = [{
    method: "get",
    route: "/doctor",
    controller: DoctorController,
    action: "all"
}, {
    method: "get",
    route: "/doctor/:id",
    controller: DoctorController,
    action: "one"
}, {
    method: "post",
    route: "/doctor",
    controller: DoctorController,
    action: "save"
}, {
    method: "delete",
    route: "/doctor/:id",
    controller: DoctorController,
    action: "remove"
}];