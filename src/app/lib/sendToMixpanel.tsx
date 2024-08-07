// interface MixpanelEvent {
//     eventName: string;
//     eventProperties: Record<string, any>;
// }

import { getCookie, setCookie } from "./cookie";

const sendToMixpanel = async (eventName: string, eventProperties?: Record<string, any>) => {

    // console.log(crypto.randomUUID())
    let userId: string = "";
    const userCookie = getCookie("user_id");
  
    if (typeof userCookie === "string") {
        userId = userCookie;
    } else {
        const uuid = crypto.randomUUID();
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        setCookie("user_id", uuid, oneYearFromNow);
        userId = uuid;
    }

    // get client ip
    const clientIPResponse = await fetch("/api/proxy");
    const clientIP = await clientIPResponse.json();

    //this part of code handles getting the UTM parameters that we can't get by default server side
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
        utm_source: urlParams.get("utm_source") || undefined,
        utm_medium: urlParams.get("utm_medium") || undefined,
        utm_campaign: urlParams.get("utm_campaign") || undefined,
        utm_term: urlParams.get("utm_term") || undefined,
        utm_content: urlParams.get("utm_content") || undefined,
        id: urlParams.get("id") || undefined,
    };
    
    //Here we are including additional data that will be sent to Mixpanel like device information, UTM parameters and location
    const additionalProperties = {
        // * From Docs
        // - You cannot set the value of distinct_id yourself, it will be set by Mixpanel. 
        //   How it's set depends on the version of ID Merge that your project uses:
        // ? not sure about distinct_id at all
        // distinct_id: "anonymous",
        $browser: navigator.userAgent,
        $browser_version: navigator.appVersion,
        $current_url: window.location.href,
        $device: navigator.platform,
        $device_id: navigator.userAgent,
        $initial_referrer: document.referrer ? document.referrer : undefined,
        $initial_referring_domain: document.referrer
            ? new URL(document.referrer).hostname
            : undefined,
        $os: navigator.platform,
        $user_id: userId,
        ...utmParams,
    };
    const properties = {
        ...eventProperties,
        ...additionalProperties,
        ip: clientIP,
    };
    //Finally we are calling the mixpanel api route
    fetch("/api/mixpanel", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: eventName,
            properties: properties
        }),
    });
}

export default sendToMixpanel;