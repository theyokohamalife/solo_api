import {DoctorController} from "./controller/DoctorController";

export const Routes = [{
    method: "get",
    route: "/",
    controller: DoctorController,
    action: "all"
}, {
    method: "get",
    route: "/:id",
    controller: DoctorController,
    action: "one"
}, {
    method: "post",
    route: "/",
    controller: DoctorController,
    action: "save"
}, {
    method: "delete",
    route: "/:id",
    controller: DoctorController,
    action: "remove"
}];