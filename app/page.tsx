"use client";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {
  FaPhoneAlt,
  FaVideo,
  FaPaperPlane,
  FaMicrophone,
} from "react-icons/fa";
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
  text?: string;
  imageUrl?: string;
  audioUrl?: string;
}

// define image paths in a variable
const imagePaths = {
  image1: "/1.png",
  image2: "/2.png",
  image3: "/3.png",
  image4: "/4.png",
};

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
  "give image 1": "image1",
  "give image 2": "image2",
  "give image 3": "image3",
  "give image 4": "image4",
  "তোমাকে কে বানিয়েছে?":
    "আমাকে OpenAI বানিয়েছে। OpenAI একটি গবেষণা প্রতিষ্ঠান, যারা কৃত্রিম বুদ্ধিমত্তা (AI) তৈরি ও উন্নয়নের জন্য কাজ করে। আমি একটি ভাষা মডেল, যার মাধ্যমে আমি বিভিন্ন প্রশ্নের উত্তর দিতে এবং নানা ধরনের কাজ সম্পাদন করতে পারি।",
};

// function to find the best matching response based on keywords
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
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

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

  // handle button click to send text message
  const handleClick = () => {
    if (message.trim() === "") return;

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: `You: ${message}` },
    ]);

    const response = findBestResponse(message.trim());

    if (response.startsWith("image")) {
      const imageUrl = imagePaths[response as keyof typeof imagePaths] || "";
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", imageUrl },
      ]);
    } else {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: `Bot: ${response}` },
      ]);
    }

    setMessage("");
  };

  // handle audio recording start and stop
  const handleRecordAudio = async () => {
    if (!isRecording) {
      try {
        setAudioChunks([]);

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder = new MediaRecorder(stream);

        // collect data as it's available
        recorder.ondataavailable = (event) => {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        };

        // when recording stops, process the recorded data
        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);

          // append user audio message to chat
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", audioUrl },
          ]);

          // bot response after receiving the audio
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: "Bot: Received your audio!" },
          ]);
        };

        // start recording and update states
        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      } catch (err) {
        console.error("Error accessing microphone", err);
      }
    } else {
      // stop the recorder when recording is in progress
      if (mediaRecorder) {
        mediaRecorder.stop();
        setIsRecording(false);
      }
    }
  };

  // scroll to the bottom when chatMessages update
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Weather state
  const [weatherData, setWeatherData] = useState<any>(null);

  // Fetch weather data from the Weather API
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=51012aca93084f2b8c0220303243009&q=lalmonirhat&aqi=yes"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };
    fetchWeather();
  }, []);

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
                src="../public/next.svg"
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
                  {msg.text && <p>{msg.text}</p>}
                  {msg.imageUrl && (
                    <img src={msg.imageUrl} alt="Chat response image" />
                  )}
                  {msg.audioUrl && (
                    <audio controls>
                      <source src={msg.audioUrl} type="audio/wav" />
                    </audio>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </CardBody>
          <Divider />
          <CardFooter className="pb-1">
            <div className="flex gap-2 w-full items-center">
              <textarea
                ref={textRef}
                className="flex-grow border border-default-300 rounded-md p-2 text-sm focus:outline-none"
                placeholder="Type your message"
                value={message}
                onChange={handleChange}
                onInput={handleInput}
                rows={1}
              />
              <Button
                isIconOnly
                variant="shadow"
                color="secondary"
                aria-label="Record voice message"
                onClick={handleRecordAudio}
              >
                <FaMicrophone className={isRecording ? "text-red-500" : ""} />
              </Button>
              <Button
                isIconOnly
                variant="shadow"
                color="primary"
                aria-label="Send message"
                onClick={handleClick}
              >
                <FaPaperPlane />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
      {/* Weather Data Section */}
      {weatherData && (
        <div
          className="mt-6 p-14 bg-blue-100 rounded-md text-black"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="text-lg font-semibold">
            Weather Data for {weatherData.location.name}:
          </h2>
          <p>
            <strong>Region:</strong> {weatherData.location.region || "N/A"}
          </p>
          <p>
            <strong>Country:</strong> {weatherData.location.country}
          </p>
          <p>
            <strong>Latitude:</strong> {weatherData.location.lat}
          </p>
          <p>
            <strong>Longitude:</strong> {weatherData.location.lon}
          </p>
          <p>
            <strong>Time Zone:</strong> {weatherData.location.tz_id}
          </p>
          <p>
            <strong>Local Time:</strong> {weatherData.location.localtime}
          </p>
          <p>
            <strong>Temperature:</strong> {weatherData.current.temp_c}°C
          </p>
          <p>
            <strong>Condition:</strong> {weatherData.current.condition.text}
          </p>
          <img
            src={weatherData.current.condition.icon}
            alt="Weather condition"
            className="mt-2"
          />
          <p>
            <strong>Wind Speed:</strong> {weatherData.current.wind_kph} km/h
          </p>
          <p>
            <strong>Pressure:</strong> {weatherData.current.pressure_mb} mb
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.current.humidity}%
          </p>
          <p>
            <strong>Visibility:</strong> {weatherData.current.vis_km} km
          </p>
          <p>
            <strong>Feels Like:</strong> {weatherData.current.feelslike_c}°C
          </p>
        </div>
      )}
    </section>
  );
}
