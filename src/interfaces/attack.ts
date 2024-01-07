export interface attackMessagesProps {
    newAttack: boolean;
    nickname: string;
    time: string;
}

export interface AttackedList {
    attackedList: attackMessagesProps[];
}


export interface newAttackProps extends Partial<attackMessagesProps> {
}