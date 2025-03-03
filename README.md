# 📌 Promptopia

🚀 **Promptopia** is an open-source AI prompting tool that allows users to **discover, create, and share creative prompts**. Built using **Next.js**, this platform provides a seamless experience for managing AI-generated content.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB
- **Authentication:** NextAuth.js
- **Database ORM:** Mongoose
- **Deployment:** Vercel

---

## 🚀 Features

✅ User authentication with **NextAuth.js** (Google Sign-in)\
✅ Create, edit, and delete prompts\
✅ Search prompts by **tag, username, or content**\
✅ Clickable tags for instant filtering\
✅ Responsive **MUI-based UI design**\
✅ Deployed on **Vercel** for seamless performance

---

## 📂 Folder Structure

```
📦 promptopia
├── 📂 app                 # Application source code
├── 📂 components          # Reusable UI components
├── 📂 models              # Mongoose schemas for database models
├── 📂 public              # Static assets like images/icons
├── 📂 styles              # Global styles with Tailwind CSS
├── 📂 utils               # Helper functions
├── 📂 node_modules        # Project dependencies
├── .env                   # Environment variables
├── .gitignore             # Ignored files in Git
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── package-lock.json      # Lockfile for dependencies
├── package.json           # Project metadata and dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── README.md              # Project documentation
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/prasadbelsare/Promptopia.git
cd Promptopia
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```sh
MONGODB_URI=your-mongodb-connection-string
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4️⃣ Run the Development Server

```sh
npm run dev
```

App will be live at **`http://localhost:3000`**.

---

## 🚀 Deployment

This project is deployed on **Vercel**.

🔗 **Live Demo:** [Promptopi](https://promptopia-rku8ogknq-prasad-belsares-projects.vercel.app/)[a ](https://promptopia-rku8ogknq-prasad-belsares-projects.vercel.app/)

### Deploy to Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:
   ```sh
   vercel login
   ```
3. Deploy:
   ```sh
   vercel
   ```

---

## 💡 Usage

1. **Sign in** using Google authentication.
2. **Create a new prompt** with a relevant tag.
3. **Search for prompts** using the search bar.
4. **Click a tag** to filter prompts by category.
5. **Edit or delete your own prompts** via your profile.

---

## 👨‍💻 Contributors

- [Prasad Belsare](https://github.com/prasadbelsare)

---

## 📜 License

This project is open-source under the **MIT License**.

