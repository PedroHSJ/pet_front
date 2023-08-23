export const formatPhoneNumber = (phoneNumber: string | undefined) => {
    return phoneNumber?.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};

export const formatDate = (date: string | undefined) => {
    return date?.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
};
