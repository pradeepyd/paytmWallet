import { NextResponse } from "next/server"
import db from "@repo/db/client";

// const client = new PrismaClient();

export const GET = async () => {
    await db.merchant.create({
        data : {
            email: "asd",
            name: "adsads",
            auth_type:"Google"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}