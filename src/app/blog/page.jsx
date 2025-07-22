"use client";
import React, { useState } from "react";

// Sample blog post data (multiple posts for the home page)
const blogPosts = [
  {
    id: "1",
    title: "Understanding Hypertension: A Silent Killer",
    date: "July 15, 2025",
    author: "Dr. Emily White",
    excerpt:
      "Hypertension, or high blood pressure, often shows no symptoms but can lead to serious health problems. Learn about its causes, risks, and management strategies.",
    content: `
      <p class="mb-4">Hypertension, commonly known as high blood pressure, is a widespread condition that often goes unnoticed because it rarely presents with symptoms. Despite its silent nature, it poses a significant risk for severe health complications, including heart attack, stroke, and kidney disease.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">What is Hypertension?</h3>
      <p class="mb-4">Blood pressure is the force of your blood pushing against the walls of your arteries as your heart pumps blood. Hypertension is diagnosed when this pressure is consistently too high. It's measured in millimeters of mercury (mmHg) and recorded as two numbers: systolic (the pressure when your heart beats) and diastolic (the pressure when your heart rests between beats).</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Causes and Risk Factors</h3>
      <p class="mb-4">While the exact cause of essential (primary) hypertension is often unknown, several factors can increase your risk:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Age:</strong> The risk of high blood pressure increases as you age.</li>
        <li><strong>Family History:</strong> If your parents or close relatives have high blood pressure, you're more likely to develop it.</li>
        <li><strong>Obesity:</strong> Being overweight or obese significantly increases your risk.</li>
        <li><strong>Lack of Physical Activity:</strong> Inactivity contributes to weight gain and higher blood pressure.</li>
        <li><strong>High-Sodium Diet:</strong> Too much sodium (salt) can cause your body to retain fluid, increasing blood pressure.</li>
        <li><strong>Excessive Alcohol Consumption:</strong> Heavy drinking can raise blood pressure.</li>
        <li><strong>Stress:</strong> High levels of stress can temporarily increase blood pressure.</li>
        <li><strong>Chronic Conditions:</strong> Certain conditions like kidney disease, sleep apnea, and thyroid problems can lead to secondary hypertension.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Management and Prevention</h3>
      <p class="mb-4">Managing hypertension often involves a combination of lifestyle changes and, if necessary, medication:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Healthy Diet:</strong> Adopt a DASH (Dietary Approaches to Stop Hypertension) diet, rich in fruits, vegetables, whole grains, and lean proteins, and low in saturated fats, cholesterol, and sodium.</li>
        <li><strong>Regular Exercise:</strong> Aim for at least 150 minutes of moderate-intensity aerobic activity per week.</li>
        <li><strong>Maintain a Healthy Weight:</strong> Losing even a small amount of weight can make a big difference.</li>
        <li><strong>Limit Alcohol:</strong> If you drink alcohol, do so in moderation.</li>
        <li><strong>Quit Smoking:</strong> Smoking damages blood vessels and significantly increases heart disease risk.</li>
        <li><strong>Stress Management:</strong> Practice relaxation techniques like yoga, meditation, or deep breathing.</li>
        <li><strong>Medication:</strong> Your doctor may prescribe medications like diuretics, ACE inhibitors, ARBs, beta-blockers, or calcium channel blockers to help control blood pressure.</li>
      </ul>
      <p class="mb-4">Regular check-ups and monitoring are crucial for managing hypertension effectively. Early detection and consistent management can help prevent serious complications and improve your overall quality of life. Consult with your healthcare provider at Orlando Heart & Vascular to develop a personalized plan.</p>
    `,
  },
  {
    id: "2",
    title: "The Benefits of Regular Cardiovascular Exercise",
    date: "June 28, 2025",
    author: "Dr. Robert Chen",
    excerpt:
      "Discover how consistent cardiovascular exercise can significantly improve your heart health, boost energy, and enhance overall well-being.",
    content: `
      <p class="mb-4">Regular cardiovascular exercise is one of the most effective ways to maintain a healthy heart and improve overall well-being. Often referred to as aerobic exercise, it involves activities that increase your heart rate and breathing, strengthening your heart muscle and improving its efficiency.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Why is Cardiovascular Exercise Important?</h3>
      <p class="mb-4">Your heart is a muscle, and like any other muscle, it needs to be exercised to stay strong. Cardiovascular exercise helps your heart pump blood more efficiently throughout your body, delivering oxygen and nutrients to all your organs and tissues.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Key Benefits for Heart Health</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Strengthens the Heart:</strong> Regular aerobic activity makes your heart stronger and more efficient at pumping blood, reducing the effort it needs to work.</li>
        <li><strong>Lowers Blood Pressure:</strong> Exercise can help reduce both systolic and diastolic blood pressure, lowering the risk of hypertension.</li>
        <li><strong>Improves Cholesterol Levels:</strong> It can increase high-density lipoprotein (HDL) cholesterol (the "good" cholesterol) and lower low-density lipoprotein (LDL) cholesterol (the "bad" cholesterol).</li>
        <li><strong>Manages Blood Sugar:</strong> Exercise helps control blood sugar levels, which is crucial for preventing and managing type 2 diabetes, a major risk factor for heart disease.</li>
        <li><strong>Aids Weight Management:</strong> Regular physical activity burns calories and helps maintain a healthy weight, reducing strain on your heart.</li>
        <li><strong>Reduces Stress:</strong> Exercise is a great stress reliever, and chronic stress can contribute to heart problems.</li>
        <li><strong>Boosts Circulation:</strong> It improves blood flow and the elasticity of blood vessels.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Recommended Exercise</h3>
      <p class="mb-4">The American Heart Association recommends at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both. This can be broken down into shorter sessions throughout the week.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Examples of Cardiovascular Exercise</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li>Brisk walking</li>
        <li>Jogging or running</li>
        <li>Swimming</li>
        <li>Cycling</li>
        <li>Dancing</li>
        <li>Aerobics classes</li>
        <li>Hiking</li>
      </ul>
      <p class="mb-4">Before starting any new exercise program, especially if you have existing health conditions, it's always best to consult with your doctor. At Orlando Heart & Vascular, we can provide guidance on safe and effective exercise routines tailored to your needs.</p>
    `,
  },
  {
    id: "3",
    title: "Dietary Fats: Good, Bad, and Heart-Healthy Choices",
    date: "May 10, 2025",
    author: "Sarah Jenkins, RD",
    excerpt:
      "Navigating the world of dietary fats can be confusing. Learn which fats are beneficial for your heart and which ones to limit for optimal cardiovascular health.",
    content: `
      <p class="mb-4">Dietary fats often get a bad rap, but they are essential for your body's health. The key is to understand the different types of fats and choose those that promote cardiovascular well-being while limiting those that can harm your heart.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">The "Bad" Fats: Saturated and Trans Fats</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Saturated Fats:</strong> Found primarily in animal products like red meat, poultry with skin, butter, cheese, and full-fat dairy. Also in some plant-based oils like coconut and palm oil. High intake can raise LDL ("bad") cholesterol levels, increasing your risk of heart disease.</li>
        <li><strong>Trans Fats:</strong> These are industrially produced fats created by adding hydrogen to liquid vegetable oils to make them more solid. Found in many processed foods, fried foods, and some baked goods. Trans fats significantly raise LDL cholesterol and lower HDL ("good") cholesterol, making them the worst type of fat for your heart. Many countries and regions have banned or restricted their use.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">The "Good" Fats: Monounsaturated and Polyunsaturated Fats</h3>
      <p class="mb-4">These fats are beneficial for your heart and overall health when consumed in moderation. They can help lower LDL cholesterol and provide essential fatty acids that your body needs.</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Monounsaturated Fats (MUFAs):</strong> Found in olive oil, avocado, nuts (almonds, cashews, pecans), and seeds (sesame, pumpkin). They can help reduce LDL cholesterol levels and may improve insulin sensitivity.</li>
        <li><strong>Polyunsaturated Fats (PUFAs):</strong>
          <ul class="list-circle list-inside ml-6 space-y-1">
            <li><strong>Omega-3 Fatty Acids:</strong> Crucial for heart health, reducing inflammation, and supporting brain function. Found in fatty fish (salmon, mackerel, tuna), flaxseeds, chia seeds, walnuts, and some fortified foods.</li>
            <li><strong>Omega-6 Fatty Acids:</strong> Also essential, but should be consumed in balance with omega-3s. Found in vegetable oils (soybean, corn, sunflower), nuts, and seeds.</li>
          </ul>
        </li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Heart-Healthy Choices</h3>
      <p class="mb-4">To promote heart health, focus on incorporating "good" fats into your diet while limiting "bad" fats:</p>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li>Use olive oil or canola oil for cooking.</li>
        <li>Include fatty fish like salmon or mackerel a couple of times a week.</li>
        <li>Snack on a handful of nuts or seeds.</li>
        <li>Add avocado to salads or sandwiches.</li>
        <li>Choose lean protein sources and low-fat dairy.</li>
        <li>Read food labels carefully to avoid trans fats.</li>
      </ul>
      <p class="mb-4">Making informed choices about dietary fats is a significant step towards maintaining a healthy heart. For personalized dietary advice, consult with a registered dietitian or your healthcare provider at Orlando Heart & Vascular.</p>
    `,
  },
];

