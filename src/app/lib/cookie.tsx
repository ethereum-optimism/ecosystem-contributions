const setCookie = (name: string, value: string, expires: Date) => {
  if (!name || /[;=]/.test(name) || /[;=]/.test(value)) {
      console.error('Invalid cookie name or value');
      return;
  }
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
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const eraseCookie = (name: string): void => {
  if (!name || /[;=]/.test(name)) {
      console.error('Invalid cookie name');
      return;
  }
  document.cookie = `${name}=; Max-Age=-99999999;`;
};

export {setCookie, getCookie, eraseCookie}