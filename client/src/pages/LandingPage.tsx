import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import landingPage from "../assests/landingPage.png";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";

const AnimatedHeading = dynamic(() => import("../components/AnimatedHeading"));

function LandingPage() {
  return (
    <div className="bg-blue-50 text-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-start justify-center">
          <AnimatedHeading className="text-6xl font-bold">
            Summarize & Test Your Knowledge Instantly! 🚀
          </AnimatedHeading>
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
          <Image src={landingPage} alt="" height={600} width={500} />
        </div>
      </div>
      <div className="bg-white rounded-2xl">
        <AnimatedHeading className="font-bold text-2xl pt-8 border-b-2 border-blue-800 w-fit mx-auto text-center">
          Tech Showcase
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10">
          <Card className="bg-blue-100 border-b-4 border-blue-300 shadow-blue hover:shadow-xl hover:shadow-blue-200 transition-shadow duration-300">
            <CardHeader>
              <AnimatedHeading className="text-3xl text-blue-700 font-semibold">Powered by AI</AnimatedHeading>
              <CardDescription>Intelligent Automation</CardDescription>
            </CardHeader>
            <CardContent>
              Our advanced AI rapidly processes video content, pinpointing key information to generate accurate summaries and insightful quizzes.
            </CardContent>
          </Card>
          <Card className="bg-yellow-100 border-b-4 border-yellow-300 shadow-yellow hover:shadow-xl hover:shadow-yellow-200 transition-shadow duration-300">
            <CardHeader>
              <AnimatedHeading className="text-3xl text-yellow-700 font-semibold">Boost Retention</AnimatedHeading>
              <CardDescription>Enhanced Learning & Memory</CardDescription>
            </CardHeader>
            <CardContent>
              Active recall through AI-generated quizzes strengthens your understanding, helping you retain more information for longer.
            </CardContent>
          </Card>
       <Card className="bg-red-100 border-b-4 border-red-300 shadow-red hover:shadow-xl hover:shadow-red-200 transition-shadow duration-300">
            <CardHeader>
              <AnimatedHeading className="text-3xl text-red-700 font-semibold">Unmatched Efficiency</AnimatedHeading>
              <CardDescription>Save Time, Learn More</CardDescription>
            </CardHeader>
            <CardContent>
              Convert hours of video into minutes of key insights and targeted practice, maximizing your study and revision time.
            </CardContent>
          </Card>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-white rounded-2xl my-10">
        <AnimatedHeading className="font-bold text-2xl pt-8 border-b-2 border-blue-800 w-fit mx-auto text-center">
          Frequently Asked Questions
        </AnimatedHeading>
        <Timeline
          data={[
            {
              title: "What types of videos can I upload?",
              content: (
                <span>You can upload MP4 video files directly or paste the URL of YouTube videos.</span>
              ),
            },
            {
              title: "How accurate are the video summaries?",
              content: (
                <span>Our AI models are trained to identify key information, but accuracy can vary depending on the video's clarity and complexity. We aim to provide the most comprehensive summary possible.</span>
              ),
            },
            {
              title: "Are the quizzes automatically generated?",
              content: (
                <span>Yes, our quizzes are generated automatically based on the video summary, saving you time and effort.</span>
              ),
            },
            {
              title: "Can I save my summaries and quiz results?",
              content: (
                <span>Absolutely! You can save your generated summaries and quiz results within your account for future access.</span>
              ),
            },
            {
              title: "Is there a limit to the size or length of the videos I can upload?",
              content: (
                <span>For direct uploads, there might be a size limit. However, for YouTube URLs, the length limitations are generally those of YouTube itself.</span>
              ),
            },
            {
              title: "What if I'm not satisfied with a summary or quiz?",
              content: (
                <span>Currently, the summaries and quizzes are automatically generated. We appreciate feedback, which helps us improve our models over time.</span>
              ),
            },
            {
              title: "Is my data secure?",
              content: (
                <span>Yes, we take data security seriously. Your uploaded videos and generated content are stored securely.</span>
              ),
            },
            {
              title: "Do you offer different summarization models?",
              content: (
                <span>Yes, you can select between options like "Transcript Only" or "Smart Summary + Quiz" before processing your video.</span>
              ),
            },
            {
              title: "Is there a free trial available?",
              content: (
                <span>[You can decide whether to include this based on your business model. If yes, add details.]</span>
              ),
            },
            {
              title: "How do I get started?",
              content: (
                <span>Simply click on the "Upload Video" or "Get Started" button on the landing page to create an account and begin!</span>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default LandingPage;
