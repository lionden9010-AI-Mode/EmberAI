# API foundation

Production routes are authenticated, owner-scoped, validated, rate-limited, and audited. The server transport layer calls portable domain services and repositories; it never exposes cloud-provider secrets to web or Android clients.
