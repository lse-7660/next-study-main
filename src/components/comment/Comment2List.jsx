import Image from 'next/image';
import React from 'react';

const users = {
    user1: { name: 'Ritsu', avatarUrl: '/profile_Ritsu.jpg' },
    user2: { name: 'Mob', avatarUrl: '/profile_Mob.jpg' },
};

const UserProfile = ({ avatarUrl, name }) => {
    return (
        <div>
            <Image src={avatarUrl} alt={name} width={100} height={100} />
            <strong>{name}</strong>
        </div>
    );
};

const comments = [
    { content: '코멘트1', date: '2024.11.11', user: users.user1 },
    { content: '코멘트2', date: '2024.11.12', user: users.user2 },
    { content: '코멘트3', date: '2024.11.13', user: users.user1 },
];

const Comment2Item = ({ content, date, user }) => {
    return (
        <div>
            <UserProfile avatarUrl={user.avatarUrl} name={user.name} />
            <p>{content}</p>
            <span>{date}</span>
        </div>
    );
};

const Comment2List = () => (
    <>
        {comments.map((item, index) => (
            <Comment2Item key={index} content={item.cont} date={item.date} user={item.user} />
        ))}
    </>
);

export default Comment2List;
