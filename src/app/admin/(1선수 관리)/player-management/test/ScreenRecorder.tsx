"use client";
import { useState } from "react";

type MediaOption = {
  label: string;
  action: () => void;
};

export default function ScreenRecorder() {
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const handleMediaClick = () => {
    const mediaOptions: MediaOption[] = [
      { label: "Select from File", action: handleFileSelection },
      { label: "Screen Record", action: handleScreenRecord },
    ];

    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.backgroundColor = "#fff";
    container.style.padding = "20px";
    container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

    mediaOptions.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.label;
      button.style.display = "block";
      button.style.marginBottom = "10px";
      button.style.padding = "10px 20px";
      button.style.border = "none";
      button.style.backgroundColor = "#007bff";
      button.style.color = "#fff";
      button.style.cursor = "pointer";
      button.onclick = () => {
        option.action();
        container.remove();
      };
      container.appendChild(button);
    });

    document.body.appendChild(container);
  };

  const handleFileSelection = () => {
    console.log("File selection triggered");
    // You can open a file picker here
  };

  const handleScreenRecord = async () => {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      setMediaStream(stream);
      startRecording(stream);
    } catch (error) {
      console.error("Error accessing screen recording:", error);
    }
  };

  const startRecording = (stream: MediaStream) => {
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (event: MediaRecorderDataAvailableEvent) => {
      if (event.data.size > 0) {
        setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
      }
    };

    recorder.onstop = () => {
      setRecording(false);
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      console.log("Recording stopped. Video URL:", url);
      // You can display the video or save it here
    };

    recorder.start();
    setRecording(true);

    return () => {
      recorder.stop();
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  };

  return (
    <div>
      <button
        onClick={handleMediaClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Media
      </button>
      {recording && <p>Recording in progress...</p>}
    </div>
  );
}
