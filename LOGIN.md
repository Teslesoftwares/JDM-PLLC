# Login Guide

## Sign-In Page

Use `/login` for staff accounts. Sign in with the email address and password
assigned to the account. Public self-registration is disabled; accounts are
created by administration.

## Administrator Account

The production administrator account is:

| Field | Value |
| --- | --- |
| Email | `info@jdm-pllc.org` |
| Role | `ADMIN` |

The password is **not** stored in this repository. This repository is public,
so the password is supplied at runtime from the deployment environment (or a
password manager) and would be reset if it were ever exposed.

## Create or Reset an Administrator

From a trusted machine with access to the database, run the admin script and
pass the credentials for that single run:

```bash
ADMIN_EMAIL="info@jdm-pllc.org" \
ADMIN_PASSWORD="<new-password>" \
DATABASE_URL="<database-url>" \
npx tsx scripts/create-admin.ts
```

The script upserts the account, hashes the password, assigns the `ADMIN` role
(falling back to `SUPER_ADMIN`), and marks the account active. It is safe to
re-run to reset a forgotten password. Never commit the password or add it to a
tracked file.

## Password Recovery

Choose **Forgot password?** on the sign-in page and submit the account email
address. A reset link is valid for one hour and can be used once. Configure the
SMTP variables in the hosting environment to deliver reset email; otherwise the
link is only written to the server log.

## Change Password After Sign-In

After signing in, open the account menu and choose **Change password**. Enter
the current password and a new one. New passwords must be 8–128 characters and
contain an uppercase letter, a lowercase letter, and a number. The current
password is verified, outstanding reset links are invalidated, and the change is
audit logged.

If you do not know the current password, use **Forgot password?** on `/login`
or re-run the admin script above.

## Account Help

- Users without an account should contact administration.
- Staff who cannot sign in should have an administrator check that the account
  is active or reset its password.
- Sign-in accepts credentials for active accounts only.
