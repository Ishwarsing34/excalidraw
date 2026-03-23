
require("dotenv").config()

import { WebSocketServer } from "ws";
import jwt from 'jsonwebtoken'
const ws = new WebSocketServer({ port: 8080 });


import {JWT_SECRET} from '@repo/backend-common/config'

ws.on("connection", function connection(ws, request) {
    const url = request.url;

    if (!url) {
        return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token");

    const decoded = jwt.verify(token as string, JWT_SECRET as string)


    if (!decoded) {
        ws.close();
        return;
    }

    ws.on("message", function message(data) {
        ws.send("pong");
    });
});