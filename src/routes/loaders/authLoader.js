import { store } from "@/store";
import { redirect } from "react-router-dom";

export default function authLoader(roles) {
  return async ({ request }) => {
    let isRehydrated = store.getState().auth._persist.rehydrated;
    while (!isRehydrated) {
      isRehydrated = await store.getState().auth._persist.rehydrated;
    }
    const user = store.getState().auth.user;
    const userRole = user?.role ?? "guest";
    if (!roles.includes(userRole)) return redirect(`/login?fallback=${new URL(request.url).pathname}`);
    return null;
  };
}
