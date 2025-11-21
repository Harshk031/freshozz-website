# 🚀 Deploy Freshozz.in to Make It Live

Follow these exact steps to make freshozz.in accessible to everyone:

## Step 1: Prepare the Code

Your code is ready! All files are in: `c:/Users/Harsh/OneDrive/Desktop/freshozz`

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `freshozz-website`
3. Set to **Public** or **Private** (your choice)
4. **DO NOT** initialize with README
5. Click **Create repository**

## Step 3: Push Code to GitHub

Open PowerShell in your project folder and run:

```powershell
cd "c:/Users/Harsh/OneDrive/Desktop/freshozz"

git init
git add .
git commit -m "Initial commit - Freshozz website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/freshozz-website.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

## Step 4: Deploy to Vercel

1. Go to https://vercel.com/signup
2. Sign up/Login with **GitHub**
3. Click **"Add New"** → **"Project"**
4. Import your `freshozz-website` repository
5. Vercel will auto-detect Next.js
6. Click **Deploy** (don't change anything)
7. Wait 2-3 minutes for deployment

## Step 5: Connect freshozz.in Domain

### In Vercel:

1. Go to your project → **Settings** → **Domains**
2. Type `freshozz.in` and click **Add**
3. Vercel will show DNS records - **COPY THESE**

### In GoDaddy:

1. Login to https://godaddy.com
2. Go to **My Products** → **Domains**
3. Click **Manage** next to `freshozz.in`
4. Click **DNS** → **Manage Zones** (or DNS Settings)

**Add these DNS records:**

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 hour
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 hour
```

5. **Delete any existing A records for @**
6. **Save all changes**

## Step 6: Wait for DNS Propagation

- Takes 5-30 minutes (sometimes up to 24 hours)
- Check status: https://www.whatsmydns.net/#A/freshozz.in

## Step 7: Enable HTTPS

1. Back in Vercel → **Settings** → **Domains**
2. Wait for green checkmark next to freshozz.in
3. SSL certificate will auto-generate
4. Your site is now live! 🎉

## Final URLs:

✅ **https://freshozz.in** - Your live site
✅ **https://www.freshozz.in** - Also works
✅ **https://your-project.vercel.app** - Vercel default URL

---

## Quick Commands Cheat Sheet:

```powershell
# If you make changes later, push updates:
git add .
git commit -m "Update website"
git push

# Vercel will auto-redeploy (takes 1-2 mins)
```

## Need Help?

- Vercel Support: https://vercel.com/help
- Check your Vercel project logs for errors
- DNS help: https://www.godaddy.com/help

---

**Once DNS propagates, anyone searching "freshozz.in" will see your site!** 🚀
