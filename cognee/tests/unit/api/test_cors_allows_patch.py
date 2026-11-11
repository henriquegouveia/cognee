"""The browser UI sends PATCH (password change, document update); CORS must allow it."""

from fastapi.testclient import TestClient

from cognee.api.client import allowed_origins, app


def test_cors_preflight_allows_patch():
    origin = allowed_origins[0]
    response = TestClient(app).options(
        "/api/v1/users/me",
        headers={
            "Origin": origin,
            "Access-Control-Request-Method": "PATCH",
            "Access-Control-Request-Headers": "content-type",
        },
    )
    assert response.status_code == 200
    assert "PATCH" in response.headers["access-control-allow-methods"]
