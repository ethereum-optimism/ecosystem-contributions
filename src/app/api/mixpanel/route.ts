import { NextResponse } from "next/server";
import Mixpanel from "mixpanel";

// check if process.env.MIXPANEL_TOKEN does have a value?
const mPanel = Mixpanel.init(process.env.MIXPANEL_TOKEN!)

const POST = async (req: Request) => {
    const data = await req.json();

    try {
        const { event, properties, ip } = data;
        console.log("X-forwarded-for: " + ip);
        mPanel.track(event, properties);

        return NextResponse.json(
            { msg: "Event tracked successfully" },
            { status: 200 }
        );
    } catch (err) {
        console.log(err);

        return NextResponse.json(
            { error: "Internal Server Error: " + err }, 
            { status: 500 }
        );
    }
}

export { POST };