// import TwilioApi from '../services/api/TwilioApi';
// import { useCallback, useEffect, useState } from 'react';
// import { Client, Conversation, Message } from '@twilio/conversations';
// import ScheduleApi from '../services/api/ScheduleApi';
// import { v4 as uuid } from 'uuid';
// import { isSameHour, isSameMinute } from 'date-fns';

// export type UsersType = {
// 	professional?: string;
// 	[key: string]: string | undefined;
// };

// export interface MessageSectionProps {
// 	id: string;
// 	userId: string;
// 	hour: Date;
// 	messages: {
// 		id: string;
// 		message: string;
// 	}[];
// }

// const useChat = () => {
// 	const [id, setId] = useState<string>(
// 		'b3ac02dd-d502-4c04-8676-7e00a24dc729',
// 	);

// 	const [chatToken, setChatToken] = useState<string>('');
// 	const [appoinmentId, setAppointId] = useState<string>('');
// 	const [users, setUsers] = useState<UsersType>();
// 	const [myConversation, setMyConversation] = useState<Conversation>();
// 	const [messages, setMessages] = useState<MessageSectionProps[]>([]);

// 	useEffect(() => {
// 		if (chatToken) {
// 			const client = new Client(chatToken);
// 			client.on('connectionStateChanged', async state => {
// 				if (state === 'connected') {
// 					await createOrJoinConversation(client);
// 				}
// 			});
// 			client.on('messageAdded', handleMessageAdded);
// 		}
// 	}, [chatToken]);

// 	useEffect(() => {
// 		if (appoinmentId) {
// 			(async () => {
// 				const response = await ScheduleApi.getById(appoinmentId);
// 				setUsers({
// 					professional: response.profissional?.nome,
// 					[`${response.individuoId}`]: 'Você',
// 					[`${response.profissionalId}`]:
// 						response.profissional?.nome || 'Desconhecido',
// 				});
// 			})();
// 		}
// 	}, [appoinmentId]);

// 	const initChat = async (appoinmentId: string) => {
// 		setAppointId(appoinmentId);
// 		getChatToken();
// 	};

// 	const getChatToken = async () => {
// 		try {
// 			const token = await TwilioApi.getUserChatToken(id);
// 			setChatToken(token);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const createOrJoinConversation = async (client: Client) => {
// 		if (!appoinmentId) return;
// 		const uniqueName = `${appoinmentId}-chat`;
// 		const activeConversation = await client.getConversationByUniqueName(
// 			uniqueName,
// 		);
// 		let count = await activeConversation.getParticipantsCount();
// 		console.log(count);
// 		if (count < 2 && users) {
// 			let usersOnly = {
// 				...users,
// 			};
// 			let paciente = Object.keys(usersOnly).find(
// 				key => usersOnly[key] === 'Você',
// 			)!;
// 			let medico = Object.keys(usersOnly).find(
// 				key => usersOnly[key] !== 'Você',
// 			)!;
// 			await activeConversation.add(paciente);
// 			await activeConversation.add(medico);
// 		}
// 		setMyConversation(activeConversation);
// 		await getMessages(activeConversation);
// 	};

// 	const getMessages = async (conversation: any) => {
// 		conversation.getMessages().then((msgs: any) => {
// 			const allMessages = msgs.items.map((msg: any) => {
// 				return {
// 					id: uuid(),
// 					userId: msg.author,
// 					messages: [
// 						{
// 							id: uuid(),
// 							message: msg.body,
// 						},
// 					],
// 					hour: msg.dateCreated,
// 				};
// 			});
// 			setMessages(allMessages);
// 		});
// 	};

// 	const handleMessageAdded = (message: Message) => {
// 		// if (!chatVisible) {
// 		// 	setHasNewMessage(true);
// 		// }
// 		setMessages(state => {
// 			const currentHour = new Date();

// 			if (
// 				state.length > 0 &&
// 				state[state.length - 1].userId === message.author &&
// 				isSameHour(state[state.length - 1].hour, currentHour) &&
// 				isSameMinute(state[state.length - 1].hour, currentHour)
// 			) {
// 				const newState = state.slice(0, state.length - 1);

// 				const newMessages = {
// 					...state[state.length - 1],
// 					messages: [
// 						...state[state.length - 1].messages,
// 						{
// 							id: uuid(),
// 							message: message.body,
// 						},
// 					],
// 				};

// 				return [...newState, newMessages];
// 			}
// 			const newState = [...state];

// 			newState.push({
// 				id: uuid(),
// 				userId: message.author,
// 				messages: [
// 					{
// 						id: uuid(),
// 						message: message.body,
// 					},
// 				],
// 				hour: new Date(),
// 			});

// 			return newState;
// 		});
// 	};

// 	const sendMessage = useCallback(
// 		(message: string) => {
// 			if (myConversation) {
// 				myConversation
// 					.sendMessage(message)
// 					.then(() => {})
// 					.catch(error => console.error(error));
// 			} else {
// 				console.error('There is no active conversation');
// 			}
// 		},
// 		[messages],
// 	);

// 	return { initChat, sendMessage, messages };
// };

// export default useChat;
