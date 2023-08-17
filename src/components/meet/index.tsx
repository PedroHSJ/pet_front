import React, { FunctionComponent, useEffect, useState } from 'react';
import { useLifecycles } from 'react-use';

export function loadScript(url: string, async?: boolean): Promise<void> {
    let resolver: any = null;

    const onloadPromise = new Promise((resolve) => {
        resolver = resolve;
    });

    const script = document.createElement('script');
    script.src = url;
    if (async) {
        script.async = true;
    }
    script.onload = () => resolver();
    document.body.appendChild(script);

    return onloadPromise as Promise<void>;
}

function removeScript(url: string): void {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length; i--; ) {
        if (scripts[i].src === url) {
            document.body.removeChild(scripts[i]);
        }
    }
}

interface Jitsi {
    new (domain: string, options: Record<string, any>): JitsiInstance;
}

interface JitsiInstance {
    dispose: () => void;
    executeCommand: (command: string, args?: any) => void;
    on: (event: string, cb: Function) => void;
    addListener: (event: string, cb: Function) => void;
    getIframe: () => HTMLIFrameElement;
}

interface JitsiProps {
    roomName: string;
    displayName: string;
    onEnd: () => void;
}

declare global {
    interface Window {
        JitsiMeetExternalAPI: Jitsi;
    }
}

export const JitsiMeet: FunctionComponent<JitsiProps> = ({
    roomName,
    displayName,
    onEnd,
}) => {
    const [jitsi, setJitsi] = useState<JitsiInstance | null>(null);

    const load = () => {
        return loadScript('https://meet.jit.si/external_api.js', true);
    };

    const createMeet = () => {
        const options = {
            roomName,

            parentNode: document.getElementById('jitsi-root'),
            userInfo: {
                displayName,
            },
            width: '100%',
            height: 500,
            configOverwrite: { prejoinPageEnabled: false },
            interfaceConfigOverwrite: {
                // overwrite interface properties if you want
            },
        };

        const _jitsi = new window.JitsiMeetExternalAPI('meet.jit.si', options);

        return _jitsi;
    };

    const initialize = async () => {
        await load();
    };

    const destroy = () => {
        jitsi?.dispose();
    };

    //   useLifecycles(
    //     () => initialize(),
    //     () => destroy()
    //   );

    useEffect(() => {
        (async () => {
            await initialize();
            setJitsi(createMeet());
        })();

        return () => {
            removeScript('https://meet.jit.si/external_api.js');
        };
    }, []);

    return <div id="jitsi-root" style={{ height: 720, width: '100%' }} />;
};
