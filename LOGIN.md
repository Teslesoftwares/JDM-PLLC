# Login Guide

## Sign-In Page

Use `/login` for staff and patient accounts. Sign in with the email address and password assigned to the account. Public self-registration is disabled; patients are registered by clinic administration or reception.

## Development Demo Accounts

The following accounts are created by `npm run db:seed` for local development and testing:

| Account | Email | Password | Role |
| --- | --- | --- | --- |
| System administrator | `admin@menstrocare.example` | `Admin@123` | Full system access |
| Doctor | `s.bonsu@menstrocare.example` | `Staff@123` | Staff dashboard |
| Patient | `ama.mensah@demo.com` | `Patient@123` | Patient portal |

For the existing local workspace database, use the administrator account `admin@jaggreys.com` with password `Admin@123`. This database-specific account is separate from the administrator account created by a fresh seed above.

Other seeded staff accounts use `Staff@123`; all eight seeded demo patients use `Patient@123`. These credentials and the associated data are for development only. Change or remove them before deploying to a real environment.

## Password Recovery

Choose **Forgot password?** on the sign-in page and submit the account email address. A reset link is valid for one hour and can be used once. In development, if SMTP is not configured, reset email output is logged by the application rather than delivered. Configure the SMTP variables in `.env` to test actual email delivery.

## Change Password After Sign-In

After signing in, open the account menu or the dashboard/portal navigation and choose **Change password**. Enter the current password and a new password. New passwords must be 8–128 characters and contain an uppercase letter, a lowercase letter, and a number. The current password is verified, outstanding reset links are invalidated, and the change is audit logged.

If you do not know the current password, use **Forgot password?** on `/login` instead. The reset flow requires access to the account email address.

## Local Setup

The demo accounts require a configured database and seeded data. Follow the [Quick start](README.md#3-quick-start) in the main README, then run `npm run db:seed` if the database has not been seeded.

## Account Help

- Patients without an account should contact clinic reception; staff create patient accounts at registration.
- Staff who cannot sign in should contact an administrator to check that their account is active or reset their password.
- Sign-in accepts credentials for active accounts only.