const localApiUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:8000";

export const LOCAL_LOGIN_PATH = "/local-login";

/**
 * Sign out of the local backend, then go to the login page.
 *
 * The session cookie belongs to the API's host (login sets it from a browser
 * request to the API), so only a browser request to the API can clear it. When
 * the UI and API are served from different hosts, a UI route cannot reach it.
 */
export async function localSignOut(): Promise<void> {
  await fetch(`${localApiUrl}/api/v1/auth/logout`, { method: "POST", credentials: "include" });
  window.location.href = LOCAL_LOGIN_PATH;
}
