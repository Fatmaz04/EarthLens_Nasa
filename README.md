# 🌍 **EarthLens**

EarthLens is an educational platform designed to raise awareness about climate change, focusing on greenhouse gas (GHG) emissions and their impact on the environment. This project targets students of all educational levels, from primary school to university, offering engaging and interactive content, quizzes, games, and challenges to empower them to take action in combating climate change.
## 🎯 **Mission**
Our mission is to educate, empower, and inspire students of all ages to become advocates for sustainability and climate action. We aim to:
- **Educate**: Provide clear, interactive, and age-appropriate information about climate change, its causes, effects, and possible solutions.
- **Empower**: Equip students with the knowledge and confidence to take meaningful action in their schools, homes, and communities.
- **Inspire**: Encourage critical and creative thinking to foster a sustainable future.
  
---
## 🚀 **Features**

### **1. User Authentication**
- **Sign Up & Sign In**: Users can create an account and log in to access the platform's features.
![sign](https://github.com/user-attachments/assets/6ca7344e-e530-49b4-b908-89bbcf0a672e)

### **2. Home Page**
- **Introduction**: Overview of EarthLens's mission and vision, offering an introduction to climate change education.
![home](https://github.com/user-attachments/assets/fba8e814-d09c-41e5-9ca2-a57d7b9aab37)

### **3. Chapters and Quizzes**
- **Educational Chapters**: Each chapter focuses on a specific aspect of climate change, broken down into video lessons.
- **Quizzes**: After each chapter, users can take quizzes to test their knowledge and earn points. A minimum score is required to unlock the next chapter.
![chapter](https://github.com/user-attachments/assets/f9758f3a-adba-4a46-b84a-2c4ef8e4490a)

### **4. Leaderboard**
- **Track Progress**: Displays the top users based on quiz performance and points earned. Encourages competition and continued learning.
![leaders](https://github.com/user-attachments/assets/5b0aa91f-3b04-49b9-8fcb-c190062b48b1)

### **5. Daily Challenge**
- **Myth vs. Fact**: Users can participate in a daily challenge to earn bonus points by distinguishing between myths and facts related to climate change.

### **6. Analysis Page**
- **Data & Conclusions**: Presents the results of studies and analyses on the environment, including climate trends and impacts.
![analysis](https://github.com/user-attachments/assets/b53d53ba-cb61-4a6a-bce5-1b404f68b662)

### **7. CO2 and GHG Dashboards**
- **Emission Dashboards**: Interactive dashboards showcasing data on carbon dioxide (CO2), methane, and total greenhouse gas emissions.
![dashboards](https://github.com/user-attachments/assets/75edb753-431d-4551-b694-3e6c87b91695)

### **8. Educational Game**
- **For Younger Audiences**: A fun and engaging game designed to make learning about climate change enjoyable for younger students.
![game](https://github.com/user-attachments/assets/346010eb-e281-4867-a782-526a059a1d5e)

---
## 🛠 **Tech Stack**
### **Frontend**: 
- React.js
- Tailwind CSS
### **Backend**: 
- Node.js
### **Database**: 
- MongoDB

---
## 📦 **Installation & Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fatmaz04/EarthLens_Nasa.git
   cd EarthLens
   ```

2. **Install dependencies for the frontend**
   ```bash
   cd client
   npm install
   ```

3. **Install dependencies for the backend**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up the environment variables**  
   Create a `.env` file in the `server` directory and configure the following variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token authentication
   - Any other environment variables like PORT, etc.

5. **Run the application**

   - **Frontend**:
     ```bash
     cd client
     npm start
     ```
   - **Backend**:
     ```bash
     cd server
     cd src
     node index.js
     ```

6. **Access the app**  
   Navigate to `http://localhost:3000` in your browser for the frontend and `http://localhost:5000` for the backend API.

---
