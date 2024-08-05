const setCookie = (name: string, value: string, expires: Date) => {
    let expiresStr = "";
    if (expires) {
      expiresStr = "; expires=" + expires.toUTCString();
    }
    document.cookie = `${name}=${value || ""}${expiresStr}; path=/`;
  };
  
  
const getCookie = (name: string): string | null => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const eraseCookie = (name: string): void => {
    document.cookie = `${name}=; Max-Age=-99999999;`;
};

export {setCookie, getCookie, eraseCookie}