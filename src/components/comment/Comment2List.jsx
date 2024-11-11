import Image from 'next/image';
import React from 'react';

const users = {
    user1: { name: 'Ritsu', avatarUrl: '/profile_Ritsu.jpg' },
    user2: { name: 'Mob', avatarUrl: '/profile_Mob.jpg' },
    user3: { name: 'Reigen', avatarUrl: '/profile_Reigen.jpg' },
};

const UserProfile = ({ avatarUrl, name }) => {
    return (
        <div className="flex flex-row items-center gap-4">
            <Image
                src={avatarUrl}
                alt={name}
                width={100}
                height={100}
                className="w-10 h-10 object-cover rounded-full"
            />
            <strong>{name}</strong>
        </div>
    );
};

const comments = [
    { content: '말 걸지 마시죠', date: '2024.11.11', user: users.user1 },
    { content: '역시 리츠는 대단해', date: '2024.11.12', user: users.user2 },
    { content: '어... 어? 나도 주는 거야?', date: '2024.11.13', user: users.user3 },
];

const Comment2Item = ({ content, date, user }) => {
    return (
        <div className="flex flex-col gap-2">
            <UserProfile avatarUrl={user.avatarUrl} name={user.name} />
            <p>{content}</p>
            <span>{date}</span>
        </div>
    );
};

const Comment2List = () => (
    <div className="flex flex-col gap-10">
        {comments.map((item, index) => (
            <Comment2Item key={index} content={item.content} date={item.date} user={item.user} />
        ))}
    </div>
);

export default Comment2List;
