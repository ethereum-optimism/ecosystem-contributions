import { NextRequest, NextResponse } from "next/server";

//ip => city, country
export const GET = async (req: NextRequest) => {
    try {
        //extract the ip
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || req.ip;
        if(!ip) {
            return NextResponse.json(
                { error: "Unable to determine IP address: " + ip },
                { status: 400 }
            );
        }

        //return client IP
        return NextResponse.json(ip);
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
        );
    }
};