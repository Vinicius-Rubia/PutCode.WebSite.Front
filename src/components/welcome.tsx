import { Play, Sparkles } from "lucide-react";
import React from "react";
import Chatbot from "../assets/images/chatbot.png";
import Dashboard from "../assets/images/dashboard.png";
import { Button } from "./ui/button";

export const Welcome: React.FC = () => {
  return (
    <div className="sm:px-6">
      <div className="text-center space-y-4 pt-20 pb-44 md:pb-72 rounded-[50px] px-6 bg-gradient-to-t from-[#a777f5] from-10% via-[#7e27cf] via-20% to-[#010314] to-60%">
        <h4 className="flex items-center gap-2 text-nowrap justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#a777f5] to-[#7e27cf] font-medium tracking-[5px] uppercase text-xs md:text-base">
          <Sparkles className="text-[#7e27cf]" />
          Bem vindo à PutCode
        </h4>
        <h1 className="font-bold text-2xl w-7/12 mx-auto md:text-5xl text-transparent md:leading-[1.1] bg-clip-text bg-gradient-to-r from-white to-slate-500">
          Instantly build an AI chatbot with your knowledge base
        </h1>
        <p className="text-sm max-w-[800px] mx-auto text-[#77798F] font-medium">
          Share your site link or upload any PDF file to create a ChatGPT
          powered custom chatbot in 5 minutes
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 md:pb-32">
          <Button className="rounded-[40px] bg-zinc-950 border border-[#4467FF] h-12 text-white px-10">Get started for free</Button>
          <Button className="rounded-[40px] bg-zinc-950 h-12 text-white gap-2 px-10">
            <Play className="h-4 w-4" />
            Watch Video
          </Button>
        </div>
      </div>

      <div className="-mt-28 md:-mt-72 mb-[180px]">
        <img src={Dashboard} alt="Dasboard" />

        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1050px] md:mx-auto rounded-[30px] border-y border-[#515CFF] p-7 mx-5 md:px-[70px] md:py-[50px]">
          <div className="space-y-4">
            <h2 className="text-[20px] md:text-[30px] font-bold">
              Self-Serve Customer Support
            </h2>
            <p className="text-sm text-[#77798F]">
              Ever since implementing Wonderchat on our site, I've seen up to a
              70% reduction of customer support queries in my inbox.”
            </p>

            <div className="flex items-center gap-4">
              <span className="w-16 h-16 hidden md:block bg-[#77798F] rounded-full" />
              <div>
                <h5>Bryce Conway</h5>
                <p className="text-[#77798F]">Founder and CEO of 10xTravel</p>
              </div>
            </div>
          </div>
          <img src={Chatbot} alt="Chatbot" className="w-[240px]" />
        </div>
      </div>

      <div className="text-center mb-[180px] max-w-[1050px] mx-auto">
        <h3 className="font-bold text-[30px] mb-[50px] px-3">
          Trusted by 100+ businesses
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 uppercase border-b border-l border-[#2A2B3A]">
          <span className="border-t border-r border-[#2A2B3A] p-7">Square</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">Manna</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">Visa</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">
            Sttitch
          </span>
          <span className="border-t border-r border-[#2A2B3A] p-7">OpenAI</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">Meili</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">Brass</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">Ultra</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">
            Identity
          </span>
          <span className="border-t border-r border-[#2A2B3A] p-7">Unbanx</span>
          <span className="border-t border-r border-[#2A2B3A] p-7">
            Slipstream
          </span>
          <span className="border-t border-r border-[#2A2B3A] p-7">HitPay</span>
        </div>
      </div>

      <div className="text-center mb-[180px] max-w-[1050px] mx-auto">
        <h3 className="font-bold text-[30px] mb-5">5 minute set-up process</h3>
        <p className="sm:text-[20px] text-[#77798F] w-3/4 mx-auto">
          Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7 to
          help you engage and retain more users and boost conversions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 pb-20 px-3 mt-10">
          <Button className="rounded-[40px] bg-zinc-950 border border-[#4467FF] h-12 text-white px-10">Get started for free</Button>
          <Button className="rounded-[40px] bg-zinc-950 h-12 text-white gap-2 px-10">
            <Play className="h-4 w-4" />
            Watch Video
          </Button>
        </div>

        <div className="flex flex-col text-start md:flex-row mb-10 justify-between items-center max-w-[1050px] md:mx-auto rounded-[30px] border-y border-[#515CFF] p-7 mx-5 md:px-[70px] md:py-[50px]">
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#a777f5] to-[#7e27cf] font-medium tracking-[5px] uppercase text-xs md:text-base">
              <Sparkles className="text-[#7e27cf]" />
                How It Works
            </h4>
            <h2 className="text-[20px] md:text-[30px] font-bold">
              Share a link or PDF file
            </h2>
            <p className="text-sm text-[#77798F]">
              By providing the link or PDF file to your knowledge base, you can build an AI chatbot that learns from the text on your website and answers all the questions about your product.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col text-start md:flex-row justify-between items-center max-w-[1050px] md:mx-auto rounded-[30px] border border-[#515CFF] p-7 mx-5 md:px-[70px] md:py-[50px]">
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#a777f5] to-[#7e27cf] font-medium tracking-[5px] uppercase text-xs md:text-base">
                <Sparkles className="text-[#7e27cf]" />
                  How It Works
              </h4>
              <h2 className="text-[20px] md:text-[30px] font-bold">
                Customize Your Chatbot
              </h2>
              <p className="text-sm text-[#77798F]">
                Set the role of your chatbot and profile photo of your chatbot to reflect your brand identity. Tailor its response length to what you like best.
              </p>
            </div>
          </div>

          <div className="flex flex-col text-start md:flex-row justify-between items-center max-w-[1050px] md:mx-auto rounded-[30px] border border-[#515CFF] p-7 mx-5 md:px-[70px] md:py-[50px]">
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#a777f5] to-[#7e27cf] font-medium tracking-[5px] uppercase text-xs md:text-base">
                <Sparkles className="text-[#7e27cf]" />
                  How It Works
              </h4>
              <h2 className="text-[20px] md:text-[30px] font-bold">
                Ready in 5 Minutes
              </h2>
              <p className="text-sm text-[#77798F]">
                Wait for less than 5 minutes to have the Chatbot learn all the information from the webpages of your website. Once done, you can instantly converse with it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
