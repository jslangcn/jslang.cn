const { origin, searchParams: search } = new URL(location.href)
const session = search.get('jslangcn')
if (session) {
  localStorage.setItem('jslangcn-session', session)
  location.href = origin
}

const JSLANGCN_API = 'https://api.jslang.cn'
export const token = { value: null as null | string };

export async function loadToken(): Promise<string | null> {
  if (token.value) {
    return token.value;
  }
  const url = `${JSLANGCN_API}/github/token`;
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(localStorage.getItem('jslangcn-session'))
  });
  if (response.ok) {
    const t = await response.json();
    token.value = t;
    return t;
  }
  return null;
}