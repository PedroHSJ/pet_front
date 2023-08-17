// import { useCallback, useEffect, useState } from 'react';
// import {
// 	connect,
// 	Participant as ParticipantProps,
// 	Room as RoomVideoProps,
// 	LocalParticipant as LocalParticipantType,
// 	Participant as ParticipantType,
// 	LocalVideoTrack,
// 	RemoteVideoTrack,
// 	LocalAudioTrack,
// 	RemoteAudioTrack,
// } from 'twilio-video';
// import TwilioApi from '../services/api/TwilioApi';

// const useVideo = () => {
// 	const [roomVideo, setRoomVideo] = useState<RoomVideoProps | null>(null);
// 	const [videoParticipants, setVideoParticipants] = useState<
// 		ParticipantProps[]
// 	>([]);
// 	const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
// 	const [cameraEnabled, setCameraEnabled] = useState(true);
// 	const [participant, setParticipant] = useState<
// 		LocalParticipantType | ParticipantType
// 	>();

// 	const [type, setType] = useState<'local' | 'remote'>('local');
// 	const [participantEntering, setParticipantEntering] = useState(false);
// 	const [videoTracks, setVideoTracks] = useState<
// 		(LocalVideoTrack | RemoteVideoTrack | null)[]
// 	>([]);
// 	const [audioTracks, setAudioTracks] = useState<
// 		(LocalAudioTrack | RemoteAudioTrack | null)[]
// 	>([]);

// 	const settingVideoAndAudioTracks = useCallback(
// 		(participant: LocalParticipantType | ParticipantType) => {
// 			const videoTrackMap = Array.from(participant.videoTracks.values())
// 				.map(publication => publication.track)
// 				.filter(track => !!track);
// 			const audioTrackMap = Array.from(participant.audioTracks.values())
// 				.map(publication => publication.track)
// 				.filter(track => !!track);
// 			setVideoTracks(videoTrackMap);

// 			setAudioTracks(audioTrackMap);
// 		},
// 		[],
// 	);

// 	useEffect(() => {
// 		participant?.on('trackSubscribed', track => {
// 			if (track.kind === 'video') {
// 				setVideoTracks(prevState => [...prevState, track]);
// 			} else if (track.kind === 'audio') {
// 				setAudioTracks(prevState => [...prevState, track]);
// 			}
// 		});

// 		participant?.on('trackUnsubscribed', track => {
// 			if (track.kind === 'video') {
// 				setVideoTracks(prevState => prevState.filter(v => v !== track));
// 			} else if (track.kind === 'audio') {
// 				setAudioTracks(prevState => prevState.filter(a => a !== track));
// 			}
// 		});

// 		return () => {
// 			setVideoTracks([]);
// 			setAudioTracks([]);
// 			//participant.removeAllListeners();
// 		};
// 	}, [participant]);

// 	useEffect(() => {
// 		const videoTrack = videoTracks[0];
// 		const localMedia = document.getElementById('remoteVideo');

// 		if (
// 			videoTrack &&
// 			videoTrack.isEnabled &&
// 			!participantEntering &&
// 			localMedia
// 		) {
// 			localMedia.innerHTML = '';
// 			localMedia.appendChild(videoTrack.attach());
// 		}

// 		return () => {
// 			videoTrack?.detach();
// 		};
// 	}, [videoTracks, type, participantEntering]);

// 	useEffect(() => {
// 		const audioTrack = audioTracks[0];
// 		const localMedia = document.getElementById('remoteAudio');

// 		if (audioTrack && audioTrack.isEnabled && localMedia) {
// 			localMedia.appendChild(audioTrack.attach());
// 		}

// 		return () => {
// 			audioTrack?.detach();
// 		};
// 	}, [audioTracks, type]);

// 	const settingTrackOnDOM = useCallback(
// 		(track: LocalVideoTrack | RemoteVideoTrack, elementId: string) => {
// 			const element = document.getElementById(elementId);
// 			if (element) {
// 				element.innerHTML = '';
// 				element.appendChild(track.attach());
// 			}
// 		},
// 		[],
// 	);