// Home Page Component
const HomePage = ({ blogPosts, navigateToPost }) => {
  return (
    <div>
      <section className="text-center mb-16 bg-white rounded-xl shadow-xl p-10">
        <h2 className="text-5xl font-extrabold text-[#00BFB3] mb-5 leading-tight">
          Welcome to Our Health Blog
        </h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Dedicated to providing valuable insights and information on
          cardiovascular health, prevention, and wellness. Stay informed and
          take charge of your heart health journey.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col"
            >
              <div className="p-7 flex-grow">
                <h3 className="text-2xl font-bold text-[#00BFB3] mb-3 leading-snug">
                  <button
                    onClick={() => navigateToPost(post.id)}
                    className="text-left hover:underline focus:outline-none focus:ring-2 focus:ring-[#00BFB3] focus:ring-offset-2 rounded-md"
                  >
                    {post.title}
                  </button>
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By <span className="font-medium">{post.author}</span> on{" "}
                  {post.date}
                </p>
                <p className="text-gray-700 mb-6 line-clamp-4">
                  {post.excerpt}
                </p>
              </div>
              <div className="p-7 pt-0">
                <button
                  onClick={() => navigateToPost(post.id)}
                  className="inline-flex items-center px-6 py-3 bg-[#00BFB3] text-white font-semibold rounded-lg hover:bg-[#00A090] focus:outline-none focus:ring-2 focus:ring-[#00BFB3] focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
                >
                  Read More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Blog Post Page Component
const BlogPostPage = ({ post, navigateHome }) => {
  if (!post) {
    return (
      <div className="text-center py-20 bg-white rounded-xl shadow-lg">
        <p className="text-2xl text-red-500 font-semibold mb-6">
          Oops! This blog post could not be found.
        </p>
        <button
          onClick={navigateHome}
          className="inline-flex items-center px-8 py-4 bg-[#00BFB3] text-white font-semibold rounded-lg hover:bg-[#00A090] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00BFB3] focus:ring-offset-2"
        >
          <svg
            className="mr-3 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to All Posts
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-10 max-w-5xl mx-auto">
      <button
        onClick={navigateHome}
        className="inline-flex items-center mb-8 px-5 py-2.5 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
      >
        <svg
          className="mr-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to All Posts
      </button>

      <h2 className="text-5xl font-extrabold text-[#00BFB3] mb-5 leading-tight">
        {post.title}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        By <span className="font-semibold">{post.author}</span> on {post.date}
      </p>

      <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      >
        {/* Blog post content will be rendered here */}
      </div>
    </div>
  );
};

// Main App component (re-introducing routing)
export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [selectedPostId, setSelectedPostId] = useState(null);

  const navigateToPost = (id) => {
    setSelectedPostId(id);
    setCurrentRoute("post");
  };

  const navigateHome = () => {
    setCurrentRoute("home");
    setSelectedPostId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-10">
        {currentRoute === "home" && (
          <HomePage blogPosts={blogPosts} navigateToPost={navigateToPost} />
        )}
        {currentRoute === "post" && selectedPostId && (
          <BlogPostPage
            post={blogPosts.find((post) => post.id === selectedPostId)}
            navigateHome={navigateHome}
          />
        )}
      </main>
    </div>
  );
}
