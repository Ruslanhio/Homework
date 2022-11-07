import React from 'react'
import Message, {MessagePropsType} from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserProps
    message: MessagesType
}
export type UserProps = {
    avatar: string
    name: string
}
export type MessagesType = {
    text: string
    time: string
}




// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D1%8F-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B8-%D0%BA%D1%80%D1%83%D1%82%D0%B0%D1%8F_021.jpg', // можно менять
        name: 'Ruslan',  // можно менять
    },
    message: {
        text: 'Hello. How is your react?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg', // можно менять
        name: 'Marie', // можно менять
    },
    message: {
        text: 'IT-incubator is  a great way to become a React developer', // можно менять
        time: '22:03', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
