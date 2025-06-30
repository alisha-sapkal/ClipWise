import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import landingPage from "../assests/landingPage.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function LandingPage() {
  return (
    <div className="bg-blue-50 text-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-6xl font-bold">
            Summarize & Test Your Knowledge Instantly! 🚀
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 my-4">
            <button className="text-blue-700 bg-blue-50 border-2 border-blue-700 rounded-2xl px-4 py-2">
              Upload Video
            </button>
            <button className="text-white bg-blue-700 border-2 border-white rounded-2xl px-4 py-2">
              Get Started
            </button>
          </div>
          <div>
            <h1>Features</h1>
            <div className="flex flex-row items-center py-2 bg-gray-50 rounded-sm shadow-xs my-4">
              <span className="font-bold px-2">Video</span>
              <ChevronsRight className="text-gray-400"/>
              <span className="font-bold px-2">Summary</span>
              <ChevronsRight className="text-gray-400"/>
              <span className="font-bold px-2">Quiz</span>
            </div>
            <div className="text-md">
              <li>
                <span className="font-bold">Upload Any Video:</span> Easily
                import YouTube URLs or MP4 files.
              </li>
              <li>
                <span className="font-bold">Get Instant Summaries:</span> Our AI
                processes your video into key takeaways.
              </li>
              <li>
                <span className="font-bold">Master with Quizzes:</span>{" "}
                Automatically generated quizzes help you review and learn.
              </li>
            </div>
          </div>
        </div>
        <div>
          <Image src={landingPage} alt="" height="90%" width="50%" />
        </div>
      </div>
      <div className="bg-white rounded-2xl">
        <h1 className="font-bold text-2xl p-4">Tech Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10">
          <Card className="bg-blue-100 border-b-2 border-blue-300 shadow-blue hover:shadow-blue-500 transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Powered by AI</CardTitle>
              <CardDescription>Intelligent Automation</CardDescription>
            </CardHeader>
            <CardContent>
              Our advanced AI rapidly processes video content, pinpointing key information to generate accurate summaries and insightful quizzes.
            </CardContent>
          </Card>
          <Card className="bg-yellow-100 border-b-2 border-yellow-300 shadow-yellow hover:shadow-yellow-500 transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Boost Retention</CardTitle>
              <CardDescription>Enhanced Learning & Memory</CardDescription>
            </CardHeader>
            <CardContent>
              Active recall through AI-generated quizzes strengthens your understanding, helping you retain more information for longer.
            </CardContent>
          </Card>
       <Card className="bg-red-100 border-b-2 border-red-300 shadow-red hover:shadow-red-500 transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Unmatched Efficiency</CardTitle>
              <CardDescription>Save Time, Learn More</CardDescription>
            </CardHeader>
            <CardContent>
              Convert hours of video into minutes of key insights and targeted practice, maximizing your study and revision time.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
