import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gr p-8">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Description</h1>
        <p className="text-gray-700 mb-4">
          The <b className="text-green-600">EarthLens</b> project is designed to educate students of all ages—from primary school to university—about the urgent issue of climate change, with a focus on greenhouse gases (GHGs) and their harmful effects on the environment.
        </p>
        <p className="text-gray-700">
          By offering age-appropriate resources, activities, and learning tools, this project empowers students to become informed advocates for sustainability and climate action.
        </p>
      </div>

      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Mission</h1>
        <p className="text-gray-700 mb-4">
          Our mission is to inspire and educate students from all educational levels by providing engaging and accessible content on climate change and GHG emissions. We aim to:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <b>Educate:</b> Offer students at every level clear, interactive, and age-appropriate information about the causes, impacts, and solutions related to climate change.
          </li>
          <li>
            <b>Empower:</b> Give students the knowledge and confidence to take action in their schools, homes, and communities to make positive environmental changes.
          </li>
          <li>
            <b>Inspire:</b> Encourage students to think critically and creatively about how they can contribute to a more sustainable future, both individually and collectively.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
