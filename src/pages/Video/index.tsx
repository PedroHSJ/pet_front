import { useState } from "react";
import { useParams } from "react-router";
import { useLifecycles } from "react-use";
import { Container } from "./styles";

const Video = () => {
  //getting id from route
  const { id } = useParams();
  const [meetRoomName, setMeetRoomName] = useState<string>("");

  const loadScript = (url: string, async?: boolean): Promise<void> => {
    let resolver: any = null;

    const onloadPromise = new Promise((resolve) => {
      resolver = resolve;
    });

    const script = document.createElement("script");
    script.src = url;
    if (async) {
      script.async = true;
    }
    script.onload = () => resolver();
    document.body.appendChild(script);

    return onloadPromise as Promise<void>;
  };

  const createMeet = (id: string | undefined) => {
    loadScript("https://meet.jit.si/external_api.js", true).then(() => {
      const options = {
        roomName: id,

        parentNode: document.getElementById("jitsi-root"),
        userInfo: {
          displayName: "teste",
        },
        width: 1024,
        height: 500,
        configOverwrite: {
          prejoinPageEnabled: false,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
          toolbarButtons: ["microphone", "camera", "chat", "hangup"],
        },
        interfaceConfigOverwrite: {
          // overwrite interface properties if you want
        },
      };

      const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", options);

      return _jitsi;
    });
  };

  function removeScript(url: string): void {
    const scripts = document.getElementsByTagName("script");
    for (let i = scripts.length; i--; ) {
      if (scripts[i].src === url) {
        document.body.removeChild(scripts[i]);
      }
    }
  }

  useLifecycles(
    () => createMeet(id),
    () => removeScript("https://meet.jit.si/external_api.js")
  );

  return <Container id="jitsi-root"></Container>;
};

export default Video;