// 	const cleanDOM = useCallback(
// 		(track: LocalVideoTrack | RemoteVideoTrack, elementId: string) => {
// 			const element = document.getElementById(elementId);
// 			if (element) {
// 				element.innerHTML = '';
// 			}
// 		},
// 		[],
// 	);

// 	const settingLocalTrackOnDOM = useCallback(
// 		(track: LocalVideoTrack | RemoteVideoTrack, elementId: string) => {
// 			const element = document.getElementById(elementId);
// 			if (element) {
// 				element.innerHTML = '';
// 				element.appendChild(track.attach());
// 			}
// 		},
// 		[],
// 	);

// 	const handleConnectCall = useCallback(async (appoinmentId: string) => {
// 		if (!appoinmentId) return;
// 		const data = await TwilioApi.getTeleConsultaById(appoinmentId);
// 		const { token, videoRoom } = data;

// 		connect(token, {
// 			name: videoRoom.unique_name,
// 		})
// 			.then(room => {
// 				setRoomVideo(room);
// 				const localParticipant = room.localParticipant;

// 				settingLocalTrackOnDOM(
// 					localParticipant.videoTracks.values().next().value.track,
// 					'localVideo',
// 				);
// 				settingLocalTrackOnDOM(
// 					localParticipant.audioTracks.values().next().value.track,
// 					'localAudio',
// 				);

// 				room.on('participantConnected', participant => {
// 					participantConnected(participant);
// 					setParticipant(participant);
// 				});
// 				room.on('participantDisconnected', participant => {
// 					setVideoParticipants(state =>
// 						state.filter(p => p !== participant),
// 					);
// 					participantDisconnected(participant);
// 					handleDisconnectCall();
// 				});
// 				participantConnected(room.localParticipant);
// 				room.participants.forEach(participant => {
// 					participantConnected(participant);
// 					setParticipant(participant);
// 				});
// 			})
// 			.catch(error => {
// 				console.error(error);
// 				console.error('Não foi possível se conectar à chamada');
// 			});
// 	}, []);

// 	const handleDisconnectCall = useCallback(() => {
// 		if (roomVideo && roomVideo.localParticipant.state === 'connected') {
// 			roomVideo.localParticipant.tracks.forEach(trackPublication => {
// 				trackPublication.track;
// 			});
// 			roomVideo.disconnect();
// 		}
// 	}, [roomVideo]);

// 	const handleToggleMicrophone = useCallback(() => {
// 		if (roomVideo) {
// 			roomVideo.localParticipant.audioTracks.forEach(publication => {
// 				if (microphoneEnabled) {
// 					publication.track.disable();
// 				} else {
// 					publication.track.enable();
// 				}

// 				setMicrophoneEnabled(state => !state);
// 			});
// 		}
// 	}, [roomVideo, microphoneEnabled]);

// 	const handleToggleCamera = useCallback(() => {
// 		if (roomVideo) {
// 			roomVideo.localParticipant.videoTracks.forEach(publication => {
// 				if (cameraEnabled) {
// 					publication.track.disable();
// 				} else {
// 					publication.track.enable();
// 				}

// 				setCameraEnabled(state => !state);
// 			});
// 		}
// 	}, [roomVideo, cameraEnabled]);

// 	const participantConnected = (participant: ParticipantProps) => {
// 		setVideoParticipants(prevParticipants => [
// 			...prevParticipants,
// 			participant,
// 		]);
// 	};
// 	const participantDisconnected = (participant: ParticipantProps) => {
// 		setVideoParticipants(prevParticipants =>
// 			prevParticipants.filter(p => p !== participant),
// 		);
// 		cleanDOM(
// 			participant.videoTracks.values().next().value.track,
// 			'remoteVideo',
// 		);
// 		cleanDOM(
// 			participant.audioTracks.values().next().value.track,
// 			'remoteAudio',
// 		);
// 	};

// 	return {
// 		handleConnectCall,
// 		handleDisconnectCall,
// 		handleToggleCamera,
// 		handleToggleMicrophone,
// 		videoParticipants,
// 		microphoneEnabled,
// 		cameraEnabled,
// 		participant,
// 	};
// };

// export default useVideo;
