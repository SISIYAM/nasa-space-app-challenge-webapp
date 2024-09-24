"use client";
import React, { useRef, useState } from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { FaPhoneAlt, FaVideo, FaPaperPlane } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from "@nextui-org/react";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
}

// predefined questions and answers
const qaMapping: Record<string, string> = {
  "What is Agri Bot?":
    "Agri Bot is a tool that helps farmers leverage NASA's satellite data for sustainable agriculture.",
  "How can I use Agri Bot?":
    "You can use Agri Bot to get insights on crop management, irrigation, and soil health.",
  "What data does Agri Bot use?":
    "Agri Bot uses Earth observation data from NASA satellites.",
  "Tell me about Siyam":
    "This website was developed by Md Saymum Islam Siyam, who is a full-stack developer and the founder and CEO at SEI Innovations.",
};

// Function to find the best matching response based on keywords
const findBestResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  const matchingKeys = Object.keys(qaMapping).filter((key) =>
    lowerInput.includes(key.toLowerCase())
  );

  if (matchingKeys.length > 0) {
    return qaMapping[matchingKeys[0]];
  }

  // fallback response
  return "I'm not sure about that. Can you ask something else related to Agri Bot?";
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "Bot: Welcome! How can I assist you today? 🌱" },
  ]);
  const textRef = useRef<HTMLTextAreaElement | null>(null); // Typing the ref

  // handle textarea's height according to input
  const handleInput = () => {
    const textarea = textRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // handle text area value
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // handle button click
  const handleClick = () => {
    if (message.trim() === "") return;

    // add user message to chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: `You: ${message}` },
    ]);

    // get response based on user input
    const response = findBestResponse(message.trim());

    // respond with the found answer
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: `Bot: ${response}` },
    ]);

    setMessage("");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Welcome to&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Agri Bot&nbsp;</h1>
        <br />
        <h1 className={title()}>
          Empowering farmers with NASA's satellite data.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Leverage Earth observation data for sustainable agriculture.
        </h2>
      </div>

      <div className="flex gap-3">
        <button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          onClick={() => setIsOpen(!isOpen)}
        >
          Get Started
        </button>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {isOpen && (
        <Card className="max-w-[400px] fixed bottom-16 right-4 shadow-lg border border-purple-600">
          <CardHeader className="flex gap-3 justify-between items-center">
            <div className="flex gap-3 items-center">
              <Image
                alt="Agri Bot logo"
                height={40}
                radius="sm"
                src="https://example.com/your-logo.png" // Replace with your logo URL
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Agri Bot</p>
                <p className="text-small text-default-500">
                  Empowering Farmers
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                isIconOnly
                color="primary"
                aria-label="Start an audio call"
              >
                <FaPhoneAlt />
              </Button>
              <Button
                isIconOnly
                color="primary"
                aria-label="Start a video call"
              >
                <FaVideo />
              </Button>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-auto max-h-80 z-50">
            <div className="flex flex-col gap-3">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-black text-white self-start"
                      : "bg-blue-500 text-white self-end"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-2">
            <textarea
              className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none resize-none max-h-32 overflow-hidden"
              rows={1}
              placeholder="Type a message..."
              ref={textRef}
              value={message}
              onChange={handleChange}
              onInput={handleInput}
            />
            <Button
              isIconOnly
              color="primary"
              aria-label="Send message"
              onClick={handleClick}
            >
              <FaPaperPlane />
            </Button>
          </CardFooter>
        </Card>
      )}
    </section>
  );
}
