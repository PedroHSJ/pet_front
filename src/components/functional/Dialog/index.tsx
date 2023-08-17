import { useCallback, useState } from 'react';
import { Button } from '../../buttons/Button';
import {
	Container,
	Content,
	Title,
	Information,
	ButtonsContainer,
} from './styles';

export interface IOptionsProp {
	text: string;
	onPress: () => void;
}

export interface IDataFlatListProp {
	item: IOptionsProp;
	index: number;
}

interface IDialogItemProps {
	id: number;
	title: string;
	subtitle?: string;
	options?: IOptionsProp[];
}

interface IuseDialogReturn {
	Dialog: () => JSX.Element;
	dialog: (
		title: string,
		subtitle: string,
		options?: IOptionsProp[],
		design?: string,
		loading?: boolean,
	) => void;
}

export const useDialog = (): IuseDialogReturn => {
	const [dialogList, setDialogList] = useState<IDialogItemProps[]>([]);

	const dialog = (
		title: string,
		subtitle: string,
		options?: IOptionsProp[],
	) => {
		setDialogList([
			...dialogList,
			{
				id: dialogList.length + 1,
				title: title,
				subtitle: subtitle,
				options: options,
			},
		]);
	};

	const Dialog = (): JSX.Element => {
		const handlePressOption = (item: IOptionsProp, id: number) => {
			item.onPress();
			handleRemove(id);
		};

		const handleRemove = useCallback(
			(id: number) => {
				const dialogListFilter = dialogList.filter(
					dialog => dialog.id !== id,
				);
				setDialogList(dialogListFilter);
			},
			[dialogList],
		);

		if (dialogList.length) {
			return (
				<Container>
					{dialogList.map((dialog, i) => {
						return (
							<Content
								key={i}
								//onClick={() => handleRemove(dialog.id)}
							>
								<Title>{dialog.title}</Title>
								<Information>{dialog.subtitle}</Information>
								<ButtonsContainer>
									{!dialog.options && (
										<Button
											onClick={() => setDialogList([])}
											type="button">
											OK
										</Button>
									)}
									{dialog.options?.map(item => {
										return (
											<Button
												onClick={() =>
													handlePressOption(
														item,
														dialog.id,
													)
												}
												key={item.text}
												type="button">
												{item.text}
											</Button>
										);
									})}
								</ButtonsContainer>
							</Content>
						);
					})}
				</Container>
			);
		}
		return <></>;
	};

	return { Dialog, dialog };
};
